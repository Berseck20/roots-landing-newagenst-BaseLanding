export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faq: FAQItem[] = [
  {
    id: 'service-area',
    question: 'What areas do you serve for landscape design?',
    answer: 'We serve Palm Beach Gardens, North Palm Beach, Jupiter, Tequesta, and Singer Island in Palm Beach County, Florida.',
  },
  {
    id: 'design-process',
    question: 'How long does the landscape design process take?',
    answer: 'The design process typically takes 2-6 weeks, depending on the time of year, our current workload, and the size of your project. We provide 3D renderings or 2D design plans so you can see exactly what your landscape will look like.',
  },
  {
    id: 'consultation',
    question: 'What should I bring to the initial consultation?',
    answer: 'We recommend bringing pictures of plants or ideas you\'d like to incorporate, along with a copy of your property survey (usually found with your closing documents). During the consultation, we\'ll discuss your vision and suggest plants suited to your specific environment.',
  },
  {
    id: 'florida-friendly',
    question: 'Do you use Florida-friendly plants?',
    answer: 'Yes. Our team has completed the Green Industries Best Management Practices (GI-BMP) program through the University of Florida, which emphasizes Florida-friendly plants and "the right plant in the right location." This means healthier plants that require less irrigation and fewer pesticides.',
  },
  {
    id: 'licensed',
    question: 'Are you licensed and insured?',
    answer: 'Yes. We are fully licensed and insured. We hold FNGLA Certified Horticulture Professional certification, FDACS Limited Commercial Landscape Maintenance and Fertilizer licenses, and are proud members of the Florida Landscape Management Association.',
  },
  {
    id: 'new-construction',
    question: 'Do you work with new construction properties?',
    answer: 'Absolutely. We work on both new construction landscaping and updating existing landscapes. From bare lots to landscape renovation, we\'ll create a customized design for your property.',
  },
]