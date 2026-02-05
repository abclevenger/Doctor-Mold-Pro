import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { MobileStickyCTA } from './MobileStickyCTA'
import { MobileNav } from './MobileNav'
import { BackToTop } from './BackToTop'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="page">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <MobileStickyCTA />
      <header className="site-header">
        <div className="brand">
          <Link to="/">
            <img
              src="/FinalLogo_Transparent_DrMoldPro.png"
              alt="Doctor Mold Pro - Certified Mold Testing & Removal in Tampa, FL"
              className="brand-logo"
              width="200"
              height="56"
              loading="eager"
            />
          </Link>
        </div>
        <nav className="nav">
          <Link to="/#services">Services</Link>
          <Link to="/mold-testing-tampa">Testing</Link>
          <Link to="/mold-removal-tampa">Removal</Link>
          <Link to="/price-packages">Price Packages</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/#faq">FAQ</Link>
          <Link to="/#contact" className="nav-cta">
            Contact
          </Link>
        </nav>
        <MobileNav />
      </header>

      <main id="main-content">{children}</main>

      <BackToTop />

      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Condition</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              <li>
                <Link to="/#services">Services</Link>
              </li>
              <li>
                <Link to="/price-packages">Price Packages</Link>
              </li>
              <li>
                <Link to="/mold-testing-tampa">Mold Testing</Link>
              </li>
              <li>
                <Link to="/residential-mold-inspection-tampa">Mold Inspection</Link>
              </li>
              <li>
                <Link to="/mold-removal-tampa">Mold Removal</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li>
                <Link to="/mold-types">Mold Types</Link>
              </li>
              <li>
                <Link to="/certifications">Certification</Link>
              </li>
              <li>
                <Link to="/#faq">FAQs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://facebook.com/profile.php?id=61573691254080"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/doctor-mold-pro-llc/posts/?feedview=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.bbb.org/us/fl/tampa/profile/mold-testing/doctor-mold-pro-llc-0653-90453165#bbbonlineclick"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Better Business Bureau"
                className="social-icon"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p className="footer-bottom">
          © 2026 Doctor Mold Pro. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}
