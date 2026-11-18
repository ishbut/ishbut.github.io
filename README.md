# Institute of Cyberspace Security — Group Website

English static website for the research group at Hubei University of Technology. Pages are generated from `src/content.mjs` by `scripts/generate.mjs` and built into `dist/`.

> **Maintenance guide (Chinese):** [`docs/网站维护指南.md`](docs/网站维护指南.md) — read this before making changes or deploying.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173/
npm run build    # regenerate pages and write dist/
npm run preview
```

`dev` and `build` both run the generator first, so content edits are picked up on every run. Root-level HTML files are generated output — edit the source in `src/`, never the HTML directly. `dist/` is ignored by git.

## Deploy

Live at https://ishbut.github.io/, deployed from https://github.com/ishbut/ishbut.github.io (`main`). `.github/workflows/pages.yml` builds and deploys on every push to `main`. In repository settings, **Pages → Source** must be **GitHub Actions**.

**Important:** the only valid deployment target is the `ishbut/ishbut.github.io` production repository. The local git remote `origin` points to `Wcowin/ishbut` (a source mirror with Pages disabled) — **never run `git push origin`**, it triggers failing Actions. Deploy by cloning the production repo, syncing this directory into it (excluding `.git/`), then committing and pushing there. See the [maintenance guide](docs/网站维护指南.md) for the exact commands.

## Edit

| What | Where |
|---|---|
| Text, navigation, members, students, homepage | `src/content.mjs` |
| Publication records (2026 list, preprints) | `src/recent-work.mjs` |
| Publication rendering / author abbreviations | `src/content.mjs` (`papersPage`, `renderPaper`) |
| Shared template, head, header, footer | `scripts/generate.mjs` |
| Styles | `src/style.css` |
| Interactions (menu, Lucide icons, back-to-top) | `src/main.js` |
| Teacher photos & CV | `public/assets/teachers/` |
| Student avatars | `public/assets/students/` |
| Seal, keyword background, fonts | `public/assets/` |

Adding an entry to the `members` array in `src/content.mjs` automatically creates a Members card and a `/teaching/<slug>/` page. All visible site copy is in English.

Visible navigation is Home / Members / Publications / Access. The Research, Awards and Patents pages are intentionally hidden from navigation but still generated and reachable; this is handled in `scripts/generate.mjs`.
