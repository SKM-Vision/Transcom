import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const milestones = [
  { year: '2016', desc: 'Founded in Kolkata by Mr. Ankur Jain' },
  { year: '2018', desc: 'Added hydraulic compressors & conductor accessories' },
  { year: '2020', desc: 'Pan-India supply network — uninterrupted through pandemic' },
  { year: '2022', desc: 'Crossed 100+ active product SKUs' },
  { year: '2024', desc: '150+ products across 45 categories, FOB Kolkata export' },
  { year: '2026', desc: '10 years strong — 500+ projects supplied pan-India' },
]

const INTERVAL = 1800

function getVisible() {
  if (typeof window === 'undefined') return 3
  return window.innerWidth >= 1024 ? 3 : 2
}

export default function MilestonesSection() {
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [visible, setVisible] = useState(getVisible())

  const maxOffset = milestones.length - visible

  const go = useCallback((idx: number) => {
    setActive(Math.max(0, Math.min(idx, maxOffset)))
  }, [maxOffset])

  const startAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive(prev => (prev >= maxOffset ? 0 : prev + 1))
    }, INTERVAL)
  }, [maxOffset])

  const stopAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current)
  }

  useEffect(() => {
    startAuto()
    return () => stopAuto()
  }, [startAuto])

  useEffect(() => {
    const onResize = () => setVisible(getVisible())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const itemWidthPct = 100 / visible

  return (
    <section
      className="overflow-hidden relative py-20"
      style={{
        backgroundImage: "url('/images/web/growth-bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
    >
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-[#0B1C3D]/60 pointer-events-none" />
      {/* Content wrapper sits above the overlay */}
      <div className="relative z-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-14 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-400">Transcom's</p>
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">Growth Story</h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-blue-500" />
        </motion.div>

        <div className="flex gap-3">
          <button
            onClick={() => { go(active - 1); stopAuto(); startAuto() }}
            disabled={active === 0}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/40 hover:border-blue-400 hover:text-blue-400 disabled:opacity-30 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => { go(active + 1); stopAuto(); startAuto() }}
            disabled={active >= maxOffset}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/40 hover:border-blue-400 hover:text-blue-400 disabled:opacity-30 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(calc(-${active * itemWidthPct}% + max(1.5rem, (100vw - 1280px) / 2 + 1.5rem))`,
          }}
        >
          {milestones.map((m, i) => {
            const isActive = i === active
            return (
              <div
                key={m.year}
                className="shrink-0 cursor-pointer select-none pr-0"
                style={{ width: `${itemWidthPct}vw` }}
                onClick={() => { go(i); stopAuto(); startAuto() }}
              >
                {/* Year + dot + line */}
                <div className="flex items-center">
                  <span
                    className="whitespace-nowrap pr-4 text-4xl font-black tracking-tight transition-colors duration-500 lg:text-5xl xl:text-6xl"
                    style={{ color: isActive ? '#60a5fa' : '#475569' }}
                  >
                    {m.year}
                  </span>
                  <div
                    className="z-10 h-[10px] w-[10px] shrink-0 rounded-full border-2 transition-all duration-500"
                    style={{
                      backgroundColor: isActive ? '#60a5fa' : '#0B1C3D',
                      borderColor: isActive ? '#60a5fa' : '#475569',
                      boxShadow: isActive ? '0 0 0 4px rgba(96,165,250,0.25)' : 'none',
                      transform: isActive ? 'scale(1.5)' : 'scale(1)',
                    }}
                  />
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* Vertical tick */}
                <div
                  className="h-14 w-px transition-colors duration-500"
                  style={{
                    marginLeft: `calc(${m.year.length}ch * 2.25rem / 4 + 1rem)`,
                    backgroundColor: isActive ? '#60a5fa' : '#334155',
                  }}
                />

                {/* Description */}
                <p
                  className="pr-8 text-sm leading-snug transition-colors duration-500"
                  style={{ color: isActive ? '#cbd5e1' : '#475569' }}
                >
                  {m.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Dot nav */}
      <div className="flex justify-center gap-2 mt-12">
        {milestones.map((_, i) => (
          <button
            key={i}
            onClick={() => { go(i); stopAuto(); startAuto() }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? '24px' : '8px',
              height: '8px',
              backgroundColor: i === active ? '#60a5fa' : '#334155',
            }}
            aria-label={`Go to ${milestones[i].year}`}
          />
        ))}
      </div>
      </div>{/* /z-10 wrapper */}
    </section>
  )
}
