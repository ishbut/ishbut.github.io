const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('is-open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    toggle.click(); toggle.focus();
  }
});
const topLink = document.querySelector('.back-to-top');
if (topLink) {
  let anchorY = window.scrollY;
  const updateScroll = () => {
    const y = window.scrollY;
    const delta = y - anchorY;
    if (Math.abs(delta) < 4) return;
    topLink.hidden = y < 200 || delta > 0;
    anchorY = y;
  };
  window.addEventListener('scroll', updateScroll, {passive:true});
  updateScroll();
}
