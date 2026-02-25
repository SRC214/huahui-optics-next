'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState, type CSSProperties } from 'react';
import type { Product, ProductCategory } from '@/lib/site-data';

type ProductFilterGridProps = {
  categories: ProductCategory[];
  products: Product[];
};

export default function ProductFilterGrid({ categories, products }: ProductFilterGridProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | ProductCategory['id']>('all');

  const filters = useMemo(
    () => [{ id: 'all' as const, name: '全部' }, ...categories.map((category) => ({ id: category.id, name: category.name }))],
    [categories],
  );

  const visibleProducts = useMemo(
    () => (activeFilter === 'all' ? products : products.filter((product) => product.category === activeFilter)),
    [activeFilter, products],
  );

  const categoryMap = useMemo(() => new Map(categories.map((category) => [category.id, category.name])), [categories]);

  return (
    <div className="product-shell scroll-stage">
      <div className="product-toolbar">
        <div className="filter-group" role="tablist" aria-label="产品分类筛选">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              className="filter-pill"
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>
        <p className="product-count">
          当前展示 <strong>{visibleProducts.length}</strong> 款产品
        </p>
      </div>

      <div className="product-grid stagger-in" aria-live="polite">
        {visibleProducts.length === 0 ? (
          <article className="product-empty fade-scale">当前分类暂无产品，欢迎联系我们获取定制方案。</article>
        ) : (
          visibleProducts.map((product, index) => {
            const motionStyle = { animationDelay: `${index * 80}ms` } as CSSProperties;
            const categoryName = categoryMap.get(product.category) ?? '产品';

            return (
              <article key={product.id} className="product-card product-card-layer fade-scale" style={motionStyle}>
                <div className="product-media premium-media">
                  {product.image ? (
                    <Image src={product.image} alt={product.name} width={560} height={360} />
                  ) : (
                    <div className="media-placeholder premium-placeholder" aria-hidden="true">
                      <span className="media-badge">{categoryName}</span>
                      <strong>{product.name}</strong>
                      <i className="media-orbit" />
                    </div>
                  )}
                </div>

                <div className="product-meta-row">
                  <p className="chip">{categoryName}</p>
                  {product.toneTag ? <span className="tone-pill">{product.toneTag}</span> : null}
                </div>

                <h3 className="card-title">{product.name}</h3>
                <p className="summary">{product.featuredLine ?? product.summary}</p>

                <div className="product-tags">
                  {product.highlights.map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>

                <div className="product-actions">
                  <Link href={`/products/${product.slug}`} className="text-link">
                    查看产品详情 →
                  </Link>
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
