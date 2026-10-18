# Validation

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

## Derek menu-photo expansion ? October 18, 2026

Astra prepared 22 illustrated entries from verified source matches, including two captioned Yelp originals and SVG viewport crops of identifiable dishes. The existing 44 names, prices and descriptions compare equal to revision 5f76655 after removing image metadata. `npm --prefix app run check` passes (30 built files). Desktop 1440?900 and mobile 390?844 crop/layout inspection passed, with no page overflow. Local HTTP smoke coverage now includes SVG image references. These are local checks; the next deployed revision and independent live recheck are recorded separately in the private release receipt. Unpictured items remain explicit in kb/menu-photos.md.
