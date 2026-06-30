export interface Service {
  id: string
  name: string
  description: string | null
  price: string | null
  category: string | null
  isHighlighted: boolean
  features: string[]
}

export const services: Service[] = [
  {
    id: 'landscape-design-build',
    name: 'Landscape Design & Build',
    description: 'From new construction to landscape renovation, we combine art and science to create outdoor spaces that thrive in Florida\'s unique climate. Our design process includes 3D renderings or 2D plans so you see exactly what your landscape will look like before installation begins.',
    price: null,
    category: 'Design & Installation',
    isHighlighted: true,
    features: [
      '3D Renderings & 2D Design Plans',
      'Florida-Friendly Plant Selection',
      'Custom Design Process (2-6 weeks)',
      'Professional Installation',
      'New Construction & Renovation',
    ],
  },
  {
    id: 'outdoor-lighting',
    name: 'Outdoor Lighting',
    description: 'Your landscape doesn\'t disappear at sunset. LED lighting transforms your property into an evening showcase with a wide variety of fixture and bulb options available.',
    price: null,
    category: 'Lighting',
    isHighlighted: true,
    features: [
      'LED Fixture Options',
      'Wide Variety of Styles',
      'Professional Installation',
      'Nighttime Curb Appeal',
    ],
  },
]