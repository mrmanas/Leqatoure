import Link from 'next/link';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { SITE } from '../data/products';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.lt}>LEQA</span>
              <span className={styles.lb}>TOURE</span>
            </div>
            <p className={styles.desc}>Handcrafted luxury bags for the discerning individual. Timeless elegance, uncompromising quality.</p>
            <div className={styles.socials}>
              {SITE.social.instagram && <a href={SITE.social.instagram} target="_blank" rel="noreferrer" className={styles.sb} aria-label="Instagram"><Instagram size={15} /></a>}
              {SITE.social.twitter   && <a href={SITE.social.twitter}   target="_blank" rel="noreferrer" className={styles.sb} aria-label="Twitter"><Twitter   size={15} /></a>}
              {SITE.social.linkedin  && <a href={SITE.social.linkedin}  target="_blank" rel="noreferrer" className={styles.sb} aria-label="LinkedIn"><Linkedin  size={15} /></a>}
            </div>
          </div>

          <div className={styles.col}>
            <h4>Shop</h4>
            <Link href="/collections">All Collections</Link>
            <Link href="/collections">New Arrivals</Link>
            <Link href="/collections">Bestsellers</Link>
            <Link href="/collections">Trending</Link>
          </div>
          <div className={styles.col}>
            <h4>Company</h4>
            <Link href="/about">Our Story</Link>
            <Link href="/about">Craftsmanship</Link>
            <Link href="/about">Sustainability</Link>
          </div>
          <div className={styles.col}>
            <h4>Support</h4>
            <Link href="/contact">Contact Us</Link>
            <Link href="/contact">Shipping Info</Link>
            <Link href="/contact">Returns</Link>
            <Link href="/contact">FAQ</Link>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} LEQA TOURE. All rights reserved. Crafted with elegance and integrity.</p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
