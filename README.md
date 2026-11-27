# Institute of Cyberspace Security — Group Website

English static website for the research group at Hubei University of Technology. Pages are generated from `src/content.mjs` by `scripts/generate.mjs` and built into `dist/`.

> Maintenance guide (Chinese): [`docs/网站维护指南.md`](docs/网站维护指南.md)

## Develop

```sh
npm install
npm run dev      # http://localhost:5173/
npm run build    # regenerate pages and write dist/
npm run preview
```

Both `dev` and `build` run the generator first. Root HTML files are generated output — edit `src/`, never the HTML directly. `dist/` is ignored by git. During `npm run dev`, changes to `src/content.mjs`, `src/recent-work.mjs` or `scripts/generate.mjs` regenerate pages and refresh the browser automatically.

## Deploy

Live at https://ishbut.github.io/. `origin` points directly to the production repo `ishbut/ishbut.github.io` (`main`), so a plain `git push` publishes:

```sh
git add -A
git commit -m "Short English summary of the changes"
git push
```

`.github/workflows/pages.yml` builds and deploys on every push, then submits URLs to IndexNow/Bing. Pages → Source must be **GitHub Actions** in repository settings.

## Edit

| What | Where |
|---|---|
| Text, navigation, members, students, homepage, news | `src/content.mjs` |
| Publication records | `src/recent-work.mjs` |
| Publication rendering / author abbreviations | `src/content.mjs` (`papersPage`, `renderPaper`) |
| Shared template, head, header, footer | `scripts/generate.mjs` |
| Styles | `src/style.css` |
| Interactions (menu, Lucide icons, back-to-top) | `src/main.js` |
| Teacher photos & CV | `public/assets/teachers/` |
| Student avatars | `public/assets/students/` |
| Seal, keyword background, fonts | `public/assets/` |

Adding a `members` entry in `src/content.mjs` creates a Members card and a `/staff/<slug>/` page automatically. All visible site copy is in English.

Visible navigation: Home / Members / Publications / Access. Conferences, Research, Awards and Patents pages are still generated and reachable but hidden from navigation.
