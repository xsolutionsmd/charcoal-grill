# Charcoal Grill website
A static multipage restaurant website with Home, Menu, Catering, About and Visit pages.

## Develop
Read AGENTS.md and kb/HANDOFF.md. Run `cd app`, `npm ci`, then `npm run dev -- --port 4187`. Run `npm run check` for the build and sourced-content checks. The container workflow is `python scripts/app.py check`.

Menu facts are in app/menu-data.json, with source URL and observation date. Current prices and availability belong to the restaurant. Online ordering goes to its existing ChowNow store; gift-card balance checks go to Square. There is no local checkout or inquiry backend.

## Release
Production: https://charcoal-grill.xsolutionsmd.com
Derek: https://charcoal-grill-derek-dev.xsolutionsmd.com
Abdul: https://charcoal-grill-abdul-dev.xsolutionsmd.com

Push to a personal preview branch to deploy that environment only. Promote approved changes through a PR into main. Each environment uses a separate image, updater and service. See docs/ORACLE_DEPLOYMENT.md. All current environments are noindex.
