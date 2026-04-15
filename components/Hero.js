import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '../data/products';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />

      <div className={styles.content}>
        <p className={styles.over}>Handcrafted Luxury</p>
        <h1 className={styles.title}>
          Timeless<br /><em>Elegance</em>
        </h1>
        <p className={styles.sub}>{SITE.subtitle}</p>
        <div className={styles.ctas}>
          <Link href="/collections" className={styles.cta1}>Explore Collections</Link>
          <Link href="/about"       className={styles.cta2}>Our Story</Link>
        </div>
      </div>

      <div className={styles.visual}>
        {/* Main hero image */}
        <div className={styles.mainCard}>
          <Image
            src="/images/backpack.jpeg"
            alt="Heritage Backpack"
            fill
            sizes="280px"
            style={{ objectFit:'cover' }}
            priority
          />
        </div>
        {/* Accent top-right */}
        <div className={styles.acc1}>
          <Image
            src="/images/sling-blue.jpeg"
            alt="Tribal Sling"
            fill
            sizes="120px"
            style={{ objectFit:'cover' }}
          />
        </div>
        {/* Accent bottom-left */}
        <div className={styles.acc2}>
          <Image
            src="/images/sling-forest.jpeg"
            alt="Forest Saddle"
            fill
            sizes="100px"
            style={{ objectFit:'cover' }}
          />
        </div>
        {/* Info badge */}
        <div className={styles.badge}>
          <span className={styles.bNum}>200+</span>
          <span className={styles.bLbl}>Artisan Hours</span>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
