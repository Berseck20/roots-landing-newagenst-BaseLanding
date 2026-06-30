import { useState } from 'react'
import { navigation, cta } from '@data/navigation'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const visibleItems = navigation.filter((item) => item.isVisible)

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="p-2 text-text-primary hover:text-primary transition-colors"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          className="fixed inset-0 top-16 z-50 bg-white"
        >
          <nav className="flex flex-col p-6 gap-4">
            {visibleItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-text-primary hover:text-primary text-lg font-heading font-semibold py-3 border-b border-border transition-colors"
              >
                {item.label}
              </a>
            ))}
            {cta.secondary && (
              <a
                href={cta.secondary.href}
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-primary text-text-on-primary font-heading font-semibold text-lg py-4 px-6 rounded-md hover:bg-primary-dark transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                {cta.secondary.text}
              </a>
            )}
          </nav>
        </div>
      )}
    </div>
  )
}