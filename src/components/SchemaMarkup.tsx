import { useEffect } from 'react'
import { businessConfig } from '../config/business'

export function SchemaMarkup() {
  useEffect(() => {
    // LocalBusiness Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${businessConfig.url}#business`,
      name: businessConfig.name,
      legalName: businessConfig.legalName,
      image: `${businessConfig.url}/dr-mold-pro-logo-transparent.png`,
      url: businessConfig.url,
      telephone: businessConfig.phone.formatted,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: businessConfig.address.street,
        addressLocality: businessConfig.address.city,
        addressRegion: businessConfig.address.state,
        postalCode: businessConfig.address.zipCode,
        addressCountry: businessConfig.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: businessConfig.geo.latitude,
        longitude: businessConfig.geo.longitude,
      },
      areaServed: businessConfig.serviceAreas.map((area) => ({
        '@type': 'City',
        name: area,
      })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Mold Testing and Remediation Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mold Testing',
              description: 'Certified mold inspection and testing services in Tampa, FL',
              areaServed: 'Tampa, FL',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mold Removal',
              description: 'Professional mold remediation and removal services in Tampa, FL',
              areaServed: 'Tampa, FL',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mold Inspection',
              description: 'Comprehensive mold inspection services for homes and businesses in Tampa Bay',
              areaServed: 'Tampa, FL',
            },
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '3',
        bestRating: '5',
        worstRating: '1',
      },
      sameAs: [
        businessConfig.social.facebook,
        businessConfig.social.linkedin,
        businessConfig.social.bbb,
      ],
    }

    // Service Schema for Mold Testing
    const moldTestingSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Mold Testing',
      provider: {
        '@type': 'LocalBusiness',
        name: businessConfig.name,
        telephone: businessConfig.phone.formatted,
        address: {
          '@type': 'PostalAddress',
          addressLocality: businessConfig.address.city,
          addressRegion: businessConfig.address.state,
        },
      },
      areaServed: {
        '@type': 'City',
        name: 'Tampa',
      },
      description:
        'Certified mold testing and inspection services in Tampa, FL. Fast, reliable results with IICRC-certified professionals.',
    }

    // Service Schema for Mold Removal
    const moldRemovalSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Mold Remediation',
      provider: {
        '@type': 'LocalBusiness',
        name: businessConfig.name,
        telephone: businessConfig.phone.formatted,
        address: {
          '@type': 'PostalAddress',
          addressLocality: businessConfig.address.city,
          addressRegion: businessConfig.address.state,
        },
      },
      areaServed: {
        '@type': 'City',
        name: 'Tampa',
      },
      description:
        'Professional mold removal and remediation services in Tampa, FL. IICRC-certified, veteran-owned, with Mold-Free Warranty.',
    }

    // FAQPage Schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the first signs of mold?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Musty odors, discoloration on walls or ceilings, water stains, and allergy-like symptoms indoors are common early warning signs.',
          },
        },
        {
          '@type': 'Question',
          name: 'How dangerous is mold?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mold exposure can trigger asthma, allergies, and respiratory irritation—especially for children, seniors, and people with weakened immune systems.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I get professional mold testing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "If you've had recent water damage, smell persistent mustiness, or see suspicious growth, professional testing is recommended to confirm type and extent.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is remediation covered by insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many policies cover mold caused by sudden, accidental water damage like a burst pipe, but long-term leaks or neglect are often excluded. We provide insurance-ready documentation.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I prevent mold from coming back?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Keep humidity below 50%, repair leaks quickly, use dehumidifiers in damp spaces, and schedule periodic inspections in high-risk areas such as attics and crawlspaces.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes Doctor Mold Pro different?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We're NORMI and IICRC certified, Florida DBPR licensed, veteran-owned, and we back our work with a Mold-Free Warranty and transparent, easy-to-read reports.",
          },
        },
      ],
    }

    // Inject schemas into page
    const scripts = [
      { id: 'schema-localbusiness', schema: localBusinessSchema },
      { id: 'schema-mold-testing', schema: moldTestingSchema },
      { id: 'schema-mold-removal', schema: moldRemovalSchema },
      { id: 'schema-faq', schema: faqSchema },
    ]

    scripts.forEach(({ id, schema }) => {
      // Remove existing script if present
      const existing = document.getElementById(id)
      if (existing) {
        existing.remove()
      }

      // Create new script
      const script = document.createElement('script')
      script.id = id
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })

    // Cleanup function
    return () => {
      scripts.forEach(({ id }) => {
        const script = document.getElementById(id)
        if (script) {
          script.remove()
        }
      })
    }
  }, [])

  return null
}
