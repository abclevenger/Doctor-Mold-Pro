import { PageMeta } from './PageMeta'
import { Breadcrumbs } from './Breadcrumbs'
import { FAQAccordion } from './FAQAccordion'
import { CTASection } from './CTASection'
import { RelatedPages } from './RelatedPages'
import type { SupportPageContent } from '../content/types'
import { getCanonicalUrl } from '../config/seo'
import { useEffect } from 'react'

interface SEOPageProps extends SupportPageContent {
  breadcrumbs?: Array<{ label: string; path: string }>
}

export function SEOPage({
  slug,
  title,
  metaDescription,
  h1,
  sections,
  faqs,
  primaryCTATarget,
  relatedPages,
  breadcrumbs,
}: SEOPageProps) {
  // Generate Article schema
  useEffect(() => {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: h1,
      description: metaDescription,
      url: getCanonicalUrl(slug),
      author: {
        '@type': 'Organization',
        name: 'Doctor Mold Pro',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Doctor Mold Pro',
        logo: {
          '@type': 'ImageObject',
          url: 'https://doctormoldpro.com/dr-mold-pro-logo-transparent.png',
        },
      },
    }

    // Remove existing article schema if present
    const existing = document.getElementById('schema-article')
    if (existing) {
      existing.remove()
    }

    // Create new script
    const script = document.createElement('script')
    script.id = 'schema-article'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(articleSchema)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById('schema-article')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [slug, h1, metaDescription])

  // Default breadcrumbs if not provided
  const defaultBreadcrumbs = breadcrumbs || [
    { label: 'Home', path: '/' },
    { label: h1, path: slug },
  ]

  return (
    <>
      <PageMeta
        title={title}
        description={metaDescription}
        canonical={getCanonicalUrl(slug)}
      />
      <Breadcrumbs items={defaultBreadcrumbs} />
      <article className="seo-page">
        <div className="section">
          <h1>{h1}</h1>
          {sections.map((section, index) => (
            <section key={index} className="content-section">
              <h2>{section.heading}</h2>
              {section.image && (
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  loading={index > 1 ? 'lazy' : 'eager'}
                  className="content-image"
                  width="800"
                  height="600"
                />
              )}
              <div className="content-text">
                {typeof section.content === 'string' ? (
                  <p style={{ whiteSpace: 'pre-line' }}>{section.content}</p>
                ) : (
                  section.content
                )}
              </div>
            </section>
          ))}
        </div>

        {faqs && faqs.length > 0 && (
          <section className="section faq-section">
            <h2>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </section>
        )}

        <CTASection primaryCTATarget={primaryCTATarget} />

        {relatedPages && relatedPages.length > 0 && (
          <RelatedPages pages={relatedPages} />
        )}
      </article>
    </>
  )
}
