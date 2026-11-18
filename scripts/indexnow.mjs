import { readFile } from 'node:fs/promises';

const host = 'ishbut.github.io';
const key = '85c39a60446b3945dad99a3460702b5d';
const keyLocation = `https://${host}/${key}.txt`;

const sitemap = await readFile('public/sitemap.xml', 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

if (!urlList.length) {
  console.error('No URLs found in public/sitemap.xml. Run npm run build first.');
  process.exit(1);
}

const engines = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow'
];

for (const endpoint of engines) {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host, key, keyLocation, urlList })
    });
    console.log(`${endpoint}: ${res.status} ${res.statusText}`);
  } catch (error) {
    console.error(`${endpoint}: request failed - ${error.message}`);
  }
}
