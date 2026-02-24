import type { MetadataRoute } from 'next';
import { company, products } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${company.domain}/`, changeFrequency: 'weekly', priority: 1 },
  ];

  const productRoutes = products.map((product) => ({
    url: `${company.domain}/products/${product.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
