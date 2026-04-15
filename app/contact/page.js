'use client';
import { useState } from 'react';
import { SITE } from '../../data/products';
import styles from './contact.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent]  = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Message from ' + form.name);
    const body    = encodeURIComponent('Name: ' + form.name + '\nEmail: ' + form.email + '\n\nMessage:\n' + form.message);
    window.location.href = 'mailto:' + SITE.contact.email + '?subject=' + subject + '&body=' + body;
    setSent(true);
  };

  return (
    <div className={styles.page}>
      <section className={styles.banner}>
        <div className={styles.inner}>
          <p className={styles.over}>Get in Touch</p>
          <h1 className={styles.h1}>Contact Us</h1>
          <div className={styles.line} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>

            <div className={styles.info}>
              <h2>We would love to hear from you</h2>
              <p>Whether you have a question about our collections, craftsmanship, or shipping — our team is here to help.</p>
              <div className={styles.items}>
                <div className={styles.item}>
                  <span>📍</span>
                  <div><strong>Studio</strong><p>{SITE.contact.address}</p></div>
                </div>
                <div className={styles.item}>
                  <span>✉️</span>
                  <div><strong>Email</strong><p>{SITE.contact.email}</p></div>
                </div>
                <div className={styles.item}>
                  <span>📞</span>
                  <div><strong>Phone</strong><p>{SITE.contact.phone}</p></div>
                </div>
              </div>
            </div>

            <div className={styles.formWrap}>
              {sent ? (
                <div className={styles.success}>
                  <span>✦</span>
                  <h3>Message Sent</h3>
                  <p>Your email client has opened. We will reply within 24 hours.</p>
                  <button
                    className={styles.resetBtn}
                    onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={submit}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label>Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className={styles.field}>
                      <label>Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label>Message</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us how we can help..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" className={styles.submitBtn}>Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
