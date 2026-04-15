# LEQA TOURE — Luxury Bag Website
### Next.js 14 · No Firebase · No Admin · Vercel Ready

---

## ⚡ Run in VS Code

```bash
cd leqa-final
npm install
npm run dev
```

Visit **http://localhost:3000**

---

## ➕ How to Add a New Product

**Step 1** — Put your image in `/public/images/your-bag.jpeg`

**Step 2** — Open `data/products.js` and add a new object:

```js
{
  id: "7",                          // unique number (increment from last)
  title: "My New Bag",
  description: "Your description here.",
  price: 1999,                      // number, no $ sign
  tags: ["New"],                    // "Bestseller" | "Trending" | "New" | mix
  collection: "Heritage",           // must match a collection in COLLECTIONS array
  images: ["/images/your-bag.jpeg"],// can add multiple: ["/images/a.jpeg", "/images/b.jpeg"]
  inStock: true,
},
```

**Step 3** — Save. The site updates instantly.

---

## 🏷️ Tags

| Tag          | Badge Color | Used for                        |
|-------------|-------------|----------------------------------|
| `Bestseller` | Gold        | Your top-selling products        |
| `Trending`   | Purple      | Popular / viral products         |
| `New`        | Green       | Recently added products          |

You can assign multiple tags: `tags: ["New", "Trending"]`

---

## 🗂️ How to Add a New Collection

In `data/products.js`, add to the `COLLECTIONS` array:
```js
{ id: "MySeason", label: "My Season" }
```
Then use `collection: "MySeason"` in your product objects.

---

## 🌐 How to Change Social Links

In `data/products.js`, edit the `SITE.social` section:
```js
social: {
  instagram: "https://instagram.com/YOUR_HANDLE",
  twitter:   "https://twitter.com/YOUR_HANDLE",
  linkedin:  "https://linkedin.com/company/YOUR_COMPANY",
},
```
Leave any blank (`""`) to hide that icon.

---

## 📧 Contact Form

The contact form uses `mailto:` — it opens the visitor's email app.
To use a proper form backend, replace the `submit` function in
`app/contact/page.js` with [Formspree](https://formspree.io) (free):

```js
const submit = async (e) => {
  e.preventDefault();
  await fetch("https://formspree.io/f/YOUR_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  setSent(true);
};
```

---

## 🚀 Deploy to Vercel (Free)

```bash
# Option 1 — Vercel CLI
npm install -g vercel
vercel

# Option 2 — Vercel Dashboard
# 1. Push this folder to GitHub
# 2. Go to vercel.com → New Project → Import your repo
# 3. Click Deploy — done!
```

No environment variables needed. The site is fully static.

---

## 📁 Project Structure

```
leqa-final/
├── data/
│   └── products.js          ← ✏️  EDIT THIS to add/change products
├── public/
│   └── images/              ← 🖼️  PUT YOUR IMAGES HERE
│       ├── backpack.jpeg
│       ├── sling-blue.jpeg
│       ├── sling-forest.jpeg
│       ├── sling-white.jpeg
│       ├── tote-black.jpeg
│       └── tote-pink.jpeg
├── app/
│   ├── layout.js            Root layout
│   ├── page.js              Homepage
│   ├── globals.css          Global styles + CSS variables
│   ├── about/page.js        About page
│   ├── collections/page.js  Collections + filter page
│   └── contact/page.js      Contact form
├── components/
│   ├── Navbar.js            Sticky navbar + social icons + mobile menu
│   ├── Footer.js            Footer + links + social icons
│   ├── Hero.js              Hero with floating product images
│   ├── FeaturedProducts.js  Homepage product grid
│   ├── ProductCard.js       Product card with image + tags + wishlist
│   ├── Features.js          4-feature dark section
│   └── Newsletter.js        Email subscribe section
├── package.json
└── next.config.js
```

---

## 🎨 Design Tokens (edit in globals.css)

```css
--gold:      #b8972a   /* main gold color */
--gold-pale: #f5ead8   /* light gold/cream */
--cream:     #faf6ef   /* page background */
--dark:      #1a1410   /* dark text/buttons */
```

Fonts: **Cormorant Garamond** (display) + **Jost** (body) — loaded from Google Fonts.
