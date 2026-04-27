import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const industries = [
  {
    id: 1,
    title: 'Power Transmission',
    subtitle: 'High-voltage line stringing & erection tools',
    image: '/images/industries/ind-power.webp',
    points: ['EHV & UHV Transmission Lines', 'Conductor Stringing Equipment', 'Hardware & Accessories', 'Tower Erection Tools'],
  },
  {
    id: 2,
    title: 'Indian Railways',
    subtitle: 'OHE & traction electrification solutions',
    image: '/images/industries/ind-rail.webp',
    points: ['OHE Stringing Tools', 'Catenary Wire Equipment', 'Rail Electrification Hardware', 'Safety & Protective Gear'],
  },
  {
    id: 3,
    title: 'Substations',
    subtitle: 'Substation construction & maintenance tools',
    image: '/images/industries/substation.webp',
    points: ['Substation Erection Tools', 'Cable Rollers & Pulley Blocks', 'Hydraulic Compressors', 'Earthing & Safety Equipment'],
  },
]

export default function IndustriesSection() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section className="bg-[#0B1C3D] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-2">
              Sectors We Power
            </p>
            <h2 className="text-4xl font-bold text-white leading-tight">
              Industries We Serve
            </h2>
            <div className="mt-3 h-1 w-16 bg-blue-500 rounded-full" />
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Supplying precision tools and equipment to India's most critical infrastructure sectors.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col md:flex-row gap-3 h-[480px]">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.id}
              className="relative rounded-2xl overflow-hidden cursor-pointer flex-shrink-0"
              animate={{ flex: i === activeIdx ? 5 : 1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              onMouseEnter={() => setActiveIdx(i)}
              onClick={() => setActiveIdx(i)}
            >
              {/* Background image */}
              <img
                src={ind.image}
                alt={ind.title}
                className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700"
                style={{ transform: i === activeIdx ? 'scale(1)' : 'scale(1.08)' }}
              />

              {/* Overlay */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                i === activeIdx
                  ? 'bg-gradient-to-t from-[#0B1C3D]/95 via-[#0B1C3D]/40 to-transparent'
                  : 'bg-[#0B1C3D]/70'
              }`} />

              {/* Collapsed state — vertical title */}
              <motion.div
                className="absolute inset-0 flex items-end justify-center pb-8"
                animate={{ opacity: i === activeIdx ? 0 : 1 }}
                transition={{ duration: 0.25 }}
              >
                <span className="text-white font-bold text-base whitespace-nowrap"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>
                  {ind.title}
                </span>
              </motion.div>

              {/* Expanded state — full content */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-7"
                animate={{ opacity: i === activeIdx ? 1 : 0, y: i === activeIdx ? 0 : 16 }}
                transition={{ duration: 0.4, delay: i === activeIdx ? 0.2 : 0 }}
              >
                {/* Number */}
                <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2">
                  0{i + 1}
                </p>
                <h3 className="text-white text-2xl font-bold mb-1">{ind.title}</h3>
                <p className="text-blue-200 text-sm mb-5">{ind.subtitle}</p>

                {/* Bullet points */}
                <ul className="space-y-2 mb-6">
                  {ind.points.map(pt => (
                    <li key={pt} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <a
                  href="/industries"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-blue-400 hover:text-blue-300 rounded-full px-5 py-2 transition-colors group"
                >
                  Explore <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Active indicator bar */}
              {i === activeIdx && (
                <motion.div
                  className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-2xl"
                  layoutId="activeBar"
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
