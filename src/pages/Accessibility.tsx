import { PageMeta } from '../components/PageMeta'
import { businessConfig } from '../config/business'
import { getCanonicalUrl } from '../config/seo'

export function Accessibility() {
  return (
    <>
      <PageMeta
        title="Accessibility Statement | Doctor Mold Pro"
        description="Doctor Mold Pro is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility efforts and how to report issues."
        canonical={getCanonicalUrl('/accessibility')}
      />
      <section className="section">
        <div className="section-inner">
          <h1>Accessibility Statement</h1>
          <p className="section-lead">
            Doctor Mold Pro LLC is committed to ensuring digital accessibility for people with disabilities. We
            are continually improving the user experience for everyone and applying relevant accessibility
            standards to achieve these goals.
          </p>

          <h2>Our Commitment</h2>
          <p>
            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, which
            explain how to make web content more accessible for people with disabilities and user-friendly for
            everyone.
          </p>
          <p>
            Our goal is to provide a website that is accessible to the widest possible audience, regardless of
            technology or ability. We actively work to increase the accessibility and usability of our website
            and adhere to many of the available standards and guidelines.
          </p>

          <h2>Accessibility Features</h2>
          <p>Our website includes the following accessibility features:</p>
          <ul>
            <li>
              <strong>Keyboard Navigation:</strong> All interactive elements can be accessed using only a
              keyboard.
            </li>
            <li>
              <strong>Alt Text:</strong> Images include descriptive alternative text for screen readers.
            </li>
            <li>
              <strong>Semantic HTML:</strong> We use proper heading structure and semantic markup to improve
              navigation and understanding.
            </li>
            <li>
              <strong>Color Contrast:</strong> Text and background colors meet WCAG contrast ratio requirements.
            </li>
            <li>
              <strong>Focus Indicators:</strong> Visible focus indicators help users navigate interactive
              elements.
            </li>
            <li>
              <strong>Skip Links:</strong> A &quot;Skip to main content&quot; link is available for keyboard
              users.
            </li>
            <li>
              <strong>Responsive Design:</strong> The site is designed to work across different devices and
              screen sizes.
            </li>
            <li>
              <strong>Form Labels:</strong> All form fields have associated labels for screen reader users.
            </li>
          </ul>

          <h2>Known Limitations</h2>
          <p>
            Despite our efforts to ensure accessibility, there may be some limitations. We are aware of the
            following areas and are actively working to improve them:
          </p>
          <ul>
            <li>
              Some third-party widgets or embedded content (such as booking calendars) may not fully conform to
              accessibility standards.
            </li>
            <li>
              Older PDF documents may not be fully accessible to screen readers. We are working to update these
              documents.
            </li>
            <li>
              Some interactive elements may require further refinement for optimal keyboard navigation
              experience.
            </li>
          </ul>
          <p>
            We welcome your feedback on the accessibility of our website. If you encounter accessibility
            barriers, please let us know.
          </p>

          <h2>Third-Party Content</h2>
          <p>
            Our website may include third-party content or links to third-party websites. We do not have
            control over the accessibility of third-party content and cannot guarantee their compliance with
            accessibility standards. However, we strive to work with vendors who share our commitment to
            accessibility.
          </p>

          <h2>Feedback &amp; Reporting Issues</h2>
          <p>
            We welcome your feedback on the accessibility of Doctor Mold Pro&apos;s website. If you encounter
            any accessibility barriers or have suggestions for improvement, please contact us:
          </p>
          <p>
            <strong>Doctor Mold Pro LLC</strong>
            <br />
            Address: {businessConfig.address.line}
            <br />
            Phone: <a href="tel:8137765200">(813) 776-5200</a>
            <br />
            Email: <a href="mailto:info@doctormoldpro.com">info@doctormoldpro.com</a>
            <br />
            Website: <a href="https://doctormoldpro.com">doctormoldpro.com</a>
          </p>
          <p>
            When contacting us, please include:
          </p>
          <ul>
            <li>The web page URL where you encountered the issue</li>
            <li>A description of the accessibility barrier</li>
            <li>Your preferred method of contact</li>
            <li>Any assistive technology you are using (if applicable)</li>
          </ul>
          <p>
            We aim to respond to accessibility feedback within 5 business days and will work with you to
            address any concerns.
          </p>

          <h2>Assistive Technologies</h2>
          <p>
            Our website is designed to work with common assistive technologies, including:
          </p>
          <ul>
            <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
            <li>Screen magnification software</li>
            <li>Voice recognition software</li>
            <li>Keyboard-only navigation</li>
            <li>Switch devices</li>
          </ul>

          <h2>Ongoing Efforts</h2>
          <p>
            We are committed to maintaining and improving the accessibility of our website. Our ongoing
            efforts include:
          </p>
          <ul>
            <li>Regular accessibility audits and testing</li>
            <li>Training our team on accessibility best practices</li>
            <li>Incorporating accessibility considerations into our development process</li>
            <li>Staying current with WCAG guidelines and accessibility standards</li>
            <li>Addressing accessibility issues as they are identified</li>
          </ul>

          <h2>Compliance Status</h2>
          <p>
            This website aims to conform to WCAG 2.1 Level AA standards. We are actively working to achieve
            and maintain this level of conformance. Our accessibility efforts are ongoing, and we regularly
            review and update our website to improve accessibility.
          </p>

          <h2>Alternative Access Methods</h2>
          <p>
            If you experience difficulty accessing any content on our website, we are happy to provide
            information in alternative formats. Please contact us at{' '}
            <a href="tel:8137765200">(813) 776-5200</a> or{' '}
            <a href="mailto:info@doctormoldpro.com">info@doctormoldpro.com</a> to request assistance.
          </p>

          <h2>Updates to This Statement</h2>
          <p>
            We will review and update this Accessibility Statement periodically to reflect our ongoing
            accessibility efforts and any changes to our website. This statement was last updated on{' '}
            {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
          </p>

          <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '1.5rem' }}>
            This Accessibility Statement is provided for informational purposes and demonstrates our
            commitment to digital accessibility. While we strive to meet WCAG standards, we acknowledge that
            achieving full compliance is an ongoing process. For legal compliance questions, please consult
            with your legal counsel.
          </p>
        </div>
      </section>
    </>
  )
}

export default Accessibility
