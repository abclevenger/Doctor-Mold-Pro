import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { getCanonicalUrl } from '../config/seo'

export function Certifications() {
  return (
    <>
      <PageMeta
        title="Certifications & Licenses | Doctor Mold Pro Tampa"
        description="Doctor Mold Pro is NORMI and IICRC certified, Florida DBPR licensed, and veteran-owned. Learn about our professional certifications and credentials."
        canonical={getCanonicalUrl('/certifications')}
      />
      <section className="section">
        <h1>Our Certifications & Professional Credentials</h1>
        <p className="section-lead">
          Doctor Mold Pro is fully certified, licensed, and insured to provide professional mold testing and remediation services in Tampa Bay. We maintain the highest industry standards and continuing education requirements.
        </p>

        <div className="grid" style={{ marginTop: '2rem' }}>
          <article className="card">
            <h2>NORMI Certified</h2>
            <p>
              National Organization of Remediators and Mold Inspectors (NORMI) certification ensures our team follows industry best practices for mold inspection, testing, and remediation.
            </p>
            <p style={{ marginTop: '1rem', color: '#cbd5f5' }}>
              <strong>Certification includes:</strong>
            </p>
            <ul className="bullet-list">
              <li>Mold inspection protocols</li>
              <li>Remediation procedures</li>
              <li>Safety standards</li>
              <li>Post-remediation verification</li>
            </ul>
          </article>

          <article className="card">
            <h2>IICRC Certified</h2>
            <p>
              Institute of Inspection, Cleaning and Restoration Certification (IICRC) credentials demonstrate our expertise in water damage restoration and mold remediation.
            </p>
            <p style={{ marginTop: '1rem', color: '#cbd5f5' }}>
              <strong>IICRC Standards:</strong>
            </p>
            <ul className="bullet-list">
              <li>Water Damage Restoration (WRT)</li>
              <li>Applied Microbial Remediation (AMRT)</li>
              <li>Moisture Mapping</li>
              <li>Containment procedures</li>
            </ul>
          </article>

          <article className="card">
            <h2>Florida DBPR Licensed</h2>
            <p>
              Licensed by the Florida Department of Business and Professional Regulation (DBPR) to perform mold assessment and remediation services throughout Florida.
            </p>
            <p style={{ marginTop: '1rem', color: '#cbd5f5' }}>
              <strong>License ensures:</strong>
            </p>
            <ul className="bullet-list">
              <li>State compliance</li>
              <li>Proper insurance coverage</li>
              <li>Continuing education</li>
              <li>Professional accountability</li>
            </ul>
          </article>

          <article className="card">
            <h2>Veteran-Owned Business</h2>
            <p>
              Doctor Mold Pro is a proud veteran-owned business, bringing military precision, discipline, and commitment to excellence to every project.
            </p>
            <p style={{ marginTop: '1rem', color: '#cbd5f5' }}>
              <strong>Our values:</strong>
            </p>
            <ul className="bullet-list">
              <li>Attention to detail</li>
              <li>Clear communication</li>
              <li>Mission-focused approach</li>
              <li>Integrity and transparency</li>
            </ul>
          </article>

          <article className="card">
            <h2>Fully Insured</h2>
            <p>
              We carry comprehensive general liability and workers' compensation insurance to protect our clients and team members on every job.
            </p>
            <p style={{ marginTop: '1rem', color: '#cbd5f5' }}>
              <strong>Coverage includes:</strong>
            </p>
            <ul className="bullet-list">
              <li>General liability insurance</li>
              <li>Workers' compensation</li>
              <li>Professional liability</li>
              <li>Bonded for your protection</li>
            </ul>
          </article>

          <article className="card">
            <h2>Google Guaranteed</h2>
            <p>
              We're backed by Google Guarantee, providing additional protection and peace of mind for our customers.
            </p>
            <p style={{ marginTop: '1rem', color: '#cbd5f5' }}>
              <strong>Benefits:</strong>
            </p>
            <ul className="bullet-list">
              <li>5.0 star rating</li>
              <li>Verified reviews</li>
              <li>Google-backed guarantee</li>
              <li>Customer protection</li>
            </ul>
          </article>
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '1rem', textAlign: 'center' }}>
          <h2>Why Certifications Matter</h2>
          <p style={{ marginBottom: '1.5rem', color: '#cbd5f5', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            Professional certifications ensure that mold testing and remediation are performed correctly, safely, and according to industry standards. When you choose Doctor Mold Pro, you're choosing certified expertise backed by years of training and experience.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/#contact" className="primary button-link">
              Schedule Certified Service
            </Link>
            <a href="tel:8137765200" className="secondary button-link">
              Call (813) 776-5200
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
