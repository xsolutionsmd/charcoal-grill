# Validation

## Mobile direct-link correction - October 18, 2026

The physical iPhone test of the popup experiment failed: ChowNow displayed its blocked-cookie embedded-page fallback and required a new tab. The owner then approved direct links for mobile only. Mobile ordering now follows the existing restaurant URL immediately, including iPhone/Android landscape, without a host dialog. The unused dialog module, styles and postMessage resource exception are removed. Desktop retains the official popup and its accessibility enhancements. The historical experiment below is superseded.

Validation for the final revision and deployment to Derek's preview is recorded in the private release checkpoint. Production and Abdul remain outside this change.


## Requested mobile popup - October 18, 2026

The owner chose a popup on Derek's preview. This supersedes the native-link-only candidate below. The custom native dialog embeds the existing ChowNow restaurant, preserving the provider's menu/cart/checkout ownership. The official [integration documentation](https://get.chownow.com/restaurant-support/how-to-perform-a-basic-integration/) explicitly sends phones to a new page, so the mobile dialog is a site wrapper, not an official mobile-widget capability. Desktop still uses the official widget.

Local Chromium checks on the actual Vite application passed: mobile header/hero open, real provider pickup selector/menu, menu scrolling, item required-option validation, Regular Turkey/No Bread added to synthetic cart, checkout review reached without entering customer/payment data or submitting an order; the test item was removed afterward. Close and host Escape restore opener focus/body overflow. Reopening retains the provider frame. Host dialog and header controls fit 390x844 and 320x700; synthetic iPhone Chrome identity opens the dialog at 844x390. The provider's own 320px item action row is cramped, while the site's controls fit. Cross-origin provider layout/keyboard events remain provider-owned.

`npm run check` passes (39 files). The exact ChowNow origin is explicitly allowed in `xs-check.json` for the provider initialization postMessage. No physical iPhone/WebKit, real payment, wallet or completed transaction acceptance is claimed. Hosted CI, exact-version HTTPS checks and live mobile/desktop acceptance are required before claiming the preview deployed; their final receipt is kept in the private business checkpoint, avoiding a documentation-only re-release.

## Mobile ordering regression - October 18, 2026 (local, unpublished)

Baseline production `/version.json`: `ab953abb50c21be7e74325c53ee6745ba19e5708`. Inspected live provider script `https://cf.chownowcdn.com/latest/static/integrations/ordering-modal.min.js`, version 2.3.0. Its browser support check matches iOS Chrome's Safari token but requires Version/, returns false and installs `function(){}` as `ChowNow.orderOnline`. The previous site capture handler then prevents default navigation although there is no provider click handler/container.

Browser regression used isolated same-origin iframe documents, the actual original/fixed site source and live provider script. iOS identity was explicitly overridden to `Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/130.0.6723.90 Mobile/15E148 Safari/604.1`; this is a synthetic identity in Chromium, not physical WebKit testing.

- Original, 390px: empty provider function, no container, click default prevented, no popup. Reproduces the reported dead button.
- Fixed, 390px: same empty provider function, native click not prevented, correct restaurant href retained.
- Fixed, 844px landscape: same unsupported provider, native click not prevented, correct restaurant href retained.
- Fixed, 1280px desktop Chrome: initialized provider container, click default prevented as intended, ordering overlay becomes visible.
- `npm run check`: PASS, Vite production build and content/resource checks (39 built files). Shared integration is imported by the multipage main entry.

The fix restores hrefs and bypasses vendor event interception for phone widths or uninitialized integrations. Supported desktop overlay behavior is retained. No published environment was modified, no physical iPhone test or checkout/payment acceptance is claimed. Next validation: deployed preview and actual iPhone, followed by authorized production promotion.

## Combined production release - October 18, 2026

The owner authorized moving both personal branches to production. This supersedes the preview-only restrictions in the historical records below. Derek's 32-of-44 menu-photo update was released in production revision `782731bcea502273e59f6b872ae8e63059772ffd` through PR 4; exact-revision five-route, 33-asset, health, noindex and 404 checks passed.

The combined candidate preserves those menu photos and adds Abdul's independently reviewed official header/favicon logo from `10385d95a75fcf30928dc18975d469e9c975ce61` (reviewed product `eb5d5a4`). It retains **It still tastes so good!**, removes the anniversary block, and preserves all 44 menu names/prices/descriptions. Only the two historical handoff/validation records conflicted; both records are retained below. Application changes merged without conflict.

Combined candidate checks, protected PR promotion and final live desktop/mobile review must be verified for the actual released revision. Consult GitHub Actions and each environment's `/version.json`; private release receipts retain exact revision/digest and final review evidence. Prior preview-only/current-version statements below describe their dated releases, not the current authorization. No new asset collection, site redesign or external checkout test is required for this promotion.

## Header logo — October 18, 2026

Reviewed product revision: `eb5d5a46e70af20294c9b1a53e64b52ae56f39d7`, branch `abdul-dev`, https://charcoal-grill-abdul-dev.xsolutionsmd.com/. Application CI [39102184406](https://github.com/xsolutionsmd/charcoal-grill/actions/runs/39102184406) and Oracle preview release [39102184355](https://github.com/xsolutionsmd/charcoal-grill/actions/runs/39102184355) passed. Local Vite build/content checks and public scan passed before publication. Live smoke passed five routes, eight local assets, external link declarations, noindex, health, exact revision and HTTP404 behavior.

The independent final live recheck passed all seven recorded cases, with no actionable findings:

- Exact **It still tastes so good!** is visible beneath Grill; no 35/YEARS/Est.1990 artwork. The transparent live PNG decodes at 1882×836; SHA256 `dec9e09685540436c358cfd63452858667621cea188cd991ed30b620afd36f4a` matches the checkout asset.
- At 1440×1000, 390×844 and 320×700, the 80/74px header contains the complete 152×68/128×58px logo and separate Order/Menu controls without clipping, overlap or horizontal overflow. The open narrow menu's controls fit its panel; its animation settles below the 74px header.
- Menu opening focuses Home and makes background content inert. Escape closes and restores visible toggle focus; Enter reopening and forward/backward focus wrapping pass. About navigation closes the menu; keyboard focus on the logo is visible and Enter returns home.
- All five pages and the 404 document declare `image/png` favicon and header resources at `/assets/charcoal-grill-logo-tagline.png`, with no old SVG declaration; the live resource loads and decodes.

Native tab-strip pixels were inaccessible, so native favicon appearance is unverified. CSS viewport checks do not certify physical devices. Reduced-motion runtime emulation was unavailable. This focused recheck reuses the earlier broader navigation evidence and makes no new checkout, payment or full-audit claim. Earlier header-only `658a1a1` and favicon-only `3015497` releases are historical; the tagline revision above supersedes them.

Any later documentation-only release must verify its own branch/live revision and source parity against this reviewed product. Documentation changes do not change the product or imply another visual review. Exact final documentation SHA, Actions and parity evidence remain in the private update handoff.

## Current Derek menu-photo release - October 18, 2026

The accepted application revision is `9465fbb1be1bb17afbeecbdb07374cfea7662b39` on `derek-dev`: **32/44 entries illustrated, 45 originals in the private library, 12 photo gaps**. All 44 menu names, prices and descriptions compare equal to `5f76655604e7b3052e46233f2abf5912d457c1de` after excluding image metadata. The 39-file production build, public-content scan, original/package hash checks and five-route/33-local-asset/health/version/noindex/HTTP404/integration-link smoke checks pass. [Oracle release](https://github.com/xsolutionsmd/charcoal-grill/actions/runs/39098144691) and [application CI](https://github.com/xsolutionsmd/charcoal-grill/actions/runs/39098144709) succeeded at that application revision.

Astra accepted Sol's independent full live review at `21bef5ec143d46d34354a07767a71e00018f05d1`: all five routes, 29 illustrated entries/six categories, 1440px desktop and 390/360px phone views, category URL/history, navigation/focus, FAQ, ordering handoff and sampled transitions passed. The subsequent focused live recheck at `9465fbb` passed the three new associations, 32/44 count, image decoding, row-level containment, category/history and mobile navigation at the same widths. Eight selected screenshots are retained privately. No actionable fixes remain; the final documentation commit changes no application/runtime source. Final environment SHA, Actions and HTTP convergence evidence are recorded privately alongside the separately retained reviewed application SHA.

The ham image is an official historical special, with current toppings/recipe unconfirmed. The catering crop is a medium-confidence likely-pork inference used for Pork BBQ and the junior BBQ entry; chicken remains a competing interpretation and the caption does not identify the protein. It does not establish sandwich, included sides or junior portion. See [provenance and all 12 gaps](../kb/menu-photos.md). No substitute image is used to conceal a missing dish photo.

Provider limit: Escape inside the cross-origin ChowNow iframe is not forwarded to the host; visible Close and host-focused Escape work. Cart/checkout/payment and real Square lookup remain unverified. No real orders, calls, customer messages or payments were made. Resized Chromium does not certify physical devices, Safari or screen-reader behavior. Source collection remains bounded. Main/production and Abdul remain `6a6964b5f35b3c6517df452be2dde460042e4fdc`; only Derek's environment receives this expansion. Final media/Slack read-back and cleanup receipts stay private. Earlier records below describe their historical revisions, not current pending work.

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

## Earlier local menu-photo checks - October 18, 2026

Astra prepared 22 illustrated entries from verified source matches, including two captioned Yelp originals and SVG viewport crops of identifiable dishes. The existing 44 names, prices and descriptions compare equal to revision 5f76655 after removing image metadata. `npm --prefix app run check` passes (30 built files). Desktop 1440?900 and mobile 390?844 crop/layout inspection passed, with no page overflow. Local HTTP smoke coverage now includes SVG image references. These are local checks; the next deployed revision and independent live recheck are recorded separately in the private release receipt. Unpictured items remain explicit in kb/menu-photos.md.

The subsequent social/review batch adds seven inspected source photographs for Chesapeake chicken, poppers, half chicken, Italian sausage, fried pickles, fried cheesecake and soft drinks. The source now illustrates 29/44 entries. Build checks pass (37 files); targeted 390px crops were inspected. Full-size originals remain unchanged, with SVG viewport crops in markup. Exact sourcing and variant limitations are in kb/menu-photos.md. Independent live verification is pending this revision's deployment.

The next source change reaches 32/44 illustrated entries using two additional business originals and three menu associations. Historical ham preparation and inferred pulled-pork identity are explicitly documented. The 39-file build passed; desktop 1440px and mobile 390px crop checks passed without overflow. Source menu facts remain unchanged. This paragraph records local checks, not a completed live recheck.
