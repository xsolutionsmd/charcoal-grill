# Features
Build type: landing, static multipage restaurant site with external integrations.
Routes: /, /menu/, /catering/, /about/, /visit/. All primary navigation opens separate URLs.
Integrate: official ChowNow restaurant/location link, real phone, Google Maps directions, official contact/employment destination, Square gift-card balance check. Gift cards purchased in-store. These are outbound integrations, not locally implemented transaction flows.
Build: no transactional backend, cart, reservation system, email form or account system.
Acceptance: each page direct-loads and refreshes; nav, active state, mobile menu and back/forward work; phone/maps/gift links match official sources; desktop/mobile have no obvious overflow, broken images or awkward card controls. Noindex everywhere on this host.

The scope above was selected before the corrective reference search. Component-to-reference evidence is in the design brief. The reference does not introduce additional functionality. All five selected real business images are used on the actual pages.

Integration observation, October 17, 2026: ChowNow displayed the matching Parkville location, address, phone and pickup hours. At approximately 8:45pm EDT, after its published pickup hours, it displayed online ordering unavailable. This establishes the destination and visible fallback state, not a working checkout or a permanent outage. The Menu page explicitly supports calling when online ordering is unavailable. Square rendered the matching Charcoal Grill balance form with card number, PIN, no-PIN option and disabled empty-state submission. No card data, order, payment or inquiry was submitted.
