import { mkdir, writeFile } from 'node:fs/promises';
import { navigation, home, research, awards, patents, team, services, papersPage, memberPages } from '../src/content.mjs';
const pages = {
 '/': { content: home },
 '/research/': { content: research },
 '/awards/': { content: awards },
 '/publication/': { content: papersPage() },
 '/patents/': { content: patents },
 '/teaching/': { content: team },
 '/services/': { content: services },
 ...Object.fromEntries(Object.entries(memberPages()).map(([path, member]) => [path, {
  content: member.content,
  title: member.name,
  section: '/teaching/',
  pageClass: 'home-page'
 }]))
};
for (const [path, page] of Object.entries(pages)) {
 const active = page.section || path;
 const navTitle = navigation.find(n => n[1] === active)[0];
 const headTitle = page.title
  ? `${page.title} | Members | Institute of Cyberspace Security | Hubei University of Technology`
  : `${navTitle} | Institute of Cyberspace Security | Hubei University of Technology`;
 const description = page.title
  ? `${page.title} — Group member profile, Institute of Cyberspace Security, Hubei University of Technology.`
  : `${navTitle} — Institute of Cyberspace Security, Hubei University of Technology. Research in cryptography, data security, privacy and AI security.`;
 const pageClass = page.pageClass || (path === '/' ? 'home-page' : 'inner-page');
 const nav = navigation.map(([name, url]) => `<a href="${url}"${url === active ? ' class="active" aria-current="page"' : ''}>${name}</a>`).join('');
 const html = `<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${headTitle}</title><meta name="description" content="${description}"><meta name="theme-color" content="#20466f"><link rel="preload" href="/assets/aldrich.ttf" as="font" type="font/ttf" crossorigin><link rel="icon" type="image/png" href="/assets/hbut-seal.png"><link rel="stylesheet" href="/src/style.css"><script type="module" src="/src/main.js"></script></head>
<body><a class="skip-link" href="#main">Skip to content</a>
<header class="site-header"><div class="header-inner"><button class="menu-toggle" aria-label="Open navigation" aria-controls="main-nav" aria-expanded="false"><span></span><span></span><span></span></button><nav id="main-nav" aria-label="Main navigation">${nav}</nav></div></header>
<main id="main" class="page ${pageClass}">${page.content}</main>
<footer class="site-footer"><p>Copyright © ${new Date().getFullYear()} | Institute of Cyberspace Security</p><p class="footer-affiliation">Institute of Cyberspace Security · Hubei University of Technology</p><nav aria-label="Footer navigation">${nav}</nav></footer><a class="back-to-top" href="#main" aria-label="Back to top" hidden><span aria-hidden="true">↑</span></a></body></html>`;
 // Rewrite absolute URLs so the generated pages also work from a subpath.
 const depth = path.split('/').filter(Boolean).length;
 const prefix = depth ? '../'.repeat(depth) : './';
 const portableHtml = html.replace(/\b(href|src)="\/(?!\/)([^"]*)"/g, (_, attr, target) => `${attr}="${prefix}${target}"`);
 const dir = path === '/' ? '.' : path.slice(1, -1);
 await mkdir(dir, { recursive: true });
 await writeFile(`${dir}/index.html`, portableHtml);
}
console.log(`Generated ${Object.keys(pages).length} English pages.`);
