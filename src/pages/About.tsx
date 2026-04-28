import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import SchemaOrg from '@/components/ui/schema-org'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import WhatsAppButton from '@/components/ui/whatsapp-button'
import MilestonesSection from '@/components/ui/milestones-section'
import { ChevronRight, Download } from 'lucide-react'

// ── Cert Strip data ──────────────────────────────────────────────
const certs = [
  { title: 'NABL Accredited', sub: 'In-House Testing Lab', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="h-7 w-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"/></svg> },
  { title: 'CPRI Tested', sub: 'Type Tested Products', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="h-7 w-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/></svg> },
  { title: 'ERDA Tested', sub: 'NABL Accredited Lab', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="h-7 w-7"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.654m5.71-4.6a2.625 2.625 0 0 0-3.762-3.763L7.5 7.5"/></svg> },
  { title: 'IS / IEC Compliant', sub: "Indian & Int'l Standards", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="h-7 w-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/></svg> },
  { title: 'PGCIL Approved', sub: 'Registered Vendor', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="h-7 w-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/></svg> },
  { title: 'CORE / RDSO', sub: '200+ Approved Items', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="h-7 w-7"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/></svg> },
]

// ── MVV data ──────────────────────────────────────────────────────
const mvv = [
  { id: 'mission', title: 'Mission', color: '#D94040', bg: '#FEF0F0', text: "To manufacture and deliver precision-engineered power transmission tools that meet the highest standards of quality, service, and commitment — empowering India's infrastructure." },
  { id: 'vision',  title: 'Vision',  color: '#2BAC8C', bg: '#EDFAF6', text: 'To become India\'s most trusted manufacturer of power transmission tools — driving engineering excellence, self-reliance, and sustainable infrastructure across Asia.' },
  { id: 'values',  title: 'Values',  color: '#3A8F4E', bg: '#F0FAF2', text: 'Quality, reliability, innovation, integrity, safety, and customer commitment — the principles that guide every product we build and every partnership we foster.' },
  { id: 'goals',   title: 'Goals',   color: '#E8700A', bg: '#FEF3E8', text: 'Expand to 200+ SKUs, achieve nationwide distribution, attain export readiness for South-East Asia, and establish Transcom as the benchmark EPC-grade transmission tool supplier.' },
]

export default function About() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>About Us — Transcom | 10+ Years in Power Transmission Tools</title>
        <meta name="description" content="Learn about Transcom — Kolkata-based manufacturer of transmission line hardware, substation fittings, and OPGW accessories since 2016. NABL accredited, CPRI & ERDA tested, PGCIL approved." />
        <meta name="keywords" content="Transcom about, transmission line hardware manufacturer, substation fittings Kolkata, NABL accredited testing, PGCIL approved vendor" />
        <meta property="og:title" content="About Transcom — Power Transmission Tool Manufacturer" />
        <meta property="og:description" content="10+ years of precision-engineered transmission tools. NABL accredited. Trusted by India's top EPC contractors." />
        <link rel="canonical" href="https://www.transcomtools.com/about" />
      </Helmet>
      <SchemaOrg />
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden mt-16"
        style={{ height: 300, backgroundImage: "url('/images/web/about-us-header.webp')", backgroundSize: 'cover', backgroundPosition: 'center 40%' }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,45,94,0.85) 0%, rgba(11,45,94,0.5) 60%, rgba(11,45,94,0.3) 100%)' }} />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-600" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <nav className="mb-4">
            <ol className="flex items-center justify-center gap-2 text-xs font-medium text-white/60">
              <li><a href="/" className="hover:text-blue-300 transition-colors">Home</a></li>
              <li><ChevronRight className="h-3 w-3 text-white/30" /></li>
              <li className="font-semibold text-blue-300">About Us</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-black uppercase tracking-wide text-white drop-shadow-lg md:text-5xl">About Us</h1>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ── */}
      <section className="overflow-hidden bg-[#EAF2FB] py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-slate-500">About Us</p>
          <h2 className="text-5xl font-black uppercase tracking-wide text-slate-900 md:text-6xl">Transcom</h2>
          <p className="mt-4 text-sm font-semibold tracking-wide text-blue-700 flex flex-wrap justify-center gap-x-3 gap-y-1">
            <span>#TransmissionLineHardware</span><span>#SubstationFittings</span><span>#OPGWAccessories</span><span>#EPCSupply</span>
          </p>

          {/* Clipped number */}
          <div className="my-6 flex flex-col items-center">
            <span
              className="select-none font-black leading-none block text-center"
              style={{
                fontSize: 'clamp(8rem, 20vw, 18rem)',
                backgroundImage: "url('/images/web/about-header.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center 60%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
              aria-hidden="true"
            >
              10+
            </span>
            <p className="mt-2 text-xl font-bold text-slate-800 md:text-2xl">Years Of Experience</p>
          </div>

          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base md:text-[17px]">
            Transcom is a Kolkata-based leading manufacturer of{' '}
            <strong className="font-semibold text-slate-900">Transmission Line Hardware, Substation Fittings, and OPGW Accessories</strong>{' '}
            — with manufacturing capabilities extending up to{' '}
            <strong className="font-semibold text-slate-900">765kV</strong>. With over 10 years of experience, we have successfully
            catered to transmission line and substation projects across India and international markets. Our products undergo extensive
            type testing at <strong className="font-semibold text-slate-900">NABL-accredited laboratories</strong> including CPRI,
            ERDA, and NSIC, in full compliance with relevant IS and IEC standards — backed by our own in-house NABL-accredited testing facility.
          </p>
        </div>
      </section>

      {/* ── CERT STRIP ── */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Foundation of Trust</h2>
            <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-blue-600" />
            <p className="mx-auto mt-5 max-w-xl text-sm text-slate-500 sm:text-base">
              We are committed to proven processes and internationally recognised standards that ensure consistent quality and build lasting confidence.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 lg:grid-cols-6">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                className="group flex flex-col items-center text-center cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.06 }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 sm:h-20 sm:w-20 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600 group-hover:shadow-lg group-hover:shadow-blue-200">
                  {cert.icon}
                </div>
                <p className="mt-3 text-xs font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700 sm:text-sm">{cert.title}</p>
                <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs">{cert.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROWTH STORY ── */}
      <MilestonesSection />

      {/* ── MISSION VISION VALUES ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-700">Our Foundation</p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Mission, Vision & Values</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
          </div>

          {/* Desktop: cards + SVG wheel */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-10">
            {/* Left cards */}
            <div className="w-[280px] flex flex-col gap-6">
              {[mvv[0], mvv[2]].map(c => <MvvCard key={c.id} c={c} />)}
            </div>

            {/* SVG Wheel */}
            <div className="flex-shrink-0">
              <svg viewBox="0 0 500 500" className="h-[420px] w-[420px]" xmlns="http://www.w3.org/2000/svg">
                <circle cx="250" cy="250" r="228" fill="none" stroke="#E2E8F0" strokeWidth="2"/>
                <circle cx="250" cy="250" r="222" fill="none" stroke="#F1F5F9" strokeWidth="4"/>
                <g style={{ cursor:'pointer', transformOrigin:'250px 250px', transition:'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)' }} className="wheel-seg">
                  <path d="M 40,250 A 210,210 0 0,1 250,40 L 250,165 A 85,85 0 0,0 165,250 Z" fill="#D94040" stroke="white" strokeWidth="6" strokeLinejoin="round"/>
                  <text x="146" y="153" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" letterSpacing="2.5" fontFamily="Inter,Segoe UI,sans-serif">MISSION</text>
                </g>
                <g style={{ cursor:'pointer', transformOrigin:'250px 250px', transition:'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)' }}>
                  <path d="M 250,40 A 210,210 0 0,1 460,250 L 335,250 A 85,85 0 0,0 250,165 Z" fill="#2BAC8C" stroke="white" strokeWidth="6" strokeLinejoin="round"/>
                  <text x="354" y="153" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" letterSpacing="2.5" fontFamily="Inter,Segoe UI,sans-serif">VISION</text>
                </g>
                <g style={{ cursor:'pointer', transformOrigin:'250px 250px', transition:'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)' }}>
                  <path d="M 460,250 A 210,210 0 0,1 250,460 L 250,335 A 85,85 0 0,0 335,250 Z" fill="#E8700A" stroke="white" strokeWidth="6" strokeLinejoin="round"/>
                  <text x="354" y="359" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" letterSpacing="2.5" fontFamily="Inter,Segoe UI,sans-serif">GOALS</text>
                </g>
                <g style={{ cursor:'pointer', transformOrigin:'250px 250px', transition:'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)' }}>
                  <path d="M 250,460 A 210,210 0 0,1 40,250 L 165,250 A 85,85 0 0,0 250,335 Z" fill="#3A8F4E" stroke="white" strokeWidth="6" strokeLinejoin="round"/>
                  <text x="146" y="359" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" letterSpacing="2.5" fontFamily="Inter,Segoe UI,sans-serif">VALUES</text>
                </g>
                <circle cx="250" cy="250" r="87" fill="white"/>
                <circle cx="250" cy="250" r="82" fill="#0B2D5E"/>
                <circle cx="250" cy="250" r="82" fill="none" stroke="#1B4FA8" strokeWidth="2.5" opacity="0.6"/>
                <text x="250" y="256" textAnchor="middle" fill="#7A9EC4" fontSize="11" fontWeight="700" letterSpacing="3" fontFamily="Inter,Segoe UI,sans-serif">TRANSCOM</text>
              </svg>
            </div>

            {/* Right cards */}
            <div className="w-[280px] flex flex-col gap-6">
              {[mvv[1], mvv[3]].map(c => <MvvCard key={c.id} c={c} />)}
            </div>
          </div>

          {/* Mobile: 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 lg:hidden">
            {mvv.map(c => <MvvCard key={c.id} c={c} compact />)}
          </div>
        </div>
      </section>

      {/* ── FOUNDER MESSAGE ── */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <motion.div
          className="max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Message From Our <span className="text-blue-700">Founder</span>
          </h2>
          <p className="mt-4 text-lg font-semibold text-slate-700">Mr. Ankur Jain</p>
          <div className="mx-auto mt-4 flex items-center justify-center gap-0">
            <div className="h-px w-16 bg-slate-300" />
            <div className="h-3 w-3 rounded-full border-2 border-slate-400 bg-white mx-2" />
            <div className="h-px w-16 bg-slate-300" />
          </div>
          <blockquote className="mt-8">
            <p className="text-sm italic leading-relaxed text-slate-700 sm:text-base md:text-lg">
              "Our vision is to provide reliable, precision-engineered power transmission tools to our esteemed customers and to deliver
              high quality products as per leading industry standards. We believe in continuous improvement. Transcom has an experienced
              team committed to excellence whose deep domain knowledge has led us to stay ahead of industry requirements and become a
              trusted name in India's power infrastructure."
            </p>
          </blockquote>
        </motion.div>
      </section>

      {/* ── CATALOGUE CTA ── */}
      <section className="relative overflow-hidden bg-[#0B1C3D]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/web/download-catalogue.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.18,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C3D]/95 via-[#0B1C3D]/70 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Text side */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Product Catalogue
            </span>
            <h2 className="text-3xl font-black uppercase tracking-wide text-white sm:text-4xl lg:text-5xl leading-tight">
              Explore Our Full<br />
              <span className="text-blue-300">Product Range</span>
            </h2>
            <p className="mt-5 text-gray-300 text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Download our comprehensive product catalogue featuring 122+ transmission line tools, substation fittings,
              and OPGW accessories — with technical specifications, ratings, and ordering details.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="mailto:atijain711@gmail.com?subject=Catalogue%20Request&body=Please%20send%20me%20your%20product%20catalogue."
                className="inline-flex items-center gap-2.5 rounded-full bg-blue-600 hover:bg-blue-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all group"
              >
                <Download size={15} />
                Request Catalogue
              </a>
              <a
                href="https://wa.me/919903016609?text=Hi%2C%20please%20send%20me%20your%20product%20catalogue."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/40 hover:border-white hover:bg-white hover:text-[#0B1C3D] px-8 py-3.5 text-sm font-bold text-white transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            className="hidden lg:block flex-shrink-0 w-[380px] xl:w-[440px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <img
              src="/images/web/download-catalogue.webp"
              alt="Transcom Product Catalogue"
              className="w-full rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/10 object-cover"
              style={{ maxHeight: 340 }}
            />
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

function MvvCard({ c, compact = false }: { c: typeof mvv[0]; compact?: boolean }) {
  return (
    <motion.div
      className={`rounded-2xl shadow-sm border-l-4 ${compact ? 'p-4' : 'p-6'}`}
      style={{ background: c.bg, borderColor: c.color }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ translateY: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.09)' }}
    >
      <h3 className={`font-black uppercase tracking-widest mb-2 ${compact ? 'text-xs' : 'text-base'}`} style={{ color: c.color }}>
        {c.title}
      </h3>
      <div className="h-px w-full mb-3" style={{ background: `${c.color}30` }} />
      <p className={`leading-relaxed text-slate-500 ${compact ? 'text-[0.7rem]' : 'text-sm'}`}>{c.text}</p>
    </motion.div>
  )
}
