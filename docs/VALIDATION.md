# Validation

## Header logo — October 18, 2026

Reviewed product revision: `eb5d5a46e70af20294c9b1a53e64b52ae56f39d7`, branch `abdul-dev`, https://charcoal-grill-abdul-dev.xsolutionsmd.com/. Application CI [39102184406](https://github.com/xsolutionsmd/charcoal-grill/actions/runs/39102184406) and Oracle preview release [39102184355](https://github.com/xsolutionsmd/charcoal-grill/actions/runs/39102184355) passed. Local Vite build/content checks and public scan passed before publication. Live smoke passed five routes, eight local assets, external link declarations, noindex, health, exact revision and HTTP404 behavior.

The independent final live recheck passed all seven recorded cases, with no actionable findings:

- Exact **It still tastes so good!** is visible beneath Grill; no 35/YEARS/Est.1990 artwork. The transparent live PNG decodes at 1882×836; SHA256 `dec9e09685540436c358cfd63452858667621cea188cd991ed30b620afd36f4a` matches the checkout asset.
- At 1440×1000, 390×844 and 320×700, the 80/74px header contains the complete 152×68/128×58px logo and separate Order/Menu controls without clipping, overlap or horizontal overflow. The open narrow menu's controls fit its panel; its animation settles below the 74px header.
- Menu opening focuses Home and makes background content inert. Escape closes and restores visible toggle focus; Enter reopening and forward/backward focus wrapping pass. About navigation closes the menu; keyboard focus on the logo is visible and Enter returns home.
- All five pages and the 404 document declare `image/png` favicon and header resources at `/assets/charcoal-grill-logo-tagline.png`, with no old SVG declaration; the live resource loads and decodes.

Native tab-strip pixels were inaccessible, so native favicon appearance is unverified. CSS viewport checks do not certify physical devices. Reduced-motion runtime emulation was unavailable. This focused recheck reuses the earlier broader navigation evidence and makes no new checkout, payment or full-audit claim. Earlier header-only `658a1a1` and favicon-only `3015497` releases are historical; the tagline revision above supersedes them.

Any later documentation-only release must verify its own branch/live revision and source parity against this reviewed product. Documentation changes do not change the product or imply another visual review. Exact final documentation SHA, Actions and parity evidence remain in the private update handoff.

## Current structural release

- Vite production build/source checks and public-content scan pass. Required GitHub checks exercise the deployable container, health, exact revision, five routes, eight local assets, verified external targets, noindex and HTTP404 behavior.
- Sol reviewed live d335271 on Home/Menu/Catering/About/Visit at1440x900 and390x844, with360px hours/menu checks. It compared actual reference captures and found no must-fix visual issue.
- Astra accepted four refinements: mobile hero emphasizes food, menu opening/art are shorter, secondary headings match the reference scale, and the editorial sandwich fills its half-column.
- Sol's follow-up verified live e060d69c7f3a5a8c500256611141852afa5c1622 and all four corrections. No actionable visual/interaction regression remained. All44 unchanged entries and all five approved photos remain present, with no overflow in checked widths.
- Live interactions checked: separate routes and active states; all six categories, Full menu and unknown-category fallback; direct query/reload/back/forward; food-discovery links; mobile menu pointer/keyboard/repeat/Escape/selection/resize and focus wrapping; all four FAQs; sticky navigation; hover/focus/active feedback. A bounded transition sample showed no observed jank, flicker or awkward delay.
- Official HTTPS ChowNow desktop overlay and mobile provider handoff repeatedly reached company5108/location6625. Close/Enter/host Escape restored focus and background interaction. Correct restaurant/menu and scheduled pickup chooser rendered. No order, payment, message, personal data or real call was submitted.
- Directions, official contact/jobs, cited press and Square balance destinations rendered. Square's empty form disabled submission and displayed a reCAPTCHA quota warning; real lookup outcome remains unknown. No card/PIN entered.

## Evidence and limits

Exact release revisions, Actions/image receipts, screenshots and final delivery receipts are retained in the private companion workspace. Main promotion uses the reviewed source plus documentation/status updates; source documentation alone is not evidence of a deployment. Historical first release was d12c3bef; subsequent rejected designs are superseded by the structural review above.

The chosen Hawksmoor reference is documented in kb/template-blueprint.md. Its new reconstruction requirement arrived after the rebuild: supported browser evidence was collected, while REA passive capture was unavailable without a compatible CDP endpoint. The initial bounded Stitch attempt timed out. Do not claim either unavailable tool completed.

T3 inspections use desktop Chrome with CSS viewport changes; no physical-device certification. Reduced-motion runtime preference could not be emulated; provider checkout/payment, card validation and success/error states beyond the selected integration handoff remain untested. Current prices, holiday hours and catering details require restaurant confirmation before official launch. All environments remain noindex demos; chargrill.com was not changed.
