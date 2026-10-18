# Design brief

## Visitor job and primary action
See the menu, order through the existing restaurant provider, arrange catering by phone, and find the Parkville restaurant. Home / Menu / Catering / About / Visit remain distinct URLs.

## Template site
Selected reference: https://thehawksmoor.com/ and https://thehawksmoor.com/menus/ — inspected rendered desktop and mobile on 2026-10-17. Its restrained typographic scale, compact navigation, single primary hero message with two actions, ruled utility strip, and orderly menu/group-dining content fit this restaurant’s menu/order/catering visitor tasks. Adapt its visual structure and hierarchy to one neighborhood restaurant; retain Charcoal Grill’s sourced facts and real integrations.

Runners-up: https://www.bludsosbbq.com/ and https://www.lewisbarbecue.com/ were researched and rendered on desktop and mobile. They match barbecue and catering closely, but their decorative/western or condensed typography repeats the rejected direction. This was a bounded comparison of page composition, navigation and primary actions, not exhaustive testing of rejected sites. Taor and Urban Webflow demos were also inspected but not selected as the primary restaurant reference.

Selection owner and timing: Astra performed this search and fit review after initial publication and after the initial frontend had been rejected. It did not happen before the first Claude implementation. The existing pages/integrations were retained and only the necessary reference-driven visual corrections were made.

Fit against the three required inputs:
- **Company facts:** one Parkville pit-beef/barbecue restaurant serving sandwiches, ribs, wings, sides and catering. Local customers need menu/prices, order/call, catering information and directions. Hawksmoor is a more upscale adjacent meat-focused restaurant reference; adapt its clarity and hierarchy, not its multi-location scale, awards, fine-dining positioning or reservation business model.
- **Actual assets:** all five collected official-site food photos are used. The 1203x609 pit-beef meal anchors the homepage hero, the near-square sandwich and 1920x1179 fried dough accompany their Menu categories, the 1920x1282 chicken salads support Catering, and the 1283x1600 wings accompany About. Branded packaging, warm food colors, charcoal grilling and straightforward carryout service inform the theme. Use this real food imagery within the reference's restrained structure, without importing its venue-video or fine-dining imagery. Selected production copies live in app/public/assets; originals and provenance remain private.
- **Capability scope:** static multipage presentation with verified integrations, not a custom transactional app. Preserve the real ChowNow restaurant order link, phone-based catering, Google Maps directions and Square balance lookup. Adopt the reference's prominent action pair and menu/group-information hierarchy. Do not add its booking, location selector, newsletter, checkout or account features. The actual ChowNow and Square destinations were rendered and matched to the company; no transaction was submitted.

Adopted traits: centered desktop wordmark with compact horizontal navigation; a dark hero combining the actual pit-beef photograph with a moderate heading, short description and order/menu actions; a light information strip; quieter menu highlights outside the hero; consistent heading scale and generous readable line heights; thin separators; restrained motion. One Manrope family supplies editable, normal-width typography without copying the reference’s proprietary fonts or code. Mobile uses a compact wordmark/disclosure, stacked actions and a wide food photograph. The existing readable 43-item menu remains HTML, with horizontal category navigation and supporting category photos.

No reference branding, text, photos, code, awards or restaurant claims are copied. No template purchase or licensed source acquisition is claimed. Business asset use is authorized; the previous photo hold is superseded. Actual local images are required in the rendered pages, not merely in the private library. No competitor imagery is used.

### Component and flow mapping

The pre-existing feature decision is a static restaurant presentation with outbound integrations. The following October 17 corrective fit check records what was actually observed; it is not a claim of a pre-build reference packet.

| Selected component | Inspected reference and scope | Adaptation |
| --- | --- | --- |
| Homepage, shared navigation and menu entry | Hawksmoor home and /menus/, desktop and mobile: compact centered brand, clear menu destination, primary/secondary action hierarchy, large food/venue media, ruled utility sections | Five separate Charcoal pages, Order/Menu action pair, one-location information and actual meal photograph. No booking or location-selector implementation. |
| Readable menu | Hawksmoor /menus/ supplies orderly menu navigation and hierarchy; chargrill.com/our-menu supplies the restaurant's actual items/prices | Existing HTML categories and 43 menu items, with sandwich and fried-dough photos. No claim that Hawksmoor demonstrates our exact category-scrolling implementation. |
| Catering information and telephone action | Official chargrill.com/team supplies the catering offering and contact intent; existing restaurant telephone is verified against ChowNow store information | Catering details, real chicken-salad image and direct call action. No unconnected inquiry form or booking flow. |
| Order online | https://order.chownow.com/order/5108/locations/6625 is the actual selected integration, inspected through its restaurant/store-information state | Keep the exact external restaurant link and a visible phone fallback. The after-hours check showed ordering unavailable; checkout was not verified or recreated. Hawksmoor is not an ordering-flow reference. |
| Gift-card balance | https://squareup.com/gift/9K1R5WDH8FYKR/check-balance rendered Charcoal Grill's card/PIN/no-PIN form at mobile size | Direct external balance link. No local card collection or gift-card purchase flow. |
| Visit/contact | Official business contact details and ChowNow Hours & Map identify the same address/phone | Published restaurant hours, telephone and address-based Google Maps destination. No reservation system. |

### Concrete visual blueprint and comparison

Hawksmoor was selected for observed composition, not its reputation: a compact light header with a centered wordmark, confident hero hierarchy, paired actions, restrained borders and orderly lower sections. The inspected desktop 1440x900 and mobile 390x844 captures are retained privately. The corrected live build was compared at those same CSS viewports after the photos were added.

- **Grid and spacing:** align the desktop header, hero copy and utility content to one centered content width; maintain generous hero breathing room, consistent gutters and thin section dividers. The current hero uses two equal columns and the utility strip three columns; mobile uses 20px side gutters and stacked content.
- **Type and actions:** one normal-width Manrope family, moderate heading scale, readable line height and consistent button height. Preserve the reference's clear primary/secondary action relationship; use Charcoal's warm red instead of the reference's gold. Keep visible focus, active navigation and mobile disclosure states.
- **Media:** the reference's full-width venue video is intentionally adapted to a 4:3 desktop meal crop and 2:1 mobile meal crop because the actual source is a 1203x609 carryout photograph. This preserves readable copy and shows branded packaging without inventing a venue/video. Menu category images remain subordinate to item text; Catering uses the real salad bowls; About preserves the wings portrait.
- **Mobile:** compact header, stacked full-width actions, separate food image and useful business information. Retain complete hours rows and separated drink-price groups from Sol's review. No decorative numbering, competing font families or imported competitor assets.

The earlier Sol live review covered all five pages and mobile navigation; Astra resolved its hours and price-spacing findings. Astra's subsequent photo/reference comparison found no clipping, image-load failures or unexplained hierarchy drift in the changed layouts. This is a bounded correction of the existing design, not a new Claude implementation or a claim that Sol reviewed the later-added photos.

## Accepted corrections
The original condensed Anton headings and oversized Fraunces italic accents were rejected. The required researched template step must remain part of a fast workflow. Both are corrected in the current source; do not restore that font pairing or claim the initial build was template-based.

Initial history: Claude built the frontend. A bounded Stitch attempt (project 16838008763735468507) timed out without a usable screen. Initial Oracle launch preceded GitHub setup by explicit instruction. After launch and GitHub setup, Sol inspected all pages live; Astra owns post-review visual corrections. No second Stitch cycle is needed for this correction.

## Standing rules
- Professional, clean composition with consistent type, necessary copy and subtle motion.
- No decorative numbering, numbered badges or counters.
- Distinct primary page URLs, active navigation, keyboard access, visible focus and reduced-motion support.
- Check narrow controls inside their cards; the Visit hours card stacks complete day/time rows below 480px.
- Use the authorized business photos and assets in the rendered site; no invented restaurant photography or claims.
- SVG arrows/icons; no visitor-facing demo banners or repeated disclaimers. No local unconnected forms.
