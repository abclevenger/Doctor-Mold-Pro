import { businessConfig } from '../config/business'

export function GoogleMapEmbed() {
  return (
    <div className="contact-map-frame">
      <iframe
        src={businessConfig.googleMaps.embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Google Map — ${businessConfig.name} — ${businessConfig.address.line}`}
        allowFullScreen
      />
    </div>
  )
}
