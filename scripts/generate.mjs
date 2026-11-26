import { mkdir, writeFile } from 'node:fs/promises';
import { navigation, home, research, awards, patents, team, services, papersPage, conferencePage, conferencePages, memberPages } from '../src/content.mjs';
const pages = {
 '/': { content: home },
 '/research/': { content: research, label: 'Research' },
 '/awards/': { content: awards, label: 'Awards' },
 '/publication/': { content: papersPage(), pageClass: 'publications-page' },
 '/conference/': { content: conferencePage(), label: 'Conferences' },
 ...Object.fromEntries(Object.entries(conferencePages()).map(([path, conf]) => [path, {
  content: conf.content,
  label: conf.label,
  section: conf.section
 }])),
 '/patents/': { content: patents, label: 'Patents' },
 '/staff/': { content: team },
 '/services/': { content: services },
 ...Object.fromEntries(Object.entries(memberPages()).map(([path, member]) => [path, {
  content: member.content,
  title: member.name,
  section: '/staff/',
  pageClass: 'home-page'
 }]))
};
for (const [path, page] of Object.entries(pages)) {
 const active = page.section || path;
 const navTitle = page.label || navigation.find(n => n[1] === active)[0];
 const headTitle = page.title
  ? `${page.title} | Members | Institute of Cyberspace Security | Hubei University of Technology`
  : `${navTitle} | Institute of Cyberspace Security | Hubei University of Technology`;
 const description = page.title
  ? `${page.title} — Group member profile, Institute of Cyberspace Security, Hubei University of Technology.`
  : `${navTitle} — Institute of Cyberspace Security, Hubei University of Technology. Research in cryptography, data security, privacy and AI security.`;
 const pageClass = page.pageClass || (path === '/' ? 'home-page' : 'inner-page');
 const nav = navigation.map(([name, url]) => {
  if (name === 'Members') {
   const activeCls = active === url ? ' active' : '';
   return `<div class="nav-dropdown"><a href="${url}"${activeCls ? ' class="active" aria-current="page"' : ''}>Members</a><button class="nav-dropdown-toggle" aria-label="Toggle Members menu" aria-expanded="false"><i data-lucide="chevron-down" aria-hidden="true"></i></button><div class="nav-dropdown-menu"><a href="${url}"${activeCls ? ' class="active" aria-current="page"' : ''}>Members</a><span class="nav-dropdown-placeholder">Former Members</span></div></div>`;
  }
  return `<a href="${url}"${url === active ? ' class="active" aria-current="page"' : ''}>${name}</a>`;
 }).join('');
 const html = `<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${headTitle}</title><meta name="description" content="${description}"><meta name="theme-color" content="#20466f"><link rel="preload" href="/assets/aldrich.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/assets/research-keywords-bg.webp" as="image"><link rel="icon" type="image/png" href="/assets/hbut-seal.png"><link rel="stylesheet" href="/src/style.css"><script type="module" src="/src/main.js"></script></head>
<body><a class="skip-link" href="#main">Skip to content</a>
<header class="site-header"><div class="header-inner"><a class="university-brand" href="https://en.hbut.edu.cn/" target="_blank" rel="noopener" aria-label="Hubei University of Technology website"><img src="/assets/hbut-seal.png" alt="HBUT seal" width="48" height="48"><span class="university-name">HUBEI UNIVERSITY OF TECHNOLOGY<span class="university-abbr">Institute of Cyberspace Security</span></span></a><button class="menu-toggle" aria-label="Open navigation" aria-controls="main-nav" aria-expanded="false"><span></span><span></span><span></span></button><nav id="main-nav" aria-label="Main navigation">${nav}</nav></div></header>
<main id="main" class="page ${pageClass}">${page.content}</main>
<footer class="site-footer"><p>Copyright © ${new Date().getFullYear()} | Institute of Cyberspace Security · Hubei University of Technology</p></footer><a class="back-to-top" href="#main" aria-label="Back to top" hidden><i data-lucide="arrow-up" aria-hidden="true"></i></a></body></html>`;
 // Rewrite absolute URLs so the generated pages also work from a subpath.
 const depth = path.split('/').filter(Boolean).length;
 const prefix = depth ? '../'.repeat(depth) : './';
 const portableHtml = html.replace(/\b(href|src)="\/(?!\/)([^"]*)"/g, (_, attr, target) => `${attr}="${prefix}${target}"`);
 const dir = path === '/' ? '.' : path.slice(1, -1);
 await mkdir(dir, { recursive: true });
 await writeFile(`${dir}/index.html`, portableHtml);
}
const siteUrl = 'https://ishbut.github.io';
const today = new Date().toISOString().slice(0, 10);
const urls = Object.keys(pages).map(path => {
 const loc = siteUrl + (path === '/' ? '/' : path);
 return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod></url>`;
}).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
await writeFile('public/sitemap.xml', sitemap);
console.log(`Generated ${Object.keys(pages).length} English pages and sitemap.xml.`);
