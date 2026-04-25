/**
 * SEO component — injects per-page meta tags, canonical, Open Graph,
 * Twitter Cards, geo tags, and JSON-LD structured data.
 *
 * Targets:
 *  - "skillleo"  (exact brand)
 *  - "skilleo"   (common misspelling — must also rank)
 *  - "skillleo pakistan software development"
 *  - "SECP PSEB registered software company"
 *  - "hire react laravel flutter developer pakistan"
 *  ... and 40+ long-tail keywords
 */

import { Helmet } from 'react-helmet-async';

const SITE = {
  name:        'SkillLeo',
  legalName:   'SkillLeo (SMC-Private) Limited',
  url:         'https://skillleo.com',
  logo:        'https://skillleo.com/og-image.jpg',
  email:       'contact@skillleo.com',
  phone:       '+92-310-111-1571',
  twitter:     '@SkillLeo',
  founded:     '2018',
  city:        'Sargodha',
  region:      'Punjab',
  country:     'PK',
  countryName: 'Pakistan',
};

// ── Global JSON-LD schemas (rendered on every page) ───────────────────────
const GLOBAL_SCHEMAS = [
  // 1. Organisation / Professional Service
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
    '@id': 'https://skillleo.com/#organization',
    name:        'SkillLeo (SMC-Private) Limited',
    alternateName: ['SkillLeo', 'Skilleo', 'Skill Leo', 'SkillLeo Pakistan',
                    'SkillLeo SMC', 'SkillLeo Software'],
    url:         'https://skillleo.com',
    logo: {
      '@type': 'ImageObject',
      url:     'https://skillleo.com/logo.png',
      width:   '200',
      height:  '60',
    },
    image:       'https://skillleo.com/og-image.jpg',
    description: 'SkillLeo (SMC-Private) Limited is a SECP and PSEB certified software development company in Sargodha, Punjab, Pakistan. Specialising in React, Next.js, Laravel, AI automation, Flutter mobile apps, SaaS platforms, and custom software solutions for 120+ clients across 50+ countries including USA, UK, Canada, Australia, Germany, UAE, and Saudi Arabia.',
    foundingDate: '2018',
    founder: {
      '@type': 'Person',
      name:    'Hassam Mehmood',
      jobTitle: 'CEO & Founder',
      sameAs:  'https://www.linkedin.com/in/hassam571/',
    },
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 25 },
    address: {
      '@type': 'PostalAddress',
      streetAddress:   'Sargodha',
      addressLocality: 'Sargodha',
      addressRegion:   'Punjab',
      postalCode:      '40100',
      addressCountry:  'PK',
    },
    geo: {
      '@type':    'GeoCoordinates',
      latitude:   '32.0836',
      longitude:  '72.6711',
    },
    contactPoint: [
      {
        '@type':           'ContactPoint',
        telephone:         '+92-310-111-1571',
        contactType:       'customer service',
        email:             'contact@skillleo.com',
        availableLanguage: ['English', 'Urdu'],
        contactOption:     'TollFree',
        areaServed:        ['US','CA','GB','AU','DE','FR','NL','AE','SA','PK','SG','IN'],
      },
    ],
    sameAs: [
      'https://www.linkedin.com/in/hassam571/',
      'https://www.upwork.com',
      'https://www.fiverr.com/s/vvq3wLN',
    ],
    areaServed: [
      'United States','Canada','United Kingdom','Australia','Germany',
      'France','Netherlands','Sweden','UAE','Saudi Arabia',
      'Pakistan','Singapore','India','Brazil','South Africa',
    ],
    hasCredential: [
      {
        '@type':              'EducationalOccupationalCredential',
        credentialCategory:   'Government Registration',
        name:                 'SECP Certificate of Incorporation',
        description:          'Incorporated under Companies Act 2017, SECP Pakistan',
        identifier:           '0330718',
        recognizedBy: { '@type':'Organization', name:'Securities & Exchange Commission of Pakistan' },
      },
      {
        '@type':              'EducationalOccupationalCredential',
        credentialCategory:   'IT Export Certification',
        name:                 'PSEB Certificate of Registration',
        description:          'Registered IT Export Company — Pakistan Software Export Board',
        identifier:           'Z-25-19355/26',
        recognizedBy: { '@type':'Organization', name:'Pakistan Software Export Board (PSEB)' },
      },
    ],
    knowsAbout: [
      'React.js','Next.js','TypeScript','JavaScript','Laravel','PHP',
      'MongoDB','Node.js','Express.js','Flutter','React Native',
      'OpenAI','Claude API','LangChain','AI Automation',
      'Machine Learning','Data Scraping','SaaS Development','CRM Development',
      'Mobile App Development','Web Application Development',
      'Software Architecture','DevOps','AWS','Docker',
    ],
    priceRange: '$$$',
    openingHoursSpecification: [
      {
        '@type':    'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        opens:  '09:00',
        closes: '22:00',
      },
    ],
    aggregateRating: {
      '@type':       'AggregateRating',
      ratingValue:   '5.0',
      reviewCount:   '120',
      bestRating:    '5',
      worstRating:   '1',
    },
  },

  // 2. WebSite — enables Google Sitelinks Searchbox
  {
    '@context': 'https://schema.org',
    '@type':    'WebSite',
    '@id':      'https://skillleo.com/#website',
    name:       'SkillLeo',
    alternateName: ['Skilleo', 'SkillLeo Pakistan'],
    url:        'https://skillleo.com',
    description: 'Pakistan\'s most trusted SECP & PSEB certified software development company.',
    inLanguage:  'en',
    publisher: { '@id': 'https://skillleo.com/#organization' },
    potentialAction: {
      '@type':  'SearchAction',
      target:   'https://skillleo.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
];

// ── Per-page config ───────────────────────────────────────────────────────
export const PAGE_SEO = {
  home: {
    title: 'SkillLeo — Pakistan\'s #1 Certified Software Development Company | SECP & PSEB Registered',
    description: 'SkillLeo (SMC-Private) Limited — SECP & PSEB certified software development company in Pakistan. React, Next.js, Laravel, AI automation, Flutter & SaaS experts. 120+ global clients, 200+ projects delivered across 50+ countries. Trusted by USA, UK, Australia & Europe.',
    keywords: 'skillleo, skilleo, skillleo pakistan, skill leo, skillleo software, software development company pakistan, SECP registered software company, PSEB certified IT company, react developer pakistan, laravel developer pakistan, flutter developer pakistan, AI automation pakistan, SaaS development pakistan, hire software developer pakistan, web development company sargodha, software house pakistan',
    canonical: '/',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is SkillLeo?',
            acceptedAnswer: { '@type':'Answer', text:'SkillLeo (SMC-Private) Limited is a SECP and PSEB certified software development company based in Sargodha, Punjab, Pakistan. Founded in 2018, we deliver world-class web, mobile, AI, and SaaS solutions to 120+ clients across 50+ countries.' },
          },
          {
            '@type': 'Question',
            name: 'Is SkillLeo a registered company?',
            acceptedAnswer: { '@type':'Answer', text:'Yes. SkillLeo is officially registered with SECP (Securities & Exchange Commission of Pakistan) under Inc. No. 0330718, certified by PSEB (Pakistan Software Export Board) under Reg. No. Z-25-19355/26, and registered with FBR under NTN I750441.' },
          },
          {
            '@type': 'Question',
            name: 'What services does SkillLeo provide?',
            acceptedAnswer: { '@type':'Answer', text:'SkillLeo provides: React.js & Next.js web development, Laravel & PHP development, MERN stack development, AI automation & integration, AI model training, data scraping, Flutter & React Native mobile apps, SaaS & CRM platform development, and custom AI tools.' },
          },
          {
            '@type': 'Question',
            name: 'Where is SkillLeo located?',
            acceptedAnswer: { '@type':'Answer', text:'SkillLeo is headquartered in Sargodha, Punjab, Pakistan. We serve international clients across USA, Canada, UK, Australia, Germany, UAE, Saudi Arabia, and 44 other countries.' },
          },
          {
            '@type': 'Question',
            name: 'How can I hire SkillLeo?',
            acceptedAnswer: { '@type':'Answer', text:'You can hire SkillLeo through Upwork (upwork.com), Fiverr (fiverr.com/s/vvq3wLN), LinkedIn, or directly at contact@skillleo.com. We respond within 2 business hours.' },
          },
        ],
      },
    ],
  },

  services: {
    title: 'Software Development Services | React, Laravel, AI, Flutter | SkillLeo Pakistan',
    description: 'Explore SkillLeo\'s full-spectrum services: React.js & Next.js, Laravel & PHP, MERN stack, AI automation, AI model training, data scraping, Flutter mobile apps, SaaS & CRM platforms. Pakistan\'s most trusted certified software team.',
    keywords: 'react developer pakistan, nextjs developer pakistan, laravel developer pakistan, php developer pakistan, mern stack developer pakistan, AI developer pakistan, flutter developer pakistan, react native developer pakistan, saas developer pakistan, crm development pakistan, data scraping service pakistan, AI automation service, mobile app developer pakistan, web developer pakistan, software development services',
    canonical: '/services',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'SkillLeo Software Development Services',
        description: 'Complete list of software development services offered by SkillLeo Pakistan',
        itemListElement: [
          { '@type':'ListItem', position:1, name:'React & Next.js Development', url:'https://skillleo.com/services#react' },
          { '@type':'ListItem', position:2, name:'Laravel & PHP Development',   url:'https://skillleo.com/services#laravel' },
          { '@type':'ListItem', position:3, name:'MERN Stack Development',      url:'https://skillleo.com/services#mern' },
          { '@type':'ListItem', position:4, name:'AI Automation & Integration', url:'https://skillleo.com/services#ai' },
          { '@type':'ListItem', position:5, name:'AI Model Training',           url:'https://skillleo.com/services#ai-training' },
          { '@type':'ListItem', position:6, name:'Data Scraping & ETL',         url:'https://skillleo.com/services#scraping' },
          { '@type':'ListItem', position:7, name:'Flutter Mobile Apps',         url:'https://skillleo.com/services#mobile' },
          { '@type':'ListItem', position:8, name:'SaaS & CRM Platforms',        url:'https://skillleo.com/services#saas' },
          { '@type':'ListItem', position:9, name:'Custom AI Tools',             url:'https://skillleo.com/services#ai-tools' },
        ],
      },
    ],
  },

  about: {
    title: 'About SkillLeo | SECP & PSEB Certified Software Company Pakistan — Founded 2018',
    description: 'Learn about SkillLeo (SMC-Private) Limited — founded in 2018 in Sargodha, Pakistan. CEO Hassam Mehmood leads 25+ expert engineers and designers. Certified by SECP (Inc. 0330718), PSEB (Z-25-19355/26), and FBR. 120+ satisfied international clients.',
    keywords: 'skillleo about, skillleo pakistan, skillleo company, skillleo SECP, skillleo PSEB, hassam mehmood skillleo, software company pakistan, registered software company pakistan, SECP SMC private limited, PSEB certified company, software house sargodha, software company punjab pakistan',
    canonical: '/about',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About SkillLeo — Pakistan\'s Certified Software Development Company',
        description: 'SkillLeo was founded in 2018 by Hassam Mehmood in Sargodha, Punjab, Pakistan with a mission to deliver world-class software globally.',
        url: 'https://skillleo.com/about',
        mainEntity: { '@id': 'https://skillleo.com/#organization' },
      },
    ],
  },

  portfolio: {
    title: 'Portfolio — 200+ Projects Delivered | Web, Mobile, AI, SaaS | SkillLeo',
    description: 'View SkillLeo\'s portfolio of 200+ delivered projects across web development, mobile apps, AI automation, SaaS platforms, and CRM systems for clients in USA, UK, Australia, Germany, UAE and 45 more countries.',
    keywords: 'skillleo portfolio, skillleo projects, software development portfolio pakistan, react projects pakistan, laravel projects pakistan, flutter app portfolio, AI automation projects, saas portfolio, web development portfolio pakistan',
    canonical: '/portfolio',
  },

  contact: {
    title: 'Contact SkillLeo | Hire Software Developers | Get Free Consultation',
    description: 'Contact SkillLeo for your software project. Email: contact@skillleo.com | Phone: +92 310 111 1571 | Upwork, Fiverr & LinkedIn. Located in Sargodha, Punjab, Pakistan. Free consultation. Reply within 2 hours.',
    keywords: 'contact skillleo, hire skillleo, skillleo email, skillleo phone, skillleo upwork, skillleo fiverr, skillleo linkedin, hire software developer pakistan, software development quote, free consultation software pakistan',
    canonical: '/contact',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact SkillLeo',
        url: 'https://skillleo.com/contact',
        mainEntity: { '@id': 'https://skillleo.com/#organization' },
      },
    ],
  },
};

// ── Main SEO component ────────────────────────────────────────────────────
export default function SEO({ page = 'home', extraSchema = [] }) {
  const cfg = PAGE_SEO[page] || PAGE_SEO.home;
  const allSchemas = [...GLOBAL_SCHEMAS, ...(cfg.schema || []), ...extraSchema];
  const fullUrl = `https://skillleo.com${cfg.canonical}`;

  return (
    <Helmet>
      {/* ─ Core ─ */}
      <html lang="en" />
      <title>{cfg.title}</title>
      <meta name="description"  content={cfg.description} />
      <meta name="keywords"     content={cfg.keywords || ''} />
      <meta name="author"       content="SkillLeo (SMC-Private) Limited" />
      <meta name="robots"       content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot"    content="index, follow" />
      <link rel="canonical"     href={fullUrl} />

      {/* ─ Geo / Local SEO ─ */}
      <meta name="geo.region"      content="PK-PB" />
      <meta name="geo.placename"   content="Sargodha, Punjab, Pakistan" />
      <meta name="geo.position"    content="32.0836;72.6711" />
      <meta name="ICBM"            content="32.0836, 72.6711" />
      <meta name="language"        content="English" />
      <meta name="revisit-after"   content="3 days" />
      <meta name="rating"          content="general" />
      <meta name="classification"  content="Software Development, IT Services" />
      <meta name="category"        content="Software Development Company" />

      {/* ─ Open Graph ─ */}
      <meta property="og:type"          content="website" />
      <meta property="og:url"           content={fullUrl} />
      <meta property="og:site_name"     content="SkillLeo" />
      <meta property="og:title"         content={cfg.title} />
      <meta property="og:description"   content={cfg.description} />
      <meta property="og:image"         content="https://skillleo.com/og-image.jpg" />
      <meta property="og:image:width"   content="1200" />
      <meta property="og:image:height"  content="630" />
      <meta property="og:image:alt"     content="SkillLeo — Pakistan's Certified Software Development Company" />
      <meta property="og:locale"        content="en_US" />

      {/* ─ Twitter Cards ─ */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content="@SkillLeo" />
      <meta name="twitter:creator"     content="@SkillLeo" />
      <meta name="twitter:title"       content={cfg.title} />
      <meta name="twitter:description" content={cfg.description} />
      <meta name="twitter:image"       content="https://skillleo.com/og-image.jpg" />
      <meta name="twitter:image:alt"   content="SkillLeo Software Development" />

      {/* ─ LinkedIn / WhatsApp / Slack unfurls ─ */}
      <meta property="og:image:secure_url" content="https://skillleo.com/og-image.jpg" />

      {/* ─ Theme color (browser tab on mobile) ─ */}
      <meta name="theme-color" content="#2563EB" />
      <meta name="msapplication-TileColor" content="#2563EB" />

      {/* ─ Brand verification hints ─ */}
      <meta name="application-name"    content="SkillLeo" />
      <meta name="generator"           content="SkillLeo Web Team" />

      {/* ─ JSON-LD Structured Data ─ */}
      {allSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
