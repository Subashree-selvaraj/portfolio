# Subashree S — Portfolio (React + Vite)

High-end portfolio with Three.js 3D background, glassmorphism, custom cursor, and scroll animations.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open http://localhost:5173

### 3. Build for production
```bash
npm run build
```

---

## 🌐 Deploy Options

### Vercel (Recommended — free, instant)
1. Push this folder to a GitHub repo
2. Go to https://vercel.com → Import repo
3. Framework: **Vite** (auto-detected)
4. Click Deploy ✅

### Netlify
1. Run `npm run build` locally
2. Go to https://app.netlify.com/drop
3. Drag the `dist/` folder → Live instantly ✅

### GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
Then run: `npm run deploy`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Cursor.jsx          # Custom cursor with lerp ring
│   ├── ThreeBackground.jsx # Three.js particles + torus rings
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── HeroCard.jsx        # 3D tilt card
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Achievements.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── useScrollReveal.js  # Intersection Observer hook
├── data/
│   └── index.jsx           # All portfolio content (easy to edit)
├── App.jsx
├── main.jsx
└── index.css               # All styles + CSS variables
```

## ✏️ Updating Content
All your portfolio data lives in `src/data/index.jsx`.
- Add/remove projects, skills, achievements from there
- No need to touch component files

## 🎨 Changing Colors
Edit CSS variables at the top of `src/index.css`:
```css
:root {
  --a1: #7c3aed;  /* purple */
  --a2: #06b6d4;  /* cyan   */
  --a3: #f59e0b;  /* amber  */
  --a4: #ec4899;  /* pink   */
}
```
