import Image from 'next/image'
import type { ReactNode } from 'react'

// Custom image component for use in MDX content
// Usage in MDX: <ProjectImage src="/images/screenshot.png" alt="description" caption="Optional caption" />
export function ProjectImage({
  src,
  alt,
  caption,
  width = 1200,
  height = 800,
}: {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-3xl bg-gray-100">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-dm-mono text-sm font-normal normal-case tracking-normal text-[color:var(--text)]">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// Custom MDX component overrides
// These override the global CSS styles (which set p to uppercase mono, span to large bold, etc.)
// so that MDX content renders as normal readable prose.
export const mdxComponents: Record<string, React.ComponentType<any>> = {
  // Headings — preserve the project detail page styling
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="mb-6 mt-12 text-3xl font-bold tracking-tight text-[color:var(--title)] first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="mb-4 mt-8 text-2xl font-semibold tracking-tight text-[color:var(--title)]">
      {children}
    </h3>
  ),
  // Paragraphs — override the global uppercase mono style for content text
  p: ({ children }: { children?: ReactNode }) => (
    <p className="mb-4 font-general-sans text-base normal-case tracking-normal text-[color:var(--text)]">
      {children}
    </p>
  ),
  // Spans — override the global large bold style
  span: ({ children }: { children?: ReactNode }) => (
    <span className="font-general-sans text-base font-normal normal-case tracking-normal">
      {children}
    </span>
  ),
  // Strong/Bold
  strong: ({ children }: { children?: ReactNode }) => (
    <strong className="font-semibold text-[color:var(--title)]">
      {children}
    </strong>
  ),
  // Links
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <a
      href={href}
      className="text-[color:var(--secondary)] underline underline-offset-4 transition-opacity hover:opacity-80"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  // Lists
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="mb-4 ml-6 list-disc space-y-2 font-general-sans text-base normal-case tracking-normal text-[color:var(--text)]">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2 font-general-sans text-base normal-case tracking-normal text-[color:var(--text)]">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: ReactNode }) => (
    <li className="font-general-sans text-base normal-case tracking-normal text-[color:var(--text)]">
      {children}
    </li>
  ),
  // Tables
  table: ({ children }: { children?: ReactNode }) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }: { children?: ReactNode }) => (
    <thead className="bg-gray-50">{children}</thead>
  ),
  tbody: ({ children }: { children?: ReactNode }) => (
    <tbody className="divide-y divide-gray-200">{children}</tbody>
  ),
  tr: ({ children }: { children?: ReactNode }) => (
    <tr className="transition-colors hover:bg-gray-50/50">{children}</tr>
  ),
  th: ({ children }: { children?: ReactNode }) => (
    <th className="px-4 py-3 text-left font-general-sans text-sm font-semibold normal-case tracking-normal text-[color:var(--title)]">
      {children}
    </th>
  ),
  td: ({ children }: { children?: ReactNode }) => (
    <td className="px-4 py-3 font-general-sans text-sm normal-case tracking-normal text-[color:var(--text)]">
      {children}
    </td>
  ),
  // Block quotes
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="my-6 border-l-4 border-[color:var(--secondary)] pl-6 italic">
      {children}
    </blockquote>
  ),
  // Code blocks
  pre: ({ children }: { children?: ReactNode }) => (
    <pre className="my-6 overflow-x-auto rounded-xl bg-gray-900 p-4 text-sm text-gray-100">
      {children}
    </pre>
  ),
  code: ({ children }: { children?: ReactNode }) => (
    <code className="rounded bg-gray-100 px-1.5 py-0.5 font-dm-mono text-sm text-[color:var(--title)]">
      {children}
    </code>
  ),
  // Horizontal rule
  hr: () => <hr className="my-8 border-gray-200" />,
  // Images rendered via markdown syntax
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span className="my-8 block overflow-hidden rounded-3xl bg-gray-100">
      <Image
        src={String(props.src || '')}
        alt={String(props.alt || '')}
        width={1200}
        height={800}
        className="h-auto w-full object-cover"
      />
    </span>
  ),
  // Expose custom components for use in MDX
  ProjectImage,
}
