/**
 * Creates page URLs for routing
 * @param {string} pageName - The name of the page
 * @returns {string} - The formatted URL path
 */
export const createPageUrl = (pageName) => {
  // Convert page name to lowercase and handle routing
  const formattedName = pageName.toLowerCase();
  
  // Handle home page as root
  if (formattedName === 'home') {
    return '/';
  }
  
  // Return page path
  return `/${formattedName}`;
};

/**
 * Environment configuration
 */
export const config = {
  email: process.env.REACT_APP_CONTACT_EMAIL || 'info@trevsol.com',
  businessEmail: process.env.REACT_APP_BUSINESS_EMAIL || 'business@trevsol.com',
  companyName: process.env.REACT_APP_SITE_NAME || 'Trev Solutions',
  siteUrl: process.env.REACT_APP_SITE_URL || 'https://trevsol.com',
  socialMedia: {
    instagram: process.env.REACT_APP_INSTAGRAM_HANDLE || '@trevsol_',
    linkedin: process.env.REACT_APP_LINKEDIN_COMPANY || 'Trev Solutions',
    twitter: process.env.REACT_APP_TWITTER_HANDLE || '@trevsol_'
  },
  services: {
    calendly: process.env.REACT_APP_CALENDLY_URL || '',
    typeform: process.env.REACT_APP_TYPEFORM_URL || ''
  }
};