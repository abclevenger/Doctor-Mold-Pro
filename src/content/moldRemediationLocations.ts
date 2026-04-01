import type { FAQ } from './types'
import type { RelatedPage } from './types'

export type MoldRemediationCityId =
  | 'tampa'
  | 'brandon'
  | 'riverview'
  | 'lutz'
  | 'templeTerrace'
  | 'clearwater'
  | 'stPetersburg'
  | 'oldsmar'
  | 'safetyHarbor'
  | 'wesleyChapel'

export interface MoldRemediationLocationContent {
  path: string
  title: string
  metaDescription: string
  h1: string
  lead: string
  sections: { h2: string; paragraphs: string[] }[]
  faqs: FAQ[]
  cta: { heading: string; body: string; note?: string }
  relatedPages: RelatedPage[]
  relatedSectionLead: string
  faqSectionTitle: string
}

export const MOLD_REMEDIATION_LOCATIONS: Record<MoldRemediationCityId, MoldRemediationLocationContent> = {
  tampa: {
    path: '/mold-removal-tampa',
    title: 'Mold Remediation Tampa FL | Licensed Removal & Warranty | Doctor Mold Pro',
    metaDescription:
      'Mold remediation in Tampa, FL—DBPR licensed, NORMI/IICRC certified. Downtown to South Tampa, condos to historic homes. Emergency line (813) 776-5200.',
    h1: 'Mold remediation in Tampa, Florida—fast response across the city',
    lead:
      'Humidity off the bay, older plumbing, and tight building envelopes keep Tampa properties at risk for hidden mold. We locate moisture, remove contamination under containment, and document the work for insurers when you need it.',
    sections: [
      {
        h2: 'Why mold shows up in Tampa homes and commercial buildings',
        paragraphs: [
          'Tampa sits on a warm, wet climate clock: afternoon storms, high dew points, and air conditioning that pulls moisture into attics and wall cavities. In neighborhoods like Hyde Park, Seminole Heights, or Ybor, century-old pier foundations and retrofitted HVAC systems often hide slow leaks until paint bubbles or odors appear.',
          'High-rise condos along Bayshore and Harbour Island add another layer—shared plumbing chases and corridor pressurization can move moisture in ways a quick visual scan will miss. We map the source before tearing anything out, then remediate to Florida DBPR standards with negative air and HEPA filtration so spores are not pushed into clean rooms.',
        ],
      },
      {
        h2: 'What our Tampa mold remediation includes',
        paragraphs: [
          'Every job starts with a scoped assessment: moisture meters, thermal imaging when warranted, and clear photos you can file with a claim. Remediation means engineered containment, removal of unsalvageable materials, HEPA vacuuming, antimicrobial treatment where appropriate, and drying until meters read dry.',
          'After cleanup, we can coordinate clearance sampling so you have third-party verification—not just our word. That matters for real estate closings, tenant disputes, and medical sensitivity cases. You also get our written warranty on remediation work when terms apply.',
        ],
      },
      {
        h2: 'When to call immediately',
        paragraphs: [
          'If a toilet supply line failed overnight, a flat roof ponded during storm season, or you smell mustiness in a commercial suite after a long weekend, mold can colonize faster than most people expect. We answer the emergency line 24/7 for active water and visible microbial growth so containment can start before billing multiplies.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you remediate mold in downtown Tampa offices?',
        answer:
          'Yes. We set up containment for Class A and B office spaces, schedule after-hours work when needed, and provide documentation property managers can send to risk teams.',
      },
      {
        question: 'Is Tampa mold different from other Florida cities?',
        answer:
          'The species vary less than the building stock. Tampa’s mix of older wood framing, coastal condos, and commercial flat roofs creates leak patterns we see repeatedly—experience with those assemblies speeds diagnosis.',
      },
      {
        question: 'Can you work with my insurance adjuster in Hillsborough County?',
        answer:
          'We supply moisture logs, photos, chain-of-custody for samples when used, and written protocols. Coverage depends on your policy and cause of loss—we help you present facts clearly.',
      },
      {
        question: 'How fast can you start mold remediation in Tampa?',
        answer:
          'Emergencies are triaged the same day when possible. Scheduled projects typically start within days once scope and pricing are approved.',
      },
      {
        question: 'Do you offer post-remediation testing in Tampa?',
        answer:
          'Yes. Third-party clearance is available and recommended for larger losses or real estate transactions.',
      },
    ],
    cta: {
      heading: 'Book mold remediation for your Tampa property',
      body: 'Tell us what you are seeing—water stain, odor, or post-leak—and we will outline containment, timeline, and pricing before work begins.',
      note: 'Call (813) 776-5200 for emergencies or same-week scheduling when capacity allows.',
    },
    relatedPages: [
      { slug: '/mold-testing-tampa', title: 'Mold testing in Tampa' },
      { slug: '/emergency-mold-remediation-tampa', title: 'Emergency mold remediation' },
      { slug: '/mold-removal-st-petersburg', title: 'Mold remediation St. Petersburg' },
      { slug: '/mold-removal-clearwater', title: 'Mold remediation Clearwater' },
    ],
    relatedSectionLead: 'Explore testing, emergency response, and nearby city services.',
    faqSectionTitle: 'Tampa mold remediation questions',
  },

  brandon: {
    path: '/mold-removal-brandon',
    title: 'Mold Remediation Brandon FL | Hillsborough County | Doctor Mold Pro',
    metaDescription:
      'Mold remediation in Brandon, FL—newer subdivisions, roof leaks, and AC issues. Licensed remediators. Call (813) 776-5200 for inspection-backed removal.',
    h1: 'Mold remediation for Brandon homes and businesses',
    lead:
      'Brandon’s growth boom means thousands of tract homes with roof penetrations, ridge vents, and attic duct runs that can sweat when insulation slips. We focus on finding the moisture driver first, then removing mold without turning your house into a demolition zone.',
    sections: [
      {
        h2: 'Common mold triggers around Brandon and Valrico',
        paragraphs: [
          'Summer rains hit hard on shallow-pitch roofs common in master-planned communities. Gutters overflow, water tracks fascia boards, and attic sheathing darkens before anyone looks up. Inside, slab-on-grade slabs can wick moisture if landscaping holds water against the foundation.',
          'Retail plazas along State Road 60 also see roof-mounted HVAC condensate issues. Commercial remediation has to respect lease hours—we sequence drying and demolition so tenants can keep operating when safe.',
        ],
      },
      {
        h2: 'How we remediate mold in Brandon properties',
        paragraphs: [
          'We isolate work zones with plastic and negative pressure, remove contaminated drywall or ceiling tile, bag debris for regulated disposal when needed, and clean remaining framing with HEPA contact vacuuming. Your system gets sealed off so spores do not ride the ductwork to kids’ bedrooms.',
          'Brandon customers often ask for packages tied to home sales. We align documentation with what listing agents expect: clear scope, photos, and optional clearance testing so buyers are not guessing.',
        ],
      },
      {
        h2: 'Why homeowners choose Doctor Mold Pro in Brandon',
        paragraphs: [
          'We are Florida DBPR licensed for mold remediation, carry NORMI and IICRC credentials, and warranty our remediation work under stated terms. You get a local crew that knows Hillsborough County building styles—not a national call center.',
        ],
      },
    ],
    faqs: [
      {
        question: 'My Brandon attic has black spots—what now?',
        answer:
          'Do not disturb it. Attic disturbances aerosolize spores. We inspect, test if needed, quote removal with containment, and dry the roof deck or fix ventilation contributing to the issue.',
      },
      {
        question: 'Do Brandon HOAs require mold documentation?',
        answer:
          'Many do for exterior penetrations or shared walls. We provide writeups you can forward to association managers.',
      },
      {
        question: 'Can you match paint after drywall removal?',
        answer:
          'We focus on microbial removal and drying; cosmetic finishing can be coordinated with your painter or contractor.',
      },
      {
        question: 'Is same-week service realistic in Brandon?',
        answer:
          'Often yes for non-emergency work. Call early in the week for the best slot availability.',
      },
    ],
    cta: {
      heading: 'Schedule mold remediation in Brandon',
      body: 'Share photos, a short description, and whether a leak is active—we will advise if you need testing first or can move straight to scoped removal.',
      note: '(813) 776-5200 · 24/7 for active water emergencies.',
    },
    relatedPages: [
      { slug: '/mold-testing-brandon', title: 'Mold testing Brandon' },
      { slug: '/mold-removal-riverview', title: 'Mold remediation Riverview' },
      { slug: '/mold-removal-tampa', title: 'Mold remediation Tampa' },
    ],
    relatedSectionLead: 'Nearby testing routes and Hillsborough neighbors we serve.',
    faqSectionTitle: 'Brandon mold removal FAQs',
  },

  riverview: {
    path: '/mold-removal-riverview',
    title: 'Mold Remediation Riverview FL | Apollo Beach Area | Doctor Mold Pro',
    metaDescription:
      'Mold remediation in Riverview, FL—fast growth corridors, new construction, crawl and attic mold. Licensed team. Call (813) 776-5200.',
    h1: 'Mold remediation in Riverview and the SouthShore area',
    lead:
      'Riverview’s rapid build-out means tight construction schedules, punch-list leaks, and homeowners discovering musty odors before landscaping even matures. We treat Riverview jobs like forensic moisture cases: trace the water, then remediate so mold does not return with the next thunderstorm.',
    sections: [
      {
        h2: 'Moisture patterns we see in Riverview homes',
        paragraphs: [
          'Slab homes near the Alafia River still deal with groundwater and irrigation mis-aimed at stucco. Two-story plans concentrate duct runs in hot attics where flex duct sags and condensates. Either path can feed mold on drywall tape or behind insulation batts.',
          'Garage-to-living wall penetrations are another repeat offender: builder gaps around outlets let humid garage air meet cooler interior wall cavities.',
        ],
      },
      {
        h2: 'Remediation built for growing neighborhoods',
        paragraphs: [
          'We contain the room or floor, remove damaged gypsum, clean studs, dry to specification, and run air scrubbers until particle counts settle. If the loss ties to a warranty issue, our notes describe observable defects your builder’s rep can follow.',
          'Families in Riverview often want minimal school-night disruption—we schedule loud work midday and communicate daily lockbox or access expectations.',
        ],
      },
      {
        h2: 'Clear next steps',
        paragraphs: [
          'Call with the age of the home, any known leak, and whether anyone has respiratory sensitivity. We will recommend testing or proceed with a visual-and-moisture assessment to build a fixed-price scope when possible.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do new Riverview homes get mold?',
        answer:
          'Yes—construction moisture, delayed AC startup, or a single unchecked leak can support growth within days in Florida humidity.',
      },
      {
        question: 'Can you bill through my home warranty?',
        answer:
          'We provide documentation; approval depends on your warranty company. You initiate the claim—we supply technical details.',
      },
      {
        question: 'Do you serve FishHawk and Boyette?',
        answer:
          'Yes, we travel throughout the Riverview ZIP codes and adjacent unincorporated Hillsborough communities.',
      },
      {
        question: 'What about crawlspaces in older pockets of Riverview?',
        answer:
          'We inspect low clearance spaces with proper PPE, recommend vapor barriers or drainage improvements, and remediate affected framing.',
      },
    ],
    cta: {
      heading: 'Get Riverview mold remediation on the calendar',
      body: 'Emergency or planned—we prioritize active water situations first, then schedule structured remediation for everything else.',
      note: 'Dial (813) 776-5200—ask for Riverview routing.',
    },
    relatedPages: [
      { slug: '/mold-testing-riverview', title: 'Mold testing Riverview' },
      { slug: '/mold-removal-brandon', title: 'Mold remediation Brandon' },
      { slug: '/mold-removal-wesley-chapel', title: 'Mold remediation Wesley Chapel' },
    ],
    relatedSectionLead: 'Testing options and nearby Pasco/Hillsborough service pages.',
    faqSectionTitle: 'Riverview mold remediation FAQs',
  },

  lutz: {
    path: '/mold-removal-lutz',
    title: 'Mold Remediation Lutz FL | Lake Communities & Estates | Doctor Mold Pro',
    metaDescription:
      'Mold remediation in Lutz, FL—lake humidity, tree shade, older ranches & estates. DBPR licensed remediators. Call (813) 776-5200 for containment-based removal.',
    h1: 'Mold remediation for Lutz properties—lakeside humidity to established estates',
    lead:
      'Lutz blends mossy oak canopy, larger lots, and lake breezes that still leave afternoon relative humidity pinned high. Custom homes with bonus rooms over garages and older ranches with original windows frequently hide slow leaks that become mold on closet ceilings or behind wallpaper.',
    sections: [
      {
        h2: 'Why Lutz homes hold moisture differently',
        paragraphs: [
          'Shade from mature trees slows roof drying after rain. Lake proximity keeps overnight air saturated longer than open subdivisions to the east. Those factors do not cause mold alone—but paired with a loose flashing detail or a skylight seal failure, they extend wetting cycles on sheathing.',
          'Equestrian-area properties add outbuildings and barn bathrooms that may not get the same HVAC attention as the main house. Separate structures still need dry standards before closing walls back up.',
        ],
      },
      {
        h2: 'Our remediation approach in Lutz',
        paragraphs: [
          'We walk the roofline logic, attic, and crawl or slab perimeter before quoting. Remediation follows containment, source repair coordination, removal of contaminated finish materials, and drying verified with meters—not guesswork.',
          'Estate-sized floor plans may need phased work; we map zones so your family can occupy unaffected wings when safety allows.',
        ],
      },
      {
        h2: 'Documentation for insurance or resale',
        paragraphs: [
          'Lutz listings often attract buyers who ask pointed questions about prior leaks. We deliver photo narratives and optional clearance testing so disclosures are straightforward.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you remediate mold in Lutz lakefront homes?',
        answer:
          'Yes—waterfront homes see wind-driven rain and dock splash; we inspect bulkheads and lower-level drainage as part of source tracing.',
      },
      {
        question: 'Can you work around gated communities in Lutz?',
        answer:
          'We coordinate vendor badges and gate codes with your HOA office ahead of arrival.',
      },
      {
        question: 'What if mold is only in my garage?',
        answer:
          'Contained garages still need safe removal if contamination is beyond superficial surface growth—especially if living space air connects.',
      },
    ],
    cta: {
      heading: 'Call for Lutz mold remediation',
      body: 'Describe roof age, any tree strike, and indoor odor locations—we will advise testing versus direct remediation.',
      note: '(813) 776-5200',
    },
    relatedPages: [
      { slug: '/mold-testing-tampa', title: 'Mold testing Tampa hub' },
      { slug: '/mold-removal-wesley-chapel', title: 'Mold remediation Wesley Chapel' },
      { slug: '/mold-removal-temple-terrace', title: 'Mold remediation Temple Terrace' },
    ],
    relatedSectionLead: 'Regional hubs and neighboring city pages.',
    faqSectionTitle: 'Lutz mold removal FAQs',
  },

  templeTerrace: {
    path: '/mold-removal-temple-terrace',
    title: 'Mold Remediation Temple Terrace FL | Hillsborough River Area | Doctor Mold Pro',
    metaDescription:
      'Mold remediation in Temple Terrace, FL—mid-century homes, river humidity, oak canopy. Licensed mold remediators. Call (813) 776-5200.',
    h1: 'Mold remediation in Temple Terrace—river hills and established neighborhoods',
    lead:
      'Temple Terrace’s rolling streets and mid-century ranch homes often carry original cast plumbing, single-pane windows that sweat, and mature roots that disturb irrigation lines. Mold here frequently tracks back to slow bathroom valve leaks or wall cavities that never fully dried after a previous patch job.',
    sections: [
      {
        h2: 'Neighborhood realities near the Hillsborough River',
        paragraphs: [
          'Cool air draining toward the river at night can fog crawlspaces and pier foundations where ventilation is marginal. Tree debris clogs gutters along Riverhills Drive–style corridors, backing water into soffits.',
          'Homes near USF see steady tenant turnover; rental turnovers sometimes mask recurring moisture problems until a musty smell returns between leases.',
        ],
      },
      {
        h2: 'Remediation that respects older construction',
        paragraphs: [
          'We avoid unnecessary gutting. Where plaster or lathe is involved, we test moisture in surrounding bays before stripping. Containment keeps river-humidity air from pushing spores into clean rooms while dryers run.',
          'When terrazzo or vintage tile is adjacent to affected walls, we coordinate cuts carefully and recommend qualified finish trades for restoration.',
        ],
      },
      {
        h2: 'Why act before the rainy stretch',
        paragraphs: [
          'Summer afternoon storms amplify any existing breach. Fixing roof and plumbing drivers during remediation prevents a second wave of growth after the drywall is patched.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are Temple Terrace homes more prone to crawlspace mold?',
        answer:
          'Sloped lots and shade can slow evaporation in vented crawls—we assess vapor barriers, drainage, and venting as part of the plan.',
      },
      {
        question: 'Can students or landlords use your service near USF?',
        answer:
          'Yes—we document for property managers and owners so responsibilities between tenant and owner are clear.',
      },
      {
        question: 'Do you handle small bathroom mold jobs?',
        answer:
          'If contamination is limited and the leak is fixed, scoped removal may be straightforward—after we confirm extent with inspection or sampling.',
      },
    ],
    cta: {
      heading: 'Temple Terrace mold remediation—call today',
      body: 'Tell us the street area (river side vs ridge) and building era—it helps us bring the right inspection tools on the first visit.',
      note: 'Emergency line: (813) 776-5200',
    },
    relatedPages: [
      { slug: '/mold-removal-tampa', title: 'Mold remediation Tampa' },
      { slug: '/mold-removal-lutz', title: 'Mold remediation Lutz' },
      { slug: '/mold-testing-tampa', title: 'Mold testing Tampa' },
    ],
    relatedSectionLead: 'Nearby Hillsborough remediation and testing entry points.',
    faqSectionTitle: 'Temple Terrace mold FAQs',
  },

  clearwater: {
    path: '/mold-removal-clearwater',
    title: 'Mold Remediation Clearwater FL | Beach & Inland | Doctor Mold Pro',
    metaDescription:
      'Mold remediation in Clearwater, FL—coastal humidity, condos, older beach cottages. Licensed removal, warranty-backed. Call (813) 776-5200.',
    h1: 'Mold remediation for Clearwater properties—Gulf moisture to inland subdivisions',
    lead:
      'Salt-laden air, stacked condos, and seasonal residents who shut up units for months create mold risk profiles that inland towns rarely see. Whether you are near Clearwater Beach or along Belcher Road corridors, we prioritize stopping moisture migration before stripping finishes.',
    sections: [
      {
        h2: 'Coastal Clearwater mold drivers',
        paragraphs: [
          'Driving rain and wind through beach towers pressurize balcony sliders and stack-wall joints. HVAC systems in top floors fight latent humidity in unoccupied units, sometimes sweating inside linen closets against exterior walls.',
          'Older single-family pockets inland still rely on roof vent paths that get blocked when owners add insulation without baffles—sheathing mold follows.',
        ],
      },
      {
        h2: 'Remediation suited to condos and HOAs',
        paragraphs: [
          'We draft containment diagrams for association review, coordinate elevator and loading dock times, and sequence noisy work within association quiet hours when required. Dehumidification targets dew point, not just temperature.',
          'Where cast-in-place concrete interacts with carpet tack strips after flooding, we evaluate slab drying before reinstallation.',
        ],
      },
      {
        h2: 'Insurance and seasonal owners',
        paragraphs: [
          'Snowbirds often discover mold on return trips—we photo-document for claims when sudden water damage is part of the story and help you understand what adjusters typically ask for in Pinellas County.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you remediate mold in Clearwater high-rises?',
        answer:
          'Yes—logistics differ from single-family jobs; we plan material haul routes and water access with building staff.',
      },
      {
        question: 'Is beach humidity enough to cause mold without a leak?',
        answer:
          'Humidity alone rarely colonizes drywall without liquid water or chronic condensation—we still verify HVAC balance and envelope leaks.',
      },
      {
        question: 'Can you respond after tropical storms?',
        answer:
          'We scale for surge events; call early if you have roof intrusion or driven rain.',
      },
      {
        question: 'Do you travel to Sand Key or Island Estates?',
        answer:
          'We serve barrier islands and causeway communities throughout Pinellas.',
      },
    ],
    cta: {
      heading: 'Clearwater mold remediation appointments',
      body: 'Condo or single-family—tell us floor level, year built, and whether the unit was vacant—those details change the drying plan.',
      note: '(813) 776-5200 · Doctor Mold Pro',
    },
    relatedPages: [
      { slug: '/mold-testing-clearwater', title: 'Mold testing Clearwater' },
      { slug: '/mold-removal-st-petersburg', title: 'Mold remediation St. Petersburg' },
      { slug: '/mold-removal-safety-harbor', title: 'Mold remediation Safety Harbor' },
    ],
    relatedSectionLead: 'Pinellas testing and nearby waterfront cities.',
    faqSectionTitle: 'Clearwater mold remediation FAQs',
  },

  stPetersburg: {
    path: '/mold-removal-st-petersburg',
    title: 'Mold Remediation St. Petersburg FL | Pinellas County | Doctor Mold Pro',
    metaDescription:
      'Mold remediation in St. Petersburg, FL—historic homes, bungalows, waterfront condos. DBPR licensed. Fast scheduling. Call (813) 776-5200.',
    h1: 'Mold remediation in St. Petersburg—historic blocks to downtown towers',
    lead:
      'St. Pete mixes 1920s bungalows with glass towers and everything between. Mold follows failed chimney flashing, flat roof ponding, and waterfront bulkhead moisture—not just bathroom fans. We write scopes that match the building era so you are not paying for theater.',
    sections: [
      {
        h2: 'Where St. Petersburg mold starts',
        paragraphs: [
          'Historic districts often have balloon framing and plaster—slow leaks wick horizontally before they show on ceilings. Mid-century ranch slabs along bayou lots can wick irrigation or high water table moisture.',
          'Downtown condos battle stack effect: lower-level make-up air and upper-level exhaust can pull humid corridor air through unit doors unless thresholds seal.',
        ],
      },
      {
        h2: 'Remediation with minimal drama',
        paragraphs: [
          'We isolate work areas, bag debris for appropriate disposal, and clean salvageable framing. Wood windows and trim may need gentle hand cleaning rather than aggressive blasting—preserving character matters in resale-heavy streets.',
          'For commercial storefronts on Central Avenue, we compress timelines around business hours when health departments are not involved—if they are, we follow their direction.',
        ],
      },
      {
        h2: 'Why documentation matters in Pinellas listings',
        paragraphs: [
          'Buyers ask blunt questions post-2020 flood awareness. A remediation file with photos and optional clearance testing answers inspection objections with facts.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you handle mold in St. Pete’s older plaster walls?',
        answer:
          'Yes—we probe moisture, limit demolition to failing sections, and stabilize surrounding plaster when possible.',
      },
      {
        question: 'Can you coordinate with historic district rules?',
        answer:
          'We document exterior openings for any façade work your contractor handles; mold work inside is generally scoped like any restoration job.',
      },
      {
        question: 'What about flood-prone streets near the bay?',
        answer:
          'We inspect for previous water lines, treat affected cavities, and advise on elevation or drainage conversations with qualified contractors.',
      },
    ],
    cta: {
      heading: 'St. Petersburg mold remediation—get a scoped quote',
      body: 'Share neighborhood, year built, and whether you are on slab or crawl—we route the right crew and equipment.',
      note: 'Call (813) 776-5200',
    },
    relatedPages: [
      { slug: '/mold-testing-st-petersburg', title: 'Mold testing St. Petersburg' },
      { slug: '/mold-removal-clearwater', title: 'Mold remediation Clearwater' },
      { slug: '/mold-removal-oldsmar', title: 'Mold remediation Oldsmar' },
    ],
    relatedSectionLead: 'Pinellas County services and nearby hubs.',
    faqSectionTitle: 'St. Petersburg mold remediation FAQs',
  },

  oldsmar: {
    path: '/mold-removal-oldsmar',
    title: 'Mold Remediation Oldsmar FL | Tampa Bay Border | Doctor Mold Pro',
    metaDescription:
      'Mold remediation in Oldsmar, FL—waterfront lots, mixed-age housing, commercial bays. Licensed mold remediators. Call (813) 776-5200.',
    h1: 'Mold remediation in Oldsmar—where Pinellas meets Tampa Bay industry',
    lead:
      'Oldsmar sits at a crossroads: waterfront homes along the bay, tree-lined streets from earlier decades, and light industrial bays that share fence lines with residences. Mold jobs here range from dock-level humidity to roof leaks above warehouse-style flex units—we treat each path with source-first planning.',
    sections: [
      {
        h2: 'Moisture pathways in Oldsmar properties',
        paragraphs: [
          'Bay-facing lots see wind-driven rain on screened lanais and sliding glass retrofits that were never flashed to current standards. Inland, mature oaks shed into valleys that back water up-roof during summer squalls.',
          'Small businesses along Tampa Road may run rooftop package units—condensate lines clog, soak insulation, and drip through ceiling tiles before anyone notices staining.',
        ],
      },
      {
        h2: 'Remediation tailored to mixed uses',
        paragraphs: [
          'Residential work prioritizes bedroom air quality and school-night scheduling. Commercial work prioritizes employee safety signage, containment visibility, and drying that passes internal facilities checks.',
          'We communicate in writing when neighboring suites need notification—coordination prevents alarm and keeps your remediation on schedule.',
        ],
      },
      {
        h2: 'Next steps for Oldsmar owners',
        paragraphs: [
          'Call with square footage affected, whether HVAC is involved, and any prior water claim. We advise if assessment-only or full remediation proposal is the right first move.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you serve East Lake and surrounding Oldsmar ZIPs?',
        answer:
          'Yes—we regularly work the Oldsmar boundary communities and adjacent Pinellas neighborhoods.',
      },
      {
        question: 'Can you remediate mold in a warehouse office?',
        answer:
          'Yes—containment scales to ceiling height; drying may use commercial dehumidification.',
      },
      {
        question: 'What if contamination is behind metal siding?',
        answer:
          'We remove panels safely, dry sheathing, and coordinate reinstallation with your metal contractor.',
      },
    ],
    cta: {
      heading: 'Oldsmar mold remediation calls',
      body: 'Residential or commercial—describe the roof age, leak history, and occupancy schedule for fastest routing.',
      note: '(813) 776-5200 · 24/7 emergencies',
    },
    relatedPages: [
      { slug: '/mold-removal-safety-harbor', title: 'Mold remediation Safety Harbor' },
      { slug: '/mold-removal-clearwater', title: 'Mold remediation Clearwater' },
      { slug: '/mold-testing-st-petersburg', title: 'Mold testing St. Petersburg' },
    ],
    relatedSectionLead: 'Nearby Pinellas remediation and testing links.',
    faqSectionTitle: 'Oldsmar mold remediation FAQs',
  },

  safetyHarbor: {
    path: '/mold-removal-safety-harbor',
    title: 'Mold Remediation Safety Harbor FL | Small-Town Pinellas | Doctor Mold Pro',
    metaDescription:
      'Mold remediation in Safety Harbor, FL—oak canopy, older homes, waterfront breeze humidity. Licensed removal. Call (813) 776-5200.',
    h1: 'Mold remediation in Safety Harbor—tight-knit streets and waterfront pockets',
    lead:
      'Safety Harbor feels smaller than its population suggests: winding roads, heavy canopy, and neighborhoods where everyone knows when a roof crew shows up. Mold here often ties to slow roof valleys, pier-and-beam crawl quirks, and waterfront homes that see salt mist and shade drying slowly.',
    sections: [
      {
        h2: 'What drives mold in Safety Harbor houses',
        paragraphs: [
          'Shade keeps roofs cooler but extends drying time after summer storms. Crawlspaces and low pier foundations can harbor musty air that migrates through floor penetrations if not vented or encapsulated correctly.',
          'Downtown mixed-use buildings combine retail humidity with residential units above—leaks can track unpredictably through chase walls.',
        ],
      },
      {
        h2: 'Neighbor-friendly remediation',
        paragraphs: [
          'We stage trucks thoughtfully on narrow streets, keep containment visible but tidy, and explain dehumidifier noise to adjacent homes when dryers run overnight.',
          'Remediation plans spell out what is removed versus cleaned so you know what your painter or trim carpenter will touch next.',
        ],
      },
      {
        h2: 'Trust but verify',
        paragraphs: [
          'Optional clearance testing closes the loop for sensitive households or pending sales—ask during scheduling.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Safety Harbor mold different from Clearwater’s?',
        answer:
          'Species sets overlap; the difference is building stock and lot drainage—our inspection focuses on those local factors.',
      },
      {
        question: 'Can you work on Philippe Park–area homes?',
        answer:
          'Yes—we service the waterfront and inland blocks throughout the city.',
      },
      {
        question: 'Do I need mold testing before remediation?',
        answer:
          'Not always—large visible losses with obvious moisture sources may move straight to scoped removal; ambiguous health concerns or legal disputes often warrant sampling first.',
      },
    ],
    cta: {
      heading: 'Safety Harbor mold remediation scheduling',
      body: 'Tell us your street area and home decade—we tailor equipment to access and lot layout.',
      note: 'Call (813) 776-5200',
    },
    relatedPages: [
      { slug: '/mold-removal-clearwater', title: 'Mold remediation Clearwater' },
      { slug: '/mold-removal-oldsmar', title: 'Mold remediation Oldsmar' },
      { slug: '/mold-testing-clearwater', title: 'Mold testing Clearwater' },
    ],
    relatedSectionLead: 'Pinellas neighbors and testing options.',
    faqSectionTitle: 'Safety Harbor mold FAQs',
  },

  wesleyChapel: {
    path: '/mold-removal-wesley-chapel',
    title: 'Mold Remediation Wesley Chapel FL | Pasco Growth Corridor | Doctor Mold Pro',
    metaDescription:
      'Mold remediation in Wesley Chapel, FL—new construction, drainage, attic mold. Licensed DBPR remediators. Call (813) 776-5200.',
    h1: 'Mold remediation in Wesley Chapel—Pasco’s fast-growing subdivisions',
    lead:
      'Wesley Chapel’s boom means tight build schedules, punch-list plumbing, and lots graded during wet seasons. Buyers sometimes inherit moisture behind stucco bands or attic sheathing that never saw adequate drying before shingles went on. We investigate like investigators, then remediate with containment you can see through photos.',
    sections: [
      {
        h2: 'Why new homes in Wesley Chapel still get mold',
        paragraphs: [
          'Construction moisture can sit in framing until the first heavy AC season. If bath fans terminate into attics or ridge vents are undercut, sheathing edges can spot microbial growth even while countertops still look new.',
          'Stormwater swales between lots sometimes fail after landscaping changes, pushing water toward slab edges and garage returns.',
        ],
      },
      {
        h2: 'Remediation aligned with builder warranty conversations',
        paragraphs: [
          'We document chronology, moisture readings, and material removal quantities so you can share facts with warranty coordinators. Our job is safe removal and drying—whether another party pays is between you and your contracts.',
          'Phased work keeps nurseries and home offices usable when containment allows.',
        ],
      },
      {
        h2: 'Pasco County service with Tampa Bay standards',
        paragraphs: [
          'Same licensing, same protocols—you are not getting a lighter version of remediation because the ZIP is newer.',
        ],
      },
    ],
    faqs: [
      {
        question: 'My attic sheathing has spotting—do I replace the roof?',
        answer:
          'Not automatically—we determine if the roof leaks, if ventilation is inadequate, or if it is historical staining versus active growth.',
      },
      {
        question: 'Do you travel to Meadow Pointe and Epperson?',
        answer:
          'Yes—we cover Wesley Chapel planning areas and adjacent Pasco communities.',
      },
      {
        question: 'Can you remediate mold before I list the home?',
        answer:
          'Yes—timed remediation plus optional clearance helps disclosures go smoothly.',
      },
      {
        question: 'Is emergency service available in Wesley Chapel?',
        answer:
          'Yes—call (813) 776-5200; we triage active water events alongside Hillsborough jobs.',
      },
    ],
    cta: {
      heading: 'Wesley Chapel mold remediation—book assessment',
      body: 'New construction or resale—note builder name, closing date, and any warranty ticket numbers you already have.',
      note: '(813) 776-5200',
    },
    relatedPages: [
      { slug: '/mold-testing-brandon', title: 'Mold testing Brandon' },
      { slug: '/mold-removal-riverview', title: 'Mold remediation Riverview' },
      { slug: '/mold-removal-tampa', title: 'Mold remediation Tampa' },
    ],
    relatedSectionLead: 'Pasco and Hillsborough entry points for testing and removal.',
    faqSectionTitle: 'Wesley Chapel mold remediation FAQs',
  },
}
