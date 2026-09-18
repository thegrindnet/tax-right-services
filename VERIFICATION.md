# Verification — Tax Right Services

Completed September 18, 2026.

## Passed

- Inspected the structural reference repository’s current `main` branch through GitHub, including its recursive tree and App, Header, Services, Hero CSS, entry point, package manifest, and Vite configuration. The inspected tree SHA was `ef0a8dfb41a90e6ee070099a3ef4e15d3d8ea24e`.
- Preserved one folder per component, matching JSX/CSS pairs, component-owned stylesheet imports, App section composition, BEM class names, and centralized repeated content.
- `npm install`: completed; 140 packages installed.
- `npm run lint`: passed with zero project errors and zero warnings.
- `npm run build`: passed; Vite 8.3.0 emitted the static production site into `dist`.
- The environment printed an npm warning about its own `http-proxy` configuration. This is not a project setting and did not affect installation, lint, or build.
- Executed React’s server renderer against the complete App through Vite’s module loader; every section rendered without an exception. This is a markup check, not a browser visual test.
- Checked all 25 rendered links, unique navigation targets, one h1, seven service cards, five FAQ disclosures, 4 image placements, alt attributes, dimensions, safe external links, and correct phone/email schemes. No forms or inline CSS are present.
- Checked all local imports and exact filename capitalization; all referenced images exist and the production build resolves them.
- Official Normalize.css v8.0.1 is 6,138 bytes, with the original version/MIT header and complete source. It is byte-for-byte identical to the file downloaded from the required URL.
- Normalize.css SHA-256: `580818700724d42d7fcc4979b0197971fca1c6d2e0286769237a0ac897df5512`.
- Normalize.css is the first import in `main.jsx`. Its rules also precede the custom styles in the generated CSS bundle.
- Vite uses `base: "./"`. The built favicon, JS, CSS, images, and external SVG sprite use portable local paths.
- Served the production output under a local `/tax-right-services/` subdirectory and requested every output file. All returned HTTP 200 with the expected contents and MIME types; asset requests did not return HTML.
- Reviewed the GitHub Actions workflow: pushes to `main` and manual runs, current Node LTS, `npm ci`, lint, build, upload `dist`, and Pages deployment permissions/environment.
- No GitHub repository was created or changed. No commit, push, or deployment was performed.

## Direct production-file requests

| Path | Status | Content type | Bytes |
| --- | --- | --- | ---: |
| `/tax-right-services/favicon.png` | 200 | `image/png` | 1,959 |
| `/tax-right-services/index.html` | 200 | `text/html` | 1,441 |
| `/tax-right-services/assets/carolina-santiago-DZyOk_Kh.webp` | 200 | `image/webp` | 49,194 |
| `/tax-right-services/assets/index-Ctc5yx_m.js` | 200 | `text/javascript` | 237,628 |
| `/tax-right-services/assets/tax-right-services-logo-Ba3ZgEr5.webp` | 200 | `image/webp` | 39,556 |
| `/tax-right-services/assets/index-xn2U9PYH.css` | 200 | `text/css` | 17,954 |
| `/tax-right-services/assets/sprite-CMW9LTNw.svg` | 200 | `image/svg+xml` | 1,644 |
| `/tax-right-services/assets/tax-right-services-flyer-D-lFnsXy.webp` | 200 | `image/webp` | 201,488 |

## Limits of verification

The supervised development preview reported a running site, but the browser could not reach it (`ERR_BLOCKED_BY_CLIENT`). Therefore visual appearance at desktop/tablet/320px, actual keyboard interactions, FAQ toggling, and mobile-menu interactions could not be exercised in a browser here. Responsive CSS and interaction code were reviewed, but that is not a substitute for a rendered browser check. Before client handoff, open the site locally and check those sizes, including 200% zoom and keyboard-only navigation.

The asset tests above used a local static server, not live GitHub Pages. The Actions workflow has not run on GitHub because publication was not authorized. After publishing, inspect the deployed URL and the browser network panel for real hosted responses.

The Facebook URL and final repository name still need confirmation. No street address was supplied, so the map links to the town and asks clients to call for their appointment location. All required images are included; no manual image additions are needed.
