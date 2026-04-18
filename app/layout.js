import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'LEQA TOURE — Timeless Luxury Bags',
  description: 'Handcrafted luxury bags designed for the discerning individual who values quality and sophistication.',
};

export default function RootLayout({ children }) {
  // 1. Define the AI/SEO data here
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "LEQA TOURE",
    "url": "https://leqatoure.com",
    "description": "Luxury brand focused on timeless craftsmanship and premium bags",
    "sameAs": [
      "https://instagram.com/leqatoure",
      "https://x.com/LEQATOURE",
      "https://www.linkedin.com/company/leqa-toure"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* 2. The hidden script goes here, away from your visible layout */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Your layout stays exactly the same! */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
