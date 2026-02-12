declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

export function trackEvent(event: {
  category: string
  action: string
  label?: string
}) {
  // Push to dataLayer if Google Tag Manager is present; otherwise no-op
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: 'custom_event',
      eventCategory: event.category,
      eventAction: event.action,
      eventLabel: event.label,
    })
  }
}

