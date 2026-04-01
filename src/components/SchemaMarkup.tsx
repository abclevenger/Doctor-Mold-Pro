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
        reviewCount: '5',
        bestRating: '5',
        worstRating: '1',
      },
      sameAs: [
        businessConfig.social.facebook,
        businessConfig.social.linkedin,
        businessConfig.social.bbb,
      ],
      knowsAbout: [
        'Mold remediation',
        'Mold inspection',
        'Mold testing',
        'Black mold removal',
        'Water damage and mold',
        'Indoor air quality',
      ],
    }

    const bayAreaServed = ['Tampa', 'St. Petersburg', 'Clearwater', 'Brandon', 'Riverview'].map(
      (name) => ({ '@type': 'City', name }),
    )

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
      areaServed: bayAreaServed,
      description:
        'Certified mold testing and mold inspection in Tampa Bay, FL—including Clearwater, St. Petersburg, Brandon, and Riverview. Lab-backed results for homeowners and insurers.',
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
      areaServed: bayAreaServed,
      description:
        'Professional mold remediation and mold removal in Tampa, FL and Tampa Bay. Florida DBPR licensed, NORMI and IICRC certified, veteran-owned, with written warranty on remediation.',
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
            text: 'Musty smells, stains or bubbling paint, water marks, and allergy-like symptoms that get worse indoors. You might also see spots on grout, drywall, or around vents.',
          },
        },
        {
          '@type': 'Question',
          name: 'How dangerous is mold?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It varies by person and type, but mold can irritate lungs, trigger allergies, and make asthma worse. Kids, older adults, and anyone immune-compromised should take extra care.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I get professional mold testing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After any water intrusion, if you smell persistent mustiness, see suspicious growth, or need documentation for insurance or a home sale. Testing tells you what you are dealing with instead of guessing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is remediation covered by insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Often yes for sudden damage like a burst pipe if you act fast. Slow leaks or maintenance issues are harder. We provide clear reports and photos your adjuster can use.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I keep mold from coming back?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fix leaks, control humidity (often below 50% indoors), run dehumidifiers in damp rooms, and do not ignore small wet spots.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes Doctor Mold Pro different?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Florida-licensed mold assessors and remediators, NORMI and IICRC trained, veteran-owned, and local to Tampa Bay. Written plan, warranty on remediation work, and real humans who answer the phone.',
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
