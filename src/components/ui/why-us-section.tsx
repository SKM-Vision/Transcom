'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const acronym = [
  { letter: 'T', word: 'rusted',       desc: 'Trusted by India\'s leading power infrastructure companies — Adani, KEC, Powergrid, Tata & more.' },
  { letter: 'R', word: 'eliable',      desc: 'Reliable tools that perform under the most demanding transmission and stringing field conditions.' },
  { letter: 'A', word: 'gile',         desc: 'Agile operations ensuring fast sourcing, packing and delivery directly to your project sites.' },
  { letter: 'N', word: 'ationwide',    desc: 'Nationwide supply network reaching clients across every region of India without delays.' },
  { letter: 'S', word: 'pecialized',   desc: 'Specialized exclusively in transmission & power stringing equipment — focused expertise, better outcomes.' },
  { letter: 'C', word: 'ertified',     desc: 'Certified products that meet industry safety and quality standards for critical infrastructure projects.' },
  { letter: 'O', word: 'n-time',       desc: 'On-time delivery commitment so your project schedules are never held back by equipment delays.' },
  { letter: 'M', word: 'eticulous',    desc: 'Meticulous quality checks on every product before dispatch — zero compromise on accuracy.' },
]

export default function WhyUsSection() {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* LEFT */}
          <motion.div
            className="lg:w-[40%] lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-blue-700 text-xs font-semibold tracking-widest uppercase">Why Choose Us</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1C3D] leading-tight mb-6">
              Our name defines<br />
              <span className="text-blue-700">our commitment</span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              At Transcom, we don't just supply equipment — we build partnerships grounded in quality,
              precision, and reliability. Every letter of our name stands for a promise we keep on
              every single project.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mb-10">
              <div>
                <p className="text-3xl font-bold text-[#0B1C3D]">122<span className="text-blue-600">+</span></p>
                <p className="text-gray-500 text-sm mt-0.5">Products</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-[#0B1C3D]">48<span className="text-blue-600">+</span></p>
                <p className="text-gray-500 text-sm mt-0.5">Categories</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-[#0B1C3D]">9<span className="text-blue-600">+</span></p>
                <p className="text-gray-500 text-sm mt-0.5">Years</p>
              </div>
            </div>

            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-[#0B1C3D] hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors group"
            >
              Learn More
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* RIGHT — TRANSCOM acronym list */}
          <div className="lg:w-[60%]">
            {acronym.map((item, i) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <div className="flex items-start gap-5 py-5 group cursor-default">
                  {/* Letter block */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-[#0B1C3D] transition-colors duration-300">
                    <span className="text-2xl font-black text-blue-600 group-hover:text-white transition-colors duration-300">
                      {item.letter}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-[#0B1C3D] mb-1">
                      <span className="text-blue-600">{item.letter}</span>{item.word}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {i < acronym.length - 1 && (
                  <div className="h-px bg-gray-200 ml-17" />
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
