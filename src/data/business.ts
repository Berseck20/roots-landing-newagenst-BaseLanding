export interface BusinessInfo {
  name: string
  slug: string
  tagline: string | null
  description: string | null
  phone: string | null
  email: string | null
  address: {
    street: string | null
    city: string | null
    state: string | null
    zip: string | null
    full: string | null
  }
  serviceArea: string | null
  hours: {
    day: string
    hours: string
  }[] | null
  yearFounded: string | null
  yearsInBusiness: string | null
  logo: {
    description: string | null
  }
  socialLinks: {
    platform: string
    url: string
  }[] | null
  licenses: string[] | null
  certifications: string[] | null
  insurance: string | null
  guarantees: string[] | null
  awards: string[] | null
  associations: string[] | null
}

export const business: BusinessInfo = {
  name: 'Roots Landscape Service, LLC',
  slug: 'roots-landscape-service',
  tagline: 'Landscape Design & Build',
  description: 'Roots Landscape is a family owned and operated business, licensed and insured, based out of Palm Beach Gardens, Florida. With a meticulous eye for detail and perfection, we are more than the average landscape company. Customer service and excellent communication are both key aspects of our business. Our team takes pride in showing up on time, every time, and leaving your property cleaner than before we arrived.',
  phone: '(561) 627-2409',
  email: null,
  address: {
    street: null,
    city: 'Palm Beach Gardens',
    state: 'FL',
    zip: '33418',
    full: 'Palm Beach Gardens, FL 33418',
  },
  serviceArea: 'Palm Beach Gardens, North Palm Beach, Jupiter, Tequesta, Singer Island',
  hours: [
    { day: 'Monday', hours: '9:00 AM – 5:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM – 5:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM – 5:00 PM' },
    { day: 'Thursday', hours: '9:00 AM – 5:00 PM' },
    { day: 'Friday', hours: '9:00 AM – 5:00 PM' },
    { day: 'Saturday', hours: 'CLOSED' },
    { day: 'Sunday', hours: 'CLOSED' },
  ],
  yearFounded: null,
  yearsInBusiness: '20+ Years Combined Experience',
  logo: {
    description: 'Text-based logo: "ROOTS" in large serif/custom typeface with leaf motif integrated into the letterforms, green color palette. Subtitle "LANDSCAPE SERVICE, LLC" in smaller sans-serif.',
  },
  socialLinks: [
    { platform: 'Facebook', url: 'https://www.facebook.com/rootslandscapellc' },
    { platform: 'Yelp', url: 'https://www.yelp.com/biz/roots-landscape-service-palm-beach-gardens' },
    { platform: 'Instagram', url: 'https://www.instagram.com/rootslandscapellc/' },
    { platform: 'Houzz', url: 'https://www.houzz.com/pro/rootslandscape/roots-landscape-service-llc' },
  ],
  licenses: [
    'FDACS Limited Commercial Landscape Maintenance License',
    'FDACS Limited Commercial Fertilizer License',
  ],
  certifications: [
    'FNGLA Certified Horticulture Professionals',
    'Green Industries Best Management Practices (GI-BMP) — University of Florida',
  ],
  insurance: 'Licensed and insured',
  guarantees: null,
  awards: null,
  associations: [
    'Florida Landscape Management Association (Florida LMA)',
  ],
}