import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { memberPaths } from './src/content.mjs';
const pages = ['', 'research', 'awards', 'publication', 'patents', 'teaching', 'services', ...memberPaths];

// Watch content sources during `npm run dev`: regenerate HTML and refresh the page automatically.
function autoGenerate() {
  const sourceFiles = ['src/content.mjs', 'src/recent-work.mjs', 'scripts/generate.mjs'].map(f => resolve(f));
  return {
    name: 'auto-generate-pages',
    apply: 'serve',
    configureServer(server) {
      server.watcher.add(sourceFiles);
      const regenerate = file => {
        if (!sourceFiles.includes(resolve(file))) return;
        server.config.logger.info(`[auto-generate] ${file} changed, regenerating pages...`);
        try {
          execFileSync(process.execPath, ['scripts/generate.mjs'], { stdio: 'ignore' });
          server.ws.send({ type: 'full-reload', path: '*' });
        } catch (error) {
          server.config.logger.error(`[auto-generate] failed: ${error.message}`);
        }
      };
      server.watcher.on('change', regenerate);
      server.watcher.on('add', regenerate);
      server.watcher.on('unlink', regenerate);
    }
  };
}

// Relative asset URLs support both a domain root and a GitHub Pages project path.
export default defineConfig({base:'./',plugins:[autoGenerate()],build:{rollupOptions:{input:Object.fromEntries(pages.map(p=>[p||'home',resolve(p,'index.html')]))}}});
