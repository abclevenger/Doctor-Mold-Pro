import { useState } from 'react'
import type { FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us what\'s going on'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more details (at least 10 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validate()) {
      // Scroll to first error
      const firstErrorField = document.querySelector('.contact-form .error')
      firstErrorField?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Replace with actual form submission endpoint
      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      // In production, you would do:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      // if (!response.ok) throw new Error('Submission failed')

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      
      // Scroll to success message
      setTimeout(() => {
        document.getElementById('contact-form-success')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {submitStatus === 'success' && (
        <div id="contact-form-success" className="form-message form-message-success" role="alert">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <p>Thank you! We&apos;ll contact you soon.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="form-message form-message-error" role="alert">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p>Something went wrong. Please call us at <a href="tel:8137765200">(813) 776-5200</a>.</p>
        </div>
      )}

      <div>
        <label htmlFor="name">
          Name <span className="required">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="First and last name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && (
          <span id="name-error" className="error-message" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="email">
          Email <span className="required">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && (
          <span id="email-error" className="error-message" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="phone">
          Phone <span className="required">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(813) 555-0123"
          value={formData.phone}
          onChange={handleChange}
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className={errors.phone ? 'error' : ''}
        />
        {errors.phone && (
          <span id="phone-error" className="error-message" role="alert">
            {errors.phone}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="service">
          Service needed <span className="required">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          aria-invalid={errors.service ? 'true' : 'false'}
          aria-describedby={errors.service ? 'service-error' : undefined}
          className={errors.service ? 'error' : ''}
        >
          <option value="">Select an option</option>
          <option value="inspection">Mold inspection</option>
          <option value="testing">Mold testing</option>
          <option value="removal">Mold removal / remediation</option>
          <option value="other">Other / not sure</option>
        </select>
        {errors.service && (
          <span id="service-error" className="error-message" role="alert">
            {errors.service}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="message">
          Tell us what&apos;s going on <span className="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Example: musty smell in bedroom, recent leak, visible spots on ceiling..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={errors.message ? 'error' : ''}
        />
        {errors.message && (
          <span id="message-error" className="error-message" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className="primary" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <span className="spinner" aria-hidden="true"></span>
            Sending...
          </>
        ) : (
          'Request a Consultation'
        )}
      </button>
    </form>
  )
}
