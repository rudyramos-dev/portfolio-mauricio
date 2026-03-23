// ── Header scrolled ───────────────────────────────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ── Menú mobile ───────────────────────────────────────────────────────────
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle?.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', isOpen);
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
});

mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ── Smooth scroll ─────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = document.getElementById('header').offsetHeight;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth'
    });
  });
});

// ── Scroll reveal ─────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

document.querySelectorAll('.reveal-stagger > *').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ── Tecla Escape cierra menú mobile ──────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.focus();
  }
});

// ── Copiar cita APA ───────────────────────────────────────────────────────
const copyBtn = document.getElementById('copy-citation-btn');
copyBtn?.addEventListener('click', () => {
  const apa = `Salazar-Uitz, R.R., Ramos-Ramos, R.M., Shih, M.Y., & Lezama-Zarraga, F.R. (2025). Development of a Tool for Academic Data Processing and Visualization: A Python-Based Proposal. Journal of Computational Technologies, 9(22), 1–8. https://doi.org/10.35429/JOCT.2025.9.22.2.1.8`;

  navigator.clipboard.writeText(apa).then(() => {
    const original = copyBtn.textContent;
    copyBtn.textContent = '✓ ¡Copiado!';
    copyBtn.style.borderColor = '#4ade80';
    copyBtn.style.background = '#4ade8020';
    setTimeout(() => {
      copyBtn.textContent = original;
      copyBtn.style.borderColor = '';
      copyBtn.style.background = '';
    }, 2000);
  });
});