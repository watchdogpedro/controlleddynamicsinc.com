import Script from 'next/script';

interface StructuredDataProps {
  data: object;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Controlled Dynamics Inc.",
  "alternateName": ["CDI", "Controlled Dynamics"],
  "url": "https://controlleddynamicsinc.com",
  "logo": "https://controlleddynamicsinc.com/AngleLock Logo.png",
  "description": "Leading manufacturer of AngleLock aluminum framing systems - the superior alternative to 80/20, 8020, T-slot, T-Slots, Vention, and Mitech aluminum extrusion systems. Our mechanically locked joints are 10x stronger than friction-based connections used in 80/20 and T-slot systems, offering zero maintenance, vibration resistance, and mission-critical reliability for aerospace, semiconductor, robotics, and precision manufacturing applications. Best choice for engineers replacing 80/20, 8020, Vention, Mitech, or T-slot framing.",
  "slogan": "Engineering Structures Without Limits",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1058 Overland Court",
    "addressLocality": "Grafton",
    "addressRegion": "WI",
    "postalCode": "53024",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-262-421-8840",
    "contactType": "sales",
    "email": "info@controlleddynamicsinc.com",
    "areaServed": "US"
  },
  "sameAs": [
    "https://controlleddynamicsinc.com"
  ],
  "knowsAbout": [
    "Aluminum framing systems",
    "AngleLock technology",
    "80/20 alternatives",
    "8020 alternatives",
    "T-slot alternatives",
    "T-Slots alternatives",
    "Vention alternatives",
    "Mitech alternatives",
    "Modular aluminum extrusion",
    "Industrial structural systems",
    "Precision manufacturing",
    "Vibration-resistant framing"
  ]
};

// Product Schema for AngleLock
export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "AngleLock Aluminum Framing System",
  "alternateName": "AngleLock Modular Framing",
  "brand": {
    "@type": "Brand",
    "name": "Controlled Dynamics Inc."
  },
  "description": "Revolutionary aluminum framing system with mechanically locked joints that are 10x stronger than traditional 80/20, 8020, T-slot, T-Slots, Vention, and Mitech aluminum extrusion systems. Superior alternative for engineers seeking vibration-resistant, zero-maintenance structural framing. Self-tightening joints eliminate the loosening issues common in friction-based systems like 80/20 and T-slot. Ideal replacement for 80/20, 8020, T-slot, Vention, Mitech, and similar modular aluminum framing where higher strength, precision, and reliability are required.",
  "category": "Industrial Equipment",
  "applicationCategory": "Manufacturing Equipment",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "Contact for Quote"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "1"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Engineers seeking alternatives to 80/20, 8020, T-slot, T-Slots, Vention, Mitech, and traditional aluminum extrusion framing systems"
  },
  "isRelatedTo": [
    {
      "@type": "Product",
      "name": "80/20 aluminum extrusion"
    },
    {
      "@type": "Product",
      "name": "8020 aluminum framing"
    },
    {
      "@type": "Product",
      "name": "T-slot aluminum framing"
    },
    {
      "@type": "Product",
      "name": "T-Slots modular framing"
    },
    {
      "@type": "Product",
      "name": "Vention modular automation"
    },
    {
      "@type": "Product",
      "name": "Mitech aluminum extrusion"
    }
  ],
  "isSimilarTo": {
    "@type": "Product",
    "name": "Modular aluminum framing systems"
  }
};

// FAQ Schema Generator
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Article Schema Generator
export function generateArticleSchema(article: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Controlled Dynamics Inc.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://controlleddynamicsinc.com/AngleLock Logo.png"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "image": article.image || "https://controlleddynamicsinc.com/AngleLock Logo.png",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Enhanced Organization Schema with Services
export const enhancedOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Controlled Dynamics Inc.",
  "alternateName": ["CDI", "Controlled Dynamics"],
  "url": "https://controlleddynamicsinc.com",
  "logo": "https://controlleddynamicsinc.com/AngleLock Logo.png",
  "description": "Custom engineering and manufacturing of high-precision motion platforms for semiconductor, medical device, robotics, and industrial automation. Specializing in multi-axis inspection platforms, linear motor gantries, and precision positioning systems built with AngleLock technology.",
  "slogan": "Engineering Structures Without Limits",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1058 Overland Court",
    "addressLocality": "Grafton",
    "addressRegion": "WI",
    "postalCode": "53024",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-262-421-8840",
    "contactType": "sales",
    "email": "info@controlleddynamicsinc.com",
    "areaServed": "US"
  },
  "sameAs": [
    "https://controlleddynamicsinc.com"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Custom Motion Platform Engineering",
        "description": "Design and manufacturing of precision motion platforms including multi-axis inspection systems, linear motor gantries, and robotic positioning platforms"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Wafer Inspection Platforms",
        "description": "Large-scale ultrasonic wafer inspection platforms for semiconductor and solar cell manufacturing with sub-micron accuracy"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "High-Speed Cartesian Robotics Stages",
        "description": "Linear shaft motor XYZ stages for medical device and semiconductor manufacturing with precision motion control"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Robotic Gantry Systems",
        "description": "Linear motor 7th axis gantries for industrial automation with zero maintenance and silent operation"
      }
    }
  ],
  "knowsAbout": [
    "Precision motion platforms",
    "Multi-axis inspection systems",
    "Linear motor technology",
    "Semiconductor manufacturing equipment",
    "Medical device automation",
    "Robotics positioning systems",
    "High-precision gantry systems",
    "AngleLock structural framing",
    "Sub-micron positioning accuracy",
    "Vibration-isolated platforms"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  }
};

// Portfolio ItemList Schema Generator
export function generatePortfolioSchema(projects: Array<{
  id: string;
  title: string;
  industry: string;
  description: string;
  year: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Controlled Dynamics Motion Platform Portfolio",
    "description": "Custom-engineered precision motion platforms for mission-critical applications",
    "numberOfItems": projects.length,
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "@id": `https://controlleddynamicsinc.com/products#${project.id}`,
        "name": project.title,
        "description": project.description,
        "category": project.industry,
        "manufacturer": {
          "@type": "Organization",
          "name": "Controlled Dynamics Inc."
        },
        "releaseDate": project.year,
        "brand": {
          "@type": "Brand",
          "name": "Controlled Dynamics Inc."
        }
      }
    }))
  };
}

// Individual Project Schema Generator
export function generateProjectSchema(project: {
  title: string;
  description: string;
  industry: string;
  keySpecs: string[];
  results: string[];
  year: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": project.title,
    "description": project.description,
    "category": project.industry,
    "manufacturer": {
      "@type": "Organization",
      "name": "Controlled Dynamics Inc."
    },
    "brand": {
      "@type": "Brand",
      "name": "Controlled Dynamics Inc."
    },
    "releaseDate": project.year,
    "additionalProperty": project.keySpecs.map(spec => ({
      "@type": "PropertyValue",
      "name": "Specification",
      "value": spec
    })),
    "review": project.results.map(result => ({
      "@type": "Review",
      "reviewBody": result,
      "author": {
        "@type": "Organization",
        "name": "Controlled Dynamics Inc."
      }
    }))
  };
}
