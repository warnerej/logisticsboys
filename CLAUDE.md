# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` (`ng serve`) — dev server at http://localhost:4200, development configuration
- `npm run build` (`ng build`) — production build to `dist/logisticsboys/` (browser + server bundles)
- `npm run watch` — development-configuration build in watch mode
- `npm test` (`ng test`) — unit tests via Vitest (jsdom) through `@angular/build:unit-test`
- Single test file: `ng test --include src/app/app.spec.ts`
- `npm run serve:ssr:logisticsboys` — run the built SSR Express server (port `PORT` or 4000); requires a prior `npm run build`
- Formatting: Prettier (`printWidth` 100, single quotes, Angular parser for `*.html`). No lint script is configured.

## Architecture

Angular 22 standalone-component app (no NgModules) with server-side rendering, styled with Tailwind CSS v4 (via `.postcssrc.json` and `src/styles.css`). Currently a freshly scaffolded app: `routes` is empty and only the root `App` component exists.

SSR setup spans several files:
- `src/main.ts` bootstraps the browser app with `app.config.ts` (router + client hydration).
- `src/main.server.ts` bootstraps the server app with `app.config.server.ts`, which merges `app.config.ts` with `provideServerRendering(withRoutes(serverRoutes))`. Shared providers go in `app.config.ts`; server-only ones in `app.config.server.ts`.
- `src/app/app.routes.server.ts` sets render mode per route; currently `**` is `RenderMode.Prerender` (all routes are prerendered at build time — routes with dynamic params will need `getPrerenderParams` or a different render mode).
- `src/server.ts` is the Express 5 server (configured as `ssr.entry` in `angular.json`): serves `dist/.../browser` statically, then hands everything else to `AngularNodeAppEngine`. Custom API endpoints should be added here before the Angular catch-all handler. It also exports `reqHandler` for the CLI dev server.
- `angular.json` sets `security.allowedHosts: []`; hosts other than localhost must be added there for SSR to accept them.
- Production build budgets: initial bundle 500kB warn / 1MB error; component styles 4kB warn / 8kB error.
