import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SchemaOrg from '@/components/ui/schema-org'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import WhatsAppButton from '@/components/ui/whatsapp-button'

const capabilities = [
  {
    title: 'Metal Fabrication',
    desc: 'Precision cutting, bending, and forming of aluminium, galvanised steel, and alloy components for transmission hardware fittings.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.654m5.96-4.643.315-.33a1.5 1.5 0 0 0 0-2.121L12.87 3.906a1.5 1.5 0 0 0-2.121 0l-.33.315" />
      </svg>
    ),
  },
  {
    title: 'Forging & Casting',
    desc: 'Hot forging and casting of heavy-duty fittings including shackles, thimbles, clevis fittings, and compression connectors.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    title: 'CNC Machining',
    desc: 'High-precision CNC turning and milling for components requiring tight tolerances — pulley bodies, clamp housings, and connector parts.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: 'Hot-Dip Galvanising',
    desc: 'Full in-house galvanising for corrosion protection of steel hardware to IS 2629 / IS 4759 standards, ensuring decades of field life.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'In-House Quality Testing',
    desc: 'NABL-accredited laboratory for mechanical, electrical, and dimensional testing on every production batch with full traceability.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: 'Logistics & Dispatch',
    desc: 'Pan-India dispatch with proper packaging, tagging, and documentation support — ready for direct site or warehouse delivery.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
]

const highlights = [
  { label: 'NABL-Accredited', sub: 'In-house testing lab' },
  { label: 'IS / IEC Compliant', sub: 'All product categories' },
  { label: '2,00,000 MT', sub: 'Annual production capacity' },
  { label: '122+ SKUs', sub: 'Across 48 categories' },
]

const stats = [
  { label: 'Production Lines', value: '6+' },
  { label: 'Workforce', value: '150+' },
  { label: 'Quality Checks', value: '100%' },
]

const facilities = [
  { image: '/images/manufacturing/facility.webp', alt: 'Manufacturing facility at Transcom', label: 'Manufacturing Facility' },
  { image: '/images/manufacturing/raw-material.webp', alt: 'Raw material storage area', label: 'Raw Material Area' },
  { image: '/images/manufacturing/production.webp', alt: 'Production floor at Transcom', label: 'Production Area' },
  { image: '/images/manufacturing/assembly.webp', alt: 'Assembly line at Transcom', label: 'Assembly Line' },
  { image: '/images/manufacturing/equipment.webp', alt: 'Machinery and equipment', label: 'Machinery & Equipment' },
  { image: '/images/manufacturing/office.webp', alt: 'Office and administration area', label: 'Office & Administration' },
]

export default function Manufacturing() {
  return (
    <div>
      <Helmet>
        <title>Manufacturing Capabilities — Transcom | Precision Power Transmission Tools</title>
        <meta name="description" content="Explore Transcom's manufacturing unit in Kolkata — advanced metal fabrication, hydraulic assembly, in-house NABL-accredited testing lab, and quality control. Capable up to 765kV." />
        <meta name="keywords" content="transmission tool manufacturing Kolkata, NABL testing lab, power transmission hardware manufacturing, hydraulic tool assembly India" />
        <meta property="og:title" content="Manufacturing — Transcom Power Transmission Tools" />
        <meta property="og:description" content="State-of-the-art manufacturing with NABL-accredited in-house testing. Capable up to 765kV." />
        <link rel="canonical" href="https://www.transcomtools.com/manufacturing" />
      </Helmet>
      <SchemaOrg />
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden mt-[72px]"
        style={{ height: '280px' }}
      >
        <img
          src="/images/web/hero-manufacturing.webp"
          alt="Transcom Manufacturing Facility"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(11,45,94,0.82) 0%, rgba(11,45,94,0.55) 50%, rgba(11,45,94,0.35) 100%)' }}
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
              <li className="font-semibold text-blue-400" aria-current="page">Manufacturing</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-black uppercase tracking-wide text-white drop-shadow-lg md:text-5xl">
            Manufacturing
          </h1>
        </div>
      </section>

      {/* ── ABOUT PLANT ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Left: Image */}
            <div className="relative">
              <img
                src="/images/web/about-manufacturing.webp"
                alt="Transcom Manufacturing Plant"
                className="h-[420px] w-full rounded-2xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-5 -right-5 hidden h-32 w-32 rounded-2xl bg-blue-500 lg:block" />
              <div className="absolute -top-5 -left-5 hidden rounded-2xl bg-slate-900 px-6 py-4 shadow-xl lg:block">
                <p className="text-3xl font-black text-blue-400">10+</p>
                <p className="text-xs font-semibold text-white/70">Years of<br />Manufacturing</p>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-500">About Our Plant</p>
              <h2 className="text-3xl font-black uppercase leading-tight tracking-wide text-slate-900 md:text-4xl">
                Where Precision<br />Meets Scale
              </h2>
              <div className="mt-4 h-1 w-12 rounded-full bg-blue-500" />

              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Transcom's manufacturing facility is located in West Bengal, equipped to produce a comprehensive range of transmission line stringing tools, hardware fittings, and OPGW accessories — all under one roof.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Our plant is built around precision fabrication, in-house testing, and strict adherence to IS/IEC standards. Every product that leaves our facility has passed rigorous quality checks at our NABL-accredited in-house laboratory — ensuring batch-level traceability for every order.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {highlights.map(item => (
                  <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                    <p className="text-base font-black text-slate-900">{item.label}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES ── */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">Our Core Capabilities</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {capabilities.map(cap => (
              <div key={cap.title} className="flex flex-col items-center rounded-2xl bg-white px-4 py-6 text-center shadow-sm transition-shadow hover:shadow-md sm:px-8 sm:py-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 sm:mb-6 sm:h-20 sm:w-20">
                  {cap.icon}
                </div>
                <h3 className="mb-2 text-sm font-bold text-slate-900 sm:mb-3 sm:text-lg">{cap.title}</h3>
                <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPERATIONAL CAPACITY ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">Our Operational Units</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl px-10 py-14 text-center shadow-xl" style={{ backgroundColor: '#0B1C3D' }}>
              <p className="mb-4 text-xs font-bold tracking-[0.2em] text-slate-300 uppercase">Total Plant Capacity</p>
              <p className="mb-2 text-6xl font-black text-blue-400 md:text-7xl">2,00,000</p>
              <p className="text-base font-medium tracking-widest text-slate-300 uppercase">MT &nbsp;/&nbsp; Annum</p>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 divide-x divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            {stats.map(s => (
              <div key={s.label} className="flex flex-col items-center px-6 py-8 text-center">
                <span className="text-3xl font-black text-blue-500">{s.value}</span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITIES GALLERY ── */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">A Glimpse Into Our Facilities</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map(f => (
              <div key={f.label} className="group overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.alt}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-6 py-5">
                  <h3 className="text-base font-bold text-slate-900">{f.label}</h3>
                  <div className="mt-2 h-0.5 w-8 rounded-full bg-blue-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#0B1C3D' }}>
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="max-w-xl">
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-blue-500 lg:mx-0" />
              <h2 className="text-2xl font-black text-white sm:text-3xl">Ready to Start Your Next Project?</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Let our state-of-the-art facilities and expert team bring your vision to life.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-blue-400 sm:w-auto"
              >
                Request a Quote
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="https://wa.me/919903016609"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10 sm:w-auto"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
