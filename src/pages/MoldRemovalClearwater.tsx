import { PageMeta } from '../components/PageMeta'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { FAQAccordion } from '../components/FAQAccordion'
import { RelatedPages } from '../components/RelatedPages'
import { getCanonicalUrl } from '../config/seo'
import { Link } from 'react-router-dom'

export function MoldRemovalClearwater() {
  const faqs = [
    {
      question: 'Do you provide mold removal in Clearwater?',
      answer:
        'Yes, we provide professional mold removal and remediation services throughout Clearwater and Pinellas County. Our certified team handles all types of mold removal, from small contained areas to extensive contamination.',
    },
    {
      question: 'How much does mold removal cost in Clearwater?',
      answer:
        'Mold removal costs in Clearwater vary based on the extent of contamination, typically ranging from $500-$15,000 or more. We provide detailed estimates after professional testing determines the scope of work needed.',
    },
    {
      question: 'What areas of Clearwater do you serve?',
      answer:
        'We serve all of Clearwater including downtown, beachside areas, and inland neighborhoods, as well as surrounding communities like Dunedin, Safety Harbor, Largo, and throughout Pinellas County.',
    },
  ]

  const relatedPages = [
    { slug: '/mold-testing-clearwater', title: 'Mold Testing Clearwater' },
    { slug: '/mold-removal-tampa', title: 'Mold Removal Tampa' },
    { slug: '/mold-removal-st-petersburg', title: 'Mold Removal St. Petersburg' },
    { slug: '/mold-remediation-process', title: 'Mold Remediation Process' },
    { slug: '/mold-removal-cost-tampa', title: 'Mold Removal Cost' },
  ]

  return (
    <>
      <PageMeta
        title="Mold Removal Clearwater, FL | Certified Remediation Services | Doctor Mold Pro"
        description="Professional mold removal and remediation in Clearwater, FL. IICRC-certified, safe removal, 12-month warranty. Serving Clearwater and Pinellas County. Call (813) 776-5200."
        canonical={getCanonicalUrl('/mold-removal-clearwater')}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Mold Removal Clearwater', path: '/mold-removal-clearwater' },
        ]}
      />
      <article className="seo-page">
        <div className="section">
          <h1>Professional Mold Removal & Remediation in Clearwater, FL</h1>
          <p className="section-lead" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Certified mold removal and remediation services for Clearwater homes and businesses.
            Safe, thorough removal with a 12-month Mold-Free Warranty. Serving Clearwater and
            Pinellas County.
          </p>

          <section className="content-section">
            <h2>Mold Removal Services in Clearwater</h2>
            <p>
              Clearwater\'s coastal climate and high humidity create conditions where mold can grow
              quickly and extensively. Our certified mold removal services provide safe, thorough
              remediation for Clearwater homes and businesses. We serve Clearwater, Dunedin, Safety
              Harbor, Largo, and all of Pinellas County with IICRC-certified remediation that
              follows industry best practices.
            </p>
            <p>
              Our Clearwater mold removal process includes proper containment to prevent spore
              spread, HEPA filtration, thorough removal of contaminated materials, antimicrobial
              treatment, complete drying, and clearance testing. We address the underlying moisture
              problems that cause mold to prevent recurrence. Our 12-month Mold-Free Warranty
              provides peace of mind that the problem is fully resolved.
            </p>
          </section>

          <section className="content-section">
            <h2>Common Mold Removal Scenarios in Clearwater</h2>
            <p>
              <strong>Coastal Humidity Mold:</strong> High humidity levels near the Gulf can cause
              mold in attics, crawl spaces, and poorly ventilated areas. We provide thorough
              remediation and address ventilation issues.
            </p>
            <p>
              <strong>Storm Damage Mold:</strong> After hurricanes or heavy storms, water damage
              can lead to rapid mold growth. We provide emergency response and complete remediation.
            </p>
            <p>
              <strong>HVAC Mold:</strong> Air conditioning systems in Clearwater work hard and can
              develop condensation issues leading to mold. We safely remove contamination from all
              system components.
            </p>
            <p>
              <strong>Older Home Mold:</strong> Many Clearwater homes have older construction that
              may trap moisture. We understand these challenges and provide effective remediation
              tailored to your home\'s specific needs.
            </p>
          </section>

          <section className="content-section">
            <h2>Why Choose Doctor Mold Pro for Clearwater Mold Removal</h2>
            <p>
              Doctor Mold Pro is certified by NORMI and IICRC, and licensed by Florida DBPR. We
              serve all of Tampa Bay including Clearwater, providing the same high-quality
              remediation services available in Tampa. Our team understands Clearwater\'s unique
              climate and construction challenges.
            </p>
            <p>
              We provide detailed estimates, clear timelines, and insurance-ready documentation. Our
              A-rated BBB accreditation and 5-star reviews reflect our commitment to quality. Most
              importantly, we stand behind our work with a 12-month Mold-Free Warranty, ensuring
              your Clearwater home stays mold-free after remediation.
            </p>
          </section>
        </div>

        <section className="section faq-section">
          <h2>Frequently Asked Questions About Mold Removal in Clearwater</h2>
          <FAQAccordion faqs={faqs} />
        </section>

        <section className="section cta-section">
          <div className="cta-section-inner">
            <h2>Need Mold Removal in Clearwater?</h2>
            <p>
              Don\'t let mold continue to grow. Professional remediation safely removes contamination
              and prevents recurrence. Our certified team serves Clearwater and all of Pinellas
              County.
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
              <strong>Serving Clearwater & Pinellas County:</strong> Available for mold removal
              throughout Clearwater and surrounding communities.
            </p>
          </div>
        </section>

        <RelatedPages pages={relatedPages} />
      </article>
    </>
  )
}
