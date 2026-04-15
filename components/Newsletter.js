'use client';
import { useState } from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done,  setDone]  = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    window.location.href = 'mailto:hello@leqatoure.com?subject=Newsletter Subscription&body=Please subscribe me: ' + email;
    setDone(true);
  };

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <p className={styles.over}>Exclusive Access</p>
        <h2 className={styles.title}>Join Our Exclusive Circle</h2>
        <p className={styles.sub}>
          Subscribe for new collections, special offers, and early access to limited editions.
        </p>
        {done ? (
          <div className={styles.thanks}><span>✦</span> You are in — welcome to the circle.</div>
        ) : (
          <form className={styles.form} onSubmit={submit}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.inp}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.btn}>Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
