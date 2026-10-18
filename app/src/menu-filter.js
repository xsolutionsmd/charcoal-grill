// Category links retain shareable URLs and browser history. Without JavaScript,
// the full sourced menu stays readable in the server-rendered document.
const sections = [...document.querySelectorAll('[data-menu-category]')];
const links = [...document.querySelectorAll('[data-menu-filter]')];
const select = document.querySelector('[data-menu-select]');
const status = document.querySelector('[data-menu-status]');

if (sections.length && links.length) {
  const baseTitle = document.title;
  const known = new Set(sections.map(section => section.dataset.menuCategory));
  const valid = value => known.has(value) ? value : 'all';
  const fromLocation = () => valid(new URL(location.href).searchParams.get('category') || location.hash.slice(1));

  const show = (value, { navigate = false, focus = false } = {}) => {
    const selected = valid(value);
    const visible = sections.find(section => selected === 'all' || section.dataset.menuCategory === selected);
    sections.forEach(section => { section.hidden = selected !== 'all' && section.dataset.menuCategory !== selected; });
    links.forEach(link => {
      const active = link.dataset.menuFilter === selected;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    if (select) select.value = selected;
    const heading = visible?.querySelector('h2');
    const name = selected === 'all' ? 'Full menu' : heading?.textContent.trim() || 'Menu';
    document.title = selected === 'all' ? baseTitle : `${name} · ${baseTitle}`;
    if (status) status.textContent = `Showing ${name.toLowerCase()}.`;

    if (navigate) {
      const url = new URL(location.href);
      if (selected === 'all') url.searchParams.delete('category');
      else url.searchParams.set('category', selected);
      url.hash = '';
      if (url.href !== location.href) history.pushState(null, '', url);
    }
    if (focus && heading) {
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
      visible.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
  };

  links.forEach(link => link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    show(link.dataset.menuFilter, { navigate: true, focus: true });
  }));
  select?.addEventListener('change', () => show(select.value, { navigate: true, focus: true }));
  window.addEventListener('popstate', () => show(fromLocation()));
  window.addEventListener('hashchange', () => show(fromLocation(), { focus: true }));
  show(fromLocation());
}
