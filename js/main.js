/**
 * ═══════════════════════════════════════════════════════════════════
 * Main JavaScript - Inicializado después de cargar componentes
 * ═══════════════════════════════════════════════════════════════════
 */

/**
 * Inicializa toda la funcionalidad de la página
 * Se ejecuta después de que los componentes se hayan cargado
 */
function initializeApp() {
  initHeader();
  initMobileMenu();
  initSmoothScroll();
  initScrollReveal();
  initCopyButton();
}

// ── Header scrolled ───────────────────────────────────────────────────────
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ── Menú mobile ───────────────────────────────────────────────────────────
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', isOpen);
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── Smooth scroll ─────────────────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const header = document.getElementById('header');
      const offset = header ? header.offsetHeight : 0;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    });
  });
}

// ── Scroll reveal ─────────────────────────────────────────────────────────
function initScrollReveal() {
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
}

// ── Tecla Escape cierra menú mobile ──────────────────────────────────────
function initEscapeKey() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuToggle = document.getElementById('menu-toggle');
  
  if (!mobileMenu || !menuToggle) return;
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  });
}

// ── Copiar cita APA ───────────────────────────────────────────────────────
function initCopyButton() {
  const copyBtn = document.getElementById('copy-citation-btn');
  if (!copyBtn) return;
  
  copyBtn.addEventListener('click', () => {
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
}

// ═══════════════════════════════════════════════════════════════════
// Inicialización
// ═══════════════════════════════════════════════════════════════════

// Escuchar el evento de componentes cargados
document.addEventListener('componentsLoaded', () => {
  console.log('🚀 Inicializando aplicación...');
  initializeApp();
  initEscapeKey();
});

// Fallback: si los componentes ya están cargados antes de registrar el listener
if (document.readyState === 'complete') {
  // Pequeño delay para asegurar que los componentes están insertados en el DOM
  setTimeout(() => {
    if (document.getElementById('header')) {
      console.log('🚀 Inicializando aplicación (fallback)...');
      initializeApp();
      initEscapeKey();
    }
  }, 100);
}