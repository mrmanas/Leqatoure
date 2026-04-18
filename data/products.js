// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  LEQA TOURE — PRODUCTS & SETTINGS                                        ║
// ║  Edit this file to add, remove, or update products.                      ║
// ║                                                                           ║
// ║  HOW TO ADD A NEW PRODUCT:                                                ║
// ║  1. Put your image in /public/images/your-image.jpeg                      ║
// ║  2. Copy one of the objects below and change the values                   ║
// ║  3. Save the file — the site updates instantly                            ║
// ║                                                                           ║
// ║  TAGS (pick any combination):                                             ║
// ║    "Bestseller"  →  gold badge                                            ║
// ║    "Trending"    →  purple badge                                          ║
// ║    "New"         →  green badge                                           ║
// ╚══════════════════════════════════════════════════════════════════════════╝

export const PRODUCTS = [
  {
    id: "1",
    title: "Heritage Backpack",
    description:
      "Canvas and full-grain leather backpack handcrafted for the modern explorer. Features brass buckles, a drawstring top closure, and multiple compartments. Premium sage canvas with rich tan leather accents.",
    price: 2495,
    tags: ["Bestseller"],
    collection: "Heritage",
    // Add more images by adding more paths: ["/images/a.jpeg", "/images/b.jpeg"]
    images: ["/images/backpack.jpeg"],
    inStock: true,
  },
  {
    id: "2",
    title: "Tribal Sling Bag",
    description:
      "Bold geometric print sling bag with genuine leather trim and adjustable strap. Inspired by traditional textile art. Compact enough for daily carry, striking enough to make a statement.",
    price: 1295,
    tags: ["Trending", "New"],
    collection: "Artisan",
    images: ["/images/sling-blue.jpeg"],
    inStock: true,
  },
  {
    id: "3",
    title: "Forest Saddle Bag",
    description:
      "Tropical leaf print saddle bag with dark leather trim and antique brass buckle. Perfect for summer days and weekend getaways. Adjustable fabric strap with matching print.",
    price: 1495,
    tags: ["New"],
    collection: "Botanica",
    images: ["/images/sling-forest.jpeg"],
    inStock: true,
  },
  {
    id: "4",
    title: "Floral Crossbody",
    description:
      "Delicate floral print crossbody on cream canvas with warm brown leather edges. Artisan-stitched with antique brass hardware. A timeless everyday companion with botanical charm.",
    price: 1395,
    tags: ["Bestseller"],
    collection: "Botanica",
    images: ["/images/sling-white.jpeg"],
    inStock: true,
  },
  {
    id: "5",
    title: "Bold Tote — Noir",
    description:
      "Structured dark canvas tote with vivid orange leather straps and trim. Spacious interior with zip closure. Designed for those who demand functionality without compromising on style.",
    price: 1895,
    tags: ["Trending"],
    collection: "Urban",
    images: ["/images/tote-black.jpeg"],
    inStock: true,
  },
  {
    id: "6",
    title: "Stripe Weekender",
    description:
      "Artisan-woven striped canvas weekender with supple black leather handles and shoulder strap. Generous capacity for weekend travel. Pink and mauve tones woven entirely by hand.",
    price: 2195,
    tags: ["New", "Trending"],
    collection: "Heritage",
    images: ["/images/tote-pink.jpeg"],
    inStock: true,
  },
];

// ── COLLECTIONS ───────────────────────────────────────────────────────────────
// Add a new { id, label } here when you add a new collection to products above
export const COLLECTIONS = [
  { id: "all",      label: "All Pieces" },
  { id: "Heritage", label: "Heritage"   },
  { id: "Artisan",  label: "Artisan"    },
  { id: "Botanica", label: "Botanica"   },
  { id: "Urban",    label: "Urban"      },
];

// ── SITE SETTINGS ─────────────────────────────────────────────────────────────
export const SITE = {
  name:    "LEQA TOURE",
  tagline: "Timeless Elegance",
  subtitle:
    "Discover our exquisite collection of handcrafted luxury bags, designed for the discerning individual who values quality and sophistication.",
  social: {
    instagram: "https://instagram.com/leqatoure",
    twitter:   "https://twitter.com/leqatoure",
    linkedin:  "https://www.linkedin.com/company/leqa-toure",
  },
  contact: {
    address: "Noida, India",
    email:   "marshale2026@gmail.com",
    phone:   "+39 02 xxxxxx",
  },
};
