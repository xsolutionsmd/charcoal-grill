// Official ChowNow integration. The provider owns availability, basket/checkout.
// https://get.chownow.com/restaurant-support/how-to-perform-a-basic-integration/
const orderLinks = [...document.querySelectorAll('a.chownow-order-online')];
if (orderLinks.length && !document.querySelector('script[data-chownow-company-id]')) {
  const hrefs = new Map(orderLinks.map(link => [link, link.getAttribute('href')]));
  const phone = matchMedia('(max-width: 799px)');
  let opener;
  let open = false;
  let previousOverflow = '';
  let inertBefore = [];
  const setBehavior = () => orderLinks.forEach(link => { link.dataset.chownowBehavior = phone.matches ? 'linkout' : 'overlay'; });
  setBehavior();
  phone.addEventListener('change', setBehavior);

  orderLinks.forEach(link => {
    link.addEventListener('click', event => {
      if (typeof window.ChowNow?.orderOnline !== 'function') return;
      // The vendor removes hrefs; restore link semantics while allowing its
      // click handler to open the provider. Modified clicks stay normal links.
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        event.stopImmediatePropagation();
        return;
      }
      event.preventDefault();
      opener = link;
    }, true);
  });

  const enhance = () => {
    orderLinks.forEach(link => {
      if (link.getAttribute('href') !== hrefs.get(link)) link.setAttribute('href', hrefs.get(link));
    });
    const container = document.querySelector('.chownow-container');
    if (!container) return;
    container.setAttribute('role', 'dialog');
    container.setAttribute('aria-modal', 'true');
    container.setAttribute('aria-label', 'Order from Charcoal Grill');
    const frame = container.querySelector('iframe');
    if (frame) frame.title = 'Charcoal Grill online ordering';
    const close = container.querySelector('.chownow-close');
    if (close && !close.dataset.accessible) {
      close.dataset.accessible = 'true';
      close.setAttribute('role', 'button');
      close.setAttribute('aria-label', 'Close online ordering');
      close.tabIndex = 0;
      close.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); close.click(); }
      });
    }
    const visible = container.style.visibility === 'visible' && container.style.display !== 'none';
    if (visible === open) return;
    open = visible;
    if (open) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      inertBefore = [...document.querySelectorAll('.site-header, main, .site-footer')].map(element => [element, element.inert]);
      inertBefore.forEach(([element]) => { element.inert = true; });
      close?.focus({ preventScroll: true });
    } else {
      document.body.style.overflow = previousOverflow;
      inertBefore.forEach(([element, value]) => { element.inert = value; });
      opener?.focus({ preventScroll: true });
    }
  };
  new MutationObserver(enhance).observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['href', 'style'] });
  document.addEventListener('keydown', event => {
    if (open && event.key === 'Escape') { event.preventDefault(); document.querySelector('.chownow-close')?.click(); }
    if (open && event.key === 'Tab' && event.shiftKey && document.activeElement?.matches('.chownow-close')) {
      event.preventDefault();
      document.querySelector('.chownow-iframe')?.focus();
    }
  });
  document.addEventListener('focusin', event => {
    if (open && !event.target.closest('.chownow-container')) document.querySelector('.chownow-close')?.focus({ preventScroll: true });
  });

  const script = document.createElement('script');
  script.src = 'https://cf.chownowcdn.com/latest/static/integrations/ordering-modal.min.js';
  script.dataset.chownowCompanyId = '5108';
  script.dataset.chownowBehavior = 'overlay';
  script.async = true;
  script.addEventListener('load', enhance);
  document.head.append(script);
}
