import { Phone, Mail, MapPin, Download, MessageCircle } from 'lucide-react'

const productLinks = [
  { label: 'Chain & Pulley Blocks',     href: '/products/chain-pulley-blocks' },
  { label: 'Hydraulic Compressors',     href: '/products/hydraulic-compressor' },
  { label: 'Pulleys & Stringing Blocks',href: '/products/pulleys' },
  { label: 'Come Along Clamps',         href: '/products/come-along-clamps' },
  { label: 'Winches',                   href: '/products/winches' },
  { label: 'Conductor Accessories',     href: '/products/conductor-accessories' },
  { label: 'Safety Equipment',          href: '/products/safety-items' },
]

const companyLinks = [
  { label: 'About Transcom',   href: '/about' },
  { label: 'Manufacturing',    href: '/manufacturing' },
  { label: 'Industries Served',href: '/industries' },
  { label: 'Blog',             href: '/blog' },
  { label: 'Contact Us',       href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#060F22]" role="contentinfo">

      {/* Row 1 — Brand + contact chips */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            {/* Logo + tagline */}
            <div className="flex items-center gap-4">
              <img
                src="/images/logo.webp"
                alt="Transcom"
                className="h-12 w-12 rounded-lg object-contain bg-white p-1"
              />
              <div>
                <span className="block text-lg font-black tracking-widest text-white">TRANSCOM</span>
                <span className="block text-[10px] uppercase tracking-widest text-blue-400 mt-0.5">
                  Power Transmission Tools · Kolkata
                </span>
              </div>
            </div>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-2">
              <a
                href="tel:+919903016609"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
              >
                <Phone size={12} className="text-blue-400" />
                +91 99030 16609
              </a>
              <a
                href="mailto:atijain711@gmail.com"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
              >
                <Mail size={12} className="text-blue-400" />
                atijain711@gmail.com
              </a>
              <a
                href="https://wa.me/919903016609"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-emerald-800 bg-emerald-900/30 px-4 py-2 text-xs text-emerald-400 hover:border-emerald-500 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle size={12} />
                WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Row 2 — Links grid */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">

            {/* About blurb */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">About Us</h3>
              <p className="text-xs leading-relaxed text-gray-400 mb-4">
                Transcom is a Kolkata-based manufacturer and supplier of precision stringing tools,
                conductor accessories, and transmission hardware — trusted by Adani, KEC, Powergrid,
                Tata Projects, MEIL & NCC since 2016.
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-gray-400">GST:</span> 19AALFT3457H1ZQ
              </p>
            </div>

            {/* Products */}
            <div className="hidden sm:block">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Products</h3>
              <ul className="flex flex-col gap-2.5">
                {productLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-1">
                  <a href="/products" className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                    View All 48 Categories →
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Company</h3>
              <ul className="flex flex-col gap-2.5">
                {companyLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office */}
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">Office</h3>
              <address className="not-italic text-xs leading-relaxed text-gray-400 mb-4 flex flex-col gap-3">
                <span className="flex items-start gap-2">
                  <MapPin size={12} className="text-blue-400 mt-0.5 shrink-0" />
                  32 Ezra Street, 7th Floor, Room 711,<br />
                  Kolkata – 700 001, West Bengal, India
                </span>
              </address>
              <a
                href="/catalogue"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
              >
                <Download size={12} />
                Download Catalogue
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Row 3 — Copyright */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-between gap-2 py-5 text-xs sm:flex-row">
        <p className="text-gray-600">© {new Date().getFullYear()} Transcom. All rights reserved. Kolkata, India.</p>
        <p className="text-gray-600">
          Designed & developed by{' '}
          <a
            href="https://skmvision.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors"
          >
            SKM Vision
          </a>
        </p>
      </div>

    </footer>
  )
}
