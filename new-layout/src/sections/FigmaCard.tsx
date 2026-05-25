export default function FigmaCard() {
  return (
    <a
      href="https://www.figma.com/community/file/970968239557865113"
      target="_blank"
      rel="noopener noreferrer"
      className="figma-card group block bg-card-light rounded-2xl overflow-hidden transition-colors duration-200 ease-out hover:bg-card-hover opacity-0 translate-y-4 blur-[4px] will-change-transform"
    >
      {/* Preview image */}
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src="/images/figma-preview.jpg"
          alt="User Flow Diagram preview"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Stats */}
        <div className="flex items-center gap-2 text-[11px] text-muted-light mb-2">
          <span className="bg-black/5 px-1.5 py-0.5 rounded text-[10px] font-medium">Free</span>
          <span>♡2k</span>
          <span>↓70k</span>
        </div>

        {/* Title */}
        <h3 className="text-[15px] font-semibold leading-[1.3] tracking-[-0.01em] text-primary-dark">
          User Flow Diagram
        </h3>
        <p className="text-[13px] leading-[1.4] text-secondary-muted mt-0.5">
          #1 FigJam Template in UX
        </p>
      </div>
    </a>
  );
}
