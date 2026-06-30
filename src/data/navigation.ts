export interface NavItem {
  label: string
  href: string
  isVisible: boolean
}

export interface CTAConfig {
  primary: {
    text: string
    href: string
    ariaLabel: string
  }
  secondary: {
    text: string
    href: string
    ariaLabel: string
  } | null
}

export const navigation: NavItem[] = [
  { label: 'Services', href: '#services', isVisible: true },
  { label: 'Gallery', href: '#gallery', isVisible: true },
  { label: 'Testimonials', href: '#testimonials', isVisible: true },
  { label: 'Contact', href: '#contact', isVisible: true },
]

export const cta: CTAConfig = {
  primary: {
    text: 'See Our Work',
    href: '#gallery',
    ariaLabel: 'View our landscape design gallery',
  },
  secondary: {
    text: '(561) 627-2409',
    href: 'tel:5616272409',
    ariaLabel: 'Call Roots Landscape Service at (561) 627-2409',
  },
}