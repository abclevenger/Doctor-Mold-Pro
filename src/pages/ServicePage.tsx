import { useLocation, Navigate } from 'react-router-dom'
import { SEOPage } from '../components/SEOPage'
import { getServicePageBySlug } from '../content/service-pages'

export function ServicePage() {
  const location = useLocation()
  const pageContent = getServicePageBySlug(location.pathname)

  if (!pageContent) {
    return <Navigate to="/" replace />
  }

  // Generate breadcrumbs
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: pageContent.h1, path: pageContent.slug },
  ]

  return <SEOPage {...pageContent} breadcrumbs={breadcrumbs} />
}
