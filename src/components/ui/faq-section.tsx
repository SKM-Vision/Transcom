import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Mail, MessageCircle } from 'lucide-react'

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "We supply both single-unit and bulk orders. There is no fixed MOQ for most products — we cater to individual site requirements as well as large EPC project orders. Contact us with your requirement and we'll confirm availability and pricing.",
  },
  {
    q: "Do you manufacture or only supply / wholesale?",
    a: "Transcom is primarily a manufacturer and wholesaler. We manufacture a core range of stringing tools, conductor accessories, and hardware fittings at our Kolkata facility. We also source and supply complementary products from trusted vendors to complete your project requirements.",
  },
  {
    q: "Can you supply products with custom specifications or OEM branding?",
    a: "Yes. We accept custom OEM orders for most product categories. Share your drawings, load ratings, or IS/IEC standards and our team will confirm feasibility and lead time. OEM minimum quantities apply for certain product types.",
  },
  {
    q: "Do you export? What are the shipping terms?",
    a: "Yes, we are export-ready on FOB Kolkata terms. We have supplied to projects in neighbouring countries and can assist with commercial invoice, packing list, and certificate of origin documentation for international shipments.",
  },
  {
    q: "How quickly can you dispatch after an order is confirmed?",
    a: "Standard catalogue products are typically dispatched within 3–7 working days from order confirmation and advance payment. Custom or high-volume orders may require 2–4 weeks depending on specifications. We will confirm lead time at the time of quotation.",
  },
  {
    q: "Are your products compliant with IS / IEC standards?",
    a: "Yes. Our products comply with relevant Bureau of Indian Standards (IS 2121, IS 2629, IS 4759) and IEC standards (IEC 61284, IEC 61089). We also operate under an ISO 9001:2015 quality management system, and key testing is conducted through NABL-accredited laboratories.",
  },
  {
    q: "How do I get a quote?",
    a: "You can request a quote by filling the enquiry form on our Contact page, sending an email to atijain711@gmail.com, or WhatsApping us directly at +91 99030 16609. Share your product name, quantity, and delivery location and we'll respond within one business day.",
  },
]

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_2fr] lg:gap-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 self-start"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">
              Got Questions?
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#0B1C3D]">
              Frequently<br />
              <span className="text-blue-700">Asked Questions</span>
            </h2>
            <div className="mt-5 h-1 w-14 rounded-full bg-blue-700" />
            <p className="mt-6 text-sm leading-relaxed text-gray-500">
              Can't find what you're looking for? Reach us directly — we respond within one business day.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href="mailto:atijain711@gmail.com"
                className="inline-flex items-center gap-2.5 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 hover:border-blue-400 hover:text-blue-700 transition-colors"
              >
                <Mail size={15} className="text-blue-600" />
                atijain711@gmail.com
              </a>
              <a
                href="https://wa.me/919903016609"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 hover:border-emerald-400 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <dl className="divide-y divide-gray-100">
              {faqs.map((faq, i) => {
                const isOpen = openIdx === i
                return (
                  <div key={i} className="py-5">
                    <dt>
                      <button
                        type="button"
                        onClick={() => setOpenIdx(isOpen ? null : i)}
                        className="flex w-full items-start justify-between gap-4 text-left group"
                        aria-expanded={isOpen}
                      >
                        <span className={`text-sm font-semibold leading-snug sm:text-base transition-colors ${isOpen ? 'text-blue-700' : 'text-[#0B1C3D] group-hover:text-blue-700'}`}>
                          {faq.q}
                        </span>
                        <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-blue-700 bg-blue-700 text-white' : 'border-gray-200 text-gray-400 group-hover:border-blue-400 group-hover:text-blue-600'}`}>
                          <Plus
                            size={13}
                            strokeWidth={2.5}
                            className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                          />
                        </span>
                      </button>
                    </dt>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.dd
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 text-sm leading-relaxed text-gray-500">
                            {faq.a}
                          </p>
                        </motion.dd>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </dl>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
