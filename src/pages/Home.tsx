import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { getCanonicalUrl } from '../config/seo'
import { businessConfig } from '../config/business'
import { ContactForm } from '../components/ContactForm'
import { GoogleMapEmbed } from '../components/GoogleMapEmbed'
import { TrustBar } from '../components/TrustBar'
import { trackEvent } from '../utils/analytics'

export function Home() {
  return (
    <>
      <PageMeta
        title="Mold Remediation Tampa FL | Inspection & Testing | Doctor Mold Pro"
        description="Licensed mold remediation, mold inspection & mold testing in Tampa, St. Petersburg &amp; Clearwater. FL DBPR licensed. Emergency mold removal. Call (813) 776-5200 for a fast response."
        canonical={getCanonicalUrl('/')}
        keywords="mold remediation Tampa, mold removal Tampa, mold inspection Tampa, mold testing Tampa, black mold removal Tampa, mold remediation near me, Tampa Bay mold company"
      />
      <section className="hero">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="eyebrow">Tampa Bay · Mold inspection, testing &amp; remediation</p>
              <h1>
                Mold remediation &amp; mold inspection for Tampa, FL &amp; Tampa Bay homes &amp; businesses
              </h1>
              <p className="hero-subtitle">
                Worried about musty air, a leak, or spots on a wall? We respond fast, find what&apos;s
                really going on, and give you a clear plan—so your home is safer, stress goes down, and
                you have paperwork if insurance or a buyer needs it.
              </p>
              <div className="hero-actions">
                <a
                  href="tel:8137765200"
                  className="primary button-link hero-cta-call"
                  onClick={() =>
                    trackEvent({
                      category: 'CTA',
                      action: 'click_hero_call_now',
                      label: 'Home hero',
                    })
                  }
                >
                  Call {businessConfig.phone.display}
                </a>
                <Link
                  to="/mold-testing-appointment"
                  className="secondary button-link"
                  onClick={() =>
                    trackEvent({
                      category: 'CTA',
                      action: 'click_hero_book_inspection',
                      label: 'Home hero',
                    })
                  }
                >
                  Book an inspection online
                </Link>
              </div>
              <p className="hero-microcopy">
                <Link to="/#contact" className="hero-microcopy-link">
                  Prefer email?
                </Link>{' '}
                Send a short note—we usually respond the same business day.
              </p>
              <div className="hero-badges">
                <div className="badge">
                  <span className="badge-label">Google</span>
                  <span className="badge-value">5.0</span>
                  <span className="badge-stars">★★★★★</span>
                </div>
                <p className="badge-note">FL DBPR licensed · NORMI &amp; IICRC · 12-month mold-free warranty on remediation</p>
                <div className="veteran-badge">
                  <img
                    src="/veteran-owned-badge.png"
                    alt="Veteran owned mold remediation company serving Tampa Bay, Florida"
                    width="100"
                    height="100"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="hero-media">
              {/* Visual credibility: real crew / equipment on site strengthens trust vs. generic stock */}
              <img
                src="/inspection-living-room.png"
                alt="Certified mold inspection and moisture assessment in a Tampa, Florida area home"
                loading="eager"
                width="600"
                height="400"
              />
            </div>
          </div>
        </section>

        <TrustBar />

        <section id="services" className="section services">
          <h2>Mold inspection, testing &amp; remediation services in Tampa Bay</h2>
          <p className="section-lead">
            From <Link to="/mold-removal-tampa">mold removal in Tampa</Link> to{' '}
            <Link to="/mold-testing-clearwater">mold testing in Clearwater</Link> and{' '}
            <Link to="/emergency-mold-remediation-tampa">emergency mold remediation</Link> after water
            damage—we match the right scope so you don&apos;t pay for the wrong fix.
          </p>
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
          <div className="section-cta-row">
            <Link
              to="/mold-testing-tampa"
              className="secondary button-link"
              onClick={() =>
                trackEvent({ category: 'CTA', action: 'click_services_testing_hub', label: 'Home services' })
              }
            >
              Mold testing hub (Tampa Bay)
            </Link>
            <Link
              to="/mold-testing-appointment"
              className="primary button-link"
              onClick={() =>
                trackEvent({ category: 'CTA', action: 'click_services_book', label: 'Home services' })
              }
            >
              Book an inspection
            </Link>
          </div>
        </section>

        <section className="section" id="about">
          <h2>Why Tampa homeowners call us first</h2>
          <p className="section-lead">
            Doctor Mold Pro is led by Ari Figueroa—a certified mold professional focused on clear
            answers, honest scopes, and work that holds up. We&apos;re local, licensed, and built for
            Florida humidity and insurance realities.
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
              <h3>What you get</h3>
              <ul className="bullet-list">
                <li>
                  Straight talk: we explain what the lab results mean for your family and your property—no
                  scare tactics.
                </li>
                <li>
                  Full path from inspection and testing to remediation and clearance—no juggling random
                  contractors.
                </li>
                <li>
                  Documentation you can hand to insurance or a buyer: photos, chain of custody, and
                  written protocols when needed.
                </li>
                <li>
                  Tools that match the job—infrared, moisture mapping, and lab-backed sampling when
                  hidden mold is suspected.
                </li>
                <li>Veteran-owned crew with the same urgency we&apos;d want for our own homes.</li>
              </ul>
            </div>
          </div>

        </section>

        <section className="section signs-section" id="signs-of-mold">
          <h2>Signs you may have a mold problem</h2>
          <p className="section-lead">
            In Tampa Bay, humidity and small leaks hide behind walls and in HVAC systems. If any of
            this sounds familiar, call sooner—not later.
          </p>
          <div className="two-column signs-two-col">
            <ul className="bullet-list">
              <li>Musty or earthy odor that won&apos;t go away after cleaning</li>
              <li>Allergy symptoms indoors that improve when you leave</li>
              <li>Water stains, bubbling paint, or warped trim</li>
              <li>Recent pipe leak, roof leak, or flood—even if it &quot;dried out&quot;</li>
            </ul>
            <ul className="bullet-list">
              <li>Visible spots or fuzzy growth on drywall, grout, or registers</li>
              <li>Condensation on windows or chronically damp closets or crawlspaces</li>
              <li>Buying or selling a home and you want independent documentation</li>
              <li>Insurance asked for proof of damage or professional assessment</li>
            </ul>
          </div>
          <p className="signs-footer">
            We use moisture meters, thermal imaging, and lab testing when needed—so you&apos;re not
            guessing.
          </p>
        </section>

        <section className="section" id="process">
          <h2>How we work—from first call to clearance</h2>
          <p className="section-lead process-lead">
            One team, one plan. No runaround.{' '}
            <Link to="/mold-remediation-process" className="inline-link">
              See the full remediation workflow →
            </Link>
          </p>
          <ol className="process-list">
            <li>
              <h3>Inspect &amp; map moisture</h3>
              <p>
                We walk the property with thermal imaging and moisture meters to find what&apos;s wet,
                what&apos;s growing, and where hidden mold may be traveling (including HVAC).
              </p>
            </li>
            <li>
              <h3>Sample &amp; lab test</h3>
              <p>
                Air and surface samples go to an independent lab when needed. You get clear results
                you can use for health decisions, insurance, or a home sale.
              </p>
            </li>
            <li>
              <h3>Plan &amp; upfront scope</h3>
              <p>
                You&apos;ll see a written plan with pricing before remediation starts—no surprise add-ons
                for standard mold work.
              </p>
            </li>
            <li>
              <h3>Remove &amp; dry safely</h3>
              <p>
                Containment, HEPA filtration, and proper removal per Florida rules—not just
                &quot;spray and pray.&quot;
              </p>
            </li>
            <li>
              <h3>Clearance &amp; documentation</h3>
              <p>
                Post-remediation verification when appropriate, plus photos and reports you can file
                away with confidence.
              </p>
            </li>
          </ol>
        </section>

        <section className="section warranty" id="warranty">
          <h2>12-month mold-free warranty on remediation</h2>
          <p>
            If mold comes back in the treated area because remediation wasn&apos;t done right, we come
            back and fix it—on us. (New leaks and new water damage aren&apos;t covered—mold needs a dry
            home to stay gone.)
          </p>
        </section>

        <section className="section certifications-section" id="certifications">
          <h2>Licenses &amp; certifications—not just a truck and a sprayer</h2>
          <p className="section-lead">
            Florida DBPR mold assessor &amp; remediator licenses, NORMI and IICRC training, and
            documentation that holds up with insurers and buyers.
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
          {/* Photo ops: add real before/after cavity, HVAC plenum, bathroom tear-out — replaces text-only proof */}
          <h2>Real Tampa Bay jobs—problem, fix, outcome</h2>
          <p className="section-lead">
            Brief examples of what we see in the field. Every house is different; we document yours
            the same way.
          </p>
          <div className="grid">
            <article className="card">
              <h3>Hidden mold in a South Tampa townhome</h3>
              <p className="case-label">Problem</p>
              <p>Musty odor—no visible mold.</p>
              <p className="case-label">What we did</p>
              <p>
                Full inspection plus air testing. Mold was growing inside the HVAC system, hidden
                from view.
              </p>
              <p className="case-label">Outcome</p>
              <p>
                Removed growth, sanitized ducts, clearance testing. Odor gone; homeowner now books
                annual checks.
              </p>
            </article>

            <article className="card">
              <h3>Black mold in a downtown Tampa office</h3>
              <p className="case-label">Problem</p>
              <p>Staff coughing and irritated eyes—no one guessed mold.</p>
              <p className="case-label">What we did</p>
              <p>Air and surface testing located mold behind a leaking wall by the break room.</p>
              <p className="case-label">Outcome</p>
              <p>
                Removed affected materials per protocol; worked after hours so the business kept
                running. Symptoms stopped.
              </p>
            </article>

            <article className="card">
              <h3>Post-flood mold in a Carrollwood bathroom</h3>
              <p className="case-label">Problem</p>
              <p>Pipe burst; mold on drywall within 48 hours.</p>
              <p className="case-label">What we did</p>
              <p>Emergency removal, drying, antimicrobial treatment on framing.</p>
              <p className="case-label">Outcome</p>
              <p>
                Clearance testing passed. Full paperwork for the insurance claim.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="pricing">
          <h2>Certified mold testing packages</h2>
          <p className="section-lead">
            Independent lab analysis, clear reports, and results in as little as 48 hours. Pick a
            package below or call—we&apos;ll steer you to the right scope.
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
              <Link to="/mold-testing-appointment" className="primary pricing-cta button-link">
                Book this package
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
              <Link to="/mold-testing-appointment" className="primary pricing-cta button-link">
                Book this package
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
              <Link to="/mold-testing-appointment" className="primary pricing-cta button-link">
                Book this package
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
          <p className="pricing-footer-hint">
            Not sure which package fits? Call{' '}
            <a href="tel:8137765200">{businessConfig.phone.display}</a>—we&apos;ll match you to the right
            test before you spend money on the wrong scope.
          </p>
        </section>

        <section className="section testimonials" id="reviews">
          <h2>What Tampa Bay homeowners say</h2>
          <p className="section-lead">
            Real jobs. Real reviews. We ask clients to be honest—good or bad.
          </p>
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
                <div className="testimonial-avatar testimonial-avatar-initials" aria-hidden>
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
                <div className="testimonial-avatar testimonial-avatar-initials" aria-hidden>
                  BF
                </div>
                <p className="author">BarBara FitzPatrick</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section service-areas-section" id="service-areas">
          <h2>Mold remediation &amp; testing across Tampa Bay cities</h2>
          <p className="section-lead">
            Local crew, fast dispatch. Same-day appointments when the schedule allows—call early if
            you&apos;re dealing with active water or spreading mold.
          </p>
          <ul className="service-areas-grid">
            <li>
              <Link to="/mold-testing-tampa">Tampa mold testing</Link>
            </li>
            <li>
              <Link to="/mold-removal-tampa">Tampa mold removal</Link>
            </li>
            <li>
              <Link to="/mold-testing-st-petersburg">St. Petersburg mold testing</Link>
            </li>
            <li>
              <Link to="/mold-removal-st-petersburg">St. Petersburg mold removal</Link>
            </li>
            <li>
              <Link to="/mold-testing-clearwater">Clearwater mold testing</Link>
            </li>
            <li>
              <Link to="/mold-removal-clearwater">Clearwater mold removal</Link>
            </li>
            <li>
              <Link to="/mold-testing-brandon">Brandon mold testing</Link>
            </li>
            <li>
              <Link to="/mold-removal-brandon">Brandon mold removal</Link>
            </li>
            <li>
              <Link to="/mold-testing-riverview">Riverview mold testing</Link>
            </li>
            <li>
              <Link to="/mold-removal-riverview">Riverview mold removal</Link>
            </li>
            <li>
              <Link to="/mold-removal-lutz">Lutz mold remediation</Link>
            </li>
            <li>
              <Link to="/mold-removal-temple-terrace">Temple Terrace mold remediation</Link>
            </li>
            <li>
              <Link to="/mold-removal-oldsmar">Oldsmar mold remediation</Link>
            </li>
            <li>
              <Link to="/mold-removal-safety-harbor">Safety Harbor mold remediation</Link>
            </li>
            <li>
              <Link to="/mold-removal-wesley-chapel">Wesley Chapel mold remediation</Link>
            </li>
          </ul>
          <p className="service-areas-more">
            Also serving Carrollwood, South Tampa, and nearby Hillsborough &amp; Pinellas
            communities—ask if you&apos;re close to our route.
          </p>
          <div className="service-areas-van">
            <img
              src="/service-van.png"
              alt="Doctor Mold Pro mold remediation and mold inspection service van in Tampa Bay, Florida"
              className="van-image"
              loading="lazy"
              width="600"
              height="450"
            />
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <h2>Mold questions Tampa homeowners ask us</h2>
          <p className="section-lead">
            Short answers. Call if your situation is urgent—we&apos;ll help you sort it out.
          </p>
          <div className="faq-list">
            <details className="faq-item">
              <summary>What are the first signs of mold?</summary>
              <p>
                Musty smells, stains or bubbling paint, water marks, and allergy-like symptoms that
                get worse indoors. You might also see spots on grout, drywall, or around vents.
              </p>
            </details>
            <details className="faq-item">
              <summary>How dangerous is mold?</summary>
              <p>
                It varies by person and type, but mold can irritate lungs, trigger allergies, and
                make asthma worse. Kids, older adults, and anyone immune-compromised should take
                extra care.
              </p>
            </details>
            <details className="faq-item">
              <summary>When should I get professional mold testing?</summary>
              <p>
                After any water intrusion, if you smell persistent mustiness, see suspicious growth,
                or need documentation for insurance or a home sale. Testing tells you what you&apos;re
                dealing with instead of guessing.
              </p>
            </details>
            <details className="faq-item">
              <summary>Is remediation covered by insurance?</summary>
              <p>
                Often yes for sudden damage—like a burst pipe—if you act fast. Slow leaks or
                maintenance issues are harder. We provide clear reports and photos your adjuster can
                use.
              </p>
            </details>
            <details className="faq-item">
              <summary>How do I keep mold from coming back?</summary>
              <p>
                Fix leaks, control humidity (often below 50% indoors), run dehumidifiers in damp
                rooms, and don&apos;t ignore small wet spots. We can point out trouble spots on your
                property.
              </p>
            </details>
            <details className="faq-item">
              <summary>What makes Doctor Mold Pro different?</summary>
              <p>
                We&apos;re Florida-licensed mold assessors and remediators, NORMI and IICRC trained,
                veteran-owned, and local to Tampa Bay. You get a written plan, a warranty on
                remediation work, and real humans who answer the phone.
              </p>
            </details>
          </div>
          <div className="faq-more-link">
            <Link to="/signs-of-mold-in-house" className="secondary button-link">
              More mold warning signs &amp; tips →
            </Link>
          </div>
        </section>

        <section className="section cta" id="contact">
          <div className="cta-inner">
            <div>
              <h2>Call now or send a message</h2>
              <p>
                Tell us what you&apos;re seeing, smelling, or dealing with—water damage, a musty room,
                visible spots, or an insurance request. We&apos;ll tell you the fastest way to get
                answers, usually same day.
              </p>
              <p className="cta-phone-hero">
                <a href="tel:8137765200" className="cta-phone-link">
                  {businessConfig.phone.display}
                </a>
                <span className="cta-phone-note"> · 24/7 emergency line</span>
              </p>
              <ul className="contact-info-list">
                <li>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:8137765200" style={{ color: '#7dd3fc', textDecoration: 'none' }}>
                    {businessConfig.phone.display}
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
                  <strong>Address:</strong>{' '}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessConfig.address.line)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#7dd3fc', textDecoration: 'none' }}
                  >
                    {businessConfig.address.line}
                  </a>
                </li>
              </ul>
              <GoogleMapEmbed />
              <p className="service-areas">
                <strong>Prefer email?</strong> Use the form—include your ZIP and whether there&apos;s active
                water. We&apos;ll call or email back fast.
              </p>
            </div>
            <div className="contact-form-column">
              <h3 className="contact-form-heading">Request a callback</h3>
              <p className="contact-form-sub">2 minutes. No spam—we only use this to reach you about mold service.</p>
              <ContactForm />
            </div>
          </div>
        </section>
    </>
  )
}
