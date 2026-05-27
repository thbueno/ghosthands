import ProductCard from '../components/ProductCard';

const products = [
  {
    name: 'LocalCan™',
    description: 'The #1 Ngrok alternative',
    icon: '/images/localcan-icon.jpg',
    url: 'https://www.localcan.com/',
    linkLabel: 'localcan.com',
  },
  {
    name: 'Kerlig™',
    description: 'AI writing assistant',
    icon: '/images/kerlig-icon.jpg',
    url: 'https://www.kerlig.com/',
    linkLabel: 'kerlig.com',
  },
  {
    name: 'Webhook.cool',
    description: 'Online webhook tester',
    icon: '/images/webhook-icon.jpg',
    url: 'https://webhook.cool/',
    linkLabel: 'webhook.cool',
  },
  {
    name: 'Journal',
    description: 'Beautiful journaling app',
    icon: '/images/journal-icon.jpg',
    url: 'https://www.journal.do/',
    linkLabel: 'journal.do',
  },
];

export default function ProductsSection() {
  return (
    <div>
      <p className="section-label text-[13px] leading-[1.4] text-secondary-muted pb-3 opacity-0 translate-y-4 blur-[4px] will-change-transform">
        My products
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            icon={product.icon}
            url={product.url}
            linkLabel={product.linkLabel}
          />
        ))}
      </div>
    </div>
  );
}
