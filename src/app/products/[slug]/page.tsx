import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories, company, productMap, products } from '@/lib/site-data';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productMap.get(slug);
  if (!product) return {};
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    keywords: product.keywords,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: `/products/${product.slug}`,
      type: 'article',
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productMap.get(slug);
  if (!product) notFound();

  const category = categories.find((item) => item.id === product.category);
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.seoDescription,
    brand: { '@type': 'Brand', name: company.shortName },
    category: category?.name,
  };

  return (
    <main className="container section">
      <p className="eyebrow">产品详情 / {category?.name}</p>
      <h1>{product.name}</h1>
      <p className="lead">{product.summary}</p>

      <section className="section contact-box">
        <h2>核心亮点</h2>
        <ul>
          {product.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>相关产品</h2>
        <div className="product-grid">
          {related.map((item) => (
            <article key={item.id} className="product-card">
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
              <Link href={`/products/${item.slug}`}>查看详情</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-box emphasis">
        <h2>咨询与报价</h2>
        <p>电话：{company.phone}</p>
        <p>邮箱：{company.email}</p>
        <p>地址：{company.address}</p>
        <p>
          <Link href="/" className="btn btn-ghost">
            返回首页
          </Link>
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
