import { PageMeta } from '../components/PageMeta'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { FAQAccordion } from '../components/FAQAccordion'
import { RelatedPages } from '../components/RelatedPages'
import { getCanonicalUrl } from '../config/seo'
import { Link } from 'react-router-dom'

export function MoldRemovalStPetersburg() {
  const faqs = [
    {
      question: 'Do you provide mold removal in St. Petersburg?',
      answer:
        'Yes, we provide professional mold removal and remediation services throughout St. Petersburg and Pinellas County. Our certified team handles all types of mold removal with IICRC-certified remediation.',
    },
  ]

  const relatedPages = [
    { slug: '/mold-testing-st-petersburg', title: 'Mold Testing St. Petersburg' },
    { slug: '/mold-removal-tampa', title: 'Mold Removal Tampa' },
    { slug: '/mold-removal-clearwater', title: 'Mold Removal Clearwater' },
    { slug: '/mold-remediation-process', title: 'Mold Remediation Process' },
    { slug: '/mold-removal-cost-tampa', title: 'Mold Removal Cost' },
  ]

  return (
    <>
      <PageMeta
        title="Mold Removal St. Petersburg, FL | Certified Remediation Services | Doctor Mold Pro"
        description="Professional mold removal and remediation in St. Petersburg, FL. IICRC-certified, safe removal, 12-month warranty. Serving St. Pete and Pinellas County. Call (813) 776-5200."
        canonical={getCanonicalUrl('/mold-removal-st-petersburg')}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Mold Removal St. Petersburg', path: '/mold-removal-st-petersburg' },
        ]}
      />
      <article className="seo-page">
        <div className="section">
          <h1>Professional Mold Removal & Remediation in St. Petersburg, FL</h1>
          <p className="section-lead" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Certified mold removal and remediation services for St. Petersburg homes and
            businesses. Safe, thorough removal with a 12-month Mold-Free Warranty. Serving St. Pete
            and Pinellas County.
          </p>

          <section className="content-section">
            <h2>Mold Removal Services in St. Petersburg</h2>
            <p>
              St. Petersburg\'s coastal climate creates conditions where mold can grow quickly. Our
              certified mold removal services provide safe, thorough remediation for St.
              Petersburg homes and businesses. We serve St. Pete and all of Pinellas County with
              IICRC-certified remediation that follows industry best practices and includes proper
              containment, thorough removal, and clearance testing.
            </p>
          </section>

          <section className="content-section">
            <h2>Why Choose Doctor Mold Pro for St. Petersburg Mold Removal</h2>
            <p>
              Doctor Mold Pro is certified by NORMI and IICRC, and licensed by Florida DBPR. We
              serve all of Tampa Bay including St. Petersburg, providing the same high-quality
              remediation services available in Tampa. We stand behind our work with a 12-month
              Mold-Free Warranty.
            </p>
          </section>
        </div>

        <section className="section faq-section">
          <h2>Frequently Asked Questions About Mold Removal in St. Petersburg</h2>
          <FAQAccordion faqs={faqs} />
        </section>

        <section className="section cta-section">
          <div className="cta-section-inner">
            <h2>Need Mold Removal in St. Petersburg?</h2>
            <p>Professional remediation safely removes contamination and prevents recurrence.</p>
            <div className="cta-buttons">
              <a href="tel:8137765200" className="primary button-link">
                Call (813) 776-5200
              </a>
              <Link to="/#contact" className="secondary button-link">
                Request a Consultation
              </Link>
            </div>
          </div>
        </section>

        <RelatedPages pages={relatedPages} />
      </article>
    </>
  )
}
