# Viewport Animation Guide

This guide shows how to trigger animations when elements enter the viewport, compatible with most browsers.

## Quick Start

### Option 1: Using the Hook Directly

```tsx
'use client'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

export function MyComponent() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-1000 ${
        isVisible
          ? 'translate-y-0 opacity-100 blur-0'
          : 'translate-y-24 opacity-0 blur-md'
      }`}
    >
      Content animates when visible
    </div>
  )
}
```

### Option 2: Using the AnimateOnScroll Component

```tsx
'use client'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

export function MyComponent() {
  return (
    <AnimateOnScroll
      className="motion-translate-y-in-100 motion-opacity-in-0 motion-blur-in-md duration-1000"
      delay={200}
      threshold={0.2}
    >
      <div>Content animates when visible</div>
    </AnimateOnScroll>
  )
}
```

## Hook Options

```typescript
useIntersectionObserver({
  threshold: 0.1, // 0-1, how much of element must be visible (default: 0.1)
  rootMargin: '0px', // Margin around viewport (default: '0px')
  triggerOnce: true, // Only animate once (default: true)
})
```

## Common Animation Patterns

### Fade In + Slide Up

```tsx
className={`transition-all duration-1000 ${
  isVisible
    ? 'translate-y-0 opacity-100'
    : 'translate-y-24 opacity-0'
}`}
```

### Fade In + Slide Up + Blur

```tsx
className={`transition-all duration-1000 ${
  isVisible
    ? 'translate-y-0 opacity-100 blur-0'
    : 'translate-y-24 opacity-0 blur-md'
}`}
```

### Fade In + Scale

```tsx
className={`transition-all duration-1000 ${
  isVisible
    ? 'scale-100 opacity-100'
    : 'scale-95 opacity-0'
}`}
```

### Slide From Left

```tsx
className={`transition-all duration-1000 ${
  isVisible
    ? 'translate-x-0 opacity-100'
    : '-translate-x-24 opacity-0'
}`}
```

## Staggered Animations

```tsx
export function StaggeredList() {
  const item1 = useIntersectionObserver()
  const item2 = useIntersectionObserver()
  const item3 = useIntersectionObserver()

  return (
    <>
      <div ref={item1.ref} className={`transition-all duration-1000 delay-0 ${...}`}>
        Item 1
      </div>
      <div ref={item2.ref} className={`transition-all duration-1000 delay-200 ${...}`}>
        Item 2
      </div>
      <div ref={item3.ref} className={`transition-all duration-1000 delay-300 ${...}`}>
        Item 3
      </div>
    </>
  )
}
```

## Browser Compatibility

- ✅ Chrome 51+
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ Edge 15+
- ⚠️ IE11 (requires polyfill or falls back to immediate display)

For IE11 support, add this polyfill:

```bash
pnpm add intersection-observer
```

Then in your layout:

```tsx
import 'intersection-observer' // Only loads if needed
```

## Performance Tips

1. Use `triggerOnce: true` for animations that only need to play once
2. Set appropriate `threshold` values (0.1-0.3 works well for most cases)
3. Use `rootMargin` to trigger animations slightly before element enters viewport:
   ```tsx
   useIntersectionObserver({ rootMargin: '100px' })
   ```
4. Avoid animating too many elements simultaneously
5. Use `will-change-transform` for smoother animations on complex elements

## Removing Old Observer

If you want to completely remove the old `tailwindcss-intersect` approach:

1. Remove `ObserverProvider` from your layout
2. Uninstall the package: `pnpm remove tailwindcss-intersect`
3. Replace all Rombo motion classes with the new approach

Or keep both and use the new approach for new components!
