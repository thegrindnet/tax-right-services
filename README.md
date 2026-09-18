# Tax Right Services

A complete single-page website for Carolina Santiago’s bilingual tax preparation and bookkeeping business in Mesquite, New Mexico. Built with React, Vite, JavaScript/JSX, and plain CSS. The design uses blue (#0048e8), yellow-green (#d6de26), and white.

## Start locally

Install Node.js 24 LTS and npm. Node 24 is the current LTS line as of September 18, 2026; see the [official release list](https://nodejs.org/en/about/previous-releases). Open a terminal inside the extracted `tax-right-services` folder:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal. To stop the server, press Ctrl+C. Then build:

```bash
npm run lint
npm run build
```

Vite outputs the production website to **dist**, not **build**. `npm run preview` serves that build locally. Do not double-click `index.html` to run a React application.

## Editing business information

- `src/utils/constants.js`: business contacts, hours, appointment information, image imports, services, navigation, FAQs, and personal-service commitments.
- `src/assets/images/`: all three supplied images are included with descriptive filenames and optimized WebP versions. The original logo PNG is also retained as a source asset. No images need to be added manually.
- `src/assets/icons/sprite.svg`: small local interface icons, imported through the Icon component with `?no-inline` to preserve external SVG symbol support.
- `public/favicon.png`: compact TRS favicon.
- `src/index.css`: shared colors, typography, buttons, spacing, and focus styles.
- Each section has its own JSX and CSS files under `src/components/`. `App.jsx` assembles the page. Larger editorial headings and section prose are in the corresponding component.
- `index.html`: title, description, language, favicon, theme color, and basic Open Graph metadata. Add an absolute `og:url` and canonical URL once the final repository name or domain is confirmed. No sharing image was requested.

## Information still to supply

1. **Final repository name:** this project uses the suggested name `tax-right-services` because the brief still contained `[REPOSITORY NAME]`. A different name works without changing Vite’s relative base. Update the expected URL in this README if you rename it.
2. **Facebook URL:** set `business.facebookUrl` to the real business page URL. Until then, the footer displays “Facebook — Link coming soon” as plain text, not a broken button.
3. **Street address (optional):** none was supplied. The map shows Mesquite, New Mexico, and is explicitly labeled as a town map. Clients are asked to call for the appointment location. Replace the location and map URL if an exact office address becomes available.

## Behavior and accessibility

- Semantic header, navigation, main, sections, and footer; one page-level heading.
- Responsive layouts, intrinsic image proportions, text wrapping, and breakpoints for desktop, tablet, and narrow phones (minimum 320 CSS pixels).
- Mobile navigation supports the Menu/Close button, Escape, outside click, and closing when focus leaves the navigation or a section link is selected.
- Native keyboard-accessible FAQ disclosures.
- Visible focus states, skip link, reduced-motion support, and anchor-scroll clearance for the sticky header.
- English content with bilingual service names and selected Spanish copy; this is not a full language-switching implementation.
- Call actions use `tel:`; email actions use `mailto:`. The visitor’s device needs a calling or email app configured to handle those links.
- “Schedule an appointment” scrolls to real contact options. There is no simulated booking confirmation or contact form.
- The supplied flyer opens as a local image. Its services are also available as HTML text on the page.
- No testimonials, invented statistics, credentials, street address, or external tracking scripts.
- The authorized IRS e-file provider statement comes from the supplied business information and flyer. The notary disclaimer is retained in English and Spanish.

## Normalize.css

`src/vendor/normalize.css` is the complete, unmodified 6,138-byte official v8.0.1 file downloaded from:

https://necolas.github.io/normalize.css/8.0.1/normalize.css

Its license and version header are preserved. `src/main.jsx` imports Normalize.css first, then custom global CSS, then the application and component styles. No runtime CDN is used.

## GitHub Pages setup

No repository has been created, modified, committed, pushed, or deployed by the assistant.

When you are ready to publish:

1. On GitHub, create an empty repository named `tax-right-services` under `thegrindnet`. For the simplest Pages setup, make it public. Do not initialize it with a README, license, or .gitignore; these files are already in your project.
2. In your local project terminal, run the commands below. They are for you to execute when you are ready to commit and push:

```bash
git init
git add .
git commit -m "Create Tax Right Services website"
git branch -M main
git remote add origin https://github.com/thegrindnet/tax-right-services.git
git push -u origin main
```

3. Open the repository’s **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
4. Open **Actions → Deploy Tax Right Services to GitHub Pages**. If the first run occurred before Pages was enabled, select **Run workflow**, choose `main`, and run it again.
5. Once the workflow succeeds, visit the URL reported by the deployment.

Expected URL if you use the suggested repository name:

https://thegrindnet.github.io/tax-right-services/

This is an expected future URL, not a deployed website.

The included workflow uses the current Node LTS (`lts/*`), installs with `npm ci`, runs ESLint, runs `npm run build`, uploads `dist`, and deploys through GitHub Pages. Every future push to `main` triggers it. `package-lock.json` is included for reproducible installation. No manual `dist` upload, `gh-pages` package, or HostGator `.htaccess` is required.

Vite uses `base: "./"` for this single-page, hash-navigation site. Built scripts, styles, favicon, image imports, and the SVG sprite use portable paths that work inside the repository subdirectory. There are no nested client-side routes requiring a server rewrite. Source `index.html` contains the Vite module entry; production HTML is generated with hashed `assets/` references.

The Actions configuration follows the [official Vite deployment guide](https://vite.dev/guide/static-deploy.html#github-pages).

## Structure

Generated `node_modules/` and `dist/` are excluded below and from the source archive. Build the latter with `npm run build`.

```text
tax-right-services/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── sprite.svg
│   │   └── images/
│   │       ├── carolina-santiago.webp
│   │       ├── tax-right-services-flyer.webp
│   │       ├── tax-right-services-logo.png
│   │       └── tax-right-services-logo.webp
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.css
│   │   │   └── About.jsx
│   │   ├── App/
│   │   │   ├── App.css
│   │   │   └── App.jsx
│   │   ├── Contact/
│   │   │   ├── Contact.css
│   │   │   └── Contact.jsx
│   │   ├── FAQ/
│   │   │   ├── FAQ.css
│   │   │   └── FAQ.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   ├── Hero/
│   │   │   ├── Hero.css
│   │   │   └── Hero.jsx
│   │   ├── Icon/
│   │   │   ├── Icon.css
│   │   │   └── Icon.jsx
│   │   ├── Navigation/
│   │   │   ├── Navigation.css
│   │   │   └── Navigation.jsx
│   │   └── Services/
│   │       ├── Services.css
│   │       └── Services.jsx
│   ├── utils/
│   │   └── constants.js
│   ├── vendor/
│   │   └── normalize.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .nvmrc
├── README.md
├── VERIFICATION.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

## Verification

See `VERIFICATION.md` in the project folder for exact checks, asset results, and the browser-preview limitation. No live GitHub deployment was performed; hosted HTTP behavior must be confirmed after you enable Pages and publish.
