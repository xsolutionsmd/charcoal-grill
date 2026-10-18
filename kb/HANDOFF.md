# Handoff

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
