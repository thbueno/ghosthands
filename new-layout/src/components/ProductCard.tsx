interface ProductCardProps {
  name: string;
  description: string;
  icon: string;
  url: string;
  linkLabel: string;
}

export default function ProductCard({ name, description, icon, url, linkLabel }: ProductCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card group relative block bg-card-light rounded-2xl p-5 aspect-[1/1.02] flex flex-col justify-between transition-colors duration-200 ease-out hover:bg-card-hover opacity-0 translate-y-4 blur-[4px] will-change-transform"
    >
      {/* Hover link label */}
      <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out">
        <span className="text-[11px] tracking-[0.02em] text-muted-light">
          {linkLabel} →
        </span>
      </div>

      {/* Icon */}
      <img
        src={icon}
        alt={name}
        className="w-12 h-12 rounded-xl object-cover"
      />

      {/* Text content */}
      <div>
        <h3 className="text-[15px] font-semibold leading-[1.3] tracking-[-0.01em] text-primary-dark">
          {name}
        </h3>
        <p className="text-[13px] leading-[1.4] text-secondary-muted mt-0.5">
          {description}
        </p>
      </div>
    </a>
  );
}
