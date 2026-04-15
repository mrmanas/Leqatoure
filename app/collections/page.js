'use client';
import { useState } from 'react';
import { PRODUCTS, COLLECTIONS } from '../../data/products';
import ProductCard from '../../components/ProductCard';
import styles from './collections.module.css';

export default function CollectionsPage() {
  const [activeCol, setActiveCol] = useState('all');
  const [activeTag, setActiveTag] = useState('all');

  const filtered = PRODUCTS.filter(p => {
    const colOk = activeCol === 'all' || p.collection === activeCol;
    const tagOk = activeTag === 'all' || p.tags?.includes(activeTag);
    return colOk && tagOk;
  });

  const TAGS = ['all', 'Bestseller', 'Trending', 'New'];

  return (
    <div className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerInner}>
          <p className={styles.over}>Curated for You</p>
          <h1 className={styles.h1}>Our Collections</h1>
          <div className={styles.line} />
          <p className={styles.sub}>Each piece tells a story of artisan mastery and timeless elegance.</p>
        </div>
      </section>

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.stat}><strong>{PRODUCTS.length}</strong> Pieces</div>
        <div className={styles.sd} />
        <div className={styles.stat}><strong>{COLLECTIONS.length - 1}</strong> Collections</div>
        <div className={styles.sd} />
        <div className={styles.stat}><strong>100%</strong> Handcrafted</div>
      </div>

      <section className={styles.main}>
        <div className={styles.container}>

          {/* Collection filter */}
          <div className={styles.filterWrap}>
            <p className={styles.filterLabel}>Collection</p>
            <div className={styles.filterRow}>
              {COLLECTIONS.map(c => (
                <button
                  key={c.id}
                  className={`${styles.tab} ${activeCol === c.id ? styles.tabOn : ''}`}
                  onClick={() => setActiveCol(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tag filter */}
          <div className={styles.filterWrap}>
            <p className={styles.filterLabel}>Filter by</p>
            <div className={styles.filterRow}>
              {TAGS.map(t => (
                <button
                  key={t}
                  className={`${styles.tagBtn} ${activeTag === t ? styles.tagOn : ''}`}
                  onClick={() => setActiveTag(t)}
                >
                  {t === 'all' ? 'All' : t}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className={styles.count}>{filtered.length} piece{filtered.length !== 1 ? 's' : ''}</p>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <span>🛍</span>
              <p>No products match this filter.</p>
              <button className={styles.resetBtn} onClick={() => { setActiveCol('all'); setActiveTag('all'); }}>
                Clear Filters
              </button>
            </div>
          ) : (
            <div className={styles.grid}>
              {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
