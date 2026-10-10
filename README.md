# Logistics Boys

A single-page, deadpan "enterprise logistics" site. It never says what is moved, where, or how.

## Editing the jokes, names, and photos

- All copy (names, titles, services, stats, FAQs, testimonials, captions) lives in `src/app/site.config.ts`.
- Drop photos into `public/images/` using these filenames: `hero.jpg`, `boy-1.jpg`, `boy-2.jpg`, `gallery-1.jpg` to `gallery-6.jpg`. Until a file exists, a placeholder box is shown.

## Develop

```bash
npm start       # http://localhost:4200
npm test
npm run build   # output in dist/logisticsboys/browser
```

## Deploy

The build prerenders the page, so `dist/logisticsboys/browser` is plain static files.

- **Netlify / Vercel**: build command `npm run build`, publish directory `dist/logisticsboys/browser`.
- **GitHub Pages**: build, then publish the contents of `dist/logisticsboys/browser` (e.g. via a `gh-pages` branch or Actions workflow). For a project page under a sub-path, build with `ng build --base-href /<repo>/`.
- If you instead run the SSR server (`npm run serve:ssr:logisticsboys`) behind a custom domain, add that domain to `security.allowedHosts` in `angular.json`.
