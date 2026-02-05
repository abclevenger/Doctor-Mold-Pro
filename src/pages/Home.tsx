import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { getCanonicalUrl } from '../config/seo'
import { ContactForm } from '../components/ContactForm'

export function Home() {
  return (
    <>
      <PageMeta
        title="Mold Testing & Removal in Tampa, FL | Doctor Mold Pro"
        description="Certified mold testing and removal in Tampa, FL. Fast inspections, IICRC-certified remediation, 24/7 emergency service. Free consultations. Call (813) 776-5200."
        canonical={getCanonicalUrl('/')}
      />
      <section className="hero">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="eyebrow">Certified Mold Testing &amp; Remediation Services in Tampa</p>
              <h1>Don&apos;t Let Mold Take Over.</h1>
              <p className="hero-subtitle">
                Fast, certified, and trusted mold inspection, testing, and removal for Tampa homes
                and businesses.
              </p>
              <div className="hero-actions">
                <Link to="/#contact" className="primary button-link">
                  Schedule a Consultation
                </Link>
                <a href="tel:8137765200" className="secondary button-link">
                  Call Now
                </a>
              </div>
              <div className="hero-badges">
                <div className="badge">
                  <span className="badge-label">Google</span>
                  <span className="badge-value">5.0</span>
                  <span className="badge-stars">★★★★★</span>
                </div>
                <p className="badge-note">Fully backed by Google Guarantee</p>
                <div className="veteran-badge">
                  <img
                    src="/veteran-owned-badge.png"
                    alt="Veteran Owned Business"
                    width="120"
                    height="120"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="hero-media">
              <img
                src="/inspection-living-room.png"
                alt="Technician performing mold inspection in a Tampa living room"
                loading="eager"
                width="600"
                height="400"
              />
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <h2>Meet the Founder &amp; CEO</h2>
          <p className="section-lead">
            Welcome to Doctor Mold Pro, where your health and home are our top priorities. Founded
            by Ari Figueroa, we specialize in safeguarding your environment from the dangers of
            mold with expert inspection, testing, and remediation services.
          </p>

          <div className="founder-section">
            <div className="founder-image-wrapper">
              <img
                src="/ari-figueroa-headshot.png"
                alt="Ari Figueroa, Founder & CEO of Doctor Mold Pro"
                className="founder-headshot"
                width="300"
                height="300"
                loading="lazy"
              />
              <div className="veteran-badge-inline">
                <img
                  src="/veteran-owned-badge.png"
                  alt="Veteran Owned Business"
                  width="100"
                  height="100"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="founder-content">
              <h3>Our Mission</h3>
              <p>
                Ari and our dedicated team are committed to delivering comprehensive mold detection
                and remediation solutions that exceed industry standards, ensuring your peace of
                mind and long‑term well‑being.
              </p>
              <h3>Why homeowners trust Doctor Mold Pro</h3>
              <ul className="bullet-list">
                <li>Expert leadership from a seasoned, certified mold professional</li>
                <li>Comprehensive services from inspections to personalized remediation plans</li>
                <li>Customer‑centric approach rooted in safety, clarity, and integrity</li>
                <li>Advanced technology for precise testing and long‑lasting results</li>
                <li>Veteran-owned business committed to excellence and service</li>
              </ul>
            </div>
          </div>

          <div className="two-column" style={{ marginTop: '2rem' }}>
            <div>
              <img
                src="/service-van.png"
                alt="Doctor Mold Pro service van"
                className="van-image"
                loading="lazy"
                width="360"
                height="270"
              />
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <h2>Our Testing Services Include:</h2>
          <div className="grid">
            <div className="card">
              <h3>Residential Mold Inspections</h3>
              <p>Thorough whole-home inspections tailored to Tampa&apos;s climate and construction.</p>
              <Link to="/residential-mold-inspection-tampa" className="button-link secondary" style={{ marginTop: '0.75rem', display: 'inline-block' }}>
                Learn More →
              </Link>
            </div>
            <div className="card">
              <h3>Commercial Mold Inspection</h3>
              <p>Protect your employees and customers with detailed reporting and documentation.</p>
              <Link to="/commercial-mold-inspection-tampa" className="button-link secondary" style={{ marginTop: '0.75rem', display: 'inline-block' }}>
                Learn More →
              </Link>
            </div>
            <div className="card">
              <h3>Indoor Air Quality Testing</h3>
              <p>Lab-tested air samples to uncover hidden mold spores and contaminants.</p>
              <Link to="/indoor-air-quality-testing-tampa" className="button-link secondary" style={{ marginTop: '0.75rem', display: 'inline-block' }}>
                Learn More →
              </Link>
            </div>
            <div className="card">
              <h3>Black Mold Detection</h3>
              <p>Targeted testing and safe remediation for toxic black mold.</p>
              <Link to="/black-mold-detection-tampa" className="button-link secondary" style={{ marginTop: '0.75rem', display: 'inline-block' }}>
                Learn More →
              </Link>
            </div>
            <div className="card">
              <h3>Water Damage Mold Assessment</h3>
              <p>Post-leak and post-flood evaluations to prevent long-term damage.</p>
              <Link to="/water-damage-mold-assessment-tampa" className="button-link secondary" style={{ marginTop: '0.75rem', display: 'inline-block' }}>
                Learn More →
              </Link>
            </div>
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link to="/mold-testing-tampa" className="primary button-link">
              Learn More About Mold Testing
            </Link>
          </div>
        </section>

        <section className="section copy-block">
          <div className="two-column">
            <div>
              <h2>Mold isn&apos;t always visible, but it&apos;s never harmless.</h2>
              <p>
                Even hidden mold can impact your air quality, your property, and your health. At
                Doctor Mold Pro, we offer comprehensive mold testing and inspection services
                tailored for Tampa&apos;s climate and construction.
              </p>
            </div>
            <div>
              <p>
                Using advanced equipment—like infrared cameras, air quality monitors, and lab-tested
                surface samples—we find mold where others miss it. From visible growth to hidden
                leaks, we track the source and build a treatment plan that lasts.
              </p>
            </div>
          </div>
        </section>

        <section className="section highlight">
          <h2>Fast. Certified. Trusted.</h2>
          <p className="section-lead">
            Mold spreads quickly in Florida&apos;s warm, humid climate—especially in places like
            Tampa. We act fast to protect your health and your home with expert mold testing and
            remediation services.
          </p>
        </section>

        <section className="section" id="pricing">
          <h2>Certified Mold Testing Packages</h2>
          <p className="section-lead">
            Accurate testing backed by certified labs — with clear, upfront pricing and results in
            as little as 48 hours.
          </p>

          <div className="pricing-grid">
            <article className="pricing-card">
              <h3>Essential Package</h3>
              <p className="pricing-price">$249</p>
              <p className="pricing-tagline">Peace of mind testing for your home.</p>
              <ul>
                <li>Complete visual inspection</li>
                <li>Professional moisture detection scan</li>
                <li>2 air quality samples (interior vs. exterior baseline)</li>
                <li>Thermal imaging of suspected areas</li>
                <li>Lab analysis by certified third-party lab</li>
                <li>Detailed digital report within 48 hours</li>
                <li>Expert consultation on findings</li>
              </ul>
              <Link to="/#contact" className="primary pricing-cta button-link">
                Get Started
              </Link>
            </article>

            <article className="pricing-card featured">
              <div className="badge-pill">Most Popular</div>
              <h3>Comprehensive Package</h3>
              <p className="pricing-price">$399</p>
              <p className="pricing-tagline">
                Deep diagnostics with HVAC &amp; surface sampling — ideal if mold is suspected.
              </p>
              <ul>
                <li>4 total air samples</li>
                <li>2 surface samples from visible growth areas</li>
                <li>HVAC inspection &amp; testing</li>
                <li>Crawl space / attic moisture mapping</li>
                <li>Same-day emergency service</li>
                <li>Insurance-ready documentation</li>
                <li>30-day follow-up consultation</li>
                <li>Remediation protocol if mold detected</li>
              </ul>
              <Link to="/#contact" className="primary pricing-cta button-link">
                Get Started
              </Link>
            </article>

            <article className="pricing-card">
              <h3>Premium Protection</h3>
              <p className="pricing-price">$599</p>
              <p className="pricing-tagline">Complete property health assessment.</p>
              <ul>
                <li>6 air samples</li>
                <li>3 surface samples</li>
                <li>VOC testing, bacteria &amp; allergen screening</li>
                <li>Moisture intrusion &amp; behind-wall cavity inspection</li>
                <li>Post-remediation verification testing (within 90 days)</li>
                <li>Priority same-day service</li>
                <li>1-year mold prevention consultation</li>
              </ul>
              <Link to="/#contact" className="primary pricing-cta button-link">
                Get Started
              </Link>
            </article>

            <article className="pricing-card">
              <h3>Commercial / Multi-Unit</h3>
              <p className="pricing-price">Custom</p>
              <p className="pricing-tagline">
                Tailored testing programs for businesses, HOAs, and landlords.
              </p>
              <ul>
                <li>Multi-unit discounted rates</li>
                <li>Flexible / after-hours scheduling</li>
                <li>Bulk testing discounts</li>
                <li>Annual inspection programs</li>
                <li>Tenant-ready documentation</li>
                <li>ADA &amp; OSHA compliance reporting</li>
              </ul>
              <Link to="/#contact" className="secondary pricing-cta button-link">
                Request Custom Quote
              </Link>
            </article>
          </div>
        </section>

        <section className="section" id="process">
          <h2>Our Proven 5-Step Mold Testing &amp; Treatment Process</h2>
          <p className="section-lead" style={{ marginBottom: '2rem' }}>
            <Link to="/mold-remediation-process" style={{ color: '#7dd3fc' }}>
              Learn more about our detailed remediation process →
            </Link>
          </p>
          <ol className="process-list">
            <li>
              <h3>Step 1: Inspect &amp; Detect</h3>
              <p>We scan for mold and moisture using advanced tools.</p>
            </li>
            <li>
              <h3>Step 2: Sample &amp; Test</h3>
              <p>We collect samples and send them to a certified lab.</p>
            </li>
            <li>
              <h3>Step 3: Plan &amp; Quote</h3>
              <p>You&apos;ll get a clear plan with up-front pricing.</p>
            </li>
            <li>
              <h3>Step 4: Remove &amp; Restore</h3>
              <p>We safely remove mold and repair affected areas.</p>
            </li>
            <li>
              <h3>Step 5: Re-Test &amp; Verify</h3>
              <p>We test again to ensure your home is mold-free.</p>
            </li>
          </ol>
        </section>

        <section className="section warranty">
          <h2>Our Mold-Free Warranty</h2>
          <p>
            We stand by our work with a 12-month Mold-Free Guarantee. If mold returns in the
            treated area due to improper remediation, we&apos;ll return and fix it—free of charge.
          </p>
        </section>

        <section className="section certifications-section" id="certifications">
          <h2>Certified Mold Experts &amp; Accreditations</h2>
          <p className="section-lead">
            Doctor Mold Pro is backed by industry‑leading training, state licensing, and
            third‑party certifications—so you know your home or business is in qualified hands.
          </p>

          <div className="certifications-grid">
            <article className="certification-card">
              <div className="certification-logo">
                <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="180" height="60" rx="4" fill="rgba(15, 23, 42, 0.8)" />
                  <circle cx="30" cy="30" r="22" stroke="#3b82f6" strokeWidth="2.5" fill="rgba(59, 130, 246, 0.1)" />
                  <path d="M15 30 Q22 20, 30 30 Q38 40, 45 30" stroke="#34d399" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M18 32 Q25 22, 33 32 Q41 42, 48 32" stroke="#a78bfa" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <text x="60" y="25" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="700" fill="#3b82f6" letterSpacing="2">NORMI</text>
                  <text x="60" y="42" fontFamily="Arial, sans-serif" fontSize="8" fill="#94a3b8" letterSpacing="1">NATIONAL ORGANIZATION</text>
                </svg>
              </div>
              <h3>N.O.R.M.I. Mold Assessor</h3>
              <p>
                Accredited certification from the National Organization of Remediators &amp;
                Microbial Inspectors to conduct mold inspections and testing in residential and
                commercial structures.
              </p>
            </article>
            <article className="certification-card">
              <div className="certification-logo">
                <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="180" height="60" rx="4" fill="rgba(15, 23, 42, 0.8)" />
                  <circle cx="30" cy="30" r="22" stroke="#3b82f6" strokeWidth="2.5" fill="rgba(59, 130, 246, 0.1)" />
                  <path d="M15 30 Q22 20, 30 30 Q38 40, 45 30" stroke="#34d399" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M18 32 Q25 22, 33 32 Q41 42, 48 32" stroke="#a78bfa" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <text x="60" y="25" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="700" fill="#3b82f6" letterSpacing="2">NORMI</text>
                  <text x="60" y="42" fontFamily="Arial, sans-serif" fontSize="8" fill="#94a3b8" letterSpacing="1">NATIONAL ORGANIZATION</text>
                </svg>
              </div>
              <h3>N.O.R.M.I. Mold Remediator</h3>
              <p>
                Certified to perform all remediation procedures and protocols per N.O.R.M.I.
                guidelines and standards to return properties to pre‑loss condition.
              </p>
            </article>
            <article className="certification-card">
              <div className="certification-logo">
                <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="180" height="60" rx="4" fill="rgba(15, 23, 42, 0.8)" />
                  <defs>
                    <radialGradient id="iicrcGradient" cx="50%" cy="30%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#84cc16" />
                    </radialGradient>
                  </defs>
                  <circle cx="30" cy="30" r="22" fill="url(#iicrcGradient)" />
                  <circle cx="30" cy="25" r="2" fill="rgba(255, 255, 255, 0.9)" />
                  <circle cx="25" cy="28" r="1.5" fill="rgba(255, 255, 255, 0.8)" />
                  <circle cx="35" cy="28" r="1.5" fill="rgba(255, 255, 255, 0.8)" />
                  <circle cx="22" cy="32" r="1.5" fill="rgba(255, 255, 255, 0.8)" />
                  <circle cx="38" cy="32" r="1.5" fill="rgba(255, 255, 255, 0.8)" />
                  <circle cx="28" cy="35" r="1.5" fill="rgba(255, 255, 255, 0.7)" />
                  <circle cx="32" cy="35" r="1.5" fill="rgba(255, 255, 255, 0.7)" />
                  <circle cx="30" cy="38" r="1" fill="rgba(255, 255, 255, 0.6)" />
                  <text x="60" y="25" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#06b6d4" letterSpacing="3">IICRC</text>
                  <text x="60" y="42" fontFamily="Arial, sans-serif" fontSize="7" fill="#94a3b8">INSTITUTE OF INSPECTION</text>
                </svg>
              </div>
              <h3>Applied Microbial Remediation</h3>
              <p>
                Continuing education through IICRC‑aligned training to handle microbial
                amplification and complex contamination scenarios with confidence.
              </p>
            </article>
            <article className="certification-card">
              <div className="certification-logo">
                <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="180" height="60" rx="4" fill="rgba(15, 23, 42, 0.8)" />
                  <defs>
                    <radialGradient id="iicrcGradient2" cx="50%" cy="30%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#84cc16" />
                    </radialGradient>
                  </defs>
                  <circle cx="30" cy="30" r="22" fill="url(#iicrcGradient2)" />
                  <circle cx="30" cy="25" r="2" fill="rgba(255, 255, 255, 0.9)" />
                  <circle cx="25" cy="28" r="1.5" fill="rgba(255, 255, 255, 0.8)" />
                  <circle cx="35" cy="28" r="1.5" fill="rgba(255, 255, 255, 0.8)" />
                  <circle cx="22" cy="32" r="1.5" fill="rgba(255, 255, 255, 0.8)" />
                  <circle cx="38" cy="32" r="1.5" fill="rgba(255, 255, 255, 0.8)" />
                  <circle cx="28" cy="35" r="1.5" fill="rgba(255, 255, 255, 0.7)" />
                  <circle cx="32" cy="35" r="1.5" fill="rgba(255, 255, 255, 0.7)" />
                  <circle cx="30" cy="38" r="1" fill="rgba(255, 255, 255, 0.6)" />
                  <text x="60" y="25" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#06b6d4" letterSpacing="3">IICRC</text>
                  <text x="60" y="42" fontFamily="Arial, sans-serif" fontSize="7" fill="#94a3b8">INSTITUTE OF INSPECTION</text>
                </svg>
              </div>
              <h3>I.I.C.R.C. Certifications</h3>
              <p>
                Certified in water damage restoration, fire, smoke &amp; odor, and applied
                microbial remediation—ensuring every project follows proven restoration protocols.
              </p>
            </article>
            <article className="certification-card">
              <div className="certification-logo">
                <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="180" height="60" rx="4" fill="rgba(15, 23, 42, 0.8)" />
                  <circle cx="30" cy="30" r="22" stroke="#3b82f6" strokeWidth="2" fill="rgba(59, 130, 246, 0.1)" />
                  <circle cx="30" cy="20" r="8" fill="#fbbf24" />
                  <path d="M20 35 Q25 30, 30 35 Q35 40, 40 35" stroke="#3b82f6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M18 38 Q23 33, 28 38 Q33 43, 38 38" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M22 42 Q27 37, 32 42" stroke="#93c5fd" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M25 40 L27 38 L29 40 L31 38 L33 40" stroke="#34d399" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <text x="60" y="22" fontFamily="Arial, sans-serif" fontSize="10" fill="#94a3b8" fontWeight="600">FLORIDA</text>
                  <text x="60" y="35" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#3b82f6" letterSpacing="1">dbpr</text>
                  <text x="60" y="48" fontFamily="Arial, sans-serif" fontSize="7" fill="#94a3b8">DEPARTMENT OF BUSINESS</text>
                </svg>
              </div>
              <h3>Florida DBPR Licensing</h3>
              <p>
                Licensed Mold Assessor (MRSA4767) and Mold Remediator (MRSR4762) under Florida&apos;s
                mold‑related services program for both residential and commercial work.
              </p>
            </article>
          </div>

          <div className="bbb-seal-container">
            <a
              href="https://www.bbb.org/us/fl/tampa/profile/mold-testing/doctor-mold-pro-llc-0653-90453165/#sealclick"
              target="_blank"
              rel="nofollow"
            >
              <img
                src="https://seal-westflorida.bbb.org/seals/blue-seal-200-42-bbb-90453165.png"
                style={{ border: 0 }}
                alt="Doctor Mold Pro LLC BBB Business Review"
              />
            </a>
          </div>

          <div className="certifications-cta">
            <p className="certifications-cta-label">Free Mold Prevention Guide (PDF)</p>
            <a
              href="/Guide.pdf"
              download
              className="primary button-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Free Mold Prevention Guide
            </a>
          </div>
        </section>

        <section className="section" id="case-studies">
          <h2>Our Case Studies: Mold Solved</h2>
          <div className="grid">
            <article className="card">
              <h3>Hidden Mold in a South Tampa Townhome</h3>
              <p className="case-label">Problem</p>
              <p>A homeowner noticed a musty odor but didn&apos;t see any visible mold.</p>
              <p className="case-label">Solution</p>
              <p>
                We started with a full <strong>inspection and air quality test</strong>. <strong>As a result</strong>, we discovered
                mold growth inside the HVAC system—completely hidden from view.
              </p>
              <p className="case-label">The Outcome</p>
              <p>
                We removed the mold, sanitized the ducts, and performed post-remediation testing. <strong>Afterward</strong>, the air quality improved, and the odor was gone. <strong>Since then</strong>, the homeowner has scheduled annual mold checks for peace of mind.
              </p>
            </article>

            <article className="card">
              <h3>Black Mold in a Downtown Tampa Office</h3>
              <p className="case-label">Problem</p>
              <p>
                Employees were reporting allergy-like symptoms, including coughing and eye
                irritation. No one suspected mold.
              </p>
              <p className="case-label">Solution</p>
              <p>
                We conducted air and surface testing. <strong>Soon after</strong>, we found black mold behind a
                leaking wall near the break room.
              </p>
              <p className="case-label">The Outcome</p>
              <p>
                We removed the affected materials and cleaned the area using EPA-approved methods.
                <strong>To avoid business disruption</strong>, we completed the work outside normal business hours. <strong>As a result</strong>, staff returned to a safer, cleaner workspace with no further symptoms.
              </p>
            </article>

            <article className="card">
              <h3>Post-Flood Mold in a Carrollwood Bathroom</h3>
              <p className="case-label">Problem</p>
              <p>
                A pipe burst under the sink, soaking the drywall and cabinetry. Mold was visible
                within 48 hours.
              </p>
              <p className="case-label">Solution</p>
              <p>
                We performed emergency mold removal and moisture mapping. <strong>In addition</strong>, we removed
                damaged drywall and treated the framing with an antimicrobial solution.
              </p>
              <p className="case-label">The Outcome</p>
              <p>
                Final air testing confirmed the mold was gone. <strong>To help with insurance</strong>, we provided
                full documentation and a written clearance report. <strong>Most importantly</strong>, the client now feels confident in the safety of their bathroom.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="faq">
          <h2>Mold FAQs</h2>
          <p className="section-lead">
            Straightforward answers to the most common questions Tampa homeowners ask about mold
            testing, inspection, and removal.
          </p>
          <div className="grid">
            <article className="card">
              <h3>What are the first signs of mold?</h3>
              <p>
                Musty odors, discoloration on walls or ceilings, water stains, and allergy‑like
                symptoms indoors are common early warning signs.
              </p>
              <h3>How dangerous is mold?</h3>
              <p>
                Mold exposure can trigger asthma, allergies, and respiratory irritation—especially
                for children, seniors, and people with weakened immune systems.
              </p>
            </article>
            <article className="card">
              <h3>When should I get professional mold testing?</h3>
              <p>
                If you&apos;ve had recent water damage, smell persistent mustiness, or see suspicious
                growth, professional testing is recommended to confirm type and extent.
              </p>
              <h3>Is remediation covered by insurance?</h3>
              <p>
                Many policies cover mold caused by sudden, accidental water damage like a burst
                pipe, but long‑term leaks or neglect are often excluded. We provide
                insurance‑ready documentation.
              </p>
            </article>
            <article className="card">
              <h3>How can I prevent mold from coming back?</h3>
              <p>
                Keep humidity below 50%, repair leaks quickly, use dehumidifiers in damp spaces, and
                schedule periodic inspections in high‑risk areas such as attics and crawlspaces.
              </p>
              <h3>What makes Doctor Mold Pro different?</h3>
              <p>
                We&apos;re NORMI and IICRC certified, Florida DBPR licensed, veteran‑owned, and we
                back our work with a Mold‑Free Warranty and transparent, easy‑to‑read reports.
              </p>
            </article>
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link to="/signs-of-mold-in-house" className="secondary button-link">
              Read More FAQs About Mold
            </Link>
          </div>
        </section>

        <section className="section testimonials">
          <h2>What Our Clients Say</h2>
          <div className="grid">
            <article className="card">
              <p className="stars">★★★★★</p>
              <p className="testimonial-body">
                &quot;Ari came out to our house after the toilet water line came loose and started
                leaking. The ceiling ended up covered in mold, but Ari took care of it quickly and
                thoroughly.&quot;
              </p>
              <div className="testimonial-footer">
                <img
                  src="/tania-diaz.png"
                  alt="Tania Diaz"
                  className="testimonial-avatar"
                  loading="lazy"
                  width="36"
                  height="36"
                />
                <p className="author">Tania Diaz</p>
              </div>
            </article>
            <article className="card">
              <p className="stars">★★★★★</p>
              <p className="testimonial-body">
                &quot;After the hurricane, we ended up with mold in our spare bedroom because the
                carpet got soaked. Ari from Doctor Mold Pro was fantastic—super knowledgeable and
                professional.&quot;
              </p>
              <div className="testimonial-footer">
                <img
                  src="/ashley-clevenger.png"
                  alt="Ashley Clevenger"
                  className="testimonial-avatar"
                  loading="lazy"
                  width="36"
                  height="36"
                />
                <p className="author">Ashley Clevenger</p>
              </div>
            </article>
            <article className="card">
              <p className="stars">★★★★★</p>
              <p className="testimonial-body">
                &quot;Ari is an outstanding professional. We have worked with him on multiple
                projects where he has saved our home and been a hero!&quot;
              </p>
              <div className="testimonial-footer">
                <img
                  src="/lucy-walser.png"
                  alt="Lucy Walser"
                  className="testimonial-avatar"
                  loading="lazy"
                  width="36"
                  height="36"
                />
                <p className="author">Lucy Walser</p>
              </div>
            </article>
            <article className="card">
              <p className="stars">★★★★★</p>
              <p className="testimonial-body">
                &quot;Great company with professional services very satisfied with my experience. Highly recommend pricing very reasonable.&quot;
              </p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(148, 163, 184, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e5e7eb', fontSize: '0.875rem', fontWeight: '600' }}>
                  JV
                </div>
                <p className="author">Jose Velasquez</p>
              </div>
            </article>
            <article className="card">
              <p className="stars">★★★★★</p>
              <p className="testimonial-body">
                &quot;Doctor Mold Pro came to my brother&apos;s house in South Tampa and was able to eradicate the mold from his home. Ari, the owner was very professional and knowledgeable of what needed to be done. It was taken care of in a timely manner. I was so happy that I used Doctor Mold Pro and know that the work was professionally done. I would highly recommend Doctor Mold Pro without hesitation.&quot;
              </p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(148, 163, 184, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e5e7eb', fontSize: '0.875rem', fontWeight: '600' }}>
                  BF
                </div>
                <p className="author">BarBara FitzPatrick</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section cta" id="contact">
          <div className="cta-inner">
            <div>
              <h2>Schedule Your Tampa Mold Inspection Today</h2>
              <p>
                Looking for a trusted team to handle your mold inspection, testing, or removal needs
                in Tampa Bay? Our certified, licensed professionals are ready 24/7 with fast
                response and clear answers.
              </p>
              <ul className="contact-info-list">
                <li>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:8137765200" style={{ color: '#7dd3fc', textDecoration: 'none' }}>
                    (813) 776-5200
                  </a>
                </li>
                <li>
                  <strong>Service area:</strong> Serving{' '}
                  <Link to="/mold-testing-tampa" style={{ color: '#7dd3fc', textDecoration: 'none' }}>Tampa</Link>,{' '}
                  <Link to="/mold-testing-st-petersburg" style={{ color: '#7dd3fc', textDecoration: 'none' }}>St. Petersburg</Link>,{' '}
                  <Link to="/mold-testing-clearwater" style={{ color: '#7dd3fc', textDecoration: 'none' }}>Clearwater</Link>,{' '}
                  <Link to="/mold-testing-brandon" style={{ color: '#7dd3fc', textDecoration: 'none' }}>Brandon</Link>,{' '}
                  <Link to="/mold-testing-riverview" style={{ color: '#7dd3fc', textDecoration: 'none' }}>Riverview</Link>,{' '}
                  Wesley Chapel, and surrounding Tampa Bay communities.
                </li>
                <li>
                  <strong>Hours:</strong> 24/7 emergency response for water damage and visible mold.
                </li>
                <li>
                  <strong>Location:</strong>{' '}
                  <a
                    href="https://maps.app.goo.gl/xTzn8iymy5Ut1TFk7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#7dd3fc', textDecoration: 'none' }}
                  >
                    Tampa, FL 33607
                  </a>
                </li>
              </ul>
              <p className="service-areas">
                <strong>Not sure where to start?</strong>
                Tell us what you&apos;re seeing, smelling, or experiencing and we&apos;ll recommend
                the right inspection or testing package.
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
    </>
  )
}
