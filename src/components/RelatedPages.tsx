import { Link } from 'react-router-dom'
import type { RelatedPage } from '../content/types'

interface RelatedPagesProps {
  pages: RelatedPage[]
  title?: string
}

export function RelatedPages({ pages, title = 'Related Problems' }: RelatedPagesProps) {
  if (!pages || pages.length === 0) {
    return null
  }

  return (
    <section className="section related-pages">
      <h2>{title}</h2>
      <p className="section-lead">
        Learn more about common mold problems and solutions for Tampa homeowners.
      </p>
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
