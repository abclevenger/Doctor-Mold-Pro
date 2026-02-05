import { useState, useEffect } from 'react'

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Only show on mobile devices
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768
      setIsVisible(isMobile && !isDismissed)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Show after user scrolls down a bit
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
    // Store dismissal in sessionStorage so it doesn't reappear this session
    sessionStorage.setItem('mobileCTA dismissed', 'true')
  }

  useEffect(() => {
    // Check if user already dismissed this session
    if (sessionStorage.getItem('mobileCTA dismissed') === 'true') {
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
      <div className="mobile-sticky-cta-content">
        <a href="tel:8137765200" className="mobile-sticky-cta-button primary">
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call Now
        </a>
        <a href="#contact" className="mobile-sticky-cta-button secondary">
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
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Get Quote
        </a>
      </div>
    </div>
  )
}
