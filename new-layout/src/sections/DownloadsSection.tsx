import WallpaperCard from '../components/WallpaperCard';

const wallpapers = [
  {
    title: 'Wallpapers',
    subtitle: 'Abstract vol. 1',
    price: '$12',
    rating: '☆5.0 (2 ratings)',
    image: '/images/wallpaper-abstract.jpg',
    url: 'https://jarson.gumroad.com/l/wa1',
  },
  {
    title: 'Wallpapers',
    subtitle: 'Portugal vol. 1',
    price: '$12',
    rating: '☆5.0 (1 rating)',
    image: '/images/wallpaper-portugal.jpg',
    url: 'https://jarson.gumroad.com/l/lSsEB',
  },
];

export default function DownloadsSection() {
  return (
    <div>
      <p className="downloads-label text-[13px] leading-[1.4] text-secondary-muted pb-3 opacity-0 translate-y-4 blur-[4px] will-change-transform">
        Downloads
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {wallpapers.map((wallpaper, index) => (
          <WallpaperCard
            key={index}
            title={wallpaper.title}
            subtitle={wallpaper.subtitle}
            price={wallpaper.price}
            rating={wallpaper.rating}
            image={wallpaper.image}
            url={wallpaper.url}
          />
        ))}
      </div>
    </div>
  );
}
