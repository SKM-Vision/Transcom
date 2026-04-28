import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { motion } from 'framer-motion'

const clients = [
  { name: 'Adani',             logo: '/images/clients/adani.webp' },
  { name: 'KEC International', logo: '/images/clients/kec.webp' },
  { name: 'Powergrid',         logo: '/images/clients/powergrid.svg' },
  { name: 'Tata Projects',     logo: '/images/clients/tata-projects.webp' },
  { name: 'MEIL',              logo: '/images/clients/meil.webp' },
  { name: 'NCC',               logo: '/images/clients/ncc.webp' },
]

export default function ClientsSection() {
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

        {/* Marquee */}
        <div
          className="relative overflow-hidden h-20 md:h-28"
          style={{ contain: 'strict' }}
        >
          <div className="flex w-max animate-marquee items-center h-full gap-8 md:gap-16">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-10 px-3 flex-shrink-0 md:h-16 md:px-4"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full max-w-[100px] object-contain md:max-w-[160px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-16 md:w-32"
            direction="left"
            blurIntensity={0.6}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-16 md:w-32"
            direction="right"
            blurIntensity={0.6}
          />
        </div>

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
