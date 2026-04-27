import { useState } from 'react'
import type { FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import SchemaOrg from '@/components/ui/schema-org'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import WhatsAppButton from '@/components/ui/whatsapp-button'

// PHP mailer endpoint — place contact.php in your server's web root
const PHP_ENDPOINT = '/contact.php'

const contactDetails = [
  {
    label: 'Phone / WhatsApp',
    value: '+91 99030 16609',
    href: 'tel:+919903016609',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'atijain711@gmail.com',
    href: 'mailto:atijain711@gmail.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: '32 Ezra St, 7th Fl, Rm 711, Kolkata 700001',
    href: 'https://maps.google.com/?q=32+Ezra+Street+Kolkata',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    label: 'GST Number',
    value: '19AALFT3457H1ZQ',
    href: undefined,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7l8 5 8-5v10c0 .55-.45 1-1 1z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', subject: '', message: '' })

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setSending(true)
    try {
      const res = await fetch(PHP_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        setForm({ name: '', company: '', phone: '', email: '', subject: '', message: '' })
      } else {
        setError(data.message || 'Something went wrong. Please WhatsApp us or email atijain711@gmail.com directly.')
      }
    } catch {
      setError('Could not reach the server. Please WhatsApp us or email atijain711@gmail.com directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div>
      <Helmet>
        <title>Contact Us — Transcom | Get a Quote for Transmission Tools</title>
        <meta name="description" content="Contact Transcom for product enquiries, bulk quotes, and export orders. Call +91 99030 16609 or WhatsApp us. Office: 32 Ezra Street, Kolkata 700001." />
        <meta name="keywords" content="contact Transcom, transmission tools quote, power tools enquiry Kolkata, EPC tools supplier contact" />
        <meta property="og:title" content="Contact Transcom — Power Transmission Tools Enquiry" />
        <meta property="og:description" content="Get a quote for 122+ transmission line tools. Pan-India delivery, export ready. Response within 1 working day." />
        <link rel="canonical" href="https://www.transcomtools.com/contact" />
      </Helmet>
      <SchemaOrg />
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden mt-[72px]"
        style={{
          height: '280px',
          backgroundImage: "url('/images/web/contact.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(11,45,94,0.85) 0%, rgba(11,45,94,0.60) 50%, rgba(11,45,94,0.40) 100%)' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center justify-center gap-2 text-xs font-medium text-white/60">
              <li><Link to="/" className="transition-colors hover:text-blue-400">Home</Link></li>
              <li>
                <svg className="h-3 w-3 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="font-semibold text-blue-400" aria-current="page">Contact Us</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-black uppercase tracking-wide text-white drop-shadow-lg md:text-5xl">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-5 lg:items-start">

            {/* Left: info */}
            <div className="lg:col-span-2">
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-blue-500">
                <span className="h-px w-8 bg-blue-500" />
                Get In Touch
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Let&apos;s Talk<br />Business
              </h2>
              <p className="mb-8 text-slate-500 leading-relaxed">
                Have a question or need a quote? Fill in the form and our team will get back to you within one working day.
              </p>

              <ul className="flex flex-col gap-4">
                {contactDetails.map(item => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
                        {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-500 transition-colors group-hover:bg-blue-100">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.label}</p>
                          <p className="mt-0.5 text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.label}</p>
                          <p className="mt-0.5 text-sm font-medium text-slate-700">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/919903016609?text=Hi%20Transcom%2C%20I%20have%20a%20product%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-emerald-500">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Message on WhatsApp
              </a>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="mb-6 text-lg font-bold text-slate-900">Send Us a Message</h3>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-700">
                        Full Name <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="text" id="name" required placeholder="Your full name"
                        value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-xs font-semibold text-slate-700">Company Name</label>
                      <input
                        type="text" id="company" placeholder="Your company"
                        value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                        className="rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-slate-700">
                        Phone <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="tel" id="phone" required placeholder="+91 XXXXX XXXXX"
                        value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        className="rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-700">Email Address</label>
                      <input
                        type="email" id="email" placeholder="you@company.com"
                        value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label htmlFor="subject" className="text-xs font-semibold text-slate-700">
                        Subject <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="text" id="subject" required placeholder="e.g. Product Enquiry, Price Quote, Technical Support"
                        value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                        className="rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label htmlFor="message" className="text-xs font-semibold text-slate-700">
                        Message <span className="text-blue-500">*</span>
                      </label>
                      <textarea
                        id="message" rows={5} required placeholder="Write your message here..."
                        value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className="resize-y rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-400">
                      <span className="text-blue-500">*</span> Required fields. We respond within 1 working day.
                    </p>
                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#0B1C3D] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending ? 'Sending…' : 'Send Enquiry'}
                      {!sending && (
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {submitted && (
                    <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700" role="alert">
                      <strong>Enquiry submitted!</strong> We&apos;ll get back to you within one working day.
                    </div>
                  )}
                  {error && (
                    <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
                      {error}
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 text-center">
            <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-blue-500">
              <span className="h-px w-8 bg-blue-500" />
              Find Us
              <span className="h-px w-8 bg-blue-500" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Our Office Location</h2>
            <p className="mt-2 text-slate-500">32 Ezra Street, 7th Floor, Room 711, Kolkata — 700001</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0!2d88.3487!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b3b3b3b3b3%3A0x0!2s32+Ezra+St%2C+Kolkata%2C+West+Bengal+700001!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Transcom office location on Google Maps"
            />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
