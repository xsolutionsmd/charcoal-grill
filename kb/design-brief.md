# Design brief


## Visitor job and primary action
Visitors need to see the food, understand the menu, call to order, arrange catering and find the restaurant.

## Content plan
Home / Menu / Catering / About / Visit, each a distinct page URL. Use the official menu facts and working external integrations. No invented story.

## Template site
<!-- xs:template -->
<!-- Chosen premium same-industry website: URL, why it won, runners-up with URLs,
traits adopted (structure, section order, navigation, type scale, spacing, motion),
and which collected media fills each role (hero video, wide shots, portraits, menu photos...). -->

2026-10-17 speed-first build: no premium template was inspected. The one bounded Stitch
attempt (project 16838008763735468507) timed out with no screen and was not retried. The
initial frontend therefore follows the direction below; template selection is still open.

## Visual direction
2026-10-17 initial frontend (Claude), photo-free by default:
- Concept: neighborhood pit-beef signage meets an editorial menu board. Charcoal `#171513`,
  cream `#f3ebdd`/paper `#faf5ec`, signage red `#c42b1c` (`#ff6a4d` on dark).
- Type: Anton (condensed uppercase display), Fraunces italic (red accent lines), Public Sans
  (body). Loaded from Google Fonts and allowlisted in `app/xs-check.json`.
- Composition: a large headline with a dark "From the pit" board that shows real published
  prices (no photo needed); rule-separated info strip; typographic category index; dark
  catering band; inner pages share a headline hero. No cards, ordinals or counters.
- Menu: rendered at build time from `app/menu-data.json` with a sticky, scrollable section bar
  that highlights the section in view. Prices are shown as label + amount pairs.
- Motion: one short entrance rise on headings, plus hover underline and arrow nudges. No looping
  motion. All of it is disabled under reduced motion.
- Photos: `SHOW_PHOTOS` in `app/vite.config.js` stays false until reuse is cleared. Slots
  are ready for the official-site pit beef meal, Caesar salads and wings shots. The fried
  dough image was rejected because it looks like stock photography.

## Accepted decisions and corrections
2026-10-17: speed first; distinct primary page URLs; no decorative numbering; authentic imagery only when cleared. Sol rendered visual review follows first live + GitHub setup, then Astra repairs.

## X Solutions standing design rules

- Thoughtful, distinctive, professional and clean: strong typography, authentic
  photography, smooth restrained motion, enjoyable interaction; necessary copy only.
- No decorative numbering: no section ordinals, numbered badges, photo prefixes or
  counters such as 01 / 02. Factual numbers (prices, phone, dates) are fine.
- Choose photos for composition, quality, real work shown, variety and recency across
  the whole history, not just the newest posts. Never present generated or competitor
  work as the client's.
- Check every form control against its containing card (including padding) on narrow
  phones, with enlarged text and focus states; page-level overflow checks are not enough.
- Native inputs, keyboard access, visible focus, reduced-motion support and a pause
  control for ongoing decorative movement.
- Consistent SVG arrows/icons (no text glyphs or emoji arrows). No visitor-facing demo,
  preview or "functionality" banners and no repeated disclaimers.
- Optimise without degrading the experience: right-sized media, lazy loading, no
  needless browser work.
