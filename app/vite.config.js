// Static multi-page build. Shared header/footer, the menu and optional photo slots are
// rendered into each page's HTML at build time so every route works without JavaScript.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));
const menu = JSON.parse(readFileSync(resolve(root, 'menu-data.json'), 'utf8'));

export const SITE = {
  order: 'https://order.chownow.com/order/5108/locations/6625',
  phone: 'tel:+14106689212',
  phoneLabel: '410-668-9212',
  maps: 'https://www.google.com/maps/search/?api=1&query=Charcoal%20Grill%208535%20Old%20Harford%20Rd%20Parkville%20MD%2021234',
  giftBalance: 'https://squareup.com/gift/9K1R5WDH8FYKR/check-balance',
  contact: 'https://www.chargrill.com/contact/application',
};

// Photo permission is pending. Keep false until reuse is cleared. To enable, set true and
// add each URL below (all srcset entries) to app/xs-check.json allowedExternalResources,
// or replace them with optimized local files in app/public/.
const SHOW_PHOTOS = false;
const CDN = 'https://irp.cdn-website.com/d0951e0a/dms3rep/multi/opt/';
const PHOTOS = {
  band: {
    alt: 'Pit beef sandwich with tomato and onion beside a cup of fresh-cut fries and barbecue sauce',
    sizes: '100vw', width: 1203, height: 609,
    srcset: [['BeefValuemeal-640w.jpg', 640], ['BeefValuemeal-960w.jpg', 960], ['BeefValuemeal-1920w.jpg', 1203]],
  },
  catering: {
    alt: 'Grilled chicken Caesar salads packed in carry-out bowls on the kitchen counter',
    sizes: '(min-width: 900px) 45vw, 100vw', width: 1920, height: 1282,
    srcset: [['JPEG+image+6-640w.jpeg', 640], ['JPEG+image+6-960w.jpeg', 960], ['JPEG+image+6-1280w.jpeg', 1280]],
  },
  wings: {
    alt: 'Wings with celery, carrots and ranch on a wooden board',
    sizes: '(min-width: 900px) 40vw, 100vw', width: 1283, height: 1600,
    srcset: [['Wingsonblock4x5-640w.jpg', 640], ['Wingsonblock4x5-960w.jpg', 960], ['Wingsonblock4x5-1920w.jpg', 1283]],
  },
};

const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const slug = value => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const icon = {
  arrow: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  phone: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.6 3.5h2.6l1.5 4-1.9 1.3a11 11 0 0 0 6.4 6.4l1.3-1.9 4 1.5v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  pin: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 21s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21Z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="9.8" r="2.3" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
  bag: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 8h14l-1 12H6L5 8Zm4 0V6.5a3 3 0 0 1 6 0V8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  grate: '<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false"><rect width="40" height="40" rx="10" fill="currentColor"/><path d="M11 25.5 17.5 13M17.5 29 26 13M24 29l5.5-10.5" stroke="#f3ebdd" stroke-width="3.2" stroke-linecap="round"/></svg>',
  menu: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="i-open" d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path class="i-close" d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
};

const NAV = [['/menu/', 'Menu'], ['/catering/', 'Catering'], ['/about/', 'About'], ['/visit/', 'Visit']];
const HOURS = [['Tuesday – Saturday', '11am – 8pm'], ['Sunday', '11am – 7pm'], ['Monday', 'Closed']];

const navLinks = current => NAV.map(([href, label]) =>
  `<li><a href="${href}"${href === current ? ' aria-current="page"' : ''}>${label}</a></li>`).join('');

const header = current => `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header" data-header>
  <div class="wrap header-bar">
    <a class="brand" href="/"${current === '/' ? ' aria-current="page"' : ''}>${icon.grate}<span class="brand-word">Charcoal <em>Grill</em></span></a>
    <nav class="primary-nav" aria-label="Primary"><ul>${navLinks(current)}</ul></nav>
    <div class="header-actions">
      <a class="header-phone" href="${SITE.phone}">${icon.phone}<span>${SITE.phoneLabel}</span></a>
      <a class="btn btn-red btn-sm header-order" href="${SITE.order}">Order online</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle>${icon.menu}<span class="sr-only">Menu</span></button>
    </div>
  </div>
  <div class="mobile-menu" id="mobile-menu" data-mobile-menu hidden>
    <nav class="wrap" aria-label="Mobile">
      <ul class="mobile-links">${current === '/' ? '<li><a href="/" aria-current="page">Home</a></li>' : '<li><a href="/">Home</a></li>'}${navLinks(current)}</ul>
      <div class="mobile-actions">
        <a class="btn btn-red" href="${SITE.order}">${icon.bag}Order online</a>
        <a class="btn btn-line-light" href="${SITE.phone}">${icon.phone}Call ${SITE.phoneLabel}</a>
      </div>
    </nav>
  </div>
</header>`;

const hoursList = cls => `<dl class="${cls}">${HOURS.map(([d, h]) => `<div><dt>${d}</dt><dd>${h}</dd></div>`).join('')}</dl>`;

const footer = () => `
<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <a class="brand brand-light" href="/">${icon.grate}<span class="brand-word">Charcoal <em>Grill</em></span></a>
      <p>Pit sandwiches and barbecue on Old Harford Road.</p>
      <a class="btn btn-red" href="${SITE.order}">${icon.bag}Order online</a>
    </div>
    <div>
      <h2 class="footer-head">Find us</h2>
      <address><a href="${SITE.maps}">8535 Old Harford Road<br>Parkville, MD 21234</a><br><a href="${SITE.phone}">${SITE.phoneLabel}</a></address>
    </div>
    <div>
      <h2 class="footer-head">Hours</h2>
      ${hoursList('hours hours-footer')}
    </div>
    <nav aria-label="Footer">
      <h2 class="footer-head">Explore</h2>
      <ul class="footer-links">${NAV.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join('')}
        <li><a href="${SITE.giftBalance}">Gift card balance</a></li>
        <li><a href="${SITE.contact}">Contact &amp; job applications</a></li>
      </ul>
    </nav>
  </div>
  <div class="wrap footer-base"><p>Charcoal Grill · 8535 Old Harford Road, Parkville, Maryland</p></div>
</footer>`;

// "Regular 10.79 / Colossal 15.99" -> [{label: 'Regular', amount: '10.79'}, ...]
const priceOptions = price => price.split(' / ').map(part => {
  const m = part.trim().match(/^(.*?)\s*(\d+\.\d{2})$/);
  return m ? { label: m[1], amount: m[2] } : { label: part.trim(), amount: '' };
});
const priceHtml = price => `<span class="prices">${priceOptions(price).map(({ label, amount }) =>
  `<span class="price">${label ? `<span class="price-label">${esc(label)}</span>` : ''}${amount ? `<span class="price-amount">$${amount}</span>` : ''}</span>`).join('')}</span>`;

const findItem = name => menu.categories.flatMap(c => c.items).find(i => i.name === name);

const menuNav = () => `<ul class="menu-tabs">${menu.categories.map(c =>
  `<li><a href="#${slug(c.name)}">${esc(c.name)}</a></li>`).join('')}</ul>`;

const menuSections = () => menu.categories.map(c => `
<section class="menu-section" id="${slug(c.name)}" aria-labelledby="${slug(c.name)}-title">
  <h2 class="menu-section-title" id="${slug(c.name)}-title">${esc(c.name)}</h2>
  <ul class="menu-items">${c.items.map(i => `
    <li class="menu-item">
      <div class="menu-item-text"><h3>${esc(i.name)}</h3>${i.description ? `<p>${esc(i.description)}</p>` : ''}</div>
      ${priceHtml(i.price)}
    </li>`).join('')}
  </ul>
</section>`).join('');

const board = names => `<ul class="board-items">${names.map(findItem).filter(Boolean).map(i => `
  <li><span class="board-name">${esc(i.name)}</span>${priceHtml(i.price)}</li>`).join('')}</ul>`;

const CATEGORY_NOTES = {
  'Pit sandwiches': 'Pit beef, ham, turkey, sausage and more',
  'Fries and sides': 'Ocean Fries, potato salad, slaw and beans',
  'Wings and ribs': 'Wings, baby back ribs and half chicken',
  'Salads and starters': 'Caesar salads, soups and fried starters',
  'Junior meals': 'Smaller sandwiches, hot dogs and tenders',
  'Desserts and drinks': 'Fried dough, cheesecake and fresh lemonade',
};
const categoryIndex = () => `<ul class="category-index">${menu.categories.map(c => `
  <li><a href="/menu/#${slug(c.name)}"><span class="ci-name">${esc(c.name)}</span><span class="ci-note">${esc(CATEGORY_NOTES[c.name] || `${c.items.slice(0, 3).map(i => i.name).join(', ')} and more`)}</span>${icon.arrow}</a></li>`).join('')}</ul>`;

const photo = key => {
  if (!SHOW_PHOTOS || !PHOTOS[key]) return '';
  const p = PHOTOS[key];
  const set = p.srcset.map(([file, w]) => `${CDN}${file} ${w}w`).join(', ');
  return `<figure class="photo photo-${key}"><img src="${CDN}${p.srcset[1][0]}" srcset="${set}" sizes="${p.sizes}" width="${p.width}" height="${p.height}" alt="${esc(p.alt)}" loading="lazy" decoding="async"></figure>`;
};

const tokens = current => ({
  header: () => header(current),
  footer,
  hours: () => hoursList('hours'),
  'menu-nav': menuNav,
  'menu-sections': menuSections,
  'menu-observed': () => esc(menu.observed),
  'board': () => board(['Pit beef', 'Pork BBQ', 'Half rack baby back ribs', 'Ocean Fries']),
  'category-index': categoryIndex,
  order: () => SITE.order,
  phone: () => SITE.phone,
  'phone-label': () => SITE.phoneLabel,
  maps: () => SITE.maps,
  'gift-balance': () => SITE.giftBalance,
  contact: () => SITE.contact,
  'icon-arrow': () => icon.arrow,
  'icon-phone': () => icon.phone,
  'icon-pin': () => icon.pin,
  'icon-bag': () => icon.bag,
  'photo-band': () => photo('band'),
  'photo-catering': () => photo('catering'),
  'photo-wings': () => photo('wings'),
  'photos-on': () => (SHOW_PHOTOS ? 'has-photos' : 'no-photos'),
});

const partials = () => ({
  name: 'charcoal-grill-partials',
  transformIndexHtml: {
    order: 'pre',
    handler(html, ctx) {
      const path = ctx.path.replace(/index\.html$/, '');
      const map = tokens(path);
      return html.replace(/\{\{\s*([\w-]+)\s*\}\}/g, (whole, key) => {
        if (!map[key]) throw new Error(`Unknown template token ${whole} in ${ctx.path}`);
        return map[key]();
      });
    },
  },
});

export default defineConfig({
  plugins: [partials()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        menu: resolve(root, 'menu/index.html'),
        catering: resolve(root, 'catering/index.html'),
        about: resolve(root, 'about/index.html'),
        visit: resolve(root, 'visit/index.html'),
        notFound: resolve(root, '404.html'),
      },
    },
  },
});
