import { motion } from 'framer-motion'
import { ArrowRight, Clock, Calendar } from 'lucide-react'

const blogs = [
  {
    slug: 'transmission-line-hardware',
    image: '/images/blogs/blog-1.webp',
    category: 'Transmission Line',
    date: 'April 9, 2026',
    readTime: '5 min read',
    title: 'Understanding Hardware Fittings for HV Transmission Lines up to 765kV',
    excerpt:
      'From suspension clamps to strain hardware, we break down the critical fittings used across 33kV to 765kV transmission corridors — and what makes each component essential for long-term line performance.',
  },
  {
    slug: 'nabl-testing',
    image: '/images/blogs/blog-2.webp',
    category: 'Quality & Testing',
    date: 'March 2026',
    readTime: '4 min read',
    title: 'Why NABL-Accredited Type Testing Matters for Transmission Hardware',
    excerpt:
      "Type testing at CPRI, ERDA, and NSIC isn't just a compliance checkbox — it directly impacts the safety and longevity of your transmission line. Here's what to look for when evaluating a hardware supplier.",
  },
  {
    slug: 'substation-fittings',
    image: '/images/blogs/blog-3.webp',
    category: 'Substation & OPGW',
    date: 'February 2026',
    readTime: '6 min read',
    title: 'Substation Fittings & OPGW Accessories — A Complete Procurement Guide',
    excerpt:
      'Procuring substation hardware and OPGW accessories for EPC projects involves navigating dozens of specifications. This guide covers IS/IEC standards, approved vendor requirements, and what to specify.',
  },
]

export default function BlogSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-2">
              Insights & Updates
            </p>
            <h2 className="text-4xl font-bold text-[#0B1C3D]">From Our Blog</h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-blue-700" />
          </motion.div>
          <a
            href="/blog"
            className="flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-[#0B1C3D] transition-colors group"
          >
            View All Posts
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-blue-700 px-3 py-1 text-xs font-bold text-white">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} /> {blog.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {blog.readTime}
                  </span>
                </div>

                <h3 className="mb-3 text-base font-bold leading-snug text-[#0B1C3D] group-hover:text-blue-700 transition-colors">
                  {blog.title}
                </h3>

                <p className="flex-1 text-sm leading-relaxed text-gray-500">
                  {blog.excerpt}
                </p>

                <a
                  href={`/blog/${blog.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
