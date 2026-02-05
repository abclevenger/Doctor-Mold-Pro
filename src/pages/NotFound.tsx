import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { getCanonicalUrl } from '../config/seo'

export function NotFound() {
  return (
    <>
      <PageMeta
        title="Page Not Found | Doctor Mold Pro"
        description="The page you're looking for doesn't exist. Return to Doctor Mold Pro's homepage for mold testing and removal services in Tampa, FL."
        canonical={getCanonicalUrl('/404')}
      />
      <section className="section" style={{ textAlign: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: '#38bdf8' }}>404</h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
          <p style={{ fontSize: '1.125rem', color: '#cbd5f5', marginBottom: '2rem' }}>
            Sorry, we couldn&apos;t find the page you&apos;re looking for. The page may have been moved or doesn&apos;t exist.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="primary button-link">
              Go to Homepage
            </Link>
            <Link to="/#contact" className="secondary button-link">
              Contact Us
            </Link>
          </div>
          <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '1rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Popular Pages</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
              <li>
                <Link to="/mold-testing-tampa" style={{ color: '#7dd3fc', textDecoration: 'none' }}>
                  → Mold Testing Tampa
                </Link>
              </li>
              <li>
                <Link to="/mold-removal-tampa" style={{ color: '#7dd3fc', textDecoration: 'none' }}>
                  → Mold Removal Tampa
                </Link>
              </li>
              <li>
                <Link to="/emergency-mold-remediation-tampa" style={{ color: '#7dd3fc', textDecoration: 'none' }}>
                  → Emergency Mold Remediation
                </Link>
              </li>
              <li>
                <Link to="/signs-of-mold-in-house" style={{ color: '#7dd3fc', textDecoration: 'none' }}>
                  → Signs of Mold in House
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
