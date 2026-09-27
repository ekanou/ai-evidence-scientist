// @ts-check
import { defineConfig } from 'astro/config';
import placeholderCheck from './src/integrations/placeholder-check.ts';

// GitHub Pages: the deploy workflow sets SITE (e.g. https://owner.github.io)
// and BASE_PATH (e.g. /repo-name). Locally both default to the root.
const site = process.env.SITE || undefined;
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  output: 'static',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [placeholderCheck()],
});
