import { useState, useRef, useEffect, useCallback } from 'react'
import type { FormEvent } from 'react'
import { CONTACT_WEBHOOK_URL } from '../config/contactWebhook'
import { businessConfig } from '../config/business'

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

const MESSAGE_MIN = 10

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
  const successRef = useRef<HTMLDivElement>(null)

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
      newErrors.message = "Please tell us what is going on"
    } else if (formData.message.trim().length < MESSAGE_MIN) {
      newErrors.message = `Add a bit more detail (at least ${MESSAGE_MIN} characters)`
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const sendToWebhook = useCallback(async () => {
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      service: formData.service,
      message: formData.message.trim(),
      source: 'Doctor Mold Pro website — contact form',
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      submittedAt: new Date().toISOString(),
    }

    const response = await fetch(CONTACT_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const text = await response.text().catch(() => '')
      throw new Error(text || `Request failed (${response.status})`)
    }
  }, [formData])

  const runSubmit = async () => {
    if (!validate()) {
      const firstErrorField = document.querySelector('.contact-form .error')
      firstErrorField?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await sendToWebhook()
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setErrors({})
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await runSubmit()
  }

  const handleRetry = () => {
    setSubmitStatus('idle')
    void runSubmit()
  }

  useEffect(() => {
    if (submitStatus === 'success' && successRef.current) {
      successRef.current.focus()
    }
  }, [submitStatus])

  const msgLen = formData.message.trim().length
  const msgHint =
    msgLen > 0 && msgLen < MESSAGE_MIN
      ? `${MESSAGE_MIN - msgLen} more character${MESSAGE_MIN - msgLen === 1 ? '' : 's'} for a helpful note`
      : null

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-busy={isSubmitting}
    >
      <div className="contact-form-status" aria-live="polite" aria-atomic="true">
        {submitStatus === 'success' && (
          <div
            id="contact-form-success"
            ref={successRef}
            className="form-message form-message-success"
            role="status"
            tabIndex={-1}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <div>
              <p className="form-message-title">Got it—we have your message.</p>
              <p className="form-message-detail">
                Our team usually replies within one business day. For urgent mold or water damage, call{' '}
                <a href={`tel:${businessConfig.phone.tel}`}>{businessConfig.phone.display}</a> now—we answer 24/7 for
                emergencies.
              </p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="form-message form-message-error" role="alert">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div>
              <p className="form-message-title">We couldn’t send that just now.</p>
              <p className="form-message-detail">
                Your details are still in the form. Try again, or call{' '}
                <a href={`tel:${businessConfig.phone.tel}`}>{businessConfig.phone.display}</a> and we’ll take it from
                there.
              </p>
              <button type="button" className="form-retry-button" onClick={handleRetry} disabled={isSubmitting}>
                Try sending again
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="contact-name">
          Name <span className="required">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
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
        <label htmlFor="contact-email">
          Email <span className="required">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
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
        <label htmlFor="contact-phone">
          Phone <span className="required">*</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
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
        <label htmlFor="contact-service">
          Service needed <span className="required">*</span>
        </label>
        <select
          id="contact-service"
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
        <label htmlFor="contact-message">
          What&apos;s going on? <span className="required">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Example: musty smell in the guest room after last week’s rain, no visible spots yet…"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={
            [errors.message ? 'message-error' : '', msgHint ? 'message-hint' : ''].filter(Boolean).join(' ') || undefined
          }
          className={errors.message ? 'error' : ''}
        />
        {msgHint && (
          <span id="message-hint" className="field-hint">
            {msgHint}
          </span>
        )}
        {errors.message && (
          <span id="message-error" className="error-message" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className="primary" disabled={isSubmitting} aria-describedby="submit-help">
        {isSubmitting ? (
          <>
            <span className="spinner" aria-hidden="true" />
            Sending…
          </>
        ) : (
          'Send my request'
        )}
      </button>
      <p id="submit-help" className="contact-form-privacy">
        By sending this, you agree we may call or email you about this request. No spam—just follow-up on mold service.
      </p>
    </form>
  )
}
