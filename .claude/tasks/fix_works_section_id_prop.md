# Task: Fix WorksSection ID Prop TypeScript Error

## Problem Explanation
In `app/page.tsx` on line 50, the `<WorksSection />` component is invoked with an `id` prop:
```tsx
<WorksSection id="works" />
```
However, in `components/works-section.tsx`, the `WorksSection` component is defined without any parameter/prop signature:
```tsx
export function WorksSection() {
```
Because of this, TypeScript throws an error stating that the `id` property does not exist on type `IntrinsicAttributes` (which is the default type for React component props when no props are defined).

## Proposed Solution
1. Update `components/works-section.tsx` to accept an optional `id` prop of type `string`.
2. Apply the `id` to the root `div` element inside the `WorksSection` component. This will allow anchor link navigation to target the section (e.g., `#works`).

## Implementation Steps
- [ ] Define the props interface for `WorksSection`:
  ```tsx
  interface WorksSectionProps {
    id?: string
  }
  ```
- [ ] Update `WorksSection` function signature to accept `id`:
  ```tsx
  export function WorksSection({ id }: WorksSectionProps) {
  ```
- [ ] Pass the `id` to the outer `div` wrapper element:
  ```tsx
  return (
    <div id={id}>
  ```
- [ ] Run `pnpm lint` and `pnpm build` to verify there are no compilation errors.
- [ ] Update `changelog.md` to document the change.
