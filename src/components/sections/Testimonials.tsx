import { useState, useCallback } from 'react'
import type { Testimonial } from '@data/testimonials'

interface Props {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  const displayed = testimonials.slice(activeIndex, activeIndex + 3)
  if (displayed.length < 3) {
    displayed.push(...testimonials.slice(0, 3 - displayed.length))
  }

  return (
    <section id="testimonials" className="py-section bg-surface-muted">
      <div className="max-w-[1200px] mx-auto px-container">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-h2 text-text-primary mb-4">
            Real Transformations, Real Homeowners
          </h2>
          <p className="text-text-secondary text-body max-w-[600px] mx-auto">
            Don&rsquo;t take our word for it — hear from our clients across Palm Beach County.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayed.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="bg-surface rounded-xl shadow-md border border-border p-6 flex flex-col"
              >
                {t.tag && (
                  <span className="inline-block bg-primary/10 text-primary text-caption font-heading uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 self-start">
                    {t.tag}
                  </span>
                )}
                <blockquote className="text-text-primary text-body-sm flex-1 mb-4 leading-relaxed">
                  &ldquo;{t.text.length > 200 ? t.text.slice(0, 200) + '...' : t.text}&rdquo;
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-semibold text-text-primary text-body-sm">{t.author}</p>
                  {t.source && (
                    <p className="text-text-secondary text-caption">{t.source}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-full border border-border bg-surface hover:bg-surface-muted flex items-center justify-center transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-primary"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === activeIndex ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-full border border-border bg-surface hover:bg-surface-muted flex items-center justify-center transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-primary"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.rootslandscapeservice.com/testimonials"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-accent font-heading font-semibold hover:text-orange-600 transition-colors group"
          >
            Read More Reviews
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="group-hover:translate-x-1 transition-transform" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}