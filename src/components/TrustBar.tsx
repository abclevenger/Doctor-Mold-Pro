import { businessConfig } from '../config/business'

/**
 * Compact trust strip immediately below the hero — proof without repeating long copy.
 */
export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Credentials and trust signals">
      <div className="trust-bar-inner">
        <div className="trust-bar-item">
          <span className="trust-bar-strong">5.0 ★</span>
          <span className="trust-bar-label">Google reviews</span>
        </div>
        <div className="trust-bar-divider" aria-hidden />
        <div className="trust-bar-item">
          <span className="trust-bar-strong">FL licensed</span>
          <span className="trust-bar-label">
            MRSA4767 · MRSR4762
          </span>
        </div>
        <div className="trust-bar-divider" aria-hidden />
        <div className="trust-bar-item">
          <span className="trust-bar-strong">NORMI &amp; IICRC</span>
          <span className="trust-bar-label">Certified testing &amp; remediation</span>
        </div>
        <div className="trust-bar-divider" aria-hidden />
        <div className="trust-bar-item">
          <span className="trust-bar-strong">Veteran-owned</span>
          <span className="trust-bar-label">Tampa Bay team</span>
        </div>
        <div className="trust-bar-divider" aria-hidden />
        <div className="trust-bar-item">
          <span className="trust-bar-strong">24/7</span>
          <span className="trust-bar-label">Emergency line</span>
        </div>
        <div className="trust-bar-divider trust-bar-divider--hide-sm" aria-hidden />
        <a
          className="trust-bar-bbb"
          href={businessConfig.social.bbb}
          target="_blank"
          rel="noopener noreferrer"
        >
          BBB A- rated →
        </a>
      </div>
    </section>
  )
}
