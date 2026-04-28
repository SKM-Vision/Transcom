'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const categories = [
  { name: 'Pulleys & Stringing Blocks', image: '/images/products/pulleys/aluminium-stringing-blocks.webp' },
  { name: 'Winches', image: '/images/products/winches/industrial-power-winches.webp' },
  { name: 'Come Along Clamps', image: '/images/products/come-along-clamps/bolted-type-come-along-clamps.webp' },
  { name: 'Hydraulic Compressors', image: '/images/products/hydraulic-compressor/motorized-hydraulic-compressor-500x500.webp' },
  { name: 'Chain & Pulley Blocks', image: '/images/products/chain-pulley-blocks/four-sheave.webp' },
  { name: 'Safety Items', image: '/images/products/safety-items/Helmet.webp' },
  { name: 'Hardware Fittings', image: '/images/products/hardware-fitting/suspension-hardware-fittings.webp' },
  { name: 'Cable Rollers', image: '/images/products/cable-roller/bridge-cable-roller.webp' },
  { name: 'Conductor Accessories', image: '/images/products/conductor-accessories/bundle-spacer-for-twin-conductors.webp' },
  { name: 'Aerial Rollers', image: '/images/products/double-aerial-roller/seven-sheave-aerial-roller.webp' },
  { name: 'Transmission Tools', image: '/images/products/transmission-tools/conductors-head-board.webp' },
  { name: 'Other Equipment', image: '/images/products/others/Hydraulic-cable-cutter.webp' },
]

// Manufacturing / shop-floor images that cycle on the right
const showcaseImages = [
  '/images/products/pulleys/aluminium-stringing-blocks.webp',
  '/images/products/winches/industrial-power-winches.webp',
  '/images/products/come-along-clamps/bolted-type-come-along-clamps.webp',
  '/images/products/hydraulic-compressor/motorized-hydraulic-compressor-500x500.webp',
  '/images/products/chain-pulley-blocks/four-sheave.webp',
  '/images/products/safety-items/Helmet.webp',
  '/images/products/hardware-fitting/suspension-hardware-fittings.webp',
  '/images/products/cable-roller/bridge-cable-roller.webp',
  '/images/products/conductor-accessories/bundle-spacer-for-twin-conductors.webp',
  '/images/products/double-aerial-roller/seven-sheave-aerial-roller.webp',
  '/images/products/transmission-tools/conductors-head-board.webp',
  '/images/products/others/Hydraulic-cable-cutter.webp',
]

const SLIDE_INTERVAL = 2800 // ms — fast enough to feel like a video

export default function ProductsSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % showcaseImages.length)
    }, SLIDE_INTERVAL)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  return (
    <section className="bg-white py-16 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase mb-2">
              What We Supply
            </p>
            <h2 className="text-3xl font-bold text-[#0B1C3D] leading-tight md:text-4xl">
              Our Product Range
            </h2>
            <div className="mt-3 h-1 w-16 bg-blue-700 rounded-full" />
          </div>
          <a
            href="/products"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-[#0B1C3D] transition-colors group"
          >
            View All Categories
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Main two-column layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-1.5 overflow-hidden shadow-2xl border border-gray-100">

        {/* LEFT — category grid */}
        <div className="lg:w-[36%] bg-white">
          <div className="grid grid-cols-2 gap-1.5" style={{ gridTemplateRows: 'repeat(4, 1fr)' }}>
            {categories.slice(0, 8).map((cat, i) => (
              <motion.div
                key={cat.name}
                className="relative overflow-hidden cursor-pointer group rounded-sm"
                style={{ aspectRatio: '4/3' }}
                onMouseEnter={() => { setHoveredCategory(cat.name); setActiveIdx(i) }}
                onMouseLeave={() => setHoveredCategory(null)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                {/* Category image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay — always present, deepens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-[#0B1C3D]/90 group-hover:via-[#0B1C3D]/40 transition-all duration-400" />

                {/* Blue accent bar at bottom on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[3px] bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredCategory === cat.name ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-semibold text-sm leading-tight drop-shadow">
                    {cat.name}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — auto-cycling showcase (looks like video) */}
        <div className="lg:w-[64%] relative overflow-hidden bg-gray-50 self-stretch">
          <AnimatePresence mode="sync">
            <motion.img
              key={showcaseImages[activeIdx]}
              src={showcaseImages[activeIdx]}
              alt="Transcom manufacturing"
              className="absolute inset-0 w-full h-full object-contain p-4 md:p-8"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            />
          </AnimatePresence>


          {/* Category name badge — shows current product */}
          <div className="absolute top-4 left-4 bg-[#0B1C3D] rounded-full px-4 py-1.5">
            <span className="text-white text-xs font-semibold tracking-wide">
              {categories[activeIdx]?.name ?? ''}
            </span>
          </div>

          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 px-3 py-3 bg-[#0B1C3D]/90 backdrop-blur-sm flex items-center justify-between md:px-6 md:py-4">
            <div className="flex gap-3 md:gap-6">
              <div>
                <p className="text-white font-bold text-sm leading-none md:text-lg">122+</p>
                <p className="text-blue-300 text-[10px] mt-0.5 md:text-xs">Products</p>
              </div>
              <div className="w-px bg-white/20" />
              <div>
                <p className="text-white font-bold text-sm leading-none md:text-lg">48+</p>
                <p className="text-blue-300 text-[10px] mt-0.5 md:text-xs">Categories</p>
              </div>
              <div className="w-px bg-white/20 hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-white font-bold text-sm leading-none md:text-lg">Since 2016</p>
                <p className="text-blue-300 text-[10px] mt-0.5 md:text-xs">Established</p>
              </div>
            </div>
            <a href="/products" className="flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-600 transition-colors px-3 py-2 rounded-full md:gap-2 md:px-4 md:text-sm">
              View All <ArrowRight size={12} />
            </a>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <motion.div
              className="h-full bg-blue-400"
              key={activeIdx}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: SLIDE_INTERVAL / 1000, ease: 'linear' }}
            />
          </div>
        </div>
      </div>

      {/* Mobile "View All" link */}
      <div className="flex md:hidden justify-center mt-8">
        <a
          href="/products"
          className="flex items-center gap-2 text-sm font-semibold text-blue-700 border border-blue-700 rounded-full px-5 py-2 hover:bg-blue-700 hover:text-white transition-colors"
        >
          View All Categories <ArrowRight size={14} />
        </a>
      </div>
    </section>
  )
}
