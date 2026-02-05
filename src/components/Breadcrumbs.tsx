import { Link } from 'react-router-dom'
import { useEffect } from 'react'

interface BreadcrumbItem {
  label: string
  path: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate BreadcrumbList schema
  useEffect(() => {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: item.path.startsWith('http') ? item.path : `https://doctormoldpro.com${item.path}`,
      })),
    }

    // Remove existing breadcrumb schema if present
    const existing = document.getElementById('schema-breadcrumb')
    if (existing) {
      existing.remove()
    }

    // Create new script
    const script = document.createElement('script')
    script.id = 'schema-breadcrumb'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById('schema-breadcrumb')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [items])

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        {items.map((item, index) => (
          <li key={item.path} className="breadcrumb-item">
            {index < items.length - 1 ? (
              <>
                <Link to={item.path}>{item.label}</Link>
                <span className="breadcrumb-separator">/</span>
              </>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
