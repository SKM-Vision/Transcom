import { motion } from 'framer-motion'
import { Mail, MessageCircle, ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/web/cta-background.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0B1C3D]/75 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36">
        <motion.div
          className="flex flex-col items-center gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Ready to Source?
          </span>

          {/* Heading */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Get the Right Tool for<br className="hidden sm:block" />
              <span className="text-blue-300"> Your Next Project</span>
            </h2>
            <p className="mt-5 text-gray-300 text-base leading-relaxed max-w-xl mx-auto">
              From stringing blocks to diesel winches — we supply EPC contractors and utilities
              with 122+ specialised tools. Quick quotes, pan-India delivery, export ready.
            </p>
          </div>

          {/* Stat pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {['122+ Products', '48+ Categories', 'Pan-India Delivery', 'Export Ready'].map(tag => (
              <span key={tag} className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all group"
            >
              <Mail size={15} />
              Send an Enquiry
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919903016609?text=Hi%2C%20I%20need%20a%20quote%20for%20transmission%20tools."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/50 hover:border-white hover:bg-white hover:text-[#0B1C3D] px-8 py-3.5 text-sm font-bold text-white transition-all"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
