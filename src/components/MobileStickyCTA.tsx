import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { trackEvent } from '../utils/analytics'
import { businessConfig } from '../config/business'

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      const isMobile = window.innerWidth < 1024
      const scrolled = window.scrollY > 180
      setIsVisible(isMobile && scrolled && !isDismissed)
    }

    updateVisibility()
    window.addEventListener('resize', updateVisibility)
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => {
      window.removeEventListener('resize', updateVisibility)
      window.removeEventListener('scroll', updateVisibility)
    }
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
    // Store dismissal in sessionStorage so it doesn't reappear this session
    sessionStorage.setItem('dmp_mobile_cta_dismissed', '1')
  }

  useEffect(() => {
    // Check if user already dismissed this session
    if (sessionStorage.getItem('dmp_mobile_cta_dismissed') === '1') {
      setIsDismissed(true)
      setIsVisible(false)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="mobile-sticky-cta">
      <button
        className="mobile-sticky-cta-close"
        onClick={handleDismiss}
        aria-label="Close"
        type="button"
      >
        ×
      </button>
      <p className="mobile-sticky-cta-label">Need help now?</p>
      <div className="mobile-sticky-cta-content">
        <a
          href="tel:8137765200"
          className="mobile-sticky-cta-button primary"
          onClick={() =>
            trackEvent({
              category: 'CTA',
              action: 'click_mobile_sticky_call',
              label: 'Mobile sticky bar',
            })
          }
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
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call {businessConfig.phone.display}
        </a>
        <Link
          to="/mold-testing-appointment"
          className="mobile-sticky-cta-button secondary"
          onClick={() =>
            trackEvent({
              category: 'CTA',
              action: 'click_mobile_sticky_book_online',
              label: 'Mobile sticky bar',
            })
          }
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
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Book online
        </Link>
      </div>
    </div>
  )
}
