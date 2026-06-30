import { useState, useEffect } from 'react'
import { business } from '@data/business'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.9
      const contactSection = document.getElementById('contact')
      const contactTop = contactSection?.getBoundingClientRect().top ?? Infinity

      if (window.scrollY > heroHeight && contactTop > window.innerHeight) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-primary text-white px-4 py-3 flex items-center justify-between shadow-lg" style={{ paddingBottom: 'env(safe-area-inset-bottom, 12px)' }}>
        <span className="font-heading font-semibold text-body-sm">Free Estimate</span>
        <a
          href={`tel:${business.phone?.replace(/\D/g, '')}`}
          className="flex items-center gap-2 bg-accent text-white font-heading font-semibold px-5 py-2.5 rounded-md hover:bg-orange-600 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          {business.phone}
        </a>
      </div>
    </div>
  )
}