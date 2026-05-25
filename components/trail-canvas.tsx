'use client'

import { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const DECAY_VERT = `
attribute vec3 position;
attribute vec2 uv;
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position, 1.0);
}
`

const DECAY_FRAG = `
precision mediump float;
uniform sampler2D u_prev;
uniform vec2 u_resolution;
uniform float u_decay;
uniform vec2 u_mouse;
uniform float u_mouseActive;
uniform float u_trailSize;
varying vec2 v_uv;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec4 prev = texture2D(u_prev, uv);
  prev.rgb *= u_decay;

  if (u_mouseActive > 0.5) {
    float aspect = u_resolution.x / u_resolution.y;
    vec2 diff = uv - u_mouse;
    diff.x *= aspect;
    float dist = length(diff);
    float stamp = 1.0 - smoothstep(0.0, u_trailSize, dist);
    prev.rgb = max(prev.rgb, vec3(stamp));
  }

  gl_FragColor = prev;
}
`

const TRAIL_VERT = `
attribute vec3 position;
attribute vec2 uv;
attribute vec3 instancePosition;
attribute float instanceIndex;
attribute float instanceProgress;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform sampler2D u_trailTexture;
uniform float u_textureSize;
varying float v_transparency;

vec4 sampleTrail(float index) {
  float x = (mod(index, u_textureSize) + 0.5) / u_textureSize;
  float y = (floor(index / u_textureSize) + 0.5) / u_textureSize;
  return texture2D(u_trailTexture, vec2(x, y));
}

void main() {
  vec4 trailData = sampleTrail(instanceIndex);
  vec3 trailPos = trailData.xyz;
  float intensity = trailData.w;

  float scale = 1.2 * intensity;
  vec3 scaled = position * scale;
  vec3 worldPos = scaled + trailPos;

  v_transparency = intensity;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(worldPos, 1.0);
}
`

const TRAIL_FRAG = `
precision mediump float;
uniform vec3 u_color;
varying float v_transparency;

void main() {
  if (v_transparency <= 0.0) discard;
  gl_FragColor = vec4(u_color, v_transparency);
}
`

const TEXTURE_SIZE = 64
const TRAIL_LENGTH = 40
const INSTANCED_COUNT = 4000
const SEGMENTS_PER_POINT = 100

class TrailManager {
  renderer: THREE.WebGLRenderer
  targets: [THREE.WebGLRenderTarget, THREE.WebGLRenderTarget]
  currentIndex: number
  decayMaterial: THREE.RawShaderMaterial
  quadScene: THREE.Scene
  quadCamera: THREE.OrthographicCamera
  mousePos: THREE.Vector2
  mouseActive: boolean

  constructor(renderer: THREE.WebGLRenderer) {
    this.renderer = renderer
    this.currentIndex = 0
    this.mousePos = new THREE.Vector2(0.5, 0.5)
    this.mouseActive = false

    const rtOptions: THREE.RenderTargetOptions = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
    }
    this.targets = [
      new THREE.WebGLRenderTarget(TEXTURE_SIZE, TEXTURE_SIZE, rtOptions),
      new THREE.WebGLRenderTarget(TEXTURE_SIZE, TEXTURE_SIZE, rtOptions),
    ]

    this.decayMaterial = new THREE.RawShaderMaterial({
      vertexShader: DECAY_VERT,
      fragmentShader: DECAY_FRAG,
      uniforms: {
        u_prev: { value: null },
        u_resolution: { value: new THREE.Vector2(TEXTURE_SIZE, TEXTURE_SIZE) },
        u_decay: { value: 0.96 },
        u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
        u_mouseActive: { value: 0.0 },
        u_trailSize: { value: 0.4 },
      },
    })

    const quadGeo = new THREE.BufferGeometry()
    quadGeo.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3))
    quadGeo.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 2, 0, 0, 2], 2))
    const quadMesh = new THREE.Mesh(quadGeo, this.decayMaterial)
    this.quadScene = new THREE.Scene()
    this.quadScene.add(quadMesh)
    this.quadCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  }

  update(mouseX: number, mouseY: number, mouseActive: boolean) {
    this.currentIndex = 1 - this.currentIndex
    const readIndex = 1 - this.currentIndex
    const writeIndex = this.currentIndex

    this.decayMaterial.uniforms.u_prev.value = this.targets[readIndex].texture
    this.decayMaterial.uniforms.u_mouse.value.set(mouseX, mouseY)
    this.decayMaterial.uniforms.u_mouseActive.value = mouseActive ? 1.0 : 0.0

    const prevTarget = this.renderer.getRenderTarget()
    this.renderer.setRenderTarget(this.targets[writeIndex])
    this.renderer.render(this.quadScene, this.quadCamera)
    this.renderer.setRenderTarget(prevTarget)
  }

  getTexture(): THREE.Texture {
    return this.targets[this.currentIndex].texture
  }

  dispose() {
    this.targets[0].dispose()
    this.targets[1].dispose()
    this.decayMaterial.dispose()
  }
}

function createInstanceAttributes() {
  const positions: number[] = []
  const indices: number[] = []
  const progress: number[] = []

  for (let i = 0; i < TRAIL_LENGTH; i++) {
    for (let j = 0; j < SEGMENTS_PER_POINT; j++) {
      positions.push(0, 0, 0)
      indices.push(i)
      progress.push(1 - i / TRAIL_LENGTH)
    }
  }

  return {
    positions: new Float32Array(positions),
    indices: new Float32Array(indices),
    progress: new Float32Array(progress),
  }
}

function TrailSystem() {
  const { gl } = useThree()
  const trailManagerRef = useRef<TrailManager | null>(null)
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false })
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const tm = new TrailManager(gl)
    trailManagerRef.current = tm
    return () => tm.dispose()
  }, [gl])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth
      mouseRef.current.y = 1.0 - e.clientY / window.innerHeight
      mouseRef.current.active = true
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const { geometry, material } = useMemo(() => {
    const attrs = createInstanceAttributes()
    const baseGeo = new THREE.PlaneGeometry(0.8, 0.8)
    const instancedGeo = new THREE.InstancedBufferGeometry()
    instancedGeo.index = baseGeo.index
    instancedGeo.attributes.position = baseGeo.attributes.position
    instancedGeo.attributes.uv = baseGeo.attributes.uv

    instancedGeo.setAttribute('instancePosition', new THREE.InstancedBufferAttribute(attrs.positions, 3))
    instancedGeo.setAttribute('instanceIndex', new THREE.InstancedBufferAttribute(attrs.indices, 1))
    instancedGeo.setAttribute('instanceProgress', new THREE.InstancedBufferAttribute(attrs.progress, 1))

    const mat = new THREE.RawShaderMaterial({
      vertexShader: TRAIL_VERT,
      fragmentShader: TRAIL_FRAG,
      uniforms: {
        u_trailTexture: { value: null },
        u_textureSize: { value: TEXTURE_SIZE },
        u_color: { value: new THREE.Vector3(0.08, 0.09, 0.10) },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: THREE.NormalBlending,
    })

    return { geometry: instancedGeo, material: mat }
  }, [])

  useFrame(() => {
    const tm = trailManagerRef.current
    if (!tm) return

    const lerpFactor = 0.08
    smoothMouseRef.current.x += (mouseRef.current.x - smoothMouseRef.current.x) * lerpFactor
    smoothMouseRef.current.y += (mouseRef.current.y - smoothMouseRef.current.y) * lerpFactor

    tm.update(smoothMouseRef.current.x, smoothMouseRef.current.y, mouseRef.current.active)
    material.uniforms.u_trailTexture.value = tm.getTexture()
  })

  return (
    <instancedMesh
      ref={meshRef}
      args={[geometry, material, INSTANCED_COUNT]}
      frustumCulled={false}
    />
  )
}

export default function TrailCanvas() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        mixBlendMode: 'overlay',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        opacity: 0.6,
      }}
    >
      <Canvas
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: 'low-power',
        }}
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ pointerEvents: 'none' }}
      >
        <TrailSystem />
      </Canvas>
    </div>
  )
}
