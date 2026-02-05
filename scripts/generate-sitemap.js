/**
 * Generate sitemap.xml during build
 * 
 * Run this script during the build process to generate sitemap.xml
 * Usage: node scripts/generate-sitemap.js
 */

import { writeFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Import the sitemap generator
// Note: This is a simplified version - in a real build, you'd import from the compiled JS
// For now, we'll generate it directly

const BASE_URL = 'https://doctormoldpro.com'

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/mold-testing-tampa', priority: '1.0', changefreq: 'monthly' },
  { path: '/mold-removal-tampa', priority: '1.0', changefreq: 'monthly' },
  { path: '/emergency-mold-remediation-tampa', priority: '0.9', changefreq: 'monthly' },
  { path: '/mold-testing-clearwater', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-removal-clearwater', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-testing-st-petersburg', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-removal-st-petersburg', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-testing-brandon', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-removal-brandon', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-testing-riverview', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-removal-riverview', priority: '0.7', changefreq: 'monthly' },
  { path: '/mold-types', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/price-packages', priority: '0.9', changefreq: 'monthly' },
  { path: '/certifications', priority: '0.7', changefreq: 'monthly' },
  { path: '/terms', priority: '0.5', changefreq: 'yearly' },
]

// Support pages - these should match what's in support-pages.ts
const supportPages = [
  '/signs-of-mold-in-house',
  '/mold-smell-but-no-visible-mold',
  '/mold-symptoms-headaches-allergies',
  '/is-black-mold-dangerous',
  '/what-does-a-mold-inspection-include',
  '/how-long-does-mold-testing-take',
  '/mold-test-results-explained',
  '/mold-after-water-leak',
  '/mold-after-flooding',
  '/humidity-mold-florida-home',
  '/hvac-leak-mold',
  '/mold-in-hvac-ac-vents',
  '/attic-mold-removal',
  '/crawl-space-mold',
  '/bathroom-mold-remediation',
  '/kitchen-sink-leak-mold',
  '/mold-behind-walls',
  '/mold-testing-cost-tampa',
  '/mold-removal-cost-tampa',
  '/does-insurance-cover-mold-florida',
  '/mold-remediation-process',
]

// Mold type pages
const moldTypePages = [
  '/mold-types/aspergillus',
  '/mold-types/cladosporium',
  '/mold-types/stachybotrys-black-mold',
  '/mold-types/penicillium',
  '/mold-types/alternaria',
]

// Service pages
const servicePages = [
  '/residential-mold-inspection-tampa',
  '/commercial-mold-inspection-tampa',
  '/indoor-air-quality-testing-tampa',
  '/black-mold-detection-tampa',
  '/water-damage-mold-assessment-tampa',
]

const allRoutes = [
  ...staticRoutes,
  ...supportPages.map((path) => ({
    path,
    priority: '0.8',
    changefreq: 'monthly',
  })),
  ...moldTypePages.map((path) => ({
    path,
    priority: '0.7',
    changefreq: 'monthly',
  })),
  ...servicePages.map((path) => ({
    path,
    priority: '0.8',
    changefreq: 'monthly',
  })),
]

const today = new Date().toISOString().split('T')[0]

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

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urlEntries}

</urlset>`

const outputPath = join(__dirname, '..', 'public', 'sitemap.xml')
writeFileSync(outputPath, sitemap, 'utf-8')

console.log(`✅ Sitemap generated: ${outputPath}`)
console.log(`   Total URLs: ${allRoutes.length}`)
