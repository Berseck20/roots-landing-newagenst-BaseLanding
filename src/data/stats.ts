export interface Stat {
  id: string
  value: string
  label: string
  source: string
}

export const stats: Stat[] = [
  {
    id: 'years-experience',
    value: '20+',
    label: 'Years Combined Experience',
    source: 'About page — owners combined experience in South Florida landscaping',
  },
  {
    id: 'cities-served',
    value: '5',
    label: 'Cities Served',
    source: 'About page — Palm Beach Gardens, North Palm Beach, Jupiter, Tequesta, Singer Island',
  },
  {
    id: 'certifications',
    value: '4',
    label: 'Professional Certifications',
    source: 'About page — FNGLA, GI-BMP, FDACS (×2)',
  },
  {
    id: 'design-timeline',
    value: '2-6',
    label: 'Week Design Process',
    source: 'Services page — typical design timeline',
  },
]