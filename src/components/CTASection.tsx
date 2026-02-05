import { Link } from 'react-router-dom'

interface CTASectionProps {
  primaryCTATarget: 'testing' | 'removal'
}

export function CTASection({ primaryCTATarget }: CTASectionProps) {
  const isTesting = primaryCTATarget === 'testing'

  return (
    <section className="section cta-section">
      <div className="cta-section-inner">
        <h2>What to Do Next</h2>
        <p>
          {isTesting
            ? 'If you suspect mold in your Tampa home or business, professional testing is the first step to understanding the problem and protecting your health.'
            : 'If you have confirmed mold growth or received test results showing elevated spore levels, professional remediation is essential to safely remove it and prevent recurrence.'}
        </p>
        <div className="cta-buttons">
          {isTesting ? (
            <>
              <Link to="/mold-testing-tampa" className="primary button-link">
                Schedule Mold Testing in Tampa
              </Link>
              <Link to="/mold-removal-tampa" className="secondary button-link">
                Need Removal Instead?
              </Link>
            </>
          ) : (
            <>
              <Link to="/mold-removal-tampa" className="primary button-link">
                Get Mold Removal Help in Tampa
              </Link>
              <Link to="/mold-testing-tampa" className="secondary button-link">
                Need Testing First?
              </Link>
            </>
          )}
        </div>
        <p className="cta-note">
          <strong>24/7 Emergency Service:</strong> Call{' '}
          <a href="tel:8137765200" style={{ color: '#7dd3fc', textDecoration: 'none' }}>
            (813) 776-5200
          </a>{' '}
          for urgent mold issues or water damage.
        </p>
      </div>
    </section>
  )
}
