/**
 * VELOX RACING — INTERACTIVE ENGINEERING FIGURES INTEGRATION
 * Interactive, pointer-responsive isometric SVG figures for engineering & telemetry
 * Zagazig National University | Formula Student
 */

import {
  terrain,
  plot,
  cabinet,
  turntable,
  terminal,
  dish,
  vault,
  branches
} from 'https://esm.sh/@lucasmarkes/hairline@0.5.1';

const FIGURE_FACTORIES = {
  terrain,
  plot,
  cabinet,
  turntable,
  terminal,
  dish,
  vault,
  branches
};

const activeInstances = new Map();

export function mountHairlineFigure(container, figureName, options = {}) {
  if (!container) return null;
  const factory = FIGURE_FACTORIES[figureName];
  if (!factory) {
    console.warn(`[Hairline] Unknown figure: "${figureName}"`);
    return null;
  }

  // Determine current theme
  const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

  const defaultOptions = {
    intensity: 0.75,
    theme: currentTheme,
    play: true
  };

  try {
    container.innerHTML = '';
    const instance = factory(container, { ...defaultOptions, ...options });
    activeInstances.set(container, { instance, figureName });
    return instance;
  } catch (err) {
    console.warn(`[Hairline] Error mounting ${figureName}:`, err);
    return null;
  }
}

export function initAllHairlineElements() {
  const elements = document.querySelectorAll('[data-hairline]');
  elements.forEach((el) => {
    const fig = el.getAttribute('data-hairline');
    const intensity = parseFloat(el.getAttribute('data-intensity')) || 0.75;
    mountHairlineFigure(el, fig, { intensity, play: true });
  });
}

// Update themes across all active Hairline figures when theme changes
function handleThemeChange() {
  const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  activeInstances.forEach(({ instance }) => {
    if (instance && typeof instance.update === 'function') {
      try {
        instance.update({ theme: currentTheme });
      } catch (e) {
        // Safe fallback
      }
    }
  });
}

// Watch theme changes on <html>
const themeObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
      handleThemeChange();
    }
  });
});
themeObserver.observe(document.documentElement, { attributes: true });

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllHairlineElements);
} else {
  initAllHairlineElements();
}

// Expose on window for vanilla access
window.VeloxHairline = {
  mount: mountHairlineFigure,
  initAll: initAllHairlineElements,
  figures: Object.keys(FIGURE_FACTORIES)
};
