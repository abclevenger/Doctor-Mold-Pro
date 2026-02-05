import { useParams, Navigate } from 'react-router-dom'
import { SEOPage } from '../components/SEOPage'
import { getSupportPageBySlug } from '../content/support-pages'

export function SupportPage() {
  const { slug } = useParams<{ slug: string }>()
  
  if (!slug) {
    return <Navigate to="/" replace />
  }

  const pageContent = getSupportPageBySlug(`/${slug}`)

  if (!pageContent) {
    return <Navigate to="/" replace />
  }

  // Generate breadcrumbs
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: pageContent.h1, path: pageContent.slug },
  ]

  return <SEOPage {...pageContent} breadcrumbs={breadcrumbs} />
}
