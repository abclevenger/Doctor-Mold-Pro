import { PageMeta } from '../components/PageMeta'
import { getCanonicalUrl } from '../config/seo'

export function Terms() {
  return (
    <>
      <PageMeta
        title="Terms & Conditions | Doctor Mold Pro Tampa"
        description="Terms and conditions for Doctor Mold Pro mold testing and remediation services in Tampa, FL."
        canonical={getCanonicalUrl('/terms')}
      />
      <section className="section" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1>Terms & Conditions</h1>
        <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Last Updated: February 2026</p>

        <div className="content-section">
          <h2>1. Service Agreement</h2>
          <p>
            By engaging Doctor Mold Pro LLC ("Company," "we," "us," or "our") for mold testing, inspection, or remediation services, you ("Client," "you," or "your") agree to these Terms and Conditions. These terms govern all services provided by Doctor Mold Pro.
          </p>
        </div>

        <div className="content-section">
          <h2>2. Services Provided</h2>
          <p>
            Doctor Mold Pro provides professional mold inspection, testing, assessment, and remediation services. All services are performed by certified, licensed professionals in accordance with industry standards and applicable Florida regulations.
          </p>
        </div>

        <div className="content-section">
          <h2>3. Payment Terms</h2>
          <p>
            Payment is due upon completion of services unless otherwise agreed in writing. We accept cash, check, and major credit cards. For remediation projects, a deposit may be required. Final payment is due upon completion and verification of work.
          </p>
        </div>

        <div className="content-section">
          <h2>4. Warranty</h2>
          <p>
            Doctor Mold Pro provides a 12-month Mold-Free Guarantee on remediation work. This warranty covers mold recurrence in treated areas due to improper remediation. The warranty does not cover new mold growth from new water damage, leaks, or other causes unrelated to the original remediation work.
          </p>
        </div>

        <div className="content-section">
          <h2>5. Limitation of Liability</h2>
          <p>
            Doctor Mold Pro's liability is limited to the cost of services provided. We are not liable for indirect, incidental, or consequential damages. Our insurance covers standard liability within policy limits.
          </p>
        </div>

        <div className="content-section">
          <h2>6. Client Responsibilities</h2>
          <p>
            Clients are responsible for providing accurate information about the property, granting access to work areas, and ensuring the safety of pets and personal belongings during service. Clients must disclose any known hazards or conditions that may affect our work.
          </p>
        </div>

        <div className="content-section">
          <h2>7. Insurance</h2>
          <p>
            Doctor Mold Pro maintains general liability and workers' compensation insurance. We can provide insurance documentation upon request. Clients are responsible for their own property insurance and should consult their insurance provider regarding coverage for mold-related services.
          </p>
        </div>

        <div className="content-section">
          <h2>8. Cancellation Policy</h2>
          <p>
            Cancellations must be made at least 24 hours before scheduled service to avoid cancellation fees. Emergency services may have different cancellation terms as specified in the service agreement.
          </p>
        </div>

        <div className="content-section">
          <h2>9. Dispute Resolution</h2>
          <p>
            Any disputes arising from services provided will be resolved through good faith negotiation. If resolution cannot be reached, disputes will be subject to binding arbitration in Hillsborough County, Florida, in accordance with Florida law.
          </p>
        </div>

        <div className="content-section">
          <h2>10. Changes to Terms</h2>
          <p>
            Doctor Mold Pro reserves the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
          </p>
        </div>

        <div className="content-section">
          <h2>11. Contact Information</h2>
          <p>
            For questions about these Terms & Conditions, please contact us:
          </p>
          <ul className="bullet-list" style={{ marginTop: '1rem' }}>
            <li><strong>Phone:</strong> <a href="tel:8137765200" style={{ color: '#7dd3fc' }}>(813) 776-5200</a></li>
            <li><strong>Email:</strong> Contact through our website contact form</li>
            <li><strong>Address:</strong> Tampa, FL 33607</li>
          </ul>
        </div>

        <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '1rem' }}>
          <p style={{ color: '#cbd5f5', margin: 0 }}>
            By using Doctor Mold Pro services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
          </p>
        </div>
      </section>
    </>
  )
}
