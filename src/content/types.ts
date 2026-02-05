/**
 * TypeScript interfaces for SEO page content
 */

export interface ContentSection {
  heading: string
  content: string | React.ReactNode
  image?: {
    src: string
    alt: string
  }
}

export interface FAQ {
  question: string
  answer: string
}

export interface RelatedPage {
  slug: string
  title: string
}

export interface SupportPageContent {
  slug: string
  title: string // 55-60 chars for meta
  metaDescription: string // 150-160 chars
  h1: string
  sections: ContentSection[]
  faqs: FAQ[]
  primaryCTATarget: 'testing' | 'removal'
  relatedPages?: RelatedPage[]
}
