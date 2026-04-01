import { PageMeta } from '../components/PageMeta'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { FAQAccordion } from '../components/FAQAccordion'
import { RelatedPages } from '../components/RelatedPages'
import { getCanonicalUrl } from '../config/seo'
import { Link } from 'react-router-dom'
import {
  MOLD_REMEDIATION_LOCATIONS,
  type MoldRemediationCityId,
} from '../content/moldRemediationLocations'

const CITY_LABEL: Record<MoldRemediationCityId, string> = {
  tampa: 'Tampa',
  brandon: 'Brandon',
  riverview: 'Riverview',
  lutz: 'Lutz',
  templeTerrace: 'Temple Terrace',
  clearwater: 'Clearwater',
  stPetersburg: 'St. Petersburg',
  oldsmar: 'Oldsmar',
  safetyHarbor: 'Safety Harbor',
  wesleyChapel: 'Wesley Chapel',
}

interface Props {
  cityId: MoldRemediationCityId
}

export function MoldRemediationLocationPage({ cityId }: Props) {
  const c = MOLD_REMEDIATION_LOCATIONS[cityId]
  const place = CITY_LABEL[cityId]

  return (
    <>
      <PageMeta
        title={c.title}
        description={c.metaDescription}
        canonical={getCanonicalUrl(c.path)}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: `Mold remediation ${place}`, path: c.path },
        ]}
      />
      <article className="seo-page">
        <div className="section">
          <h1>{c.h1}</h1>
          <p className="section-lead" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            {c.lead}
          </p>

          {c.sections.map((section) => (
            <section key={section.h2} className="content-section">
              <h2>{section.h2}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={`${section.h2}-${i}`}>{p}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="section faq-section">
          <h2>{c.faqSectionTitle}</h2>
          <FAQAccordion faqs={c.faqs} />
        </section>

        <section className="section cta-section">
          <div className="cta-section-inner">
            <h2>{c.cta.heading}</h2>
            <p>{c.cta.body}</p>
            <div className="cta-buttons">
              <a href="tel:8137765200" className="primary button-link">
                Call (813) 776-5200
              </a>
              <Link to="/mold-testing-appointment" className="secondary button-link">
                Book online
              </Link>
            </div>
            {c.cta.note ? (
              <p className="cta-note">
                <strong>Doctor Mold Pro:</strong> {c.cta.note}
              </p>
            ) : null}
          </div>
        </section>

        <RelatedPages pages={c.relatedPages} sectionLead={c.relatedSectionLead} />
      </article>
    </>
  )
}
