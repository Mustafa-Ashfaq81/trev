/**
 * Get the appropriate background variant based on the current page path
 * @param {string} pathname - The current page pathname
 * @returns {string} - The background variant name
 */
export const getPageBackgroundVariant = (pathname) => {
  // Remove leading slash and convert to lowercase
  const path = pathname.replace('/', '').toLowerCase();
  
  // Map paths to background variants
  const pathVariantMap = {
    '': 'hero', // Home page
    'home': 'hero',
    'services': 'services',
    'portfolio': 'portfolio',
    'about': 'about',
    'contact': 'contact',
    'faq': 'faq'
  };
  
  return pathVariantMap[path] || 'default';
};

/**
 * Check if the current page should have a hero-style background
 * @param {string} pathname - The current page pathname
 * @returns {boolean} - Whether the page should use hero styling
 */
export const isHeroPage = (pathname) => {
  const variant = getPageBackgroundVariant(pathname);
  return variant === 'hero';
};

/**
 * Get optimized background settings for performance
 * @param {boolean} isMobile - Whether the device is mobile
 * @returns {object} - Performance settings
 */
export const getPerformanceSettings = (isMobile) => {
  return {
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    lowPowerMode: isMobile && window.navigator?.getBattery ? true : false,
    animationDuration: isMobile ? 25 : 20,
    overlayCount: isMobile ? 2 : 3
  };
};

/**
 * Generate CSS custom properties for theme consistency
 * @param {string} variant - The background variant
 * @returns {object} - CSS custom properties
 */
export const getThemeCustomProperties = (variant) => {
  const themeProperties = {
    '--bg-primary': '#ffffff',
    '--bg-secondary': '#f8fafc',
    '--accent-primary': 'rgba(139, 92, 246, 0.1)',
    '--accent-secondary': 'rgba(247, 208, 71, 0.1)',
  };

  // Variant-specific adjustments
  switch (variant) {
    case 'hero':
      themeProperties['--accent-primary'] = 'rgba(139, 92, 246, 0.12)';
      themeProperties['--accent-secondary'] = 'rgba(247, 208, 71, 0.12)';
      break;
    case 'services':
      themeProperties['--bg-secondary'] = '#f1f5f9';
      break;
    case 'portfolio':
      themeProperties['--accent-primary'] = 'rgba(139, 92, 246, 0.15)';
      break;
    case 'contact':
      themeProperties['--accent-secondary'] = 'rgba(247, 208, 71, 0.15)';
      break;
    default:
      break;
  }

  return themeProperties;
};