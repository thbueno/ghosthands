interface WallpaperCardProps {
  title: string;
  subtitle: string;
  price: string;
  rating: string;
  image: string;
  url: string;
}

export default function WallpaperCard({ title, subtitle, price, rating, image, url }: WallpaperCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wallpaper-card group relative block rounded-2xl overflow-hidden aspect-[16/10] opacity-0 translate-y-4 blur-[4px] will-change-transform"
    >
      {/* Background image */}
      <img
        src={image}
        alt={`${title} - ${subtitle}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03]"
      />

      {/* Overlay content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
        {/* Price and rating */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[12px] font-semibold text-white">{price}</span>
          <span className="text-[11px] text-white/80">{rating}</span>
        </div>
        {/* Title and subtitle */}
        <h3 className="text-[15px] font-semibold leading-[1.3] text-white">{title}</h3>
        <p className="text-[13px] leading-[1.4] text-white/70">{subtitle}</p>
      </div>
    </a>
  );
}
