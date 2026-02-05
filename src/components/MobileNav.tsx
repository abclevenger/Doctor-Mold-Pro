import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        className="mobile-nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        type="button"
      >
        <span className={`hamburger ${isOpen ? 'is-open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav className={`mobile-nav ${isOpen ? 'is-open' : ''}`} aria-label="Mobile navigation">
        <div className="mobile-nav-content">
          <Link to="/#services" onClick={handleLinkClick}>
            Services
          </Link>
          <Link to="/mold-testing-tampa" onClick={handleLinkClick}>
            Testing
          </Link>
          <Link to="/mold-removal-tampa" onClick={handleLinkClick}>
            Removal
          </Link>
          <Link to="/price-packages" onClick={handleLinkClick}>
            Price Packages
          </Link>
          <Link to="/blog" onClick={handleLinkClick}>
            Blog
          </Link>
          <Link to="/#faq" onClick={handleLinkClick}>
            FAQ
          </Link>
          <Link to="/#contact" className="mobile-nav-cta" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </nav>

      {isOpen && <div className="mobile-nav-overlay" onClick={() => setIsOpen(false)} aria-hidden="true" />}
    </>
  )
}
