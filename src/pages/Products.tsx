import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import SchemaOrg from '@/components/ui/schema-org'
import { Link } from 'react-router-dom'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import WhatsAppButton from '@/components/ui/whatsapp-button'

const categories = [
  {
    name: 'Transmission Tools',
    slug: 'transmission-tools',
    image: '/images/products/transmission-tools/conductors-head-board.webp',
    products: ['Conductors Head Board', '4-5 Bundled Conductor Head Boards', '6-7 Bundled Conductor Head Boards', 'Hex Bundle Conductor Head Board'],
  },
  {
    name: 'Hydraulic Compressor',
    slug: 'hydraulic-compressor',
    image: '/images/products/hydraulic-compressor/motorized-hydraulic-compressor-500x500.webp',
    products: ['Motorized Hydraulic Compressor', 'Hydraulic Compressor Joint Machine', 'Jointing ACSR Conductors Hydraulic Compressor', 'Hydraulic Compressor (Model A)', 'Hydraulic Compressor (Model B)'],
  },
  {
    name: 'Winches',
    slug: 'winches',
    image: '/images/products/winches/industrial-power-winches.webp',
    products: ['Industrial Power Winch', 'Cable Conductor Pulling Winch', 'Diesel Pulling Winch', 'Manual Sag Winch', 'OPGW Motorized Winch'],
  },
  {
    name: 'Pulleys',
    slug: 'pulleys',
    image: '/images/products/pulleys/aluminium-stringing-blocks.webp',
    products: ['Aluminium Stringing Blocks', 'Close Type Single Sheave Pulley', 'Earthwire Pulley', 'Heavy Drum Rotator', 'Pivot Wire Reel'],
  },
  {
    name: 'Cable Roller',
    slug: 'cable-roller',
    image: '/images/products/cable-roller/bridge-cable-roller.webp',
    products: ['Bridge Cable Roller', 'Heavy Duty Suspension Roller', 'Manhole Cable Roller', 'Triple Corner Roller'],
  },
  {
    name: 'Double Aerial Roller',
    slug: 'double-aerial-roller',
    image: '/images/products/double-aerial-roller/seven-sheave-aerial-roller.webp',
    products: ['Seven Sheave Aerial Roller', 'Six Sheave Aerial Roller', 'Three Sheave Aerial Roller', 'Single Aerial Roller', 'OPGW Tools'],
  },
  {
    name: 'Come Along Clamps',
    slug: 'come-along-clamps',
    image: '/images/products/come-along-clamps/bolted-type-come-along-clamps.webp',
    products: ['Bolted Type Come Along Clamps', 'Automatic Clamp for OPGW', 'Earth Wire Bolted Clamp', 'Come Along Clamp Seven Bolted', 'Self Gripping Clamp'],
  },
  {
    name: 'Conductor Accessories',
    slug: 'conductor-accessories',
    image: '/images/products/conductor-accessories/bundle-spacer-for-twin-conductors.webp',
    products: ['Bundle Spacer for Twin Conductors', 'Mid Span Compression Joints', 'Quad Conductors Double Tension Hardware', 'Rigid Spacer', 'Spiral Vibration Damper'],
  },
  {
    name: 'Hardware Fitting',
    slug: 'hardware-fitting',
    image: '/images/products/hardware-fitting/suspension-hardware-fittings.webp',
    products: ['D-Shackles', 'Guy Grips with Ties', 'HT and LT Stay Sets', 'Strain Hardware Fittings', 'Suspension Hardware Fittings'],
  },
  {
    name: 'Chain & Pulley Blocks',
    slug: 'chain-pulley-blocks',
    image: '/images/products/chain-pulley-blocks/four-sheave.webp',
    products: ['Four Sheave Pulley Block', 'Close Type Snatch Blocks', 'Hanging Pulley', 'Open Type Single Sheave Pulley', 'Single Sheave Running Out Pulley Block', 'Wire Rope Pulley Block'],
  },
  {
    name: 'Safety Items',
    slug: 'safety-items',
    image: '/images/products/safety-items/Helmet.webp',
    products: ['Safety Helmet', 'Safety Belts', 'Safety Clamps', 'Safety Shoes', 'Karam Twisted Rope Anchorage Line'],
  },
  {
    name: 'Others',
    slug: 'others',
    image: '/images/products/others/Hydraulic-cable-cutter.webp',
    products: ['Hydraulic Cable Cutter', 'Bimetallic Lug', 'Cable Wire Lug', 'Chain Pulley Block', 'Chemical Earthing Electrode', 'Earth Discharge Rod', 'Hydraulic Cable Drum Jack', 'OPGW Pilot Rope', 'PP Rope'],
  },
]

export default function Products() {
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? categories.filter(
        c =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.products.some(p => p.toLowerCase().includes(query.toLowerCase()))
      )
    : categories

  const matchCount = filtered.length
  const productMatchCount = query.trim()
    ? filtered.reduce((acc, c) => acc + c.products.filter(p => p.toLowerCase().includes(query.toLowerCase())).length, 0)
    : 0

  return (
    <div>
      <Helmet>
        <title>Products — Transmission Tools, Winches, Pulleys & More | Transcom</title>
        <meta name="description" content="Browse 122+ power transmission tools across 12 categories — hydraulic compressors, winches, come along clamps, aerial rollers, cable rollers, conductor accessories and more. Pan-India supply." />
        <meta name="keywords" content="transmission line tools, hydraulic compressor, winches, come along clamps, aerial rollers, stringing blocks, cable rollers, conductor accessories, hardware fittings" />
        <meta property="og:title" content="Products — Transcom Power Transmission Tools" />
        <meta property="og:description" content="122+ specialised tools across 12 categories. Quality certified, Pan-India delivery, Export ready." />
        <link rel="canonical" href="https://www.transcomtools.com/products" />
      </Helmet>
      <SchemaOrg />
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden mt-[72px]"
        style={{
          height: '280px',
          backgroundImage: "url('/images/web/product-header.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(11,45,94,0.82) 0%, rgba(11,45,94,0.55) 50%, rgba(11,45,94,0.35) 100%)' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center justify-center gap-2 text-xs font-medium text-white/60">
              <li><a href="/" className="transition-colors hover:text-blue-400">Home</a></li>
              <li aria-hidden="true">
                <svg className="h-3 w-3 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="font-semibold text-blue-400" aria-current="page">Products</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-black uppercase tracking-wide text-white drop-shadow-lg md:text-5xl">
            Our Products
          </h1>
        </div>
      </section>

      {/* ── PRODUCT CATALOG ── */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-6">

          {/* Search Bar */}
          <div className="mx-auto mb-8 max-w-xl lg:mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products or categories..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full rounded-full border border-slate-300 bg-white py-3 pl-5 pr-12 text-sm text-slate-700 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                autoComplete="off"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </span>
            </div>
            {query.trim() && filtered.length > 0 && (
              <p className="mt-2 px-2 text-xs text-slate-400">
                {matchCount} {matchCount === 1 ? 'category' : 'categories'} found
                {productMatchCount > 0 ? ` · ${productMatchCount} matching product${productMatchCount > 1 ? 's' : ''}` : ''}
              </p>
            )}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <p className="mt-10 text-center text-slate-400">No products found. Try a different search term.</p>
          ) : (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-7">
              {filtered.map(cat => {
                const matchedProducts = query.trim()
                  ? cat.products.filter(p => p.toLowerCase().includes(query.toLowerCase()))
                  : []
                const categoryMatch = cat.name.toLowerCase().includes(query.toLowerCase())
                const showMatched = query.trim() && matchedProducts.length > 0 && !categoryMatch

                return (
                  <div
                    key={cat.slug}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                  >
                    {/* Image */}
                    <div className="overflow-hidden bg-slate-50">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="h-36 w-full object-contain p-3 transition duration-300 group-hover:scale-105 sm:h-44 lg:h-56 lg:p-4"
                        loading="lazy"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-col items-center gap-3 p-3 lg:p-5">
                      <h3 className="text-center text-sm font-bold text-slate-800 sm:text-base lg:text-lg">
                        {cat.name}
                      </h3>
                      {showMatched && (
                        <p className="w-full text-center text-[11px] text-blue-500 font-medium">
                          Includes: {matchedProducts.map(p =>
                            p.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
                          ).join(', ')}
                        </p>
                      )}
                      <Link
                        to={`/products/${cat.slug}`}
                        className="w-full rounded-lg bg-[#0B1C3D] py-2 text-center text-xs font-semibold text-white transition hover:bg-[#112548] active:scale-95 sm:py-2.5 sm:text-sm"
                      >
                        View Products
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── WHY BUY FROM US ── */}
      <section className="bg-slate-50 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Our Promise</p>
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Why Buy From Transcom?</h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-blue-500" />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {/* Card 1 */}
            <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:shadow-md lg:p-7">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 lg:mb-4 lg:h-14 lg:w-14">
                <svg className="h-7 w-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="mb-1 text-sm font-bold text-slate-800 lg:mb-2 lg:text-base">Quality Certified</h3>
              <p className="text-xs leading-relaxed text-slate-500 lg:text-sm">Products meet IS / IEC standards, trusted by PGCIL, DISCOMs, and EPC contractors across India.</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:shadow-md lg:p-7">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 lg:mb-4 lg:h-14 lg:w-14">
                <svg className="h-7 w-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-1 text-sm font-bold text-slate-800 lg:mb-2 lg:text-base">Pan-India Supply</h3>
              <p className="text-xs leading-relaxed text-slate-500 lg:text-sm">Fast dispatch from Kolkata to project sites across all states. Export-ready for African & global markets.</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:shadow-md lg:p-7">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 lg:mb-4 lg:h-14 lg:w-14">
                <svg className="h-7 w-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="mb-1 text-sm font-bold text-slate-800 lg:mb-2 lg:text-base">122 SKUs In Stock</h3>
              <p className="text-xs leading-relaxed text-slate-500 lg:text-sm">Over 122 products across 48 categories. Bulk orders, tender supply, and urgent project requirements handled.</p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:shadow-md lg:p-7">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 lg:mb-4 lg:h-14 lg:w-14">
                <svg className="h-7 w-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-1 text-sm font-bold text-slate-800 lg:mb-2 lg:text-base">Expert Support</h3>
              <p className="text-xs leading-relaxed text-slate-500 lg:text-sm">10+ years of domain expertise. Our team helps you select the right tool for your project specification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SUPPLY ── */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">Sectors We Serve</p>
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Industries We Supply</h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-blue-500" />
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">

            {/* Power Transmission */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 text-center transition hover:border-blue-200 hover:bg-blue-50 sm:gap-3 sm:p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1C3D] sm:h-12 sm:w-12">
                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xs font-semibold leading-tight text-slate-700">Power Transmission</span>
            </div>

            {/* EPC Contractors */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 text-center transition hover:border-blue-200 hover:bg-blue-50 sm:gap-3 sm:p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1C3D] sm:h-12 sm:w-12">
                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-xs font-semibold leading-tight text-slate-700">EPC Contractors</span>
            </div>

            {/* Power Utilities */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 text-center transition hover:border-blue-200 hover:bg-blue-50 sm:gap-3 sm:p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1C3D] sm:h-12 sm:w-12">
                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span className="text-xs font-semibold leading-tight text-slate-700">Power Utilities</span>
            </div>

            {/* Railways */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 text-center transition hover:border-blue-200 hover:bg-blue-50 sm:gap-3 sm:p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1C3D] sm:h-12 sm:w-12">
                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l-7-7 7-7m7 14l-7-7 7-7" />
                </svg>
              </div>
              <span className="text-xs font-semibold leading-tight text-slate-700">Railways & Traction</span>
            </div>

            {/* Substation */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 text-center transition hover:border-blue-200 hover:bg-blue-50 sm:gap-3 sm:p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1C3D] sm:h-12 sm:w-12">
                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="text-xs font-semibold leading-tight text-slate-700">Substation Projects</span>
            </div>

            {/* Export */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 text-center transition hover:border-blue-200 hover:bg-blue-50 sm:gap-3 sm:p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1C3D] sm:h-12 sm:w-12">
                <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xs font-semibold leading-tight text-slate-700">Export Markets</span>
            </div>

          </div>
        </div>
      </section>

      {/* ── CATALOGUE DOWNLOAD ── */}
      <section
        className="relative py-14 sm:py-20 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: "url('/images/web/electrical-substation.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: 'rgba(4,9,20,0.55)', zIndex: 1 }}
        />
        <div className="max-w-7xl mx-auto px-6" style={{ position: 'relative', zIndex: 2, isolation: 'isolate' }}>
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">

            <div className="max-w-xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">Product Catalogue</p>
              <h2 className="text-2xl font-extrabold text-white drop-shadow-md md:text-3xl">
                Download Our Full Product Catalogue
              </h2>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="/catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-90 active:scale-95 sm:w-auto sm:py-3.5"
                style={{ backgroundColor: '#0B2D5E' }}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
              <a
                href="https://wa.me/919903016609?text=Hi%2C%20I%20would%20like%20to%20request%20the%20Transcom%20product%20catalogue."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-7 py-3 text-sm font-bold shadow-lg transition hover:bg-slate-100 active:scale-95 sm:w-auto sm:py-3.5"
                style={{ color: '#0B2D5E' }}
              >
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Request on WhatsApp
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
