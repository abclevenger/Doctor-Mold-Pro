import { useEffect } from 'react'
import { PageMeta } from '../components/PageMeta'
import { getCanonicalUrl } from '../config/seo'

export function MoldTestingAppointment() {
  useEffect(() => {
    // Defer booking widget script until after initial paint to improve LCP
    // Load after a short delay or when user interacts with the page
    let scriptLoaded = false
    const loadScript = () => {
      if (scriptLoaded) return
      scriptLoaded = true
      const script = document.createElement('script')
      script.src = 'https://link.ymbs.pro/js/form_embed.js'
      script.async = true
      document.body.appendChild(script)
    }

    // Load script after initial paint (3s delay) or on user interaction
    const timeoutId = setTimeout(loadScript, 3000)
    
    const events = ['scroll', 'touchstart', 'mousemove', 'keydown']
    const loadOnInteraction = () => {
      loadScript()
      events.forEach((event) => {
        window.removeEventListener(event, loadOnInteraction)
      })
    }
    events.forEach((event) => {
      window.addEventListener(event, loadOnInteraction, { once: true, passive: true })
    })

    return () => {
      clearTimeout(timeoutId)
      events.forEach((event) => {
        window.removeEventListener(event, loadOnInteraction)
      })
      const script = document.body.querySelector('script[src="https://link.ymbs.pro/js/form_embed.js"]')
      if (script) {
        document.body.removeChild(script)
      }
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

