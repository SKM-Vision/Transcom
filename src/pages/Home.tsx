import Navbar from '@/components/ui/navbar'
import HeroBanner from '@/components/ui/hero-banner'
import AboutSection from '@/components/ui/about-section'
import ProductsSection from '@/components/ui/products-section'
import WhyUsSection from '@/components/ui/why-us-section'
import IndustriesSection from '@/components/ui/industries-section'
import ClientsSection from '@/components/ui/clients-section'
import BlogSection from '@/components/ui/blog-section'
import FaqSection from '@/components/ui/faq-section'
import CtaSection from '@/components/ui/cta-section'
import Footer from '@/components/ui/footer'
import WhatsAppButton from '@/components/ui/whatsapp-button'
import { Helmet } from 'react-helmet-async'
import SchemaOrg from '@/components/ui/schema-org'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the minimum order quantity (MOQ) for Transcom products?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no fixed minimum order quantity (MOQ) for most Transcom products. We supply both single-unit and bulk orders to EPC contractors, utilities, and project sites across India.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Transcom manufacture or only supply transmission tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Transcom is primarily a manufacturer and wholesaler of power transmission tools. We manufacture stringing tools, conductor accessories, and hardware fittings at our Kolkata facility, and also source complementary products from trusted vendors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Transcom export transmission tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Transcom is export-ready on FOB Kolkata terms. We have supplied to projects in neighbouring and African countries and can assist with commercial invoice, packing list, and certificate of origin documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly does Transcom dispatch after order confirmation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard catalogue products are dispatched within 3–7 working days from order confirmation and advance payment. Custom or high-volume orders may require 2–4 weeks depending on specifications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Transcom products IS / IEC compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Transcom products comply with IS 2121, IS 2629, IS 4759, IEC 61284, and IEC 61089 standards. Key testing is conducted at NABL-accredited laboratories including CPRI, ERDA, and NSIC.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Transcom supply products with custom specifications or OEM branding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Transcom accepts custom OEM orders for most product categories. Share your drawings, load ratings, or IS/IEC standards and our team will confirm feasibility and lead time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get a quote from Transcom?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can request a quote by filling the enquiry form on our Contact page, emailing atijain711@gmail.com, or WhatsApping +91 99030 16609. We respond within one business day.',
      },
    },
  ],
}

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Transcom — Power Transmission Tools Manufacturer | Kolkata, India</title>
        <meta name="description" content="Transcom is a leading manufacturer of power transmission tools, stringing equipment, hydraulic compressors, winches, and OPGW accessories. Serving EPC contractors and utilities Pan-India. Export ready." />
        <meta name="keywords" content="power transmission tools manufacturer India, stringing equipment supplier Kolkata, EPC contractor tools, OPGW stringing tools, hydraulic compressor joint machine, come along clamps manufacturer, conductor accessories India" />
        <meta property="og:title" content="Transcom — Power Transmission Tools Manufacturer" />
        <meta property="og:description" content="122+ specialised power transmission tools. NABL accredited. Trusted by Adani, KEC, Powergrid, Tata Projects. Pan-India supply. Export ready." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.transcomtools.com/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SchemaOrg />
      <Navbar />
      <HeroBanner />
      <AboutSection />
      <ProductsSection />
      <WhyUsSection />
      <IndustriesSection />
      <ClientsSection />
      <BlogSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
