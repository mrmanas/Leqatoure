import Link from 'next/link';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import styles from './FeaturedProducts.module.css';

export default function FeaturedProducts() {
  // Prioritise Bestseller + Trending, fill up to 6
  const priority = PRODUCTS.filter(p => p.tags?.includes('Bestseller') || p.tags?.includes('Trending'));
  const rest     = PRODUCTS.filter(p => !p.tags?.includes('Bestseller') && !p.tags?.includes('Trending'));
  const featured = [...priority, ...rest].slice(0, 6);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p className={styles.over}>Curated For You</p>
            <h2 className={styles.title}>Featured Pieces</h2>
          </div>
          <Link href="/collections" className={styles.viewAll}>View All Collections →</Link>
        </div>
        <div className={styles.grid}>
          {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
