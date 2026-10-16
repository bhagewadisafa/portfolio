# Safa Bhagewadi - Developer Portfolio Website

> **Modern, responsive, recruiter-ready portfolio website for Safa Bhagewadi, Aspiring Full-Stack Python Developer & MCA Student at Chetan Business School, Hubli.**

![Safa Bhagewadi Portfolio](public/avatar.jpg)

---

## 🌟 Professional Positioning
- **Target Roles**: Entry-Level Python Developer, Junior Backend Developer, Full-Stack Trainee, Software Engineer
- **Academic Background**: 
  - Master of Computer Applications (MCA 2025–2027) — Chetan Business School, Hubli (Pursuing)
  - Bachelor of Computer Applications (BCA 2021–2024) — KLE PC Jabin Science College, Hubli (70.4% CGPA)
- **Core Technical Focus**: Python, Flask, SQLite, MySQL, MongoDB, SQLAlchemy, Data Science & Machine Learning (Pandas, Scikit-learn).
- **Location & Mobility**: Hubli, Karnataka, India (Open to Relocation & Remote).

---

## 🛠️ Tech Stack & Architecture
- **Frontend Core**: React 19, JavaScript (ES6+), HTML5 Semantic Structure
- **Design & Styling**: Vanilla CSS Design Tokens, Dark Navy & Electric Cyan Palette, Responsive Flexbox/Grid
- **Icons**: Lucide React + Custom crisp SVG brand vectors
- **Bundler & Build Tool**: Vite 8
- **Accessibility & SEO**: WCAG AA Contrast, OpenGraph meta tags, keyboard navigable (`:focus-visible`), responsive mobile drawer

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with Hot Module Replacement (HMR).

### 3. Production Build
```bash
npm run build
```
This generates an optimized, minified production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📋 Pre-Publishing Checklist for Safa

Before publishing your portfolio to the web, review this quick checklist to personalize your live assets:

- [ ] **Resume PDF**: Replace `public/resume.pdf` with your actual, finalized college/recruitment resume document. (Keep the filename as `resume.pdf`).
- [ ] **Profile Photograph**: If you prefer your real photograph instead of the generated illustration, simply save your photo as `avatar.jpg` and overwrite `public/avatar.jpg`.
- [ ] **Project GitHub Links**: In `src/data/portfolioData.js`, update the `githubUrl` fields to point to your specific repository links:
  - Moto Dealer Website: `https://github.com/bhagewadisafa/<your-repo>`
  - College Fees Reminder: `https://github.com/bhagewadisafa/<your-repo>`
  - Movie Recommendation: `https://github.com/bhagewadisafa/<your-repo>`
- [ ] **Contact Form Endpoint (Optional)**: By default, the contact form opens a pre-filled email draft to `bhagewadisafa@gmail.com`. If you want automated direct inbox forwarding without opening a mail client, connect a free service like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) in `src/components/Contact.jsx`.

---

## 🌐 Deployment Instructions

### Option 1: Deploy on Vercel (Recommended — Fastest & Free)
1. Push your repository to your GitHub account (`github.com/bhagewadisafa/portfolio`).
2. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and select your `portfolio` repository.
4. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your portfolio will be live on `https://<your-project>.vercel.app` in under 60 seconds with automatic HTTPS.

---

### Option 2: Deploy on Netlify (Free)
1. Push your project to GitHub.
2. Sign in to [Netlify](https://netlify.com) with GitHub.
3. Click **"Add new site"** -> **"Import an existing project"**.
4. Choose GitHub and pick your `portfolio` repository.
5. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**.

*Alternatively, drag and drop your local `dist` folder directly onto the Netlify Drop dashboard.*

---

### Option 3: Deploy on GitHub Pages
1. In `vite.config.js`, set `base: '/portfolio/'` (replace `portfolio` with your repository name):
   ```js
   export default defineConfig({
     base: '/portfolio/',
     plugins: [react()],
   })
   ```
2. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repository **Settings -> Pages**, set source to the `gh-pages` branch.

---

## 📁 Project Directory Structure
```
portfolio/
├── public/
│   ├── avatar.jpg              # Profile avatar / photo
│   ├── resume.pdf              # Downloadable resume PDF
│   └── projects/               # High-resolution project screenshots
│       ├── moto-dealer.jpg
│       ├── fees-reminder.jpg
│       └── movie-rec.jpg
├── src/
│   ├── assets/                 # Component assets
│   ├── components/
│   │   ├── Navbar.jsx          # Header with mobile drawer & brand
│   │   ├── Hero.jsx            # Hero section with bio & quick CTAs
│   │   ├── About.jsx           # Background story & 30-sec recruiter card
│   │   ├── Skills.jsx          # Categorized skills (honest levels)
│   │   ├── Projects.jsx        # Featured projects grid & details
│   │   ├── ProjectModal.jsx    # Interactive architecture modal
│   │   ├── Education.jsx       # MCA/BCA timelines & coursework
│   │   ├── Certifications.jsx  # Azure, Full Stack & club activities
│   │   ├── ResumeSection.jsx   # Dedicated resume download & preview
│   │   ├── Contact.jsx         # Validated contact form & direct channels
│   │   ├── Footer.jsx          # Socials, quick links & back-to-top
│   │   └── Icons.jsx           # SVG vector icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for portfolio data
│   ├── App.css                 # Component and responsive styles
│   ├── index.css               # Design system & CSS custom properties
│   ├── App.jsx                 # Main application structure
│   └── main.jsx                # React root mount
├── index.html                  # SEO tags, Google Fonts, and title
├── package.json
└── vite.config.js
```

---

## ⚖️ License
Personal portfolio of Safa Bhagewadi. Open-source under the MIT License.
