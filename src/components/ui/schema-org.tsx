/**
 * SchemaOrg — injects Organization + LocalBusiness JSON-LD on every page.
 * Drop <SchemaOrg /> inside any page's return, after <Helmet>.
 * Crawlers (Google, Perplexity, GPT-Bot) parse this even when JS is slow.
 */
export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.transcomtools.com/#organization',
        name: 'Transcom',
        legalName: 'Transcom',
        url: 'https://www.transcomtools.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.transcomtools.com/images/logo.webp',
        },
        foundingDate: '2016',
        founders: [{ '@type': 'Person', name: 'Ankur Jain' }],
        description:
          'Kolkata-based manufacturer of power transmission tools, stringing equipment, hydraulic compressors, winches, come along clamps, and OPGW accessories. Supplying EPC contractors and utilities Pan-India and export markets since 2016.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '32 Ezra Street, 7th Floor, Room 711',
          addressLocality: 'Kolkata',
          addressRegion: 'West Bengal',
          postalCode: '700001',
          addressCountry: 'IN',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+91-99030-16609',
            contactType: 'sales',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi'],
          },
          {
            '@type': 'ContactPoint',
            telephone: '+91-99030-16609',
            contactType: 'customer service',
            contactOption: 'TollFree',
          },
        ],
        email: 'atijain711@gmail.com',
        vatID: '19AALFT3457H1ZQ',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 50 },
        knowsAbout: [
          'Power Transmission Tools',
          'Stringing Equipment',
          'Hydraulic Compressors',
          'Come Along Clamps',
          'Winches',
          'OPGW Accessories',
          'Conductor Accessories',
          'Substation Fittings',
          'Transmission Line Hardware',
        ],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', name: 'NABL Accredited In-House Testing Lab' },
          { '@type': 'EducationalOccupationalCredential', name: 'CPRI Type Tested' },
          { '@type': 'EducationalOccupationalCredential', name: 'ERDA Tested' },
          { '@type': 'EducationalOccupationalCredential', name: 'PGCIL Approved Vendor' },
          { '@type': 'EducationalOccupationalCredential', name: 'CORE / RDSO Approved — 200+ Items' },
          { '@type': 'EducationalOccupationalCredential', name: 'IS / IEC Compliant' },
        ],
        sameAs: [
          'https://wa.me/919903016609',
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.transcomtools.com/#localbusiness',
        name: 'Transcom',
        image: 'https://www.transcomtools.com/images/web/about-us-header.webp',
        url: 'https://www.transcomtools.com',
        telephone: '+91-99030-16609',
        email: 'atijain711@gmail.com',
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Bank Transfer, Cheque',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:30',
          closes: '18:30',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '32 Ezra Street, 7th Floor, Room 711',
          addressLocality: 'Kolkata',
          addressRegion: 'West Bengal',
          postalCode: '700001',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 22.5726,
          longitude: 88.3487,
        },
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'AdministrativeArea', name: 'West Bengal' },
          { '@type': 'AdministrativeArea', name: 'Pan-India' },
        ],
        servesCuisine: undefined,
        hasMap: 'https://maps.google.com/?q=32+Ezra+Street+Kolkata',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
