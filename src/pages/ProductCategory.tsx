import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SchemaOrg from '@/components/ui/schema-org'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import WhatsAppButton from '@/components/ui/whatsapp-button'

const categories = [
  {
    name: 'Transmission Tools',
    slug: 'transmission-tools',
    image: '/images/products/transmission-tools.webp',
    products: ['Conductors Head Board', '4-5 Bundled Conductor Head Boards', '6-7 Bundled Conductor Head Boards', 'Hex Bundle Conductor Head Board'],
  },
  {
    name: 'Hydraulic Compressor',
    slug: 'hydraulic-compressor',
    image: '/images/products/hydraulic-compressor.webp',
    products: ['Motorized Hydraulic Compressor', 'Hydraulic Compressor Joint Machine', 'Jointing ACSR Conductors Hydraulic Compressor', 'Hydraulic Compressor (Model A)', 'Hydraulic Compressor (Model B)'],
  },
  {
    name: 'Winches',
    slug: 'winches',
    image: '/images/products/winches.webp',
    products: ['Industrial Power Winch', 'Cable Conductor Pulling Winch', 'Diesel Pulling Winch', 'Manual Sag Winch', 'OPGW Motorized Winch'],
  },
  {
    name: 'Pulleys',
    slug: 'pulleys',
    image: '/images/products/pulleys.webp',
    products: ['Aluminium Stringing Blocks', 'Close Type Single Sheave Pulley', 'Earthwire Pulley', 'Heavy Drum Rotator', 'Pivot Wire Reel'],
  },
  {
    name: 'Cable Roller',
    slug: 'cable-roller',
    image: '/images/products/cable-roller.webp',
    products: ['Bridge Cable Roller', 'Heavy Duty Suspension Roller', 'Manhole Cable Roller', 'Triple Corner Roller'],
  },
  {
    name: 'Double Aerial Roller',
    slug: 'double-aerial-roller',
    image: '/images/products/aerial-roller.webp',
    products: ['Seven Sheave Aerial Roller', 'Six Sheave Aerial Roller', 'Three Sheave Aerial Roller', 'Single Aerial Roller', 'OPGW Tools'],
  },
  {
    name: 'Come Along Clamps',
    slug: 'come-along-clamps',
    image: '/images/products/come-along-clamps.webp',
    products: ['Bolted Type Come Along Clamps', 'Automatic Clamp for OPGW', 'Earth Wire Bolted Clamp', 'Come Along Clamp Seven Bolted', 'Self Gripping Clamp'],
  },
  {
    name: 'Conductor Accessories',
    slug: 'conductor-accessories',
    image: '/images/products/conductor-accessories.webp',
    products: ['Bundle Spacer for Twin Conductors', 'Mid Span Compression Joints', 'Quad Conductors Double Tension Hardware', 'Rigid Spacer', 'Spiral Vibration Damper'],
  },
  {
    name: 'Hardware Fitting',
    slug: 'hardware-fitting',
    image: '/images/products/hardware-fitting.webp',
    products: ['D-Shackles', 'Guy Grips with Ties', 'HT and LT Stay Sets', 'Strain Hardware Fittings', 'Suspension Hardware Fittings'],
  },
  {
    name: 'Chain & Pulley Blocks',
    slug: 'chain-pulley-blocks',
    image: '/images/products/chain-pulley-blocks.webp',
    products: ['Four Sheave Pulley Block', 'Close Type Snatch Blocks', 'Hanging Pulley', 'Open Type Single Sheave Pulley', 'Single Sheave Running Out Pulley Block', 'Wire Rope Pulley Block'],
  },
  {
    name: 'Safety Items',
    slug: 'safety-items',
    image: '/images/products/safety-items.webp',
    products: ['Safety Helmet', 'Safety Belts', 'Safety Clamps', 'Safety Shoes', 'Karam Twisted Rope Anchorage Line'],
  },
  {
    name: 'Others',
    slug: 'others',
    image: '/images/products/others.webp',
    products: ['Hydraulic Cable Cutter', 'Bimetallic Lug', 'Cable Wire Lug', 'Chain Pulley Block', 'Chemical Earthing Electrode', 'Earth Discharge Rod', 'Hydraulic Cable Drum Jack', 'OPGW Pilot Rope', 'PP Rope'],
  },
]

const productImages: Record<string, Record<string, string>> = {
  'transmission-tools': {
    'Conductors Head Board': '/images/products/transmission-tools/conductors-head-board.webp',
    '4-5 Bundled Conductor Head Boards': '/images/products/transmission-tools/4-5-bundled-conductor-headboards.webp',
    '6-7 Bundled Conductor Head Boards': '/images/products/transmission-tools/6-7-bundled-conductor-head-boards.webp',
    'Hex Bundle Conductor Head Board': '/images/products/transmission-tools/hex-bundle-conductor-head-board.webp',
  },
  'hydraulic-compressor': {
    'Motorized Hydraulic Compressor': '/images/products/hydraulic-compressor/motorized-hydraulic-compressor-500x500.webp',
    'Hydraulic Compressor Joint Machine': '/images/products/hydraulic-compressor/hydraulic-compressor-joint-machine-motorized-500x500.webp',
    'Jointing ACSR Conductors Hydraulic Compressor': '/images/products/hydraulic-compressor/jointing-acsr-conductors-hydraulic-compressors-125x125.webp',
    'Hydraulic Compressor (Model A)': '/images/products/hydraulic-compressor/whatsapp-image-2026-01-31-at-12-39-02-pm-500x500.webp',
    'Hydraulic Compressor (Model B)': '/images/products/hydraulic-compressor/whatsapp-image-2026-02-02-at-1-23-03-pm-500x500.webp',
  },
  'winches': {
    'Industrial Power Winch': '/images/products/winches/industrial-power-winches.webp',
    'Cable Conductor Pulling Winch': '/images/products/winches/cable-conductor-pulling-winch-cap.webp',
    'Diesel Pulling Winch': '/images/products/winches/diesel-pulling-winch.webp',
    'Manual Sag Winch': '/images/products/winches/Manual Sag winch.webp',
    'OPGW Motorized Winch': '/images/products/winches/OPGW Motorized winch.webp',
  },
  'pulleys': {
    'Aluminium Stringing Blocks': '/images/products/pulleys/aluminium-stringing-blocks.webp',
    'Close Type Single Sheave Pulley': '/images/products/pulleys/close-type-single-sheave-pulley-.webp',
    'Earthwire Pulley': '/images/products/pulleys/earthwire-pulley.webp',
    'Heavy Drum Rotator': '/images/products/pulleys/heavy-drum-rotator.webp',
    'Pivot Wire Reel': '/images/products/pulleys/pivot-wire-reel.webp',
  },
  'cable-roller': {
    'Bridge Cable Roller': '/images/products/cable-roller/bridge-cable-roller.webp',
    'Heavy Duty Suspension Roller': '/images/products/cable-roller/heavy-duty-suspension-roller.webp',
    'Manhole Cable Roller': '/images/products/cable-roller/manhole-cable-roller-for-manhole-cable-laying-work.webp',
    'Triple Corner Roller': '/images/products/cable-roller/triple-corner-roller.webp',
  },
  'double-aerial-roller': {
    'Seven Sheave Aerial Roller': '/images/products/double-aerial-roller/seven-sheave-aerial-roller.webp',
    'Six Sheave Aerial Roller': '/images/products/double-aerial-roller/six-sheave-aerial-roller.webp',
    'Three Sheave Aerial Roller': '/images/products/double-aerial-roller/Three-sheave.webp',
    'Single Aerial Roller': '/images/products/double-aerial-roller/single-aerial.webp',
    'OPGW Tools': '/images/products/double-aerial-roller/opgw-tools.webp',
  },
  'come-along-clamps': {
    'Bolted Type Come Along Clamps': '/images/products/come-along-clamps/bolted-type-come-along-clamps.webp',
    'Automatic Clamp for OPGW': '/images/products/come-along-clamps/Automatic Clamp for opgw.webp',
    'Earth Wire Bolted Clamp': '/images/products/come-along-clamps/Earth Wire Bolted.webp',
    'Come Along Clamp Seven Bolted': '/images/products/come-along-clamps/come-along-clamp-seven-bolted.webp',
    'Self Gripping Clamp': '/images/products/come-along-clamps/self-gripping-clamp-.webp',
  },
  'conductor-accessories': {
    'Bundle Spacer for Twin Conductors': '/images/products/conductor-accessories/bundle-spacer-for-twin-conductors.webp',
    'Mid Span Compression Joints': '/images/products/conductor-accessories/mid-span-compression-joints.webp',
    'Quad Conductors Double Tension Hardware': '/images/products/conductor-accessories/quad-conductors-double-tension-hardware-string.webp',
    'Rigid Spacer': '/images/products/conductor-accessories/rigid-spacer.webp',
    'Spiral Vibration Damper': '/images/products/conductor-accessories/spiral-vibration-damper.webp',
  },
  'hardware-fitting': {
    'D-Shackles': '/images/products/hardware-fitting/d-shackles.webp',
    'Guy Grips with Ties': '/images/products/hardware-fitting/guy-grips-with-ties.webp',
    'HT and LT Stay Sets': '/images/products/hardware-fitting/ht-and-lt-stay-sets.webp',
    'Strain Hardware Fittings': '/images/products/hardware-fitting/strain-hardware-fittings.webp',
    'Suspension Hardware Fittings': '/images/products/hardware-fitting/suspension-hardware-fittings.webp',
  },
  'chain-pulley-blocks': {
    'Four Sheave Pulley Block': '/images/products/chain-pulley-blocks/four-sheave.webp',
    'Close Type Snatch Blocks': '/images/products/chain-pulley-blocks/close-type-snatch-blocks-500x500-500x500.webp',
    'Hanging Pulley': '/images/products/chain-pulley-blocks/hanging-pulley-500x500-500x500.webp',
    'Open Type Single Sheave Pulley': '/images/products/chain-pulley-blocks/open type single sheave pulley.webp',
    'Single Sheave Running Out Pulley Block': '/images/products/chain-pulley-blocks/single-sheave-running-out-pulley-block-500x500.webp',
    'Wire Rope Pulley Block': '/images/products/chain-pulley-blocks/wire-rope-pulley-block-500x500.webp',
  },
  'safety-items': {
    'Safety Helmet': '/images/products/safety-items/Helmet.webp',
    'Safety Belts': '/images/products/safety-items/Belts.webp',
    'Safety Clamps': '/images/products/safety-items/Safety-Clmaps.webp',
    'Safety Shoes': '/images/products/safety-items/Shoe.webp',
    'Karam Twisted Rope Anchorage Line': '/images/products/safety-items/karam-twisted-rope-anchorage-line.webp',
  },
  'others': {
    'Hydraulic Cable Cutter': '/images/products/others/Hydraulic-cable-cutter.webp',
    'Bimetallic Lug': '/images/products/others/bimetallic-lug.webp',
    'Cable Wire Lug': '/images/products/others/cable-wire-lug.webp',
    'Chain Pulley Block': '/images/products/others/chain-pulley-block.webp',
    'Chemical Earthing Electrode': '/images/products/others/chemical-earthing-electrode.webp',
    'Earth Discharge Rod': '/images/products/others/earth-discharge-rod.webp',
    'Hydraulic Cable Drum Jack': '/images/products/others/hydraulic-cable-drum-jack.webp',
    'OPGW Pilot Rope': '/images/products/others/opgw-pilot-rope.webp',
    'PP Rope': '/images/products/others/pp-rope-dealer.webp',
  },
}

export default function ProductCategory() {
  const { slug } = useParams<{ slug: string }>()
  const category = categories.find(c => c.slug === slug)

  if (!category) {
    return (
      <div>
        <Navbar />
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-700">Category not found</p>
            <Link to="/products" className="mt-4 inline-block text-blue-500 hover:underline">Back to Products</Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const imgMap = productImages[category.slug] ?? {}

  const pageUrl = `https://www.transcomtools.com/products/${category.slug}`
  const metaDesc = `Buy ${category.name} from Transcom — leading manufacturer in Kolkata. Products include ${category.products.slice(0, 3).join(', ')} and more. IS/IEC compliant. Pan-India supply, export ready.`

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://www.transcomtools.com/' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.transcomtools.com/products' },
      { '@type': 'ListItem', position: 3, name: category.name, item: pageUrl },
    ],
  }

  const productListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${category.name} — Transcom`,
    description: metaDesc,
    url: pageUrl,
    numberOfItems: category.products.length,
    itemListElement: category.products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: p,
        brand: { '@type': 'Brand', name: 'Transcom' },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          areaServed: 'IN',
          seller: { '@type': 'Organization', name: 'Transcom' },
        },
      },
    })),
  }

  return (
    <div>
      <Helmet>
        <title>{category.name} — Transcom | Power Transmission Tools Manufacturer</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={`${category.name.toLowerCase()}, ${category.products.slice(0, 4).join(', ').toLowerCase()}, transmission tools India, Kolkata manufacturer`} />
        <meta property="og:title" content={`${category.name} — Transcom`} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`https://www.transcomtools.com${category.image}`} />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productListSchema)}</script>
      </Helmet>
      <SchemaOrg />
      <Navbar />

      {/* Banner */}
      <section
        className="relative w-full overflow-hidden mt-[72px]"
        style={{
          height: '300px',
          backgroundImage: "url('/images/web/product-header.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-[#0D2B45]/65" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060E1E]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center pt-16 text-center px-6">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center justify-center gap-2 text-xs font-medium text-white/70">
              <li><Link to="/" className="transition-colors hover:text-blue-400">Home</Link></li>
              <li aria-hidden="true">
                <svg className="h-3 w-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li><Link to="/products" className="transition-colors hover:text-blue-400">Products</Link></li>
              <li aria-hidden="true">
                <svg className="h-3 w-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-blue-400 font-semibold" aria-current="page">{category.name}</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-extrabold uppercase tracking-widest text-white drop-shadow-lg md:text-4xl lg:text-5xl">
            {category.name}
          </h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-blue-500" />
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
            {category.products.length} Product{category.products.length > 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">

          <Link
            to="/products"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-500"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Products
          </Link>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {category.products.map(productName => {
              const img = imgMap[productName] ?? category.image
              return (
                <div
                  key={productName}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="overflow-hidden bg-slate-50">
                    <img
                      src={img}
                      alt={productName}
                      className="h-36 w-full object-contain p-3 transition duration-300 group-hover:scale-105 sm:h-44 lg:h-56 lg:p-4"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-3 p-3 lg:p-5">
                    <h3 className="text-center text-sm font-bold text-slate-800 lg:text-base">
                      {productName}
                    </h3>
                    <a
                      href="https://wa.me/919903016609"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full rounded-lg bg-[#0B1C3D] py-2 text-center text-xs font-semibold text-white transition hover:bg-blue-700 active:scale-95 sm:py-2.5 sm:text-sm"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
