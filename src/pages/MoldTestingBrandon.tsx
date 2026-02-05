import { PageMeta } from '../components/PageMeta'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { FAQAccordion } from '../components/FAQAccordion'
import { RelatedPages } from '../components/RelatedPages'
import { getCanonicalUrl } from '../config/seo'
import { Link } from 'react-router-dom'

export function MoldTestingBrandon() {
  const faqs = [
    {
      question: 'Do you provide mold testing in Brandon?',
      answer:
        'Yes, we provide comprehensive mold testing services throughout Brandon and all of Hillsborough County. Our certified inspectors serve Brandon and surrounding areas with the same high-quality testing available in Tampa.',
    },
    {
      question: 'What are common mold problems in Brandon?',
      answer:
        'Brandon\'s humid climate and older homes create ideal conditions for mold. Common issues include HVAC mold, attic mold from roof leaks, bathroom mold from high humidity, and mold after storms or flooding. Our testing identifies all problem areas.',
    },
  ]

  const relatedPages = [
    { slug: '/mold-testing-tampa', title: 'Mold Testing Tampa' },
    { slug: '/mold-removal-brandon', title: 'Mold Removal Brandon' },
    { slug: '/mold-testing-cost-tampa', title: 'Mold Testing Cost' },
  ]

  return (
    <>
      <PageMeta
        title="Mold Testing Brandon, FL | Certified Inspection Services | Doctor Mold Pro"
        description="Professional mold testing in Brandon, FL. Certified inspections, air quality sampling, and detailed reports. Serving Brandon and Hillsborough County. Call (813) 776-5200."
        canonical={getCanonicalUrl('/mold-testing-brandon')}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Mold Testing Brandon', path: '/mold-testing-brandon' },
        ]}
      />
      <article className="seo-page">
        <div className="section">
          <h1>Professional Mold Testing in Brandon, FL</h1>
          <p className="section-lead" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Certified mold testing and inspection services for Brandon homes and businesses. Serving
            Brandon and all of Hillsborough County with comprehensive testing and detailed
            reporting.
          </p>

          <section className="content-section">
            <h2>Mold Testing Services in Brandon</h2>
            <p>
              Brandon\'s humid climate and mix of older and newer homes create various conditions
              where mold can grow. Our certified mold testing services help Brandon homeowners
              identify hidden mold problems before they become extensive. We serve Brandon,
              including areas like Valrico, Bloomingdale, and surrounding Hillsborough County
              communities with comprehensive testing that includes visual inspection, moisture
              detection, air quality sampling, and laboratory analysis.
            </p>
            <p>
              Our Brandon mold testing includes examination of common problem areas like HVAC
              systems, attics, crawl spaces, and areas prone to moisture. We use advanced equipment
              to detect hidden problems, and all samples are analyzed by certified laboratories.
              You\'ll receive detailed reports within 48-72 hours with clear recommendations for
              any needed remediation.
            </p>
          </section>

          <section className="content-section">
            <h2>Why Choose Doctor Mold Pro for Brandon Mold Testing</h2>
            <p>
              Doctor Mold Pro is certified by NORMI and licensed by Florida DBPR. We serve all of
              Tampa Bay including Brandon, providing the same high-quality testing services
              available in Tampa. Our team understands Brandon\'s unique climate and construction
              challenges, and we\'re committed to providing accurate, reliable testing results.
            </p>
          </section>
        </div>

        <section className="section faq-section">
          <h2>Frequently Asked Questions About Mold Testing in Brandon</h2>
          <FAQAccordion faqs={faqs} />
        </section>

        <section className="section cta-section">
          <div className="cta-section-inner">
            <h2>Schedule Your Brandon Mold Testing</h2>
            <p>Protect your Brandon home with professional mold testing.</p>
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
