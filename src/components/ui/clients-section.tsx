import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const clients = [
  { name: 'Adani',          logo: '/images/clients/adani.webp' },
  { name: 'KEC International', logo: '/images/clients/kec.webp' },
  { name: 'Powergrid',      logo: '/images/clients/powergrid.svg' },
  { name: 'Tata Projects',  logo: '/images/clients/tata-projects.webp' },
  { name: 'MEIL',           logo: '/images/clients/meil.webp' },
  { name: 'NCC',            logo: '/images/clients/ncc.webp' },
]

const total = clients.length

function mod(n: number, m: number) {
  return ((n % m) + m) % m
}

export default function ClientsSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(p => mod(p + 1, total)), 2800)
    return () => clearInterval(t)
  }, [])

  const prev = () => setActive(p => mod(p - 1, total))
  const next = () => setActive(p => mod(p + 1, total))

  // indices: left, center, right
  const idxLeft   = mod(active - 1, total)
  const idxCenter = active
  const idxRight  = mod(active + 1, total)

  return (
    <section className="bg-white py-16 border-t border-gray-100 md:py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-700 text-sm font-semibold tracking-widest uppercase mb-3">
            Trusted By
          </p>
          <h2 className="text-3xl font-bold text-[#0B1C3D] md:text-4xl">
            Our Valued Clients
          </h2>
          <div className="mt-4 h-1 w-16 bg-blue-700 rounded-full mx-auto" />
          <p className="mt-5 text-gray-500 text-sm max-w-xl mx-auto md:text-base">
            Proudly supplying equipment to India's most respected infrastructure and power companies.
          </p>
        </motion.div>

        {/* 3-logo focused carousel */}
        <div className="relative flex items-center justify-center gap-4 md:gap-8 h-28 select-none">

          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Left logo — blurred */}
          <motion.div
            key={`left-${idxLeft}`}
            className="flex items-center justify-center flex-shrink-0 w-28 h-20 md:w-40 md:h-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ filter: 'blur(2px)', opacity: 0.35 }}
          >
            <img
              src={clients[idxLeft].logo}
              alt={clients[idxLeft].name}
              className="max-h-full max-w-full object-contain"
            />
          </motion.div>

          {/* Center logo — focused */}
          <motion.div
            key={`center-${idxCenter}`}
            className="flex items-center justify-center flex-shrink-0 w-36 h-24 rounded-xl border border-blue-100 bg-blue-50/40 shadow-md px-6 py-4 md:w-52 md:h-28"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={clients[idxCenter].logo}
              alt={clients[idxCenter].name}
              className="max-h-full max-w-full object-contain"
            />
          </motion.div>

          {/* Right logo — blurred */}
          <motion.div
            key={`right-${idxRight}`}
            className="flex items-center justify-center flex-shrink-0 w-28 h-20 md:w-40 md:h-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ filter: 'blur(2px)', opacity: 0.35 }}
          >
            <img
              src={clients[idxRight].logo}
              alt={clients[idxRight].name}
              className="max-h-full max-w-full object-contain"
            />
          </motion.div>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {clients.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? 'w-6 h-2 bg-blue-700' : 'w-2 h-2 bg-gray-300 hover:bg-blue-400'
              }`}
            />
          ))}
        </div>

        {/* Client name label */}
        <p className="mt-3 text-center text-sm font-semibold text-[#0B1C3D]">
          {clients[idxCenter].name}
        </p>

        {/* Stat bar */}
        <motion.div
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100 md:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { value: '6+',   label: 'Major Clients' },
            { value: '122+', label: 'Products Supplied' },
            { value: '48+',  label: 'Categories' },
            { value: '9+',   label: 'Years of Trust' },
          ].map((stat, i) => (
            <div key={i} className="bg-white py-6 text-center md:py-8">
              <p className="text-2xl font-bold text-[#0B1C3D] md:text-3xl">{stat.value}</p>
              <p className="text-gray-500 text-xs mt-1 md:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
