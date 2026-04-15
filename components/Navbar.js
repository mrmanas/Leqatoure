'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Instagram, Twitter, Linkedin, Menu, X, Heart, ShoppingBag } from 'lucide-react';
import { SITE } from '../data/products';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { href: '/',            label: 'Home' },
    { href: '/collections', label: 'Collections' },
    { href: '/about',       label: 'About' },
    { href: '/contact',     label: 'Contact' },
  ];

  return (
    <header className={`${styles.bar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.lt}>LEQA</span>
          <span className={styles.lb}>TOURE</span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`${styles.nl} ${pathname === l.href ? styles.active : ''}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className={styles.right}>
          <div className={styles.socials}>
            {SITE.social.instagram && (
              <a href={SITE.social.instagram} target="_blank" rel="noreferrer" className={styles.si} aria-label="Instagram"><Instagram size={16} /></a>
            )}
            {SITE.social.twitter && (
              <a href={SITE.social.twitter} target="_blank" rel="noreferrer" className={styles.si} aria-label="Twitter"><Twitter size={16} /></a>
            )}
            {SITE.social.linkedin && (
              <a href={SITE.social.linkedin} target="_blank" rel="noreferrer" className={styles.si} aria-label="LinkedIn"><Linkedin size={16} /></a>
            )}
          </div>
          <Link href="/collections" className={styles.si} aria-label="Wishlist"><Heart size={17} /></Link>
          <Link href="/collections" className={styles.shopBtn}>
            <ShoppingBag size={13} /><span>Shop Now</span>
          </Link>
          <button className={styles.ham} onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mob}>
          {links.map(l => (
            <Link key={l.href} href={l.href} className={styles.ml} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className={styles.mobSoc}>
            {SITE.social.instagram && <a href={SITE.social.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /></a>}
            {SITE.social.twitter   && <a href={SITE.social.twitter}   target="_blank" rel="noreferrer"><Twitter   size={18} /></a>}
            {SITE.social.linkedin  && <a href={SITE.social.linkedin}  target="_blank" rel="noreferrer"><Linkedin  size={18} /></a>}
          </div>
        </div>
      )}
    </header>
  );
}
