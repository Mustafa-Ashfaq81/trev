/**
 * SEO Configuration and Utilities
 */

export const siteConfig = {
  name: 'Trev Solutions',
  description: 'High-performance web, design, and marketing — built with precision, delivered with purpose. Swiss precision meets digital excellence.',
  url: process.env.REACT_APP_SITE_URL || 'https://trevsol.com',
  ogImage: process.env.REACT_APP_OG_IMAGE || '/og-image.jpg',
  twitterHandle: '@trevsol_',
  author: 'Trev Solutions',
  keywords: 'web development, branding, design, marketing, switzerland, digital agency, precision, performance'
};

export const pageConfigs = {
  home: {
    title: 'Trev Solutions - Swiss Precision Meets Digital Excellence',
    description: 'High-performance web, design, and marketing solutions. Built with precision, delivered with purpose. Transform your brand with Trev Solutions.',
    keywords: 'web development, digital marketing, brand design, swiss precision, high performance websites'
  },
  about: {
    title: 'About Trev Solutions - Built for Perfection, Driven by Results',
    description: 'Learn about Trev Solutions: a precision-first digital agency delivering flawless execution in marketing, design, and web development.',
    keywords: 'about trev solutions, digital agency, precision marketing, swiss quality, team'
  },
  services: {
    title: 'Our Services - Web Development, Branding & Marketing | Trev Solutions',
    description: 'Professional web development, branding & design, and end-to-end marketing services. Crafted with precision, executed with care.',
    keywords: 'web development services, branding design, digital marketing, conversion optimization, responsive websites'
  },
  portfolio: {
    title: 'Portfolio - Smart Solutions to Winning Big | Trev Solutions',
    description: 'Explore our featured projects and success stories. See how Trev Solutions helps brands achieve remarkable results through strategic design and marketing.',
    keywords: 'portfolio, case studies, web design projects, marketing results, brand transformations'
  },
  contact: {
    title: 'Contact Trev Solutions - Get in Touch for Your Next Project',
    description: 'Ready to transform your brand? Contact Trev Solutions for high-performance web development, design, and marketing solutions.',
    keywords: 'contact trev solutions, project inquiry, web development quote, digital marketing consultation'
  },
  faq: {
    title: 'FAQ - Frequently Asked Questions | Trev Solutions',
    description: 'Find answers to common questions about our web development, branding, and marketing services. Clear answers for your clarity.',
    keywords: 'frequently asked questions, web development faq, digital agency questions, service inquiries'
  }
};

/**
 * Generate meta tags for a specific page
 */
export const generateMetaTags = (pageKey, customConfig = {}) => {
  const baseConfig = siteConfig;
  const pageConfig = pageConfigs[pageKey] || pageConfigs.home;
  const config = { ...pageConfig, ...customConfig };
  
  const title = config.title || `${pageConfig.title} | ${baseConfig.name}`;
  const description = config.description || baseConfig.description;
  const url = `${baseConfig.url}${pageKey === 'home' ? '' : `/${pageKey}`}`;
  
  return {
    title,
    description,
    keywords: config.keywords || baseConfig.keywords,
    ogTitle: config.ogTitle || title,
    ogDescription: config.ogDescription || description,
    ogUrl: url,
    ogImage: config.ogImage || baseConfig.ogImage,
    ogType: config.ogType || 'website',
    twitterCard: config.twitterCard || 'summary_large_image',
    twitterSite: baseConfig.twitterHandle,
    twitterCreator: baseConfig.twitterHandle,
    canonical: url
  };
};

/**
 * Set document title and meta tags
 */
export const setPageMeta = (pageKey, customConfig = {}) => {
  const meta = generateMetaTags(pageKey, customConfig);
  
  // Set document title
  document.title = meta.title;
  
  // Helper function to set or update meta tag
  const setMetaTag = (name, content, property = false) => {
    if (!content) return;
    
    const attribute = property ? 'property' : 'name';
    const selector = `meta[${attribute}="${name}"]`;
    let element = document.querySelector(selector);
    
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    
    element.setAttribute('content', content);
  };
  
  // Set basic meta tags
  setMetaTag('description', meta.description);
  setMetaTag('keywords', meta.keywords);
  setMetaTag('author', siteConfig.author);
  
  // Set Open Graph tags
  setMetaTag('og:title', meta.ogTitle, true);
  setMetaTag('og:description', meta.ogDescription, true);
  setMetaTag('og:url', meta.ogUrl, true);
  setMetaTag('og:image', meta.ogImage, true);
  setMetaTag('og:type', meta.ogType, true);
  setMetaTag('og:site_name', siteConfig.name, true);
  
  // Set Twitter tags
  setMetaTag('twitter:card', meta.twitterCard);
  setMetaTag('twitter:site', meta.twitterSite);
  setMetaTag('twitter:creator', meta.twitterCreator);
  setMetaTag('twitter:title', meta.ogTitle);
  setMetaTag('twitter:description', meta.ogDescription);
  setMetaTag('twitter:image', meta.ogImage);
  
  // Set canonical URL
  let canonicalElement = document.querySelector('link[rel="canonical"]');
  if (!canonicalElement) {
    canonicalElement = document.createElement('link');
    canonicalElement.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalElement);
  }
  canonicalElement.setAttribute('href', meta.canonical);
};