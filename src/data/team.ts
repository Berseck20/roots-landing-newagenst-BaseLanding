export interface TeamMember {
  id: string
  name: string
  role: string | null
  bio: string | null
  credentials: string[] | null
  imageDescription: string | null
  isOwner: boolean
}

export const team: TeamMember[] = [
  {
    id: 'john-wurster',
    name: 'John Wurster',
    role: 'Owner',
    bio: 'Over twenty years combined experience in South Florida landscaping.',
    credentials: [
      'FNGLA Certified Horticulture Professional',
      'GI-BMP Certified (University of Florida)',
    ],
    imageDescription: 'Professional headshot of John Wurster in outdoor garden setting, warm natural lighting',
    isOwner: true,
  },
  {
    id: 'jessica-wurster',
    name: 'Jessica Wurster',
    role: 'Owner',
    bio: 'Over twenty years combined experience in South Florida landscaping.',
    credentials: [
      'FNGLA Certified Horticulture Professional',
      'GI-BMP Certified (University of Florida)',
    ],
    imageDescription: 'Professional headshot of Jessica Wurster in outdoor garden setting, warm natural lighting',
    isOwner: true,
  },
]