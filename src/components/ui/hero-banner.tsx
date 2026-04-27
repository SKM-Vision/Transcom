import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    image: "/images/banner/b1.webp",
    heading: "Power Tools Built\nfor India's Grid.",
    sub: "122+ specialised power transmission tools — stringing winches, hydraulic compressors, come-along clamps & aerial rollers. Trusted by EPC contractors and DISCOMs across India.",
  },
  {
    image: "/images/banner/b2.webp",
    heading: "Engineered for\nthe Toughest Sites.",
    sub: "From OPGW stringing to substation construction — every tool built to perform under high-voltage field conditions.",
  },
  {
    image: "/images/banner/b3.webp",
    heading: "Precision Tools.\nGlobal Reach.",
    sub: "Serving EPC contractors, state DISCOMs, PGCIL and infrastructure companies across India and African markets.",
  },
  {
    image: "/images/banner/b4.webp",
    heading: "Railway Grade\nSwitch Clamps.",
    sub: "Precision-engineered switch clamps and railway transmission tools designed for high-load infrastructure projects.",
  },
  {
    image: "/images/banner/b5.webp",
    heading: "Safety First\non Every Site.",
    sub: "Complete range of safety equipment — helmets, belts, shoes, rope lines and protective gear for high-voltage transmission sites.",
  },
]

const clients = [
  { src: "/images/clients/adani.webp",          fallback: "AD" },
  { src: "/images/clients/kec.webp",            fallback: "KE" },
  { src: "/images/clients/powergrid.svg",      fallback: "PG" },
  { src: "/images/clients/tata-projects.webp", fallback: "TA" },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setCurrent(p => (p - 1 + slides.length) % slides.length)
  const next = () => setCurrent(p => (p + 1) % slides.length)

  return (
    <section className="relative flex h-screen w-full items-end justify-center overflow-hidden">

      {/* Background with crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />
      </AnimatePresence>

      {/* Overlays — same as reference image */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Prev / Next arrows — exactly like reference */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-md bg-black/50 text-white hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-md bg-black/50 text-white hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 pb-20 md:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between text-left">

          {/* Left — headline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45 }}
              className="max-w-3xl space-y-5"
            >
              <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl whitespace-pre-line">
                {slides[current].heading}
              </h1>

              <p className="max-w-2xl text-lg font-light leading-relaxed text-white/90">
                {slides[current].sub}
              </p>

              {/* Slide dots */}
              <div className="flex items-center gap-2 pt-1">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current ? "h-2 w-8 bg-white" : "h-2 w-2 bg-white/35 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right — avatars + CTAs */}
          <div className="mt-auto space-y-6">

            {/* Client avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {clients.map((c) => (
                  <Avatar key={c.fallback} className="size-12 border-2 border-white/80 bg-[#0B1C3D]">
                    <AvatarImage src={c.src} alt={c.fallback} className="object-contain p-1.5" />
                    <AvatarFallback>{c.fallback}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex flex-col text-sm">
                <span className="text-base font-bold text-white sm:text-lg">500+ Projects</span>
                <span className="text-white/65">Supplied across India</span>
              </div>
            </div>

            {/* CTAs — 21st.dev pill-arrow style, white like reference */}
            <div className="flex w-fit flex-wrap gap-4">

              <Button
                variant="transparent"
                className="group flex cursor-pointer items-center justify-center gap-0 rounded-full px-0 py-0"
              >
                <span className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black duration-500 ease-in-out group-hover:bg-[#F47B20] group-hover:text-white">
                  Request a Quote
                </span>
                <div className="relative flex h-fit items-center overflow-hidden rounded-full bg-white p-4 text-black duration-500 ease-in-out group-hover:bg-[#F47B20] group-hover:text-white">
                  <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                  <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
                </div>
              </Button>

              <Button
                variant="transparent"
                className="group flex cursor-pointer items-center justify-center gap-0 rounded-full px-0 py-0"
              >
                <span className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white duration-500 ease-in-out group-hover:border-white group-hover:bg-white/10">
                  View Products
                </span>
                <div className="relative flex h-fit items-center overflow-hidden rounded-full border border-white/50 p-4 text-white duration-500 ease-in-out group-hover:border-white group-hover:bg-white/10">
                  <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                  <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
                </div>
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
