/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#15803D',
          light: '#22C55E',
          dark: '#166534',
        },
        secondary: '#22C55E',
        accent: '#EA580C',
        background: '#F0FDF4',
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#E8F0F1',
        },
        'text-primary': '#14532D',
        'text-secondary': '#64748B',
        'text-on-primary': '#FFFFFF',
        'text-on-dark': '#FFFFFF',
        border: '#BBF7D0',
        destructive: '#DC2626',
        ring: '#15803D',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.5rem, 4vw + 1rem, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        h3: ['clamp(1.25rem, 1.5vw + 0.5rem, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        body: ['clamp(1rem, 0.5vw + 0.75rem, 1.125rem)', { lineHeight: '1.65' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        label: ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
        caption: ['0.75rem', { lineHeight: '1.4' }],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.06)',
        md: '0 4px 12px rgba(0,0,0,0.08)',
        lg: '0 8px 24px rgba(0,0,0,0.1)',
      },
      spacing: {
        section: 'clamp(4rem, 3rem + 4vw, 6rem)',
        'section-mobile': 'clamp(2.5rem, 2rem + 3vw, 4rem)',
        container: 'clamp(1rem, 5vw, 2rem)',
        'component-gap': '1.5rem',
        'stack-gap': '1rem',
      },
    },
  },
  plugins: [],
}