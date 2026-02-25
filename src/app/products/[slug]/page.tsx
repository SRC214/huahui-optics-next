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
    title: { absolute: product.seoTitle },
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

function ProductDetailThumb({ name }: { name: string }) {
  return (
    <div className="product-thumb product-thumb-large premium-media" aria-hidden="true">
      <div className="product-thumb-ring" />
      <span>{name}</span>
    </div>
  );
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productMap.get(slug);
  if (!product) notFound();

  const category = categories.find((item) => item.id === product.category);
  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.seoDescription,
    brand: { '@type': 'Brand', name: company.shortName },
    category: category?.name,
  };

  return (
    <main className="section premium-page">
      <div className="container">
        <p className="kicker">产品详情 / {category?.name}</p>

        <section className="product-hero-premium fade-up">
          <div>
            <ProductDetailThumb name={product.name} />
            <div className="spec-strip stagger-in">
              {product.highlights.map((item, index) => (
                <span key={item} className="fade-up" style={{ animationDelay: `${index * 80}ms` }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="product-main">
            <h1 className="display-title">{product.name}</h1>
            <p className="lead lead-strong">{product.featuredLine ?? product.summary}</p>
            {product.toneTag ? <p className="tone-pill tone-pill-static">{product.toneTag}</p> : null}
            <p>{product.summary}</p>

            <ul className="detail-points">
              {product.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="hero-actions">
              <a className="btn" href={`mailto:${company.email}`}>
                获取报价
              </a>
              <Link href="/" className="btn btn-ghost">
                返回首页
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head" data-animate="line">
            <div>
              <p className="kicker">同类推荐</p>
              <h2 className="section-title">相关产品</h2>
            </div>
          </div>

          <div className="related-grid-premium stagger-in">
            {related.map((item, index) => (
              <article key={item.id} className="product-card product-card-layer fade-scale" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="product-thumb premium-media" aria-hidden="true">
                  <div className="product-thumb-ring" />
                  <span>{item.name}</span>
                </div>
                {item.toneTag ? <span className="tone-pill">{item.toneTag}</span> : null}
                <h3 className="card-title">{item.name}</h3>
                <p className="summary">{item.featuredLine ?? item.summary}</p>
                <Link href={`/products/${item.slug}`} className="text-link">
                  查看详情 →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-panel fade-scale">
          <div>
            <p className="kicker">快速询盘</p>
            <h2 className="section-title">需要参数建议或报价方案？</h2>
            <p>提交用途、参数范围与数量计划，我们将提供更匹配的配置建议和交付排期。</p>
          </div>
          <div className="hero-actions">
            <a className="btn" href={`mailto:${company.email}`}>
              发送询盘邮件
            </a>
            <a className="btn btn-ghost" href={`tel:${company.phone}`}>
              电话沟通
            </a>
          </div>
        </section>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
