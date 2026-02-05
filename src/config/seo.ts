/**
 * SEO Configuration
 * Centralized SEO settings and helpers
 */

export const SEO_CONFIG = {
  baseUrl: 'https://doctormoldpro.com', // TODO: Update with actual domain
  siteName: 'Doctor Mold Pro',
  defaultImage: '/dr-mold-pro-logo-transparent.png',
}

/**
 * Generate canonical URL from slug
 */
export function getCanonicalUrl(slug: string): string {
  if (slug === '/') {
    return SEO_CONFIG.baseUrl
  }
  return `${SEO_CONFIG.baseUrl}${slug.startsWith('/') ? slug : `/${slug}`}`
}

/**
 * Generate OG image URL
 */
export function getOgImageUrl(imagePath?: string): string {
  if (imagePath) {
    return imagePath.startsWith('http') ? imagePath : `${SEO_CONFIG.baseUrl}${imagePath}`
  }
  return `${SEO_CONFIG.baseUrl}${SEO_CONFIG.defaultImage}`
}
