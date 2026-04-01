/**
 * LeadConnector (HighLevel) inbound webhook for contact form submissions.
 * Override with VITE_CONTACT_WEBHOOK_URL in .env for staging vs production.
 */
export const CONTACT_WEBHOOK_URL =
  import.meta.env.VITE_CONTACT_WEBHOOK_URL ??
  'https://services.leadconnectorhq.com/hooks/3lXBIicltyejrxf8Vt87/webhook-trigger/fb33bc7c-89ca-470d-af80-1ba01ce80fa6'
