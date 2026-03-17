export default function SchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Dr. Priyadarshini Ghosh',
    description: 'Gynecologist and Infertility Specialist',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'L23 Kalkaji',
      addressLocality: 'New Delhi',
      postalCode: '110019',
      addressCountry: 'IN',
    },
    priceRange: '$$',
    medicalSpecialty: [
      'Obstetrics',
      'Gynecology',
      'Infertility',
    ],
    knowsLanguage: [
      'en',
      'hi',
      'bn',
    ],
    sameAs: [
      'https://www.google.com/maps/place/Kalkaji,+New+Delhi',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medical Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Infertility Treatment',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'High-Risk Pregnancy Management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Laparoscopic Gynecology',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
