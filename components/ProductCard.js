'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.css';

const TAG_COLOR = { Bestseller:'#b8972a', Trending:'#7c5cbf', New:'#2a9d5c' };

export default function ProductCard({ product, index = 0 }) {
  const [wished, setWished] = useState(false);
  const [added,  setAdded]  = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  const imgs  = product.images || [];
  const price = product.price ? `₹${Number(product.price).toLocaleString()}` : '';

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className={styles.card} style={{ animationDelay:`${index * 0.07}s` }}>
      {/* Tags */}
      {product.tags?.length > 0 && (
        <div className={styles.tags}>
          {product.tags.map(t => (
            <span key={t} className={styles.tag} style={{ background: TAG_COLOR[t] || '#b8972a' }}>{t}</span>
          ))}
        </div>
      )}

      {/* Image */}
      <div className={styles.imgWrap}>
        {imgs.length > 0 ? (
          <Image
            src={imgs[imgIdx]}
            alt={product.title}
            fill
            sizes="(max-width:600px) 100vw, (max-width:900px) 50vw, 33vw"
            className={styles.img}
          />
        ) : (
          <div className={styles.placeholder}>👜</div>
        )}

        {/* Dot nav for multiple images */}
        {imgs.length > 1 && (
          <div className={styles.dots}>
            {imgs.map((_, i) => (
              <button key={i}
                className={`${styles.dot} ${i === imgIdx ? styles.dotOn : ''}`}
                onClick={() => setImgIdx(i)}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Wishlist */}
        <button
          className={`${styles.wish} ${wished ? styles.wished : ''}`}
          onClick={() => setWished(!wished)}
          aria-label="Add to wishlist"
        >
          {wished ? '♥' : '♡'}
        </button>
      </div>

      {/* Body */}
      <div className={styles.body}>
        {product.collection && <p className={styles.coll}>{product.collection}</p>}
        <h3 className={styles.name}>{product.title}</h3>
        <p className={styles.desc}>{product.description}</p>
        {price && <p className={styles.price}>{price}</p>}
        <button
          className={`${styles.addBtn} ${added ? styles.added : ''}`}
          onClick={handleAdd}
        >
          {added ? '✓ Added to Bag' : 'Add to Bag'}
        </button>
      </div>
    </div>
  );
}
