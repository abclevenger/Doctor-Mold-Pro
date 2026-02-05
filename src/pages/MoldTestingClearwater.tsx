import { PageMeta } from '../components/PageMeta'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { FAQAccordion } from '../components/FAQAccordion'
import { RelatedPages } from '../components/RelatedPages'
import { getCanonicalUrl } from '../config/seo'
import { Link } from 'react-router-dom'

export function MoldTestingClearwater() {
  const faqs = [
    {
      question: 'Do you provide mold testing in Clearwater?',
      answer:
        'Yes, we provide comprehensive mold testing services throughout Clearwater and all of Pinellas County. Our certified inspectors are familiar with the unique challenges of Clearwater homes, including coastal humidity and older construction.',
    },
    {
      question: 'How much does mold testing cost in Clearwater?',
      answer:
        'Mold testing costs in Clearwater are the same as Tampa, ranging from $249-$599 depending on the package. We offer the same comprehensive testing services with certified laboratory analysis and detailed reporting.',
    },
    {
      question: 'What are common mold problems in Clearwater?',
      answer:
        'Clearwater\'s coastal location and high humidity create ideal conditions for mold. Common issues include HVAC mold, attic mold from roof leaks, bathroom mold from high humidity, and mold after storms or flooding. Our testing identifies all problem areas.',
    },
  ]

  const relatedPages = [
    { slug: '/mold-testing-tampa', title: 'Mold Testing Tampa' },
    { slug: '/mold-removal-clearwater', title: 'Mold Removal Clearwater' },
    { slug: '/mold-testing-cost-tampa', title: 'Mold Testing Cost' },
    { slug: '/what-does-a-mold-inspection-include', title: 'What Does a Mold Inspection Include?' },
  ]

  return (
    <>
      <PageMeta
        title="Mold Testing Clearwater, FL | Certified Inspection Services | Doctor Mold Pro"
        description="Professional mold testing in Clearwater, FL. Certified inspections, air quality sampling, and detailed reports. Serving Clearwater and Pinellas County. Call (813) 776-5200."
        canonical={getCanonicalUrl('/mold-testing-clearwater')}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Mold Testing Clearwater', path: '/mold-testing-clearwater' },
        ]}
      />
      <article className="seo-page">
        <div className="section">
          <h1>Professional Mold Testing in Clearwater, FL</h1>
          <p className="section-lead" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Certified mold testing and inspection services for Clearwater homes and businesses.
            Serving Clearwater, Dunedin, Safety Harbor, and all of Pinellas County.
          </p>

          <section className="content-section">
            <h2>Mold Testing Services in Clearwater</h2>
            <p>
              Clearwater\'s coastal location and high humidity levels create ideal conditions for
              mold growth year-round. Our certified mold testing services help Clearwater homeowners
              identify hidden mold problems before they become extensive. We serve Clearwater,
              Dunedin, Safety Harbor, Largo, and all of Pinellas County with comprehensive testing
              that includes visual inspection, moisture detection, air quality sampling, and
              laboratory analysis.
            </p>
            <p>
              Our Clearwater mold testing includes examination of common problem areas like HVAC
              systems, attics, crawl spaces, bathrooms, and areas prone to moisture. We use
              advanced equipment including thermal imaging and moisture meters to detect hidden
              problems. All samples are analyzed by certified laboratories, and you\'ll receive
              detailed reports within 48-72 hours with clear recommendations for any needed
              remediation.
            </p>
          </section>

          <section className="content-section">
            <h2>Common Mold Issues in Clearwater</h2>
            <p>
              Clearwater\'s proximity to the Gulf of Mexico means high humidity levels that can
              contribute to mold growth, especially in poorly ventilated areas. Older homes common
              in Clearwater may have construction features that trap moisture. Coastal storms can
              cause water damage that leads to mold. Air conditioning systems work hard in
              Clearwater\'s climate and can develop condensation issues. Our testing identifies
              these and other Clearwater-specific mold problems.
            </p>
            <p>
              We\'re familiar with Clearwater neighborhoods and the unique challenges of coastal
              Florida homes. Whether you\'re in downtown Clearwater, beachside areas, or inland
              neighborhoods, our certified inspectors provide thorough testing tailored to your
              property\'s specific needs.
            </p>
          </section>

          <section className="content-section">
            <h2>Why Choose Doctor Mold Pro for Clearwater Mold Testing</h2>
            <p>
              Doctor Mold Pro is certified by NORMI and licensed by Florida DBPR. We serve all of
              Tampa Bay including Clearwater, providing the same high-quality testing services
              available in Tampa. Our team understands Clearwater\'s unique climate and
              construction challenges, and we\'re committed to providing accurate, reliable testing
              results.
            </p>
            <p>
              We offer flexible scheduling for Clearwater appointments and can typically schedule
              inspections within 1-2 business days. All testing includes certified laboratory
              analysis, detailed reporting, and expert consultation. If mold is detected, we can
              provide remediation services or coordinate with trusted local contractors. Our
              commitment to quality and customer service extends throughout all of Tampa Bay.
            </p>
          </section>
        </div>

        <section className="section faq-section">
          <h2>Frequently Asked Questions About Mold Testing in Clearwater</h2>
          <FAQAccordion faqs={faqs} />
        </section>

        <section className="section cta-section">
          <div className="cta-section-inner">
            <h2>Schedule Your Clearwater Mold Testing</h2>
            <p>
              Protect your Clearwater home with professional mold testing. Our certified inspectors
              are ready to help.
            </p>
            <div className="cta-buttons">
              <a href="tel:8137765200" className="primary button-link">
                Call (813) 776-5200
              </a>
              <Link to="/#contact" className="secondary button-link">
                Request a Consultation
              </Link>
            </div>
            <p className="cta-note">
              <strong>Serving Clearwater & Pinellas County:</strong> We provide mold testing
              throughout Clearwater, Dunedin, Safety Harbor, Largo, and surrounding areas.
            </p>
          </div>
        </section>

        <RelatedPages pages={relatedPages} />
      </article>
    </>
  )
}
