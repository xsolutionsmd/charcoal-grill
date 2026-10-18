# Runtime and integration contract

This is a static multipage restaurant site. It has no custom ordering, payment, account, reservation or message API. The current contract is recorded after the structural rebuild; the earlier Astra brief already supplied the verified destinations and interaction hooks. Sol's newly required reconstruction pass is recorded separately in `kb/template-blueprint.md`, without claiming it preceded this implementation.

| Surface | Contract and state | Failure/fallback |
|---|---|---|
| `GET /`, `/menu/`, `/catering/`, `/about/`, `/visit/` | HTTP 200 HTML; separate navigation and active-page state; noindex demo. | Unknown paths return a useful HTTP 404 page. |
| `GET /health` | Runtime health endpoint; HTTP 200 plain text `ok`. | Deployment smoke checks fail on an unhealthy response. |
| `GET /version.json` | JSON `{ "revision": "<source commit>" }`, no-store. | Deployment requires an exact expected revision. |
| Menu data | Build-time `app/menu-data.json`: categories contain names and item arrays; each item has name, optional description, and the sourced price string. 44 entries across six categories; no runtime database. | HTML includes the full menu without JavaScript. Restaurant/provider confirms current availability. |
| `/menu/?category=<slug>` | Slugs: `pit-sandwiches`, `fries-and-sides`, `wings-and-ribs`, `salads-and-starters`, `junior-meals`, `desserts-and-drinks`. Selection changes visibility, active link, title and live status; pushes history; popstate restores selection. | Missing/unknown category shows all. Modified clicks retain normal link behavior. |
| ChowNow | Exact href `https://order.chownow.com/order/5108/locations/6625`. Official desktop widget from `cf.chownowcdn.com`, company 5108, restaurant 6625. Under 800px or with an iPhone/iPad/iPod/Android identity, ordering links navigate directly to the provider using their native target. Mobile has no intermediate popup or embedded checkout. | Unsupported/uninitialized desktop SDKs retain normal links. Modified clicks keep native behavior. The provider owns hours, pickup times, options, basket, errors, login and payment; this site stores no customer/payment data. |
| Overlay accessibility | Named dialog and iframe, keyboard-operable close control, background inert while open, Escape in host document closes, opener focus restored. | Cross-origin frame internals remain provider-owned; host cannot intercept its internal keyboard events. |
| Catering/call | `tel:+14106689212`; no form and no transmission by the site. | User contacts the actual restaurant to confirm terms. |
| Directions | Google Maps search for Charcoal Grill, 8535 Old Harford Rd, Parkville MD 21234. | External service owns route selection and location permissions. |
| Gift balance | `https://squareup.com/gift/9K1R5WDH8FYKR/check-balance`; purchases are in-store. | Square owns card/PIN validation and result states. No card information entered during checks. |
| FAQ/navigation | Native disclosures; mobile menu supports open/close, selection, Escape, keyboard focus and resize. | No backend state or submission. |

Checked on live preview revision `d335271b5860ecfb85a53864be2ea703c5886b95`: all five routes, eight local assets, link targets, health/revision and 404 passed; desktop Order opened the matching provider menu, Escape closed with focus/background restored; mobile Order opened the correct provider URL. Category direct load, reload and history passed locally. No real transaction or message was submitted. Full provider checkout success remains untested by design.
