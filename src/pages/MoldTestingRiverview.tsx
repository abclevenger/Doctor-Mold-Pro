import { PageMeta } from '../components/PageMeta'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { FAQAccordion } from '../components/FAQAccordion'
import { RelatedPages } from '../components/RelatedPages'
import { getCanonicalUrl } from '../config/seo'
import { Link } from 'react-router-dom'

export function MoldTestingRiverview() {
  const faqs = [
    {
      question: 'Do you provide mold testing in Riverview?',
      answer:
        'Yes, we provide comprehensive mold testing services throughout Riverview and all of Hillsborough County. Our certified inspectors serve Riverview and surrounding areas with the same high-quality testing available in Tampa.',
    },
    {
      question: 'What are common mold problems in Riverview?',
      answer:
        'Riverview\'s humid climate and newer construction can create mold issues. Common problems include HVAC mold, bathroom mold from high humidity, and mold after storms or water damage. Our testing identifies all problem areas.',
    },
  ]

  const relatedPages = [
    { slug: '/mold-removal-riverview', title: 'Mold Removal Riverview' },
    { slug: '/mold-testing-tampa', title: 'Mold Testing Tampa' },
    { slug: '/mold-testing-brandon', title: 'Mold Testing Brandon' },
    { slug: '/signs-of-mold-in-house', title: 'Signs of Mold in House' },
    { slug: '/mold-testing-cost-tampa', title: 'Mold Testing Cost' },
  ]

  return (
    <>
      <PageMeta
        title="Mold Testing Riverview, FL | Certified Inspection Services | Doctor Mold Pro"
        description="Professional mold testing in Riverview, FL. Certified inspections, air quality sampling, and detailed reports. Serving Riverview and Hillsborough County. Call (813) 776-5200."
        canonical={getCanonicalUrl('/mold-testing-riverview')}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Mold Testing Riverview', path: '/mold-testing-riverview' },
        ]}
      />
      <article className="seo-page">
        <div className="section">
          <h1>Professional Mold Testing in Riverview, FL</h1>
          <p className="section-lead" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Certified mold testing and inspection services for Riverview homes and businesses.
            Serving Riverview and all of Hillsborough County with comprehensive testing and detailed
            reporting.
          </p>

          <section className="content-section">
            <h2>Mold Testing Services in Riverview</h2>
            <p>
              Riverview\'s growing community and humid climate create conditions where mold can
              develop. Our certified mold testing services help Riverview homeowners identify
              hidden mold problems before they become extensive. We serve Riverview and surrounding
              Hillsborough County areas with comprehensive testing that includes visual inspection,
              moisture detection, air quality sampling, and laboratory analysis.
            </p>
            <p>
              Our Riverview mold testing includes examination of common problem areas like HVAC
              systems, attics, crawl spaces, and areas prone to moisture. We use advanced equipment
              to detect hidden problems, and all samples are analyzed by certified laboratories.
              You\'ll receive detailed reports within 48-72 hours with clear recommendations for
              any needed remediation.
            </p>
          </section>

          <section className="content-section">
            <h2>Why Choose Doctor Mold Pro for Riverview Mold Testing</h2>
            <p>
              Doctor Mold Pro is certified by NORMI and licensed by Florida DBPR. We serve all of
              Tampa Bay including Riverview, providing the same high-quality testing services
              available in Tampa. Our team understands Riverview\'s unique climate and construction
              challenges, and we\'re committed to providing accurate, reliable testing results.
            </p>
          </section>
        </div>

        <section className="section faq-section">
          <h2>Frequently Asked Questions About Mold Testing in Riverview</h2>
          <FAQAccordion faqs={faqs} />
        </section>

        <section className="section cta-section">
          <div className="cta-section-inner">
            <h2>Schedule Your Riverview Mold Testing</h2>
            <p>Protect your Riverview home with professional mold testing.</p>
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
