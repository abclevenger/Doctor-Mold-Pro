import { PageMeta } from '../components/PageMeta'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { RelatedPages } from '../components/RelatedPages'
import { getCanonicalUrl } from '../config/seo'
import { Link } from 'react-router-dom'

export function MoldTypes() {
  const moldTypes = [
    {
      slug: '/mold-types/aspergillus',
      title: 'Aspergillus',
      description:
        'Common indoor mold found in HVAC systems, on walls, and in damp areas. Can cause allergic reactions and respiratory issues.',
    },
    {
      slug: '/mold-types/cladosporium',
      title: 'Cladosporium',
      description:
        'One of the most common molds found in Florida homes. Often appears on fabrics, wood, and other porous materials.',
    },
    {
      slug: '/mold-types/stachybotrys-black-mold',
      title: 'Stachybotrys (Black Mold)',
      description:
        'Toxic black mold that requires immediate professional attention. Found in areas with persistent moisture and can cause serious health effects.',
    },
    {
      slug: '/mold-types/penicillium',
      title: 'Penicillium',
      description:
        'Common mold found on water-damaged materials. Can spread quickly and cause allergic reactions.',
    },
    {
      slug: '/mold-types/alternaria',
      title: 'Alternaria',
      description:
        'Outdoor mold that can enter homes through windows and doors. Common allergen that can trigger asthma symptoms.',
    },
  ]

  return (
    <>
      <PageMeta
        title="Types of Mold: Common Varieties Found in Tampa Homes | Doctor Mold Pro"
        description="Learn about common types of mold found in Tampa homes: Aspergillus, Cladosporium, Black Mold (Stachybotrys), Penicillium, and Alternaria. When to test and remove."
        canonical={getCanonicalUrl('/mold-types')}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Mold Types', path: '/mold-types' },
        ]}
      />
      <article className="seo-page">
        <div className="section">
          <h1>Types of Mold: Common Varieties Found in Tampa Homes</h1>
          <p className="section-lead" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Understanding different types of mold helps you identify potential problems and know
            when to seek professional testing and removal. Learn about the most common molds found in
            Tampa Bay homes.
          </p>

          <section className="content-section">
            <h2>Why Understanding Mold Types Matters</h2>
            <p>
              Not all mold is created equal. Different types of mold have different characteristics,
              health effects, and removal requirements. Some molds are relatively harmless and
              primarily cause allergic reactions, while others produce toxins that can cause serious
              health problems. Understanding the types of mold commonly found in Tampa homes helps
              you recognize potential problems and know when to seek professional testing and
              remediation.
            </p>
            <p>
              Professional mold testing identifies the specific types of mold present in your home,
              which is essential for determining the appropriate remediation approach and
              understanding potential health risks. While visual identification can sometimes give
              clues, laboratory analysis of samples provides definitive identification and ensures
              proper treatment.
            </p>
          </section>

          <section className="content-section">
            <h2>Common Mold Types in Tampa Bay</h2>
            <p>
              Tampa\'s warm, humid climate creates ideal conditions for many types of mold. The
              most common molds found in Tampa Bay homes include Aspergillus, Cladosporium,
              Stachybotrys (black mold), Penicillium, and Alternaria. Each has unique
              characteristics, preferred growing conditions, and health implications. Understanding
              these differences helps you recognize potential problems and take appropriate action.
            </p>
          </section>

          <section className="content-section">
            <h2>When to Test for Specific Mold Types</h2>
            <p>
              If you notice visible mold growth, musty odors, or experience health symptoms, it\'s
              important to have professional testing to identify the specific types present. Some
              molds, like Stachybotrys (black mold), require immediate professional attention due to
              their toxic properties. Other molds may indicate underlying moisture problems that need
              to be addressed. Professional testing provides the information needed to determine
              the appropriate response and ensure safe, effective remediation.
            </p>
          </section>
        </div>

        <section className="section">
          <h2>Common Mold Types</h2>
          <div className="grid" style={{ marginTop: '2rem' }}>
            {moldTypes.map((type) => (
              <article key={type.slug} className="card">
                <h3>{type.title}</h3>
                <p>{type.description}</p>
                <Link
                  to={type.slug}
                  className="button-link secondary"
                  style={{ marginTop: '1rem', display: 'inline-block' }}
                >
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta-section">
          <div className="cta-section-inner">
            <h2>Need Help Identifying Mold in Your Home?</h2>
            <p>
              Professional mold testing identifies the specific types of mold present and determines
              the appropriate remediation approach.
            </p>
            <div className="cta-buttons">
              <Link to="/mold-testing-tampa" className="primary button-link">
                Schedule Mold Testing
              </Link>
              <a href="tel:8137765200" className="secondary button-link">
                Call (813) 776-5200
              </a>
            </div>
          </div>
        </section>

        <RelatedPages
          pages={[
            { slug: '/signs-of-mold-in-house', title: 'Signs of Mold in House' },
            { slug: '/is-black-mold-dangerous', title: 'Is Black Mold Dangerous?' },
            { slug: '/mold-testing-tampa', title: 'Mold Testing Tampa' },
          ]}
        />
      </article>
    </>
  )
}
