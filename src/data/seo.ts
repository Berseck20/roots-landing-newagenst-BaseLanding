export interface SEOData {
  title: string
  description: string
  canonical: string
  openGraph: {
    title: string
    description: string
    type: string
    locale: string
    siteName: string
    image: string | null
  }
  schema: {
    localBusiness: object
    services: object[] | null
    reviews: object[] | null
    aggregateRating: object | null
    faq: object | null
  }
  keywords: {
    primary: string
    secondary: string[]
    longTail: string[]
  }
}

export const seo: SEOData = {
  title: 'Landscape Design & Build in Palm Beach Gardens | Roots Landscape',
  description: 'Family-owned landscape design & build in Palm Beach Gardens, FL. 3D renderings, outdoor lighting, Florida-friendly plants. Licensed & insured. Free estimates.',
  canonical: 'https://www.rootslandscapeservice.com',
  openGraph: {
    title: 'Landscape Design & Build in Palm Beach Gardens | Roots Landscape Service',
    description: 'Family-owned landscape design & build in Palm Beach Gardens, FL. 3D renderings, outdoor lighting, Florida-friendly plants. Free estimates.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Roots Landscape Service, LLC',
    image: null,
  },
  schema: {
    localBusiness: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Roots Landscape Service, LLC',
      telephone: '(561) 627-2409',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Palm Beach Gardens',
        addressRegion: 'FL',
        postalCode: '33418',
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
      ],
      areaServed: [
        { '@type': 'City', name: 'Palm Beach Gardens' },
        { '@type': 'City', name: 'North Palm Beach' },
        { '@type': 'City', name: 'Jupiter' },
        { '@type': 'City', name: 'Tequesta' },
        { '@type': 'City', name: 'Singer Island' },
      ],
      url: 'https://www.rootslandscapeservice.com',
      sameAs: [
        'https://www.facebook.com/rootslandscapellc',
        'https://www.instagram.com/rootslandscapellc/',
        'https://www.yelp.com/biz/roots-landscape-service-palm-beach-gardens',
        'https://www.houzz.com/pro/rootslandscape/roots-landscape-service-llc',
      ],
    },
    services: [
      {
        '@type': 'Service',
        name: 'Landscape Design & Build',
        description: 'Custom landscape design with 3D renderings and professional installation for residential properties in Palm Beach County.',
        provider: { '@type': 'LocalBusiness', name: 'Roots Landscape Service, LLC' },
        areaServed: ['Palm Beach Gardens', 'North Palm Beach', 'Jupiter', 'Tequesta', 'Singer Island'],
      },
      {
        '@type': 'Service',
        name: 'Outdoor Lighting',
        description: 'LED landscape lighting design and installation to showcase your property at night.',
        provider: { '@type': 'LocalBusiness', name: 'Roots Landscape Service, LLC' },
        areaServed: ['Palm Beach Gardens', 'North Palm Beach', 'Jupiter', 'Tequesta', 'Singer Island'],
      },
    ],
    reviews: null,
    aggregateRating: null,
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What areas do you serve for landscape design?',
          acceptedAnswer: { '@type': 'Answer', text: 'We serve Palm Beach Gardens, North Palm Beach, Jupiter, Tequesta, and Singer Island in Palm Beach County, Florida.' },
        },
        {
          '@type': 'Question',
          name: 'How long does the landscape design process take?',
          acceptedAnswer: { '@type': 'Answer', text: 'The design process typically takes 2-6 weeks, depending on the time of year, our current workload, and the size of your project.' },
        },
        {
          '@type': 'Question',
          name: 'Are you licensed and insured?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. We are fully licensed and insured with FNGLA certification, FDACS licenses, and Florida LMA membership.' },
        },
      ],
    },
  },
  keywords: {
    primary: 'Palm Beach Gardens landscape design',
    secondary: [
      'landscape design and build Palm Beach Gardens',
      'outdoor lighting Palm Beach Gardens',
      'landscape designer North Palm Beach',
      'tropical landscaping Jupiter FL',
      'Florida friendly landscaping Tequesta',
    ],
    longTail: [
      'custom landscape design with 3D renderings Palm Beach County',
      'family owned landscaper near Palm Beach Gardens',
      'landscape installation and outdoor lighting South Florida',
    ],
  },
}