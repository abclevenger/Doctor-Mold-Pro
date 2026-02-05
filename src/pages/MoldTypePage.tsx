import { useParams, Navigate } from 'react-router-dom'
import { SEOPage } from '../components/SEOPage'
import { getMoldTypePageBySlug } from '../content/mold-types'

export function MoldTypePage() {
  const { type } = useParams<{ type: string }>()
  
  if (!type) {
    return <Navigate to="/mold-types" replace />
  }

  const pageContent = getMoldTypePageBySlug(`/mold-types/${type}`)

  if (!pageContent) {
    return <Navigate to="/mold-types" replace />
  }

  // Generate breadcrumbs
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Mold Types', path: '/mold-types' },
    { label: pageContent.h1, path: pageContent.slug },
  ]

  return <SEOPage {...pageContent} breadcrumbs={breadcrumbs} />
}
