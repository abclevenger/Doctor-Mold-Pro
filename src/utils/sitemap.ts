import { getAllSupportPageSlugs } from '../content/support-pages'
import { getAllMoldTypePageSlugs } from '../content/mold-types'
import { getAllServicePageSlugs } from '../content/service-pages'

/**
 * Sitemap Generation Utility
 * 
 * Generates sitemap.xml content from all routes in the application.
 * This can be used to generate a static sitemap.xml file during build.
 */

const BASE_URL = 'https://doctormoldpro.com' // TODO: Update with actual domain

// Static routes (money pages, location pages, etc.)
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/mold-testing-tampa', priority: '1.0', changefreq: 'monthly' },
  { path: '/mold-removal-tampa', priority: '1.0', changefreq: 'monthly' },
  { path: '/emergency-mold-remediation-tampa', priority: '0.9', changefreq: 'monthly' },
  // Location pages
  { path: '/mold-testing-clearwater', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-removal-clearwater', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-testing-st-petersburg', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-removal-st-petersburg', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-testing-brandon', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-removal-brandon', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-testing-riverview', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-removal-riverview', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-types', priority: '0.8', changefreq: 'monthly' },
]

/**
 * Generate sitemap XML content
 */
export function generateSitemap(): string {
  const supportPageSlugs = getAllSupportPageSlugs()
  const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD format

  const moldTypePageSlugs = getAllMoldTypePageSlugs()
  const servicePageSlugs = getAllServicePageSlugs()

  const allRoutes = [
    ...staticRoutes,
    // Support pages
    ...supportPageSlugs.map((slug) => ({
      path: slug,
      priority: '0.8',
      changefreq: 'monthly' as const,
    })),
    // Mold type pages
    ...moldTypePageSlugs.map((slug) => ({
      path: slug,
      priority: '0.7',
      changefreq: 'monthly' as const,
    })),
    // Service pages
    ...servicePageSlugs.map((slug) => ({
      path: slug,
      priority: '0.8',
      changefreq: 'monthly' as const,
    })),
  ]

  const urlEntries = allRoutes
    .map(
      (route) => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urlEntries}

</urlset>`
}

/**
 * Get all routes for programmatic use
 */
export function getAllRoutes(): Array<{ path: string; priority: string; changefreq: string }> {
  const supportPageSlugs = getAllSupportPageSlugs()

  return [
    ...staticRoutes,
    ...supportPageSlugs.map((slug) => ({
      path: slug,
      priority: '0.8',
      changefreq: 'monthly',
    })),
  ]
}
