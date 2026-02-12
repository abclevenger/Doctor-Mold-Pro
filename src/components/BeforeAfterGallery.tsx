interface BeforeAfterItem {
  title: string
  description: string
  beforeImage: string
  afterImage: string
}

interface BeforeAfterGalleryProps {
  heading?: string
  items: BeforeAfterItem[]
}

export function BeforeAfterGallery({ heading = 'Before & After Mold Remediation', items }: BeforeAfterGalleryProps) {
  if (!items.length) return null

  return (
    <section className="section">
      <h2>{heading}</h2>
      <div className="before-after-grid">
        {items.map((item) => (
          <article key={item.title} className="before-after-card">
            <h3>{item.title}</h3>
            <p className="before-after-description">{item.description}</p>
            <div className="before-after-images">
              <figure>
                <img src={item.beforeImage} alt={`${item.title} - before remediation`} loading="lazy" />
                <figcaption>Before</figcaption>
              </figure>
              <figure>
                <img src={item.afterImage} alt={`${item.title} - after remediation`} loading="lazy" />
                <figcaption>After</figcaption>
              </figure>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

