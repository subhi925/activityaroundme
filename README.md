# ActivityAroundMe

**A small web app to discover activities and places near you.**

---

## 💡 Project idea

ActivityAroundMe helps users find nearby places and activities (cafes, parks, restaurants, etc.) and displays them in a simple, responsive UI. The frontend is built with React and Vite; the app fetches place data from a backend PHP endpoint (`public/getplaces.php`) and uses Firebase for minimal app utilities (authentication, analytics, or realtime features if enabled).

## 🛠️ Languages & Technologies

- **JavaScript (ES6+) / JSX** — app logic and UI (`src/`)
- **React** (Vite-powered) — component-based UI (`src/App.jsx`, `src/components/`)
- **CSS** — styling (`src/App.css`, `src/index.css`, `src/components/*.css`)
- **PHP** — simple backend endpoint to fetch places (`public/getplaces.php`)
- **Firebase** — `fire.js` contains Firebase configuration and helpers
- **HTML** — `index.html` (Vite entry)
- **Vite** — dev server and bundler

## ✅ Features

- Search or detect nearby places
- List and (optionally) map view of places
- Minimal, responsive UI with component structure
- PHP endpoint to query external Places API (e.g., Google Places)

## 🚀 Quick start

1. Clone the repo:

```bash
git clone <your-repo-url>
cd activityaroundme
```

2. Install dependencies:

```bash
npm install
```

3. Local development:

```bash
npm run dev
```

Open http://localhost:5173 (or the port Vite shows).

4. Build for production:

```bash
npm run build
```

## ⚙️ Backend & API keys

- The PHP endpoint `public/getplaces.php` is responsible for calling an external Places API (if used). Place any required API keys in environment variables or a secure server-side config — do not commit API keys.
- If you use Firebase, add your Firebase config inside `src/fire.js` or use environment variables.
- For Vite, use `VITE_` prefixed environment variables (e.g., `VITE_API_KEY`) and reference them in code with `import.meta.env.VITE_API_KEY`.

## 📁 Important files

- `src/App.jsx` — main app component
- `src/main.jsx` — React entry
- `src/components/NavBar.jsx` — navigation
- `src/components/Places.jsx` — places list and UI
- `src/fire.js` — Firebase config/helpers
- `public/getplaces.php` — backend intermediate for Places API

## 📝 Notes & recommendations

- Keep API keys out of Git; use `.env` for local dev and server-side env on hosting.
- If you deploy frontend to a static host (Netlify, Vercel), ensure the PHP endpoint is hosted on a server that supports PHP or convert it to a serverless function.

## 📄 License

Add a `LICENSE` file if you want to publish under a specific license (MIT is common).

---

If you want, I can add badges, a demo link, or tailor the README text to include screenshots and usage examples. ✅
