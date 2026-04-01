import { Link } from 'react-router-dom'
import type { RelatedPage } from '../content/types'

interface RelatedPagesProps {
  pages: RelatedPage[]
  title?: string
  /** Localized intro line (defaults to Tampa Bay–wide copy) */
  sectionLead?: string
}

export function RelatedPages({
  pages,
  title = 'Related Problems',
  sectionLead = 'Learn more about common mold problems and solutions for Tampa Bay homeowners.',
}: RelatedPagesProps) {
  if (!pages || pages.length === 0) {
    return null
  }

  return (
    <section className="section related-pages">
      <h2>{title}</h2>
      <p className="section-lead">{sectionLead}</p>
      <div className="related-pages-grid">
        {pages.map((page) => (
          <Link key={page.slug} to={page.slug} className="related-page-card">
            <h3>{page.title}</h3>
            <span className="related-page-link">Read more →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
