import { useState, type FormEvent } from 'react'
import { business } from '@data/business'

export default function EstimateForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
    }, 1000)
  }

  if (status === 'success') {
    return (
      <section id="contact" className="py-section bg-primary">
        <div className="max-w-[560px] mx-auto px-container text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h2 className="font-heading font-bold text-h2 text-text-primary mb-3">Thank You!</h2>
            <p className="text-text-secondary text-body mb-6">
              We&rsquo;ve received your request and will respond within 1 business day. If you need immediate assistance, call us at {business.phone}.
            </p>
            <a
              href={`tel:${business.phone?.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 bg-primary text-white font-heading font-semibold px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              {business.phone}
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-section bg-primary">
      <div className="max-w-[560px] mx-auto px-container">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-h2 text-white mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-white/80 text-body">
            Tell us about your project and we&rsquo;ll respond within 1 business day with a free estimate.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 lg:p-8 shadow-lg" noValidate>
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-text-primary font-body font-medium text-body-sm mb-1.5">
                Full Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                className="w-full h-12 px-4 rounded-md border border-border bg-background text-text-primary text-body focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-text-primary font-body font-medium text-body-sm mb-1.5">
                Phone Number <span className="text-destructive">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                className="w-full h-12 px-4 rounded-md border border-border bg-background text-text-primary text-body focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                placeholder="(561) 555-0123"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-text-primary font-body font-medium text-body-sm mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                className="w-full h-12 px-4 rounded-md border border-border bg-background text-text-primary text-body focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="project" className="block text-text-primary font-body font-medium text-body-sm mb-1.5">
                Tell Us About Your Project
              </label>
              <textarea
                id="project"
                name="project"
                rows={3}
                value={formData.project}
                onChange={(e) => setFormData((p) => ({ ...p, project: e.target.value }))}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-text-primary text-body focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow resize-none"
                placeholder="New landscape design, outdoor lighting, renovation..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-accent text-white font-heading font-semibold text-lg uppercase tracking-wider py-4 rounded-md hover:bg-orange-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : 'Request Your Free Estimate'}
            </button>
          </div>

          <p className="text-text-secondary text-caption text-center mt-4">
            Licensed &amp; Insured. Serving Palm Beach County.
          </p>
        </form>
      </div>
    </section>
  )
}