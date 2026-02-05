/**
 * Business Information Configuration
 * 
 * TODO: Update with actual business details before deployment
 * This file contains NAP (Name, Address, Phone) data used for:
 * - JSON-LD structured data
 * - Schema markup
 * - Contact information display
 */

export const businessConfig = {
  name: 'Doctor Mold Pro LLC',
  legalName: 'Doctor Mold Pro LLC',
  
  // Contact Information
  phone: {
    display: '(813) 776-5200',
    tel: '8137765200', // No formatting for tel: links
    formatted: '+1-813-776-5200', // International format
  },
  
  // Address (TODO: Verify actual business address)
  address: {
    street: 'Tampa, FL 33607', // TODO: Add full street address if available
    city: 'Tampa',
    state: 'FL',
    zipCode: '33607',
    country: 'US',
    // Full formatted address for schema
    full: 'Tampa, FL 33607, USA',
  },
  
  // Geographic coordinates (TODO: Get actual coordinates)
  geo: {
    latitude: 27.9506, // Tampa approximate - TODO: Update with exact location
    longitude: -82.4572,
  },
  
  // Business Hours (TODO: Verify actual hours)
  hours: {
    // 24/7 emergency response
    emergency: '24/7',
    // Regular hours if applicable
    regular: [
      {
        day: 'Monday',
        open: '00:00',
        close: '23:59',
      },
      {
        day: 'Tuesday',
        open: '00:00',
        close: '23:59',
      },
      {
        day: 'Wednesday',
        open: '00:00',
        close: '23:59',
      },
      {
        day: 'Thursday',
        open: '00:00',
        close: '23:59',
      },
      {
        day: 'Friday',
        open: '00:00',
        close: '23:59',
      },
      {
        day: 'Saturday',
        open: '00:00',
        close: '23:59',
      },
      {
        day: 'Sunday',
        open: '00:00',
        close: '23:59',
      },
    ],
  },
  
  // Service Areas
  serviceAreas: [
    'Tampa',
    'St. Petersburg',
    'Clearwater',
    'Brandon',
    'Wesley Chapel',
    'Riverview',
    'Carrollwood',
    'South Tampa',
    'Downtown Tampa',
    'Tampa Bay',
  ],
  
  // Website URL
  url: 'https://doctormoldpro.com', // TODO: Update with actual domain
  
  // Social Media (from previous additions)
  social: {
    facebook: 'https://facebook.com/profile.php?id=61573691254080',
    linkedin: 'https://linkedin.com/company/doctor-mold-pro-llc/posts/?feedview=all',
    bbb: 'https://www.bbb.org/us/fl/tampa/profile/mold-testing/doctor-mold-pro-llc-0653-90453165#bbbonlineclick',
  },
  
  // Certifications & Licenses
  certifications: {
    normiAssessor: true,
    normiRemediator: true,
    iicrc: {
      registered: true,
      number: '222883', // From certificate image
      certifications: [
        'Water Damage Restoration',
        'Fire & Smoke Damage Restoration',
        'Applied Microbial Remediation',
      ],
    },
    floridaDBPR: {
      assessor: 'MRSA4767',
      remediator: 'MRSR4762',
      expiration: '07/31/2026',
    },
    bbb: {
      accredited: true,
      rating: 'A-',
    },
  },
  
  // Business Type
  type: 'LocalBusiness', // For schema
  industry: 'Mold Testing and Remediation',
  
  // Google Business Profile (if applicable)
  googleBusinessProfile: {
    // TODO: Add Google Business Profile URL if available
    url: '',
  },
}
