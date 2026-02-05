import { PageMeta } from '../components/PageMeta'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { FAQAccordion } from '../components/FAQAccordion'
import { RelatedPages } from '../components/RelatedPages'
import { getCanonicalUrl } from '../config/seo'
import { Link } from 'react-router-dom'

export function MoldTestingStPetersburg() {
  const faqs = [
    {
      question: 'Do you provide mold testing in St. Petersburg?',
      answer:
        'Yes, we provide comprehensive mold testing services throughout St. Petersburg and all of Pinellas County. Our certified inspectors serve St. Pete and surrounding areas with the same high-quality testing available in Tampa.',
    },
    {
      question: 'What are common mold problems in St. Petersburg?',
      answer:
        'St. Petersburg\'s coastal location and high humidity create ideal conditions for mold. Common issues include HVAC mold, attic mold, bathroom mold from high humidity, and mold after storms or flooding. Our testing identifies all problem areas.',
    },
  ]

  const relatedPages = [
    { slug: '/mold-testing-tampa', title: 'Mold Testing Tampa' },
    { slug: '/mold-removal-st-petersburg', title: 'Mold Removal St. Petersburg' },
    { slug: '/mold-testing-cost-tampa', title: 'Mold Testing Cost' },
  ]

  return (
    <>
      <PageMeta
        title="Mold Testing St. Petersburg, FL | Certified Inspection Services | Doctor Mold Pro"
        description="Professional mold testing in St. Petersburg, FL. Certified inspections, air quality sampling, and detailed reports. Serving St. Pete and Pinellas County. Call (813) 776-5200."
        canonical={getCanonicalUrl('/mold-testing-st-petersburg')}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Mold Testing St. Petersburg', path: '/mold-testing-st-petersburg' },
        ]}
      />
      <article className="seo-page">
        <div className="section">
          <h1>Professional Mold Testing in St. Petersburg, FL</h1>
          <p className="section-lead" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Certified mold testing and inspection services for St. Petersburg homes and businesses.
            Serving St. Pete and all of Pinellas County with comprehensive testing and detailed
            reporting.
          </p>

          <section className="content-section">
            <h2>Mold Testing Services in St. Petersburg</h2>
            <p>
              St. Petersburg\'s coastal location and high humidity levels create ideal conditions
              for mold growth. Our certified mold testing services help St. Petersburg homeowners
              identify hidden mold problems before they become extensive. We serve St. Pete,
              including downtown, historic neighborhoods, and surrounding Pinellas County areas with
              comprehensive testing that includes visual inspection, moisture detection, air quality
              sampling, and laboratory analysis.
            </p>
            <p>
              Our St. Petersburg mold testing includes examination of common problem areas like HVAC
              systems, attics, crawl spaces, and areas prone to moisture. We use advanced equipment
              to detect hidden problems, and all samples are analyzed by certified laboratories.
              You\'ll receive detailed reports within 48-72 hours with clear recommendations for
              any needed remediation.
            </p>
          </section>

          <section className="content-section">
            <h2>Why Choose Doctor Mold Pro for St. Petersburg Mold Testing</h2>
            <p>
              Doctor Mold Pro is certified by NORMI and licensed by Florida DBPR. We serve all of
              Tampa Bay including St. Petersburg, providing the same high-quality testing services
              available in Tampa. Our team understands St. Pete\'s unique climate and construction
              challenges, and we\'re committed to providing accurate, reliable testing results.
            </p>
          </section>
        </div>

        <section className="section faq-section">
          <h2>Frequently Asked Questions About Mold Testing in St. Petersburg</h2>
          <FAQAccordion faqs={faqs} />
        </section>

        <section className="section cta-section">
          <div className="cta-section-inner">
            <h2>Schedule Your St. Petersburg Mold Testing</h2>
            <p>Protect your St. Pete home with professional mold testing.</p>
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
