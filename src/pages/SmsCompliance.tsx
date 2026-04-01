import { PageMeta } from '../components/PageMeta'
import { businessConfig } from '../config/business'
import { getCanonicalUrl } from '../config/seo'

function SmsCompliance() {
  return (
    <>
      <PageMeta
        title="SMS Terms & Alerts (A2P Compliance) | Doctor Mold Pro"
        description="Read the SMS text message terms, consent, and opt-out instructions for Doctor Mold Pro alerts and appointment reminders."
        canonical={getCanonicalUrl('/sms-terms')}
      />
      <section className="section">
        <div className="section-inner">
          <h1>SMS Terms &amp; Alerts (A2P Compliance)</h1>
          <p className="section-lead">
            By providing your mobile number to Doctor Mold Pro, you agree to receive SMS text messages related
            to your mold testing, inspection, and remediation services, subject to the terms below.
          </p>

          <h2>Program Description</h2>
          <p>
            Doctor Mold Pro LLC may send you SMS text messages for purposes such as:
          </p>
          <ul>
            <li>Confirming appointments, schedule changes, and arrival windows.</li>
            <li>Sending reminders, service updates, and follow-up information.</li>
            <li>Providing important safety notices or time-sensitive information.</li>
            <li>Occasional promotions or educational tips related to mold prevention and indoor air quality.</li>
          </ul>

          <h2>Consent</h2>
          <p>
            By submitting a form on our website, booking online, texting our number, or otherwise providing your
            mobile number and requesting that we contact you, you consent to receive SMS text messages from
            Doctor Mold Pro at the number you provided. Consent is not a condition of purchasing services, and
            you may opt out at any time.
          </p>

          <h2>Message Frequency</h2>
          <p>
            Message frequency will vary based on your active projects and requests. In general, you can expect a
            few messages per appointment (confirmation, reminders, follow-ups) and occasional service-related
            updates.
          </p>

          <h2>Opt-Out Instructions</h2>
          <p>
            You can stop receiving non-essential SMS messages from Doctor Mold Pro at any time by replying{' '}
            <strong>STOP</strong> to any text you receive from us. After you send STOP, we will send you a final
            confirmation message and then stop sending further non-essential SMS messages to that number.
          </p>
          <p>
            You may also request changes to your communication preferences by calling us at{' '}
            <a href="tel:8137765200">(813) 776-5200</a>.
          </p>

          <h2>Help &amp; Support</h2>
          <p>
            If you need assistance with our SMS program, reply <strong>HELP</strong> to any message, or contact
            us at:
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

          <h2>Carrier &amp; Cost Information</h2>
          <p>
            Message and data rates may apply depending on your mobile plan and carrier. Check with your wireless
            provider for details about your text and data plan. Carriers are not liable for delayed or undelivered
            messages.
          </p>

          <h2>Eligibility</h2>
          <p>
            You must be the owner or authorized user of the mobile number provided and at least 18 years old (or
            have the consent of a parent or guardian) to participate in our SMS program.
          </p>

          <h2>Privacy</h2>
          <p>
            We respect your privacy and use your information in accordance with our{' '}
            <a href="/privacy-policy">Privacy Policy</a>. We do not sell your mobile number. SMS data may be
            shared with our service providers as needed to deliver messages and maintain compliance.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these SMS Terms &amp; Alerts from time to time. Any changes will be posted on this
            page with an updated effective date. Continued use of our SMS program after changes are posted
            constitutes your acceptance of the updated terms.
          </p>

          <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '1.5rem' }}>
            This page is intended to help support A2P 10DLC and TCPA-style compliance, but does not constitute
            legal advice. Please consult your legal counsel for requirements specific to your business and
            jurisdiction.
          </p>
        </div>
      </section>
    </>
  )
}

export default SmsCompliance

