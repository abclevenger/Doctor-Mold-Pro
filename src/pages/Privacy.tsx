import { PageMeta } from '../components/PageMeta'
import { businessConfig } from '../config/business'
import { getCanonicalUrl } from '../config/seo'

function Privacy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy | Doctor Mold Pro"
        description="Learn how Doctor Mold Pro collects, uses, and protects your personal information, including contact details and inspection data."
        canonical={getCanonicalUrl('/privacy-policy')}
      />
      <section className="section">
        <div className="section-inner">
          <h1>Privacy Policy</h1>
          <p className="section-lead">
            Doctor Mold Pro LLC (&quot;Doctor Mold Pro,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy.
            This Privacy Policy explains how we collect, use, and protect information when you visit our
            website, request services, or communicate with us.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Contact details such as your name, email address, phone number, and property address.</li>
            <li>
              Service information related to mold inspections, testing, remediation, and job site details.
            </li>
            <li>
              Communication data, including emails, text messages, call logs, and form submissions you send to
              us.
            </li>
            <li>
              Technical data such as IP address, browser type, and pages visited, used for analytics and site
              performance.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and schedule inspections or remediation services.</li>
            <li>Provide quotes, reports, and follow-up recommendations.</li>
            <li>Send important service-related updates, reminders, and safety information.</li>
            <li>Improve our website, services, and customer experience.</li>
            <li>
              Comply with legal, regulatory, and insurance or licensing requirements (including MRSA/MRSR
              licensing in Florida).
            </li>
          </ul>

          <h2>Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share information with trusted third parties who
            help us operate our business, such as:
          </p>
          <ul>
            <li>Scheduling, communications, and CRM platforms.</li>
            <li>Payment processors, labs, or subcontractors involved in your project.</li>
            <li>
              Analytics and advertising tools (such as Google Analytics) to understand website performance.
            </li>
          </ul>
          <p>
            These providers are required to protect your information and may only use it to perform services on
            our behalf or as required by law.
          </p>

          <h2>Text Messages &amp; Phone Calls</h2>
          <p>
            If you provide a mobile number, you may receive calls or text messages related to your inquiries,
            appointments, reminders, safety notices, or service updates. Message and data rates may apply. You
            can opt out of non-essential text messages at any time by replying STOP as described in our SMS
            Terms &amp; Alerts.
          </p>

          <h2>Cookies &amp; Analytics</h2>
          <p>
            We may use cookies and similar technologies to understand how visitors use our site, improve
            content, and measure marketing performance. You can manage cookie preferences through your browser
            settings.
          </p>

          <h2>Data Security &amp; Retention</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards to protect your information.
            We retain data only as long as necessary to provide services, meet legal requirements, or resolve
            disputes.
          </p>

          <h2>Your Choices</h2>
          <ul>
            <li>Request access to or correction of your contact information.</li>
            <li>Request that we delete certain information, subject to legal and record-keeping obligations.</li>
            <li>Opt out of marketing emails or text messages that are not strictly service-related.</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or how we handle your information, please contact
            us:
          </p>
          <p>
            Doctor Mold Pro LLC
            <br />
            Address: {businessConfig.address.line}
            <br />
            Phone: <a href="tel:8137765200">(813) 776-5200</a>
            <br />
            Website: <a href="https://doctormoldpro.com">doctormoldpro.com</a>
          </p>

          <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '1.5rem' }}>
            This page is provided for general informational purposes and does not constitute legal advice. For
            specific compliance guidance, please consult with your attorney or compliance advisor.
          </p>
        </div>
      </section>
    </>
  )
}

export default Privacy

