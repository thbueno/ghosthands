interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-3 border border-background rounded-full hover:border-secondary hover:text-secondary transition-colors"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        <line
          x1="4" y1="6" x2="20" y2="6"
          className={`stroke-current stroke-2 origin-left transition-transform duration-300 ${
            isOpen ? "rotate-45 -translate-y-1" : ""
          }`}
          strokeLinecap="round"
        />
        <line
          x1="4" y1="12" x2="20" y2="12"
          className={`stroke-current stroke-2 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
          strokeLinecap="round"
        />
        <line
          x1="4" y1="18" x2="20" y2="18"
          className={`stroke-current stroke-2 origin-left transition-transform duration-300 ${
            isOpen ? "-rotate-45 translate-y-1" : ""
          }`}
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
