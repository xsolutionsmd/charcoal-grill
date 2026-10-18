import './styles.css';
import './integration.css';
import './menu-filter.js';
import './chownow.js';

// Mobile menu: disclosure button with Escape, outside-click and resize handling.
const toggle = document.querySelector('[data-menu-toggle]');
const panel = document.querySelector('[data-mobile-menu]');
if (toggle && panel) {
  const desktop = window.matchMedia('(min-width: 800px)');
  const setOpen = (open, { focusToggle = false } = {}) => {
    toggle.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    document.querySelectorAll('main, .site-footer').forEach(element => { element.inert = open; });
    if (open) panel.querySelector('a')?.focus();
    else if (focusToggle) toggle.focus();
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) setOpen(false, { focusToggle: true });
    if (event.key === 'Tab' && !panel.hidden) {
      const focusable = [toggle, ...panel.querySelectorAll('a[href], button:not([disabled])')];
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
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
  window.addEventListener('pageshow', () => setOpen(false));
}
