import { PageMeta } from '../components/PageMeta'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { FAQAccordion } from '../components/FAQAccordion'
import { RelatedPages } from '../components/RelatedPages'
import { getCanonicalUrl } from '../config/seo'
import { Link } from 'react-router-dom'

export function MoldRemovalTampa() {
  const faqs = [
    {
      question: 'How much does mold removal cost in Tampa?',
      answer:
        'Mold removal costs vary based on the extent of contamination. Small areas typically cost $500-$2,000, medium areas range from $2,000-$6,000, and extensive remediation can cost $6,000-$15,000 or more. Professional testing first determines the exact scope and provides accurate cost estimates.',
    },
    {
      question: 'How long does mold remediation take?',
      answer:
        'The timeline depends on the extent of contamination. Small, contained areas typically take 1-2 days, while extensive remediation can take 1-2 weeks. The process includes containment, removal, drying, and verification testing to ensure complete removal.',
    },
    {
      question: 'Do I need to leave my home during mold removal?',
      answer:
        'For small, contained areas, you may be able to stay. Extensive remediation typically requires temporary relocation to ensure safety and allow proper containment. Your remediation company will advise based on your specific situation.',
    },
    {
      question: 'Will mold come back after removal?',
      answer:
        'If remediation is thorough and the underlying moisture problem is addressed, mold should not return. This is why fixing moisture sources and ensuring complete drying are critical steps in the remediation process. We provide a 12-month Mold-Free Warranty.',
    },
    {
      question: 'Is mold removal covered by insurance?',
      answer:
        'Many policies cover mold remediation when it results from covered water damage (like burst pipes or storm damage). Coverage varies by policy, so check with your insurance company. We provide insurance-ready documentation and can help with the claims process.',
    },
    {
      question: 'Can I remove mold myself?',
      answer:
        'DIY mold removal is not recommended, especially for extensive contamination or toxic molds. Professional remediation ensures proper containment, safe removal, thorough cleaning, and addresses underlying moisture problems. Improper removal can spread spores and create bigger problems.',
    },
  ]

  const relatedPages = [
    { slug: '/mold-remediation-process', title: 'Mold Remediation Process' },
    { slug: '/mold-removal-cost-tampa', title: 'Mold Removal Cost in Tampa' },
    { slug: '/is-black-mold-dangerous', title: 'Is Black Mold Dangerous?' },
    { slug: '/mold-after-water-leak', title: 'Mold After Water Leak' },
    { slug: '/does-insurance-cover-mold-florida', title: 'Does Insurance Cover Mold in Florida?' },
  ]

  return (
    <>
      <PageMeta
        title="Mold Removal Tampa, FL | Certified Remediation Services | Doctor Mold Pro"
        description="Professional mold removal and remediation in Tampa, FL. IICRC-certified, safe removal, 12-month warranty. 24/7 emergency service. Call (813) 776-5200."
        canonical={getCanonicalUrl('/mold-removal-tampa')}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Mold Removal Tampa', path: '/mold-removal-tampa' },
        ]}
      />
      <article className="seo-page">
        <div className="section">
          <h1>Professional Mold Removal & Remediation in Tampa, FL</h1>
          <p className="section-lead" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Certified mold removal and remediation services for Tampa Bay homes and businesses. Safe,
            thorough removal with a 12-month Mold-Free Warranty.
          </p>

          <section className="content-section">
            <h2>Why Professional Mold Removal Is Essential</h2>
            <p>
              Mold removal requires specialized knowledge, equipment, and techniques to ensure safe,
              complete removal without spreading spores throughout your home. In Tampa\'s humid
              climate, mold can grow quickly and extensively, making professional remediation
              essential. Attempting DIY removal can spread spores, expose you to health risks, and
              fail to address underlying moisture problems that cause mold to return.
            </p>
            <p>
              Our certified mold remediation process follows IICRC (Institute of Inspection,
              Cleaning and Restoration Certification) standards and NORMI guidelines. We use proper
              containment to prevent spore spread, HEPA filtration to capture airborne spores,
              specialized cleaning agents, and thorough drying to prevent recurrence. After
              remediation, clearance testing confirms your home is mold-free. Our 12-month Mold-Free
              Warranty provides peace of mind that the problem is fully resolved.
            </p>
          </section>

          <section className="content-section">
            <h2>Our 5-Step Remediation Process</h2>
            <p>
              <strong>Step 1: Inspection and Assessment</strong> - We thoroughly inspect your
              property to identify all affected areas, both visible and hidden. This includes visual
              inspection, moisture detection, air quality testing, and surface sampling to determine
              the type, extent, and scope of contamination.
            </p>
            <p>
              <strong>Step 2: Containment and Safety</strong> - Before removal begins, we establish
              proper containment using plastic barriers and negative air pressure to prevent spores
              from spreading to unaffected areas. HEPA air filtration captures airborne spores
              during the process.
            </p>
            <p>
              <strong>Step 3: Mold Removal and Cleaning</strong> - Contaminated porous materials like
              drywall and insulation are removed and properly disposed of. Non-porous surfaces are
              thoroughly cleaned using specialized agents and HEPA vacuuming. All affected areas are
              treated with antimicrobial solutions.
            </p>
            <p>
              <strong>Step 4: Drying and Moisture Control</strong> - Industrial dehumidifiers and air
              movers ensure all materials are completely dry. Moisture meters verify acceptable
              levels. The underlying moisture source that caused the problem is identified and fixed
              to prevent recurrence.
            </p>
            <p>
              <strong>Step 5: Verification and Clearance</strong> - Final clearance testing
              confirms spore counts have returned to acceptable levels and all mold has been
              removed. You\'ll receive a clearance report documenting that your home is safe and
              remediation was successful.
            </p>
          </section>

          <section className="content-section">
            <h2>Common Mold Removal Scenarios in Tampa</h2>
            <p>
              <strong>Water Damage Mold:</strong> After leaks, floods, or storms, mold can grow
              quickly. We provide emergency response to stop the problem before it spreads, then
              thorough remediation to remove all contamination.
            </p>
            <p>
              <strong>HVAC Mold:</strong> Mold in air conditioning systems spreads spores
              throughout your home. We safely remove contamination from air handlers, ductwork,
              and all system components, then verify clean air quality.
            </p>
            <p>
              <strong>Hidden Mold:</strong> Mold behind walls, in attics, or crawl spaces requires
              specialized detection and removal techniques. We locate all hidden growth and ensure
              complete removal.
            </p>
            <p>
              <strong>Black Mold (Stachybotrys):</strong> Toxic black mold requires extra
              precautions. We use enhanced containment, specialized removal techniques, and
              thorough verification to ensure safe, complete removal.
            </p>
          </section>

          <section className="content-section">
            <h2>Why Choose Doctor Mold Pro for Mold Removal</h2>
            <p>
              Doctor Mold Pro is certified by NORMI and IICRC, and licensed by Florida DBPR as
              both Mold Assessors and Mold Remediators. Our veteran-owned business combines
              disciplined processes with industry-leading expertise. We\'re committed to doing the
              job right the first time, with transparent communication throughout the process.
            </p>
            <p>
              We serve all of Tampa Bay including Tampa, St. Petersburg, Clearwater, Brandon,
              Riverview, and surrounding communities. Our team is available 24/7 for emergency
              situations. We provide detailed estimates, clear timelines, and insurance-ready
              documentation. Our A-rated BBB accreditation and 5-star Google reviews reflect our
              commitment to quality and customer satisfaction. Most importantly, we stand behind our
              work with a 12-month Mold-Free Warranty.
            </p>
          </section>
        </div>

        <section className="section faq-section">
          <h2>Frequently Asked Questions About Mold Removal in Tampa</h2>
          <FAQAccordion faqs={faqs} />
        </section>

        <section className="section cta-section">
          <div className="cta-section-inner">
            <h2>Need Professional Mold Removal?</h2>
            <p>
              Don\'t let mold continue to grow and spread. Professional remediation safely removes
              contamination and prevents recurrence. Our certified team is ready to help.
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
              <strong>24/7 Emergency Service:</strong> Available for urgent mold situations and water
              damage emergencies.
            </p>
          </div>
        </section>

        <RelatedPages pages={relatedPages} />
      </article>
    </>
  )
}
