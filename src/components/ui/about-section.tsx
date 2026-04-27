import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { Variants } from "framer-motion"
import { ShieldCheck, Factory, Globe, Users } from "lucide-react"

const pillars = [
  { icon: ShieldCheck, title: "Quality Assured",        desc: "Every product tested to HT/EHV field standards before dispatch." },
  { icon: Factory,     title: "In-House Manufacturing", desc: "Controlled production with raw material traceability." },
  { icon: Globe,       title: "Pan-India & Export",     desc: "Supplying across India and exporting to African markets." },
  { icon: Users,       title: "EPC-Focused Team",       desc: "Deep domain knowledge of transmission line erection and stringing." },
]

const stats = [
  { value: "2016", label: "Established" },
  { value: "122+", label: "Products" },
  { value: "48",   label: "Categories" },
  { value: "500+", label: "Projects" },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const } }),
}

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" ref={ref} className="relative bg-gray-100 py-12 sm:py-16 lg:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px bg-[#1E3A8A]" />
          <span className="text-[#1E3A8A] text-xs font-bold tracking-[0.2em] uppercase">About Transcom</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="text-center lg:text-left">
            <motion.h2
              custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4 sm:mb-6"
            >
              Built on the Field.<br />
              <span className="text-[#1E3A8A]">Trusted by the Industry.</span>
            </motion.h2>

            <motion.p
              custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-base sm:text-lg text-gray-600 mb-4 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Transcom is a Kolkata-based manufacturer and supplier of specialised power transmission tools, operating since 2016. We serve EPC contractors, state DISCOMs, PGCIL, NTPC, NHPC, and infrastructure companies executing HT/EHV transmission line and substation construction projects.
            </motion.p>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-base text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Our product range spans <span className="text-gray-900 font-semibold">122 SKUs across 48 categories</span> — from stringing winches and hydraulic compressors to conductor accessories, aerial rollers, and safety equipment.
            </motion.p>

            {/* Pillars */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8 text-left">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  custom={i + 3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                  className="flex gap-3 rounded-xl border border-white bg-white p-4 hover:border-blue-200 hover:bg-blue-50/40 transition-colors duration-300 shadow-sm"
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-[#1E3A8A]/10 text-[#1E3A8A] flex items-center justify-center">
                    <p.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-gray-900 text-sm font-bold mb-0.5">{p.title}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              custom={7} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="rounded-full bg-[#0B1C3D] px-7 py-3 text-sm font-bold text-white hover:bg-[#1E3A8A] transition-colors duration-300"
              >
                Get in Touch
              </a>
              <p className="text-gray-400 text-xs leading-relaxed text-left">
                32, Ezra Street, 7th Floor, Room 711,<br />Kolkata – 700 001, West Bengal
              </p>
            </motion.div>
          </div>

          {/* Right — image with decorative elements around it */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            {/* ── Decorative elements outside the image ── */}
            <div className="absolute -top-4 right-16   w-4 h-4 bg-[#1E3A8A] rounded-full" />
            <div className="absolute -top-2 right-6    w-3 h-3 bg-[#93C5FD] rounded-sm rotate-45" />
            <div className="absolute top-8  right-2    w-2 h-10 bg-[#1E3A8A]" />
            <div className="absolute top-20 right-14   w-10 h-2 bg-[#93C5FD]" />
            <div className="absolute -top-4 -left-4    w-8 h-8 bg-[#93C5FD] rounded-lg rotate-45" />
            <div className="absolute top-10 -left-3    w-2 h-8 bg-[#1E3A8A]" />
            <div className="absolute -bottom-4 -right-3 w-6 h-6 bg-[#1E3A8A] rounded-full" />
            <div className="absolute -bottom-2 right-12 w-8 h-2 bg-[#93C5FD]" />
            <div className="absolute bottom-10 -left-4  w-4 h-4 bg-[#93C5FD] rounded-full" />
            <div className="absolute top-1/2  -right-5  w-3 h-16 bg-[#1E3A8A] hidden sm:block" />

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden group shadow-xl shadow-gray-300">
              <img
                src="/images/web/about.webp"
                alt="Transcom Manufacturing"
                className="w-full h-80 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3D]/55 to-transparent" />

              {/* Experience badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-100 px-4 py-3 shadow-lg">
                <div className="text-[#1E3A8A] font-black text-3xl leading-none">10<span className="text-xl">+</span></div>
                <div className="text-gray-500 text-xs leading-tight">Years of<br /><span className="font-bold text-gray-900">Industry Experience</span></div>
              </div>
            </div>

            {/* Stats row below image */}
            <div className="grid grid-cols-4 divide-x divide-gray-200 rounded-2xl border border-gray-200 bg-white mt-4 overflow-hidden shadow-sm">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center py-4 px-2">
                  <span className="text-[#0B1C3D] font-black text-xl leading-none">{s.value}</span>
                  <span className="text-gray-400 text-[11px] mt-1 text-center">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
