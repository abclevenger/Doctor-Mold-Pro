import './App.css'

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">
          <img
            src="/dr-mold-pro-logo-transparent.png"
            alt="Doctor Mold Pro"
            className="brand-logo"
          />
        </div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#pricing">Price Packages</a>
          <a href="#process">Process</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Certified Mold Testing &amp; Remediation Services in Tampa</p>
            <h1>Don&apos;t Let Mold Take Over.</h1>
            <p className="hero-subtitle">
              Fast, certified, and trusted mold inspection, testing, and removal for Tampa homes
              and businesses.
            </p>
            <div className="hero-actions">
              <button className="primary">Schedule a Consultation</button>
              <button className="secondary">Call Now</button>
            </div>
            <div className="hero-badges">
              <div className="badge">
                <span className="badge-label">Google</span>
                <span className="badge-value">5.0</span>
                <span className="badge-stars">★★★★★</span>
              </div>
              <p className="badge-note">Fully backed by Google Guarantee</p>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <h2>Our Testing Services Include:</h2>
          <div className="grid">
            <div className="card">
              <h3>Residential Mold Inspections</h3>
              <p>Thorough whole-home inspections tailored to Tampa&apos;s climate and construction.</p>
            </div>
            <div className="card">
              <h3>Commercial Mold Inspection</h3>
              <p>Protect your employees and customers with detailed reporting and documentation.</p>
            </div>
            <div className="card">
              <h3>Indoor Air Quality Testing</h3>
              <p>Lab-tested air samples to uncover hidden mold spores and contaminants.</p>
            </div>
            <div className="card">
              <h3>Black Mold Detection</h3>
              <p>Targeted testing and safe remediation for toxic black mold.</p>
            </div>
            <div className="card">
              <h3>Water Damage Mold Assessment</h3>
              <p>Post-leak and post-flood evaluations to prevent long-term damage.</p>
            </div>
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

        <section className="section" id="inspection">
          <h2>Mold Inspection in Tampa – Certified Residential &amp; Commercial</h2>
          <p className="section-lead">
            Ensure your home or business is safe with Doctor Mold Pro&apos;s professional mold
            inspections in Tampa. Our certified team identifies hidden mold spores, moisture issues,
            and potential health risks with precision.
          </p>

          <div className="two-column">
            <div>
              <p>
                Doctor Mold Pro provides professional mold inspection services for homes and
                businesses throughout Tampa and the surrounding areas. Our IICRC-certified mold
                inspectors conduct thorough visual inspections, moisture mapping, and air and surface
                sampling to uncover hidden mold, black mold, and potential water-damage problems.
              </p>
              <p>
                Whether you&apos;re buying a new property, suspect mold growth, or simply want to
                make sure your indoor environment is safe, we deliver accurate, reliable inspection
                reports that help you make confident decisions about remediation.
              </p>
            </div>
            <div>
              <h3>We specialize in:</h3>
              <ul className="bullet-list">
                <li>Residential and commercial mold inspections in Tampa and nearby areas</li>
                <li>Moisture detection, visual assessments, and air‑quality testing</li>
                <li>Comprehensive inspection reports with clear next steps</li>
              </ul>
            </div>
          </div>

          <h3 className="inspection-subheading">What to expect from our Mold Inspection Process</h3>
          <ol className="process-list">
            <li>
              <h3>Visual assessment of the property</h3>
              <p>
                We start with a detailed walkthrough, examining walls, floors, ceilings, and
                high‑risk areas to identify visible signs of mold and moisture issues.
              </p>
            </li>
            <li>
              <h3>Moisture detection</h3>
              <p>
                Using advanced moisture meters and infrared cameras, we detect hidden damp areas that
                may be feeding mold growth—often before damage is visible.
              </p>
            </li>
            <li>
              <h3>Air sampling</h3>
              <p>
                We perform air quality testing to measure mold spores circulating indoors and to
                compare indoor vs. outdoor levels.
              </p>
            </li>
            <li>
              <h3>Surface testing</h3>
              <p>
                Swabs and tape lifts are used to identify specific mold species on walls, floors, and
                other suspect surfaces.
              </p>
            </li>
            <li>
              <h3>Comprehensive written report</h3>
              <p>
                You&apos;ll receive a detailed report including findings, mold identification, spore
                levels, and clear remediation recommendations—ideal for insurance, real estate, or
                planning removal work.
              </p>
            </li>
          </ol>
        </section>

        <section className="section pricing" id="pricing">
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
              <button className="primary pricing-cta">Get Started</button>
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
              <button className="primary pricing-cta">Get Started</button>
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
              <button className="primary pricing-cta">Get Started</button>
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
              <button className="secondary pricing-cta">Request Custom Quote</button>
            </article>
          </div>

          <div className="pricing-compare">
            <h3>Why homeowners choose Doctor Mold Pro</h3>
            <div className="pricing-compare-grid">
              <div className="pricing-compare-header" />
              <div className="pricing-compare-header">Doctor Mold Pro</div>
              <div className="pricing-compare-header">Typical Competitors</div>

              <div className="pricing-compare-label">Base price</div>
              <div className="pricing-compare-value">$249</div>
              <div className="pricing-compare-value">$300–$400</div>

              <div className="pricing-compare-label">Air samples</div>
              <div className="pricing-compare-value">2–6</div>
              <div className="pricing-compare-value">2 only</div>

              <div className="pricing-compare-label">Same‑day service</div>
              <div className="pricing-compare-value">Yes</div>
              <div className="pricing-compare-value">Limited</div>

              <div className="pricing-compare-label">Report turnaround</div>
              <div className="pricing-compare-value">48 hours</div>
              <div className="pricing-compare-value">3–5 days</div>

              <div className="pricing-compare-label">Follow‑up</div>
              <div className="pricing-compare-value">Free</div>
              <div className="pricing-compare-value">Extra charge</div>

              <div className="pricing-compare-label">Insurance documentation</div>
              <div className="pricing-compare-value">Included</div>
              <div className="pricing-compare-value">Sometimes extra</div>

              <div className="pricing-compare-label">Customer satisfaction</div>
              <div className="pricing-compare-value">100% focus</div>
              <div className="pricing-compare-value">Varies</div>
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <h2>Our Proven 5-Step Mold Testing &amp; Treatment Process</h2>
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

        <section className="section" id="case-studies">
          <h2>Our Case Studies: Mold Solved</h2>
          <div className="grid">
            <article className="card">
              <h3>Hidden Mold in a South Tampa Townhome</h3>
              <p className="case-label">Problem</p>
              <p>A homeowner noticed a musty odor but didn&apos;t see any visible mold.</p>
              <p className="case-label">Solution</p>
              <p>
                We started with a full inspection and air quality test. As a result, we discovered
                mold growth inside the HVAC system—completely hidden from view.
              </p>
              <p className="case-label">Outcome</p>
              <p>
                We removed the mold, sanitized the ducts, and performed post-remediation testing.
                Afterward, the air quality improved, and the odor was gone.
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
                We conducted air and surface testing. Soon after, we found black mold behind a
                leaking wall near the break room.
              </p>
              <p className="case-label">Outcome</p>
              <p>
                We removed the affected materials and cleaned the area using EPA-approved methods.
                To avoid business disruption, we completed the work outside normal business hours.
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
                We performed emergency mold removal and moisture mapping. In addition, we removed
                damaged drywall and treated the framing with an antimicrobial solution.
              </p>
              <p className="case-label">Outcome</p>
              <p>
                Final air testing confirmed the mold was gone. To help with insurance, we provided
                full documentation and a written clearance report.
              </p>
            </article>
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
                <p className="author">Lucy Walser</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section cta" id="contact">
          <div className="cta-inner">
            <h2>Want to work with us?</h2>
            <p>
              Looking for a trusted team to handle your mold inspection, testing, or removal needs
              in Tampa Bay? Our certified, licensed professionals are ready 24/7.
            </p>
            <button className="primary">Contact Us</button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#services">Services Overview</a>
              </li>
              <li>
                <a href="#">Price Packages</a>
              </li>
              <li>
                <a href="#">Mold Testing</a>
              </li>
              <li>
                <a href="#">Mold Inspection</a>
              </li>
              <li>
                <a href="#">Mold Removal</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#">Mold Types</a>
              </li>
              <li>
                <a href="#">Certification</a>
              </li>
              <li>
                <a href="#faq">FAQs</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Follow Us</h3>
            <p>Social media icons</p>
          </div>
        </div>
        <p className="footer-bottom">
          © 2026 Doctor Mold Pro. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
