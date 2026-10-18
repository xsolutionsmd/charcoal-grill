# Handoff

## Header logo update — October 18, 2026

Completed product revision: `eb5d5a46e70af20294c9b1a53e64b52ae56f39d7`, reviewed live on branch `abdul-dev` at https://charcoal-grill-abdul-dev.xsolutionsmd.com/. This update authorizes only Abdul's preview; production and Derek's branch/environment were not changed by it. Later documentation-only commits retain this reviewed product when application/runtime source parity is verified; they do not constitute a new product change.

The official green/red logo replaces the centered header text and preserves the exact original tagline **It still tastes so good!** beneath Grill. The anniversary 35/YEARS/Est.1990 artwork is removed. Header and all six favicon declarations (five pages plus 404) use the transparent `charcoal-grill-logo-tagline.png`; the placeholder SVG is removed. Desktop/mobile headers are 80/74px, with logo dimensions 152×68/128×58px. Source and transformation are recorded in [media.md](media.md). The accepted page layout and menu content are preserved.

Both hosted workflows passed for the reviewed product revision. The independent final live recheck passed seven cases with no actionable findings: exact tagline/transparency/no anniversary, desktop/mobile/narrow containment at 1440/390/320px, menu animation and Escape/focus behavior, keyboard home navigation, and all six icon declarations with decoded live PNG/hash identity. Five-route/eight-asset/health/revision/404 smoke also passed. See [validation](../docs/VALIDATION.md).

Limit: native browser tab-strip pixels were inaccessible. Favicon declarations, resource delivery, decoding and hash were verified; native icon appearance remains unverified. Earlier header-only `658a1a1` and favicon-only `3015497` releases are superseded by the reviewed tagline revision above. No product fixes remain from this scoped review; coordinator acceptance and private delivery-receipt reconciliation are separate from product validation.

## Existing structural site — historical baseline

Charcoal Grill has a reference-led, static multipage website with Home, Menu, Catering, About and Visit at separate URLs. It uses all five approved business photos, a restrained Marcellus/Manrope type system and green/red brand cues from its packaging. The homepage, centered menu paper and editorial pages follow the inspected Hawksmoor structure.

- Production: https://charcoal-grill.xsolutionsmd.com/
- Derek preview: https://charcoal-grill-derek-dev.xsolutionsmd.com/
- Abdul preview: https://charcoal-grill-abdul-dev.xsolutionsmd.com/
- Repository and Actions: https://github.com/xsolutionsmd/charcoal-grill/actions

The structural implementation was reviewed live by Sol on d335271. Astra refined the mobile hero crop, shortened the menu opening, reduced secondary headings and removed the editorial-photo inset. Sol rechecked live e060d69c7f3a5a8c500256611141852afa5c1622 at desktop/mobile/narrow widths, exercised applicable customer interactions and found no remaining actionable site issue. See [validation](../docs/VALIDATION.md), [template blueprint](template-blueprint.md), [design brief](design-brief.md), [features](features.md) and [runtime contract](../docs/API.md).

Menu categories have shareable query URLs with refresh/history support. The official ChowNow integration opens the real restaurant on desktop/mobile; the provider owns availability, cart and payment. Phone catering, directions, FAQ and gift-balance destinations are real. No local inquiry form, checkout or account backend exists.

First direct Oracle publication preceded GitHub setup. Main and both personal preview branches/environments now use the normal protected-PR/Actions release route. Compare each live /version.json with its branch/release before future changes; exact final deployment revisions, image receipts, Slack links and private cleanup evidence are maintained in the companion runs folder. Do not infer a new deployment from a source-only change.

Timing is explicit: Claude built the populated structural frontend from Astra's inspected captures/brief; Sol's subsequently required reconstruction pass was browser-only because T3 exposed no compatible REA CDP endpoint. Later workflow role changes do not retroactively change authorship. No REA analysis or pre-build Sol reconstruction is claimed.

Remaining inputs/limits: restaurant confirmation of current prices, holiday hours and catering terms before official launch; bounded social collection; provider checkout/payment and real gift-balance lookup untested. Square's balance page displayed a reCAPTCHA quota warning during review; its effect on a lookup is unknown. Physical-device and reduced-motion runtime testing were not available. Existing chargrill.com is unchanged. Original media/provenance and verified asset-delivery receipts stay private; all five selected web copies are rendered publicly.
