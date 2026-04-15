import styles from './Features.module.css';

const FEATS = [
  { icon:'✓',  title:'Premium Materials', desc:'Handpicked leather and fine fabrics sourced from across the globe.' },
  { icon:'🌸', title:'Artisan Crafted',    desc:'Every piece meticulously handcrafted by our master artisans.' },
  { icon:'♻',  title:'Sustainable',        desc:'Eco-conscious practices guide every step of our production.' },
  { icon:'🌍', title:'Global Delivery',    desc:'Ships worldwide with premium packaging and real-time tracking.' },
];

export default function Features() {
  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.hdr}>
          <p className={styles.over}>Why Choose Us</p>
          <h2 className={styles.title}>Crafted with Purpose</h2>
        </div>
        <div className={styles.grid}>
          {FEATS.map((f, i) => (
            <div key={f.title} className={styles.card} style={{ animationDelay:`${i * 0.1}s` }}>
              <div className={styles.icon}><span>{f.icon}</span></div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
