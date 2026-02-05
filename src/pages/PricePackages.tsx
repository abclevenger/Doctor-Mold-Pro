import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { getCanonicalUrl } from '../config/seo'

export function PricePackages() {
  return (
    <>
      <PageMeta
        title="Mold Testing & Removal Price Packages | Doctor Mold Pro Tampa"
        description="Transparent pricing for mold testing, inspection, and removal services in Tampa. View our service packages and get a free consultation. Call (813) 776-5200."
        canonical={getCanonicalUrl('/price-packages')}
      />
      <section className="section">
        <h1>Mold Testing & Removal Price Packages</h1>
        <p className="section-lead">
          Transparent, upfront pricing for professional mold testing, inspection, and remediation services in Tampa Bay. All packages include detailed reports and expert guidance.
        </p>

        <div className="pricing-grid" style={{ marginTop: '2rem' }}>
          <div className="pricing-card">
            <h3>Basic Mold Inspection</h3>
            <div className="pricing-price">$299</div>
            <p className="pricing-tagline">Visual inspection and basic assessment</p>
            <ul>
              <li>Visual inspection of common problem areas</li>
              <li>Moisture meter readings</li>
              <li>Basic written report</li>
              <li>Recommendations for next steps</li>
            </ul>
            <Link to="/#contact" className="primary pricing-cta button-link">
              Schedule Inspection
            </Link>
          </div>

          <div className="pricing-card featured">
            <div className="badge-pill">Most Popular</div>
            <h3>Comprehensive Mold Testing</h3>
            <div className="pricing-price">$499</div>
            <p className="pricing-tagline">Full testing with lab analysis</p>
            <ul>
              <li>Complete visual inspection</li>
              <li>Air quality sampling (3 samples)</li>
              <li>Surface sampling (2 samples)</li>
              <li>Certified lab analysis</li>
              <li>Detailed written report</li>
              <li>Remediation recommendations</li>
            </ul>
            <Link to="/#contact" className="primary pricing-cta button-link">
              Schedule Testing
            </Link>
          </div>

          <div className="pricing-card">
            <h3>Premium Mold Testing</h3>
            <div className="pricing-price">$799</div>
            <p className="pricing-tagline">Complete assessment with post-remediation verification</p>
            <ul>
              <li>Everything in Comprehensive Testing</li>
              <li>Extended air sampling (5 samples)</li>
              <li>HVAC system inspection</li>
              <li>Infrared thermal imaging</li>
              <li>Post-remediation verification included</li>
              <li>Priority scheduling</li>
            </ul>
            <Link to="/#contact" className="primary pricing-cta button-link">
              Schedule Premium Testing
            </Link>
          </div>
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '1rem' }}>
          <h2>Mold Removal & Remediation Pricing</h2>
          <p style={{ marginBottom: '1.5rem', color: '#cbd5f5' }}>
            Mold removal pricing varies based on the extent of contamination, affected square footage, and complexity of the remediation. We provide detailed, itemized quotes before any work begins.
          </p>
          <ul className="bullet-list" style={{ marginBottom: '1.5rem' }}>
            <li><strong>Small areas</strong> (under 10 sq ft): Starting at $500</li>
            <li><strong>Medium areas</strong> (10-100 sq ft): $1,500 - $5,000</li>
            <li><strong>Large areas</strong> (100+ sq ft): Custom quote required</li>
            <li><strong>HVAC system cleaning</strong>: $800 - $2,500</li>
            <li><strong>Emergency response</strong>: Additional $200 fee</li>
          </ul>
          <p style={{ color: '#cbd5f5' }}>
            All remediation includes containment, removal, cleaning, and post-remediation testing. We provide insurance-ready documentation and work with your insurance company when applicable.
          </p>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h2>Get a Custom Quote</h2>
          <p style={{ marginBottom: '1.5rem', color: '#cbd5f5' }}>
            Every mold situation is unique. Contact us for a free consultation and detailed quote tailored to your specific needs.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/#contact" className="primary button-link">
              Request Free Quote
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
