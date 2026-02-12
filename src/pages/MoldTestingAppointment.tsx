import { useEffect } from 'react'
import { PageMeta } from '../components/PageMeta'
import { getCanonicalUrl } from '../config/seo'

export function MoldTestingAppointment() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://link.ymbs.pro/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <PageMeta
        title="Mold Testing Appointment Calendar | Doctor Mold Pro"
        description="Book a certified mold testing appointment with Doctor Mold Pro. View real-time availability and schedule your inspection online in minutes."
        canonical={getCanonicalUrl('/mold-testing-appointment')}
      />
      <section className="section">
        <div className="section">
          <h1>Mold Testing Appointment Calendar</h1>
          <p className="section-lead" style={{ marginBottom: '1.5rem' }}>
            Choose a time that works best for your mold inspection or testing appointment. Our team
            will confirm your booking and follow up with any additional details.
          </p>
        </div>
        <div style={{ width: '100%', minHeight: '700px' }}>
          <iframe
            src="https://link.ymbs.pro/widget/booking/Vb1eJDftBYiRpH1pojN3"
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px' }}
            scrolling="no"
            id="sH1BHgjVtKvrfBX2fqUN_1770910879488"
          />
        </div>
      </section>
    </>
  )
}

