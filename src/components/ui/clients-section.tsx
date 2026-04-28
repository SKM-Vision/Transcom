import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { motion } from 'framer-motion'

const clients = [
  { name: 'Adani',       logo: '/images/clients/adani.webp' },
  { name: 'KEC International', logo: '/images/clients/kec.webp' },
  { name: 'Powergrid',   logo: '/images/clients/powergrid.svg' },
  { name: 'Tata Projects', logo: '/images/clients/tata-projects.webp' },
  { name: 'MEIL',        logo: '/images/clients/meil.webp' },
  { name: 'NCC',         logo: '/images/clients/ncc.webp' },
]

export default function ClientsSection() {
  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
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
          <p className="mt-5 text-gray-500 text-base max-w-xl mx-auto">
            Proudly supplying equipment to India's most respected infrastructure and power companies.
          </p>
        </motion.div>

        {/* CSS marquee */}
        <div className="relative overflow-hidden h-28" style={{ contain: 'layout style' }}>
          <div className="flex w-max animate-marquee items-center h-full gap-16">
            {[...clients, ...clients].map((client, i) => (
              <div key={i} className="flex items-center justify-center h-16 px-4 flex-shrink-0">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full max-w-[160px] object-contain"
                />
              </div>
            ))}
          </div>

          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-32"
            direction="left"
            blurIntensity={0.6}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-32"
            direction="right"
            blurIntensity={0.6}
          />
        </div>

        {/* Divider stat bar */}
        <motion.div
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { value: '6+', label: 'Major Clients' },
            { value: '122+', label: 'Products Supplied' },
            { value: '48+', label: 'Categories' },
            { value: '9+', label: 'Years of Trust' },
          ].map((stat, i) => (
            <div key={i} className="bg-white py-8 text-center">
              <p className="text-3xl font-bold text-[#0B1C3D]">
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
