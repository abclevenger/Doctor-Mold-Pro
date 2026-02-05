import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { getCanonicalUrl } from '../config/seo'

export function Blog() {
  return (
    <>
      <PageMeta
        title="Mold Testing & Removal Blog | Doctor Mold Pro Tampa"
        description="Expert articles about mold testing, removal, prevention, and health. Learn about Tampa mold issues, remediation processes, and indoor air quality."
        canonical={getCanonicalUrl('/blog')}
      />
      <section className="section">
        <h1>Mold Testing & Removal Blog</h1>
        <p className="section-lead">
          Expert insights, tips, and guides about mold testing, removal, prevention, and indoor air quality in Tampa Bay.
        </p>

        <div className="grid" style={{ marginTop: '2rem' }}>
          <article className="card">
            <h2>Signs of Mold in Your House: What Tampa Homeowners Should Know</h2>
            <p>
              Learn the common signs of mold in your Tampa home, from musty smells to discoloration, and when to call a professional.
            </p>
            <Link to="/signs-of-mold-in-house" className="button-link secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>
              Read More →
            </Link>
          </article>

          <article className="card">
            <h2>Understanding the Mold Remediation Process</h2>
            <p>
              Our proven 5-step process for safely removing mold and restoring your home to a healthy environment.
            </p>
            <Link to="/mold-remediation-process" className="button-link secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>
              Read More →
            </Link>
          </article>

          <article className="card">
            <h2>Black Mold Detection and Removal in Tampa</h2>
            <p>
              Everything you need to know about Stachybotrys chartarum (black mold), its health risks, and professional removal.
            </p>
            <Link to="/black-mold-detection-tampa" className="button-link secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>
              Read More →
            </Link>
          </article>

          <article className="card">
            <h2>Mold Testing Cost in Tampa: What to Expect</h2>
            <p>
              Understanding mold testing pricing, what's included, and how to choose the right testing package for your situation.
            </p>
            <Link to="/mold-testing-cost-tampa" className="button-link secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>
              Read More →
            </Link>
          </article>

          <article className="card">
            <h2>Water Damage and Mold: The 48-Hour Window</h2>
            <p>
              Why Tampa's humid climate makes quick action critical after water damage, and how to prevent mold growth.
            </p>
            <Link to="/water-damage-mold-assessment-tampa" className="button-link secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>
              Read More →
            </Link>
          </article>

          <article className="card">
            <h2>Indoor Air Quality Testing: Why It Matters</h2>
            <p>
              How professional air quality testing can reveal hidden mold spores and other indoor pollutants affecting your health.
            </p>
            <Link to="/indoor-air-quality-testing-tampa" className="button-link secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>
              Read More →
            </Link>
          </article>
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '1rem', textAlign: 'center' }}>
          <h2>Need Professional Mold Testing or Removal?</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Our certified team is ready to help protect your Tampa home or business from mold.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/mold-testing-tampa" className="primary button-link">
              Schedule Testing
            </Link>
            <Link to="/mold-removal-tampa" className="secondary button-link">
              Get Removal Help
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
