import { useEffect } from 'react'
import { getCanonicalUrl, getOgImageUrl, SEO_CONFIG } from '../config/seo'

interface PageMetaProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  keywords?: string
}

export function PageMeta({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  keywords,
}: PageMetaProps) {
  useEffect(() => {
    // Update title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.content = content
    }

    // Description
    updateMetaTag('description', description)

    // Keywords (if provided)
    if (keywords) {
      updateMetaTag('keywords', keywords)
    }

    // Canonical URL
    const canonicalUrl = canonical || getCanonicalUrl(window.location.pathname)
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonicalUrl

    // Open Graph tags
    updateMetaTag('og:title', title, 'property')
    updateMetaTag('og:description', description, 'property')
    updateMetaTag('og:type', ogType, 'property')
    updateMetaTag('og:url', canonicalUrl, 'property')
    updateMetaTag('og:image', getOgImageUrl(ogImage), 'property')
    updateMetaTag('og:site_name', SEO_CONFIG.siteName, 'property')

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', getOgImageUrl(ogImage))

    // Cleanup function (optional, but good practice)
    return () => {
      // Note: We don't remove meta tags on cleanup as they should persist
      // until the next page loads
    }
  }, [title, description, canonical, ogImage, ogType, keywords])

  return null
}
