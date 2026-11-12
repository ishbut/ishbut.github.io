# Institute of Cyberspace Security — Group Website

English static website for the research group at Hubei University of Technology. Pages are generated from `src/content.mjs` by `scripts/generate.mjs` and built into `dist/`.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173/
npm run build    # regenerate pages and write dist/
npm run preview
```

`dev` and `build` both run the generator first, so content edits are picked up on every run.

## Deploy

Live at https://ishbut.github.io/ from https://github.com/ishbut/ishbut.github.io (`main`). `.github/workflows/pages.yml` builds and deploys on every push to `main`. In repository settings, **Pages → Source** must be **GitHub Actions**. Push source only; do not commit `dist/`.

## Edit

| What | Where |
|---|---|
| Text, navigation, members, publications | `src/content.mjs` |
| Shared template, head, header, footer | `scripts/generate.mjs` |
| Styles | `src/style.css` |
| Images and fonts | `public/assets/` |

Adding an entry to the `members` array in `src/content.mjs` automatically creates a Members card and a `/teaching/<slug>/` page. All visible site copy is in English.

Group pages describe the group as a whole: figures from Professor Mingwu Zhang's April 2025 faculty profile are labelled as his individual record, and his full biography lives only on his own member page.
