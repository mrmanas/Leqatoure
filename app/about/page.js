import styles from './about.module.css';

export const metadata = { title: 'About — LEQA TOURE' };

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.banner}>
        <div className={styles.inner}>
          <p className={styles.over}>Our Story</p>
          <h1 className={styles.h1}>About LEQA TOURE</h1>
          <div className={styles.line} />
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.txt}>
              <h2>A Statement of Refined Taste</h2>
              <p>At LEQA TOURE, we believe a luxury bag is more than an accessory. It is a statement of your refined taste and personal style. Founded on the principles of exceptional craftsmanship and timeless elegance, we create bags that transcend trends and become treasured companions.</p>
              <p>Each piece is meticulously handcrafted by our master artisans using only the finest materials sourced from around the world. From premium Italian leather to Belgian linen, every component is selected with an uncompromising commitment to quality.</p>
              <p>Our designs celebrate the perfect balance between classic aesthetics and contemporary innovation, ensuring your LEQA TOURE bag remains eternally sophisticated.</p>
            </div>
            <div className={styles.vis}>
              <div className={styles.visCard}>
                <span className={styles.visBag}>👜</span>
                <div className={styles.visBadge}>Since 2010</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.vTitle}>What We Stand For</h2>
          <div className={styles.vGrid}>
            {[
              { icon: '✦', title: 'Craftsmanship', desc: 'Every bag hand-stitched by artisans with decades of experience, ensuring perfection in every detail.' },
              { icon: '🌿', title: 'Sustainability',  desc: 'Eco-conscious practices guide every step of our production — from sourcing to packaging.' },
              { icon: '💎', title: 'Quality First',   desc: 'Only the finest materials globally sourced — premium Italian leather, Belgian linen, and more.' },
              { icon: '🌍', title: 'Global Reach',    desc: 'We ship worldwide with premium packaging and real-time tracking, delivering luxury to your door.' },
            ].map(v => (
              <div key={v.title} className={styles.vCard}>
                <span className={styles.vi}>{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.quote}>
        <div className={styles.container}>
          <blockquote className={styles.bq}>
            &ldquo;Our designs celebrate the perfect balance between classic aesthetics and contemporary innovation &mdash; ensuring your LEQA TOURE bag remains eternally sophisticated.&rdquo;
          </blockquote>
          <cite className={styles.cite}>— The LEQA TOURE Design Team</cite>
        </div>
      </section>
    </div>
  );
}
