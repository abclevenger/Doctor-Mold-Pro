/**
 * Smooth scroll to an element by ID
 */
export function scrollToElement(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

/**
 * Handle hash links for smooth scrolling
 * Call this on route changes or page load
 */
export function handleHashLinks() {
  // Handle initial hash on page load
  if (window.location.hash) {
    const hash = window.location.hash.substring(1)
    setTimeout(() => scrollToElement(hash), 100)
  }

  // Handle hash link clicks
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null
    
    if (link && link.hash) {
      e.preventDefault()
      const hash = link.hash.substring(1)
      scrollToElement(hash)
      // Update URL without triggering scroll
      window.history.pushState(null, '', link.hash)
    }
  })
}
