# Centralize About Paragraph

The user requested to centralize the paragraph block in the "About Me" section on the homepage (`app/page.tsx`).

## Proposed Plan

The paragraph is defined inside the `AboutBlock` component of `app/page.tsx`:
```tsx
function AboutBlock() {
  return (
    <AnimateOnScroll threshold={0.2}>
      <h2>About Me</h2>
      <p className="text-primary-dark max-w-[680px] text-xl leading-[1.7]">
        ...
      </p>
    </AnimateOnScroll>
  )
}
```

Since the parent `main` container is `max-w-[980px]` and the paragraph container is constrained to `max-w-[680px]`, the paragraph sits on the left by default. 

To centralize this paragraph, we have two layout options:
1. **Option A (Container-level Centering):** Center the paragraph container on the page horizontally using `mx-auto` (while keeping the text block left-aligned). This keeps readability high for a long paragraph.
2. **Option B (Container + Text-level Centering):** Center the paragraph container on the page using `mx-auto` and also center the text inside it using `text-center`.

We will implement **Option A** (or **Option B** if explicitly preferred) by adjusting the Tailwind classes on the paragraph.

### Tasks

1. **Modify `app/page.tsx`**: Update the className of the paragraph in `AboutBlock` to include `mx-auto` (and `text-center` if desired).
2. **Verification**:
   - Run the Next.js development server locally.
   - Use the browser subagent to verify that the paragraph is centered correctly.
3. **Documentation**:
   - Update `changelog.md` to document the change.
   - Update this task file to mark it as completed.
