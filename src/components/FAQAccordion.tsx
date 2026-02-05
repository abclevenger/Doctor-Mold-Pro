import { useState, useEffect } from 'react'
import type { FAQ } from '../content/types'

interface FAQAccordionProps {
  faqs: FAQ[]
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Generate FAQPage schema
  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }

    // Remove existing FAQ schema if present
    const existing = document.getElementById('schema-faqpage')
    if (existing) {
      existing.remove()
    }

    // Create new script
    const script = document.createElement('script')
    script.id = 'schema-faqpage'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById('schema-faqpage')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [faqs])

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              type="button"
            >
              <span>{faq.question}</span>
              <span className="faq-icon">{isOpen ? '−' : '+'}</span>
            </button>
            <div
              className={`faq-answer ${isOpen ? 'faq-answer-open' : 'faq-answer-closed'}`}
              aria-hidden={!isOpen}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
