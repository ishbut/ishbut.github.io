# Mingwu Zhang — Academic Website

An English academic website for the Institute of Cyberspace Security at Hubei University of Technology, inspired by the structure of Cheng-Zhong Xu's University of Macau website. The home page is a group portal; the Team page lists group members, each with a profile page. Professor Mingwu Zhang's full biography lives on his own member page. All faculty content and institutional assets have been replaced with HBUT material. No Opening page is included. Group-level pages describe the institute; figures taken from Professor Mingwu Zhang's individual faculty profile are labelled as such, and his full personal biography is confined to his own member page.

## Run

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Deploy the contents of `dist/` to any static web host. Every section has its own generated HTML document and works with JavaScript disabled. JavaScript enhances mobile navigation and publication filtering.

## Deployment

The site is published at https://ishbut.github.io/ from the repository https://github.com/ishbut/ishbut.github.io, whose `main` branch holds the website source.

`.github/workflows/pages.yml` runs on every push to `main` (and on manual dispatch): it installs dependencies with `npm ci`, regenerates all pages and builds `dist/` with `npm run build`, then deploys that directory through GitHub Actions. In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.

Navigation and assets use relative URLs, so the site works at the domain root. The local `npm run dev` and `npm run build` commands regenerate every page.

Routes: `/`, `/research/`, `/awards/`, `/publication/`, `/patents/`, `/teaching/`, `/services/`, and one `/teaching/<slug>/` page per group member.

Edit `src/content.mjs` for content, `src/style.css` for appearance, and `scripts/generate.mjs` for the shared page template. The dev and build commands regenerate every page. Restart the dev command after changing the generator or content.

## Team pages

Members are defined in the `members` array in `src/content.mjs`. Adding an entry with `slug`, `name`, `role`, `focus`, and optional `photo` / `bio` automatically creates a card on the Team page and a page at `/teaching/<slug>/`; both the generator and the Vite page list read this array. Professor Mingwu Zhang's entry uses `detail` to reuse the original full biography, and his page is at `/teaching/mingwu-zhang/`. Member details and portraits come from the School's faculty roster and its linked faculty profiles (checked 9 November 2026); Chinese titles and research areas are editorial translations. An entry with `placeholder: true` shows only a name, a pending badge, and an explicit note that no verified profile exists. No roster details are invented. The Team page has three sections: Faculty, Current Graduate Students, and Alumni Destinations. Add verified students to the `currentStudents` array in `src/content.mjs` (`name`, `degree`, `year`, `focus`); until a roster is provided, that section shows doctoral and master's placeholders with the supervision fields from the April 2025 faculty profile, and no names are assumed. Alumni destinations come from that profile and are labelled as examples from it; individual supervision records and student achievements remain on Mingwu Zhang's member page.

## Sources and content limitations

- Faculty profile, published April 14, 2025: https://scs.hbut.edu.cn/info/1021/1048.htm
- Official English CV: https://sie.hbut.edu.cn/__local/6/FF/9E/B22FA8150519ACF1C1243EBC316_FB4C65A9_2DE16.pdf
- HBUT English website and seal: https://en.hbut.edu.cn/ (seal extracted from its `images/logo1.png`).
- Professor's portrait: the faculty profile's own image.
- DBLP and Google Scholar links: linked from the university faculty profile.
- Team roster and linked faculty profiles (Hua Shen, Gang Shen, Yuanyuan Zhang): https://scs.hbut.edu.cn/szdw/zrjs.htm. Portraits come from those official profile pages.
- Layout reference: https://personal.fic.um.edu.mo/czxu/

Quantities and positions reflect the public faculty profile; they are not represented as newly verified 2026 statistics. Patent counts describe applications, not grants. An itemized patent register and current student roster were not supplied by the faculty profile, so neither is fabricated. The Students page contains verified supervision fields and aggregate alumni destinations. English translations of Chinese monograph and project titles are editorial translations. Publication title links lead to Google Scholar searches, not invented PDF links. The Team page uses the School's faculty roster (https://scs.hbut.edu.cn/szdw/zrjs.htm) and its linked faculty profiles, checked on 9 November 2026. Yuzhu Wang and Yu Chen appear as English-romanised name placeholders because the roster provides no individual profiles for them; no titles, research areas or biographies are assumed for those entries. All visible site copy is in English; Chinese names on the roster are rendered as English romanisations.

The original site author's text, portrait, QR code, diagrams, and University of Macau branding are not included. The school wordmark is typeset in English beside the official HBUT seal.

Source rechecked on October 29, 2026: the faculty profile still displays its April 2025 publication date. The linked English CV is a historical university document and lists `scauzhang@gmail.com`; the website intentionally uses `hbutzhang@gmail.com` from the newer faculty profile. Faculty confirmation of current appointments, admissions, and aggregate statistics remains advisable before treating this as an up-to-date official personal website. Individual publication records have not all been independently checked against publisher records.

## Recent research additions (29 October 2026)

The Home, Research, Awards, Papers, and Students pages now include recent 2025–2026 research and the university-reported CSS 2026 Best Paper Award. New journal/conference records have direct DOI or conference links. Preprints and author manuscripts are listed separately, and accepted / forthcoming issue records are explicitly labeled. The 2025 cloud-computing paper's volume and pagination were also completed from publisher metadata.

See `docs/recent-research-sources-2026-10-29.md` for attribution checks, date conventions, and unresolved publication status, and `docs/recent-publication-metadata.json` for retained publisher-deposited metadata. The institute's publication count is not substituted for the professor's personal count.
