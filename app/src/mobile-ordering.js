// Mobile wrapper for the existing restaurant checkout. The official widget
// deliberately links out on phones; this dialog does not depend on its UA check.
let dialog;
let frame;
let opener;
let overflow;

export function openMobileOrdering(link) {
  if (typeof HTMLDialogElement === 'undefined' || !HTMLDialogElement.prototype.showModal) return false;
  if (!dialog) {
    dialog = document.createElement('dialog');
    dialog.className = 'mobile-ordering';
    dialog.setAttribute('aria-labelledby', 'mobile-ordering-title');
    dialog.innerHTML = `
      <header class="mobile-ordering-header">
        <h2 id="mobile-ordering-title">Order online</h2>
        <button type="button" class="mobile-ordering-close" aria-label="Close online ordering" autofocus>
          <span>Close</span><svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
        </button>
        <a class="mobile-ordering-direct">Open ordering in a new tab</a>
      </header>
      <div class="mobile-ordering-content">
        <p class="mobile-ordering-loading" role="status">Loading ordering…</p>
      </div>`;
    const direct = dialog.querySelector('a');
    direct.href = link.href;
    direct.target = '_blank';
    direct.rel = 'noopener';
    frame = document.createElement('iframe');
    frame.title = 'Charcoal Grill online ordering';
    frame.allow = 'payment';
    frame.addEventListener('load', () => {
      dialog.querySelector('.mobile-ordering-loading').hidden = true;
      frame.contentWindow?.postMessage(JSON.stringify({
        msgBody: { eventName: 'CN Initialize Connection' },
        source: 'chownow.ordering', type: 'init',
      }), 'https://order.chownow.com');
    });
    frame.src = link.href;
    dialog.querySelector('.mobile-ordering-content').append(frame);
    dialog.querySelector('button').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => {
      document.documentElement.style.overflow = overflow.html;
      document.body.style.overflow = overflow.body;
      opener?.focus({ preventScroll: true });
    });
    document.body.append(dialog);
  }
  if (dialog.open) return true;
  opener = link;
  overflow = { html: document.documentElement.style.overflow, body: document.body.style.overflow };
  dialog.showModal();
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  dialog.querySelector('button').focus({ preventScroll: true });
  return true;
}
