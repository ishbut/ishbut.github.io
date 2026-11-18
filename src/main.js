import { createIcons, ArrowUp, ArrowUpRight, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, MapPin, Mail } from 'lucide';

createIcons({ icons: { ArrowUp, ArrowUpRight, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, MapPin, Mail } });

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
const confHero = document.querySelector('.conf-hero');
if (confHero) {
  const slides = [...confHero.querySelectorAll('.conf-slide')];
  const dots = [...confHero.querySelectorAll('.conf-dot')];
  let current = 0;
  const show = index => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
  };
  confHero.querySelector('.conf-prev')?.addEventListener('click', () => show(current - 1));
  confHero.querySelector('.conf-next')?.addEventListener('click', () => show(current + 1));
  dots.forEach(dot => dot.addEventListener('click', () => show(Number(dot.dataset.slide))));
  setInterval(() => show(current + 1), 5000);
}
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
