/**
 * ═══════════════════════════════════════════════════════════════════
 * Component Loader - Sistema de carga modular de componentes HTML
 * ═══════════════════════════════════════════════════════════════════
 * 
 * Este módulo permite cargar componentes HTML de forma asíncrona,
 * manteniendo el HTML principal limpio y modular.
 */

/**
 * Carga un componente HTML desde la carpeta components/
 * @param {string} componentName - Nombre del componente (sin extensión)
 * @param {string} targetId - ID del elemento donde se insertará
 * @returns {Promise<void>}
 */
async function loadComponent(componentName, targetId) {
  try {
    const response = await fetch(`/components/${componentName}.html`);
    
    if (!response.ok) {
      throw new Error(`Failed to load component: ${componentName}`);
    }
    
    const html = await response.text();
    const target = document.getElementById(targetId);
    
    if (target) {
      target.innerHTML = html;
    } else {
      console.warn(`Target element #${targetId} not found for component ${componentName}`);
    }
  } catch (error) {
    console.error(`Error loading component ${componentName}:`, error);
  }
}

/**
 * Carga múltiples componentes en paralelo
 * @param {Array<{component: string, target: string}>} components - Array de componentes a cargar
 * @returns {Promise<void>}
 */
async function loadComponents(components) {
  const promises = components.map(({ component, target }) =>
    loadComponent(component, target)
  );
  
  await Promise.all(promises);
}

/**
 * Inicializa la carga de todos los componentes del portfolio
 */
async function initializeComponents() {
  const components = [
    { component: 'header', target: 'header-root' },
    { component: 'hero', target: 'hero-root' },
    { component: 'projects', target: 'projects-root' },
    { component: 'skills', target: 'skills-root' },
    { component: 'research', target: 'research-root' },
    { component: 'certificates', target: 'certificates-root' },
    { component: 'contact', target: 'contact-root' },
    { component: 'footer', target: 'footer-root' }
  ];

  try {
    // Carga header y footer primero para estructura básica
    await loadComponent('header', 'header-root');
    await loadComponent('footer', 'footer-root');
    
    // Carga el resto de componentes en paralelo
    const mainComponents = components.filter(
      c => c.component !== 'header' && c.component !== 'footer'
    );
    await loadComponents(mainComponents);
    
    // Dispara evento personalizado cuando todos los componentes están cargados
    document.dispatchEvent(new CustomEvent('componentsLoaded'));
    
    console.log('✅ All components loaded successfully');
  } catch (error) {
    console.error('❌ Error initializing components:', error);
  }
}

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeComponents);
} else {
  initializeComponents();
}

// Exportar funciones para uso externo si es necesario
window.ComponentLoader = {
  loadComponent,
  loadComponents,
  initializeComponents
};
