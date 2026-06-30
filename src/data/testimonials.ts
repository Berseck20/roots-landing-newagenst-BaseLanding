export interface Testimonial {
  id: string
  text: string
  author: string | null
  source: string | null
  rating: number | null
  date: string | null
  isHighlighted: boolean
  tag: string | null
}

export interface AggregateRating {
  platform: string
  rating: number
  reviewCount: number
}

export const testimonials: Testimonial[] = [
  {
    id: 'joe-meyer',
    text: 'It went above and beyond what I expected. Their initial plan came in well under my budget so I was able to get larger, mature palm trees, which added so much impact to the final result. They were always on time, professional and friendly. They kept in touch by email and phone and the whole process was very smooth. We were impressed with their knowledge. The day of the install went very smoothly as well, with both John and Justin overseeing every detail, from placing the big palm trees to the small rock ground cover. Our neighbors commented on how hard the Roots team worked (two full days) and how well they worked together. I was very nervous about investing some big bucks into our front yard and feel very fortunate to have found Roots. They did a great job and took my vague plan and turned it into a reality. I thought I was just getting some new trees installed, but I now feel like I\'m living in a different house altogether!',
    author: 'Joe Meyer',
    source: 'Angie\'s List',
    rating: null,
    date: null,
    isHighlighted: true,
    tag: 'Transformation',
  },
  {
    id: 'natasha-almeida',
    text: 'Roots Landscape is amazing! Great people, honest, dedicated, helpful and do an excellent job on your home. The owner came to my house, spent time with us helping us make a plan on the landscaping we wanted to do, and gave us amazing results. I felt like my home looked like new. They go the extra mile to do a great job. I promise you will a super happy customer!! I love them, and highly recommend them for ALL your landscaping needs!! Feel free to contact me if you want any more details on my experience.',
    author: 'Natasha Almeida',
    source: 'Facebook',
    rating: null,
    date: null,
    isHighlighted: true,
    tag: 'Personal Touch',
  },
  {
    id: 'denise-megiel-rollo',
    text: 'WONDERFUL The company was responsive, they kept their appointment times, they came through with the estimate in a timely fashion, they showed up on time, they did an EXCELLENT job, cleaned up and did a walk though with me to make sure that it met what I expected and wanted. I got a THANK YOU note from them!!!!! Yes hire them They are honest, reliable and do a wonderful job!!!!!!!',
    author: 'Denise Megiel-Rollo',
    source: 'Angie\'s List',
    rating: null,
    date: null,
    isHighlighted: true,
    tag: 'Reliability',
  },
  {
    id: 'charles-bengel',
    text: 'John and his team did a wonderful job in my backyard. When he came out to do the estimate, I had an idea of what I wanted, but he made helpful suggestions along the way and also assisted in picking out other plants via email when I needed to change some of my original plans. During planting, his team were professional and did their work efficiently and carefully. The plants look beautiful, and I\'ve gotten lots of complements on the landscaping. They also tidied up the landscaping on the side and front of the house where they mulch',
    author: 'Charles Bengel',
    source: 'Angie\'s List',
    rating: null,
    date: null,
    isHighlighted: true,
    tag: 'Collaboration',
  },
  {
    id: 'john-lesko',
    text: 'I called Roots Landscaping to redo the landscaping in my front yard. John came by to do the design and quote. He was very attentive and it seemed like he knew exactly what I was looking for. The next day I received the quote, which was fair, and we were able to schedule the job within a couple days. They did a phenomenal job; I am very happy with the final result. John and his team are prompt, respectful, smart and hard-working. I would highly recommend Roots Landscaping!',
    author: 'John Lesko',
    source: 'Angie\'s List',
    rating: null,
    date: null,
    isHighlighted: true,
    tag: 'Speed & Value',
  },
  {
    id: 'melinda-mullen',
    text: 'Roots Landscape Service is everything you would hope for, and more. The owner is polite, courteous, and knowledgeable. His passion for plants comes through with his willingness to share what he knows. Their pricing is also reasonable and we will continue to use them for all our projects and maintenance.',
    author: 'Melinda Mullen',
    source: 'Facebook',
    rating: null,
    date: null,
    isHighlighted: false,
    tag: 'Knowledge',
  },
  {
    id: 'kathy-link',
    text: 'We used this company for some expert tree trimming. These trees are like family to us and Roots did an amazing job. They were careful and knowledgable. The entire crew was friendly and compelted the job with an awesome clean up. I highly recommend them.',
    author: 'Kathy Link',
    source: 'Facebook',
    rating: null,
    date: null,
    isHighlighted: false,
    tag: 'Care',
  },
  {
    id: 'morris-weinstein',
    text: 'John, Jessica, and crew were all exceptional and professional. The plants, design and finished product were above our expectations. We heartedly recommend them.',
    author: 'Morris Weinstein',
    source: 'Angie\'s List',
    rating: null,
    date: null,
    isHighlighted: false,
    tag: 'Professionalism',
  },
  {
    id: 'daniel-bruce',
    text: 'They brought pictures and ideas for my backyard and were helpful in their suggestions. They did a fantastic job and my yard looks great! Would definitely hire them again!',
    author: 'Daniel Bruce',
    source: 'Angie\'s List',
    rating: null,
    date: null,
    isHighlighted: false,
    tag: 'Design Help',
  },
]

export const aggregateRatings: AggregateRating[] = []