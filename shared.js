// Shared JS for DYNFX service pages
if ('IntersectionObserver' in window) document.documentElement.classList.add('js-enhanced');

const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menuToggle.classList.remove('open');
    nav.classList.remove('open');
  }));
}

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!open) item.classList.add('open');
  });
});

// Services dropdown — tap to open on touch devices (desktop uses CSS hover)
(function() {
  const dropdown = document.querySelector('.nav-services');
  if (!dropdown) return;
  const trigger = dropdown.querySelector('.nav-services-trigger');
  trigger?.addEventListener('click', (e) => {
    // Only intercept on touch devices when at desktop width and dropdown is closed
    const isTouch = window.matchMedia('(hover: none)').matches;
    const isDesktop = window.innerWidth > 700;
    if (isTouch && isDesktop && !dropdown.classList.contains('open')) {
      e.preventDefault();
      dropdown.classList.add('open');
    }
  });
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
  });
})();
