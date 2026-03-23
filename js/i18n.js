// ── Sistema de traducción (i18n) ───────────────────────────────────────────
// Estrategia: data-i18n en el HTML, JSON por idioma, localStorage para persistencia

const SUPPORTED_LANGS = ['es', 'en'];
const DEFAULT_LANG = 'es';

let currentLang = DEFAULT_LANG;
let translations = {};

/**
 * Detecta el idioma inicial en este orden de prioridad:
 * 1. Parámetro ?lang=en en la URL
 * 2. Idioma guardado en localStorage
 * 3. Idioma del navegador del usuario
 * 4. Español como fallback
 */
function detectInitialLang() {
  const urlParam = new URLSearchParams(window.location.search).get('lang');
  if (urlParam && SUPPORTED_LANGS.includes(urlParam)) return urlParam;

  const saved = localStorage.getItem('preferred-lang');
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

  const browserLang = navigator.language?.slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(browserLang) ? browserLang : DEFAULT_LANG;
}

/**
 * Carga el archivo JSON del idioma solicitado
 * Usa cache: 'force-cache' para no repetir la petición en cada cambio
 */
async function loadTranslations(lang) {
  try {
    const res = await fetch(`/lang/${lang}.json`, { cache: 'force-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`[i18n] No se pudo cargar ${lang}.json, usando español`, err);
    // Si falla, intenta cargar el idioma por defecto
    if (lang !== DEFAULT_LANG) {
      const fallback = await fetch(`/lang/${DEFAULT_LANG}.json`);
      return await fallback.json();
    }
    return {};
  }
}

/**
 * Aplica las traducciones al DOM
 * Busca todos los elementos con data-i18n y reemplaza su contenido
 */
function applyTranslations(t) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!t[key]) return; // Si no existe la clave, no tocar el elemento

    // Para inputs/placeholders usar atributo, para el resto textContent
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t[key];
    } else {
      el.textContent = t[key];
    }
  });

  // Actualizar atributo lang del HTML para accesibilidad y SEO
  document.documentElement.lang = currentLang;

  // Actualizar el botón de toggle para mostrar el otro idioma
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
    toggleBtn.setAttribute('aria-label',
      currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'
    );
  }
}

/**
 * Función principal: carga y aplica un idioma
 */
async function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;

  currentLang = lang;
  translations = await loadTranslations(lang);
  applyTranslations(translations);
  localStorage.setItem('preferred-lang', lang);

  // Actualizar URL sin recargar la página
  const url = new URL(window.location);
  if (lang === DEFAULT_LANG) {
    url.searchParams.delete('lang');
  } else {
    url.searchParams.set('lang', lang);
  }
  window.history.replaceState({}, '', url);
}

/**
 * Getter público para que otros scripts accedan a las traducciones
 */
function t(key) {
  return translations[key] || key;
}

// ── Inicialización ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  const initialLang = detectInitialLang();
  await setLang(initialLang);

  // Conectar el botón de toggle
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    const nextLang = currentLang === 'es' ? 'en' : 'es';
    setLang(nextLang);
  });
});

// Exportar para uso en otros módulos
window.i18n = { setLang, t, getCurrentLang: () => currentLang };