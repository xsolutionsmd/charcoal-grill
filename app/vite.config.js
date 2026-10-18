// Static multi-page build. Shared header/footer, the menu and business photos are
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

// Selected official business photos are served locally with the site.
const PHOTOS = {
  hero: {
    alt: 'Pit beef sandwich with tomato and onion beside a cup of fresh-cut fries and barbecue sauce',
    width: 1203, height: 609, src: '/assets/pit-beef-meal.jpg',
  },
  fries: {
    alt: 'Fresh-cut Ocean Fries in a Charcoal Grill cup',
    width: 1203, height: 609, src: '/assets/pit-beef-meal.jpg',
  },
  sandwich: {
    alt: 'Charcoal Grill pit beef sandwich with lettuce, tomato and onion',
    width: 942, height: 890, src: '/assets/pit-beef-sandwich.jpg',
  },
  catering: {
    alt: 'Grilled chicken Caesar salads packed in carry-out bowls on the kitchen counter',
    width: 1920, height: 1282, src: '/assets/chicken-caesar-salads.jpg',
  },
  wings: {
    alt: 'Wings with celery, carrots and ranch on a wooden board',
    width: 1283, height: 1600, src: '/assets/chicken-wings.jpg',
  },
  dessert: {
    alt: 'Fried dough dusted with sugar',
    width: 1920, height: 1179, src: '/assets/fried-dough.jpg',
  },
};

const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const slug = value => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const icon = {
  arrow: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  phone: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.6 3.5h2.6l1.5 4-1.9 1.3a11 11 0 0 0 6.4 6.4l1.3-1.9 4 1.5v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  pin: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 21s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21Z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="9.8" r="2.3" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
  plus: '<svg class="icon faq-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h14M12 5v14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  menu: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="i-open" d="M3.5 7h17M3.5 12h17M3.5 17h17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path class="i-close" d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
};

const NAV = [['/menu/', 'Menu'], ['/catering/', 'Catering'], ['/about/', 'About'], ['/visit/', 'Visit']];
const HOURS = [['Tuesday – Saturday', '11am – 8pm'], ['Sunday', '11am – 7pm'], ['Monday', 'Closed']];

// Every ordering action keeps the provider URL as a working no-script fallback and
// carries the class the official ChowNow integration attaches to.
const orderLink = (cls, label = 'Order online') =>
  `<a class="${cls} chownow-order-online" href="${SITE.order}">${label}</a>`;

const navLinks = current => NAV.map(([href, label]) =>
  `<li><a href="${href}"${href === current ? ' aria-current="page"' : ''}>${label}</a></li>`).join('');

const header = current => `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header" data-header>
  <div class="header-bar">
    <nav class="primary-nav" aria-label="Primary"><ul>${navLinks(current)}</ul></nav>
    <a class="wordmark" href="/"${current === '/' ? ' aria-current="page"' : ''}>Charcoal Grill</a>
    <div class="header-actions">
      <a class="header-phone" href="${SITE.phone}">${icon.phone}<span>${SITE.phoneLabel}</span></a>
      ${orderLink('btn btn-outline btn-sm header-order', 'Order<span class="order-long"> online</span>')}
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle>${icon.menu}<span class="sr-only">Menu</span></button>
    </div>
  </div>
  <div class="mobile-menu" id="mobile-menu" data-mobile-menu hidden>
    <nav class="mobile-nav" aria-label="Mobile">
      <ul class="mobile-links"><li><a href="/"${current === '/' ? ' aria-current="page"' : ''}>Home</a></li>${navLinks(current)}</ul>
      <div class="mobile-actions">
        ${orderLink('btn btn-red btn-block')}
        <a class="btn btn-outline btn-block" href="${SITE.phone}">${icon.phone}Call ${SITE.phoneLabel}</a>
      </div>
      <p class="mobile-meta">8535 Old Harford Road, Parkville<br>Tue – Sat 11am – 8pm · Sun 11am – 7pm · Mon closed</p>
    </nav>
  </div>
</header>`;

const hoursList = cls => `<dl class="${cls}">${HOURS.map(([d, h]) => `<div><dt>${d}</dt><dd>${h}</dd></div>`).join('')}</dl>`;

const footer = () => `
<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <a class="wordmark wordmark-light" href="/">Charcoal Grill</a>
      <p>Pit sandwiches and barbecue on Old Harford Road.</p>
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
        <li><a href="${SITE.contact}">Contact &amp; jobs</a></li>
      </ul>
    </nav>
  </div>
  <div class="wrap footer-base"><p>Charcoal Grill · 8535 Old Harford Road, Parkville, Maryland</p>${orderLink('text-link text-link-light')}</div>
</footer>`;

// "Regular 10.79 / Colossal 15.99" -> [{label: 'Regular', amount: '10.79'}, ...]
const priceOptions = price => price.split(' / ').map(part => {
  const m = part.trim().match(/^(.*?)\s*(\d+\.\d{2})$/);
  return m ? { label: m[1], amount: m[2] } : { label: part.trim(), amount: '' };
});
const priceHtml = price => `<span class="prices">${priceOptions(price).map(({ label, amount }) =>
  `<span class="price">${label ? `<span class="price-label">${esc(label)}</span>` : ''}${amount ? `<span class="price-amount">$${amount}</span>` : ''}</span>`).join('')}</span>`;

// Category selection: real links that root's menu module enhances in place.
const menuFilter = () => `<ul class="menu-filter-list">
  <li><a href="/menu/" data-menu-filter="all" aria-current="true">Full menu</a></li>${menu.categories.map(c => `
  <li><a href="/menu/?category=${slug(c.name)}" data-menu-filter="${slug(c.name)}">${esc(c.name)}</a></li>`).join('')}
</ul>`;

// Photographed entries carry a lead thumbnail beside the same name/price row;
// entries without a matched photograph stay plain menu-paper rows.
const menuItem = i => {
  const cls = `menu-item${priceOptions(i.price).length > 1 ? ' is-multi' : ''}${i.image ? ' has-photo' : ''}`;
  const copy = `<div class="menu-line"><h3>${esc(i.name)}</h3><span class="leader" aria-hidden="true"></span>${priceHtml(i.price)}</div>
      ${i.description ? `<p>${esc(i.description)}</p>` : ''}`;
  if (!i.image) return `
    <li class="${cls}">
      ${copy}
    </li>`;
  const { src, alt, width, height } = i.image;
  return `
    <li class="${cls}">
      <img class="menu-photo" src="${esc(src)}" width="${width}" height="${height}" alt="${esc(alt)}" loading="lazy" decoding="async">
      <div class="menu-copy">${copy}</div>
    </li>`;
};

const menuSections = () => menu.categories.map(c => {
  const id = slug(c.name);
  return `
<section class="menu-section" id="${id}" data-menu-category="${id}" aria-labelledby="${id}-title">
  <h2 class="menu-section-title" id="${id}-title">${esc(c.name)}</h2>
  <ul class="menu-items">${c.items.map(menuItem).join('')}
  </ul>
</section>`;
}).join('');

const CATEGORY_NOTES = {
  'Wings and ribs': 'Wings, baby back ribs and half chicken',
  'Fries and sides': 'Fresh-cut Ocean Fries, potato salad, slaw and beans',
  'Desserts and drinks': 'Fried dough, cheesecake and fresh lemonade',
};
// Home discovery cards: real categories with the matching business photograph.
const DISCOVERY = [['Wings and ribs', 'wings'], ['Fries and sides', 'fries'], ['Desserts and drinks', 'dessert']];
const discoveryCards = () => `<ul class="discover-grid">${DISCOVERY.map(([name, art]) => `
  <li><a class="discover-card" href="/menu/?category=${slug(name)}">
    ${photo(art, 'discover-photo')}
    <span class="discover-text"><span class="discover-title">${esc(name)}</span><span class="discover-note">${esc(CATEGORY_NOTES[name])}</span></span>
  </a></li>`).join('')}
</ul>`;

const photo = (key, cls = '') => {
  if (!PHOTOS[key]) return '';
  const p = PHOTOS[key];
  const eager = key === 'hero';
  return `<figure class="photo photo-${key}${cls ? ` ${cls}` : ''}"><img src="${p.src}" width="${p.width}" height="${p.height}" alt="${esc(p.alt)}" loading="${eager ? 'eager' : 'lazy'}"${eager ? ' fetchpriority="high"' : ''} decoding="async"></figure>`;
};

const tokens = current => ({
  header: () => header(current),
  footer,
  hours: () => hoursList('hours'),
  'menu-filter': menuFilter,
  'menu-sections': menuSections,
  'menu-observed': () => esc(menu.observed),
  'discovery-cards': discoveryCards,
  'order-red': () => orderLink('btn btn-red'),
  'order-red-lg': () => orderLink('btn btn-red btn-lg'),
  'order-outline': () => orderLink('btn btn-outline'),
  'order-link': () => orderLink('text-link', `Order online${icon.arrow}`),
  phone: () => SITE.phone,
  'phone-label': () => SITE.phoneLabel,
  maps: () => SITE.maps,
  'gift-balance': () => SITE.giftBalance,
  contact: () => SITE.contact,
  'icon-arrow': () => icon.arrow,
  'icon-phone': () => icon.phone,
  'icon-pin': () => icon.pin,
  'icon-plus': () => icon.plus,
  'photo-hero': () => photo('hero', 'hero-media'),
  'photo-sandwich': () => photo('sandwich', 'split-media'),
  'photo-catering-split': () => photo('catering', 'split-media'),
  'photo-catering': () => photo('catering', 'feature-media'),
  'photo-wings': () => photo('wings', 'split-media'),
  'photo-visit': () => photo('hero', 'feature-media feature-media-visit'),
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
