import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "react-router-dom"

const navLinks = [
  { label: "Home",          href: "/" },
  { label: "About Us",      href: "/about" },
  {
    label: "Products",
    href: "/products",
    dropdown: [
      { label: "Chain & Pulley Blocks",    slug: "chain-pulley-blocks" },
      { label: "Hydraulic Compressors",    slug: "hydraulic-compressor" },
      { label: "Pulleys & Stringing Blocks", slug: "pulleys" },
      { label: "Come Along Clamps",        slug: "come-along-clamps" },
      { label: "Winches",                  slug: "winches" },
      { label: "Safety Equipment",         slug: "safety-items" },
      { label: "Aerial Rollers",           slug: "double-aerial-roller" },
      { label: "Transmission Tools",       slug: "transmission-tools" },
      { label: "Conductor Accessories",    slug: "conductor-accessories" },
      { label: "Cable Rollers",            slug: "cable-roller" },
      { label: "Hardware Fittings",        slug: "hardware-fitting" },
    ],
  },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Contact",       href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const location = useLocation()

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Main navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-40 top-0 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md shadow-lg shadow-black/40"
            : ""
        }`}
        style={{
          background: scrolled
            ? 'linear-gradient(135deg, rgba(11,28,61,0.92) 0%, rgba(30,58,138,0.82) 60%, rgba(11,28,61,0.92) 100%)'
            : 'linear-gradient(to bottom, rgba(11,28,61,0.70) 0%, rgba(11,28,61,0.10) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo — all white */}
            <a href="#home" className="flex flex-col leading-none">
              <span className="text-white font-black text-xl tracking-widest">TRANSCOM</span>
              <span className="text-white/60 text-[9px] font-semibold tracking-[0.22em] uppercase">
                Power Transmission Tools
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-white border-b-2 border-blue-400"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className="w-3.5 h-3.5 mt-px" />}
                  </a>

                  <AnimatePresence>
                    {link.dropdown && openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-60 rounded-xl border border-white/10 bg-black/80 backdrop-blur-md shadow-xl shadow-black/40 overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <a
                            key={item.slug}
                            href={`/products/${item.slug}`}
                            className="block border-b border-white/5 px-4 py-2.5 text-sm text-white/70 last:border-0 hover:bg-white/10 hover:text-white transition-colors"
                          >
                            {item.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop CTAs — white theme */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/919903016609"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="#contact"
                className="rounded-full bg-white px-5 py-2 text-xs font-bold text-black hover:bg-white/85 transition-colors"
              >
                Request a Quote
              </a>
            </div>

            {/* Mobile hamburger */}
            <button className="lg:hidden text-white p-1" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="fixed inset-0 z-30 bg-black/90 backdrop-blur-md overflow-y-auto pt-20 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-1 mt-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <>
                      <div className="flex items-center justify-between border-b border-white/10 py-4">
                        <a
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`text-lg font-semibold transition-colors ${isActive(link.href) ? 'text-blue-400' : 'text-white'}`}
                        >
                          {link.label}
                        </a>
                        <button
                          onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                          className="p-1 text-white/50"
                          aria-label="Toggle products menu"
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2">
                              {link.dropdown.map((item) => (
                                <a
                                  key={item.slug}
                                  href={`/products/${item.slug}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2 text-sm text-white/50 hover:text-white transition-colors"
                                >
                                  {item.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block border-b border-white/10 py-4 text-lg font-semibold transition-colors ${
                        isActive(link.href)
                          ? "text-blue-400"
                          : "text-white hover:text-white/70"
                      }`}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="https://wa.me/919903016609"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/30 py-3 text-sm font-semibold text-white"
                >
                  WhatsApp Us
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center rounded-full bg-white py-3 text-sm font-bold text-black"
                >
                  Request a Quote
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
