import './styles.css';

// Mobile menu: disclosure button with Escape, outside-click and resize handling.
const toggle = document.querySelector('[data-menu-toggle]');
const panel = document.querySelector('[data-mobile-menu]');
if (toggle && panel) {
  const desktop = window.matchMedia('(min-width: 800px)');
  const setOpen = (open, { focusToggle = false } = {}) => {
    toggle.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    if (open) panel.querySelector('a')?.focus();
    else if (focusToggle) toggle.focus();
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) setOpen(false, { focusToggle: true });
  });
  document.addEventListener('click', event => {
    if (!panel.hidden && !panel.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
  });
  panel.addEventListener('click', event => { if (event.target.closest('a')) setOpen(false); });
  // Close when focus leaves the open panel (Tab past its last link).
  panel.addEventListener('focusout', event => {
    if (event.relatedTarget && !panel.contains(event.relatedTarget) && event.relatedTarget !== toggle) setOpen(false);
  });
  desktop.addEventListener('change', event => { if (event.matches) setOpen(false); });
}

// Menu page: highlight the category in view in the section bar.
const tabs = [...document.querySelectorAll('.menu-tabs a')];
if (tabs.length && 'IntersectionObserver' in window) {
  const byId = new Map(tabs.map(tab => [tab.hash.slice(1), tab]));
  const visible = new Set();
  const update = () => {
    const first = [...document.querySelectorAll('.menu-section')].find(section => visible.has(section.id));
    tabs.forEach(tab => tab.classList.toggle('is-active', first ? byId.get(first.id) === tab : false));
    const active = first && byId.get(first.id);
    if (active) {
      const bar = active.closest('.menu-tabs');
      const left = active.offsetLeft - (bar.clientWidth - active.offsetWidth) / 2;
      bar.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => (entry.isIntersecting ? visible.add(entry.target.id) : visible.delete(entry.target.id)));
    update();
  }, { rootMargin: '-35% 0px -55% 0px' });
  document.querySelectorAll('.menu-section').forEach(section => observer.observe(section));
}
