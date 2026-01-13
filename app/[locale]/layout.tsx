import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import IntercomProvider from "@/components/intercom-provider"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const titles: Record<string, string> = {
    es: "GOAT Sports - Entrenamiento y Academia de Hockey sobre Césped, Fútbol y Rugby",
    en: "GOAT Sports - Field Hockey, Football and Rugby Training Academy",
  }

  const descriptions: Record<string, string> = {
    es: "Academia deportiva especializada en hockey sobre césped, fútbol y rugby. Ofrecemos entrenamiento personalizado, campus deportivos y servicios de consultoría para clubes y colegios en Buenos Aires, Argentina.",
    en: "Sports academy specializing in field hockey, football, and rugby. We offer personalized training, sports camps, and consulting services for clubs and schools in Buenos Aires, Argentina.",
  }

  const ogTitles: Record<string, string> = {
    es: "GOAT Sports - Academia Deportiva de Elite",
    en: "GOAT Sports - Elite Sports Academy",
  }

  const ogDescriptions: Record<string, string> = {
    es: "Entrenamiento experto de hockey sobre césped, fútbol y rugby. Formación personalizada y programas inmersivos para elevar tus habilidades al siguiente nivel.",
    en: "Expert field hockey, football, and rugby training. Personalized coaching and immersive programs to take your skills to the next level.",
  }

  return {
    title: titles[locale] || titles.es,
    description: descriptions[locale] || descriptions.es,
    keywords: [
      "hockey sobre césped",
      "field hockey",
      "entrenamiento deportivo",
      "sports training",
      "academia de hockey",
      "hockey academy",
      "fútbol",
      "football",
      "rugby",
      "campus deportivo",
      "sports camp",
      "consultoría deportiva",
      "sports consulting",
      "Buenos Aires",
      "Argentina",
    ],
    authors: [{ name: "GOAT Sports" }],
    creator: "GOAT Sports",
    publisher: "GOAT Sports",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://goatsports.ar"),
    alternates: {
      canonical: locale === "es" ? "/" : `/${locale}`,
      languages: {
        "es-AR": "/",
        "en-US": "/en",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [{ url: "/favicon.ico" }],
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_AR" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_AR",
      url: locale === "es" ? "https://goatsports.ar" : `https://goatsports.ar/${locale}`,
      title: ogTitles[locale] || ogTitles.es,
      description: ogDescriptions[locale] || ogDescriptions.es,
      siteName: "GOAT Sports",
      images: [
        {
          url: "https://goatsports.ar/og-image.png",
          width: 1200,
          height: 630,
          alt: "GOAT Sports - Academia Deportiva",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitles[locale] || ogTitles.es,
      description: ogDescriptions[locale] || ogDescriptions.es,
      images: ["https://goatsports.ar/twitter-image.jpg"],
      creator: "@goatsports",
      site: "@goatsports",
    },
    verification: {
      google: "google-site-verification-code",
      yandex: "yandex-verification-code",
      other: {
        me: ["mailto:hola@goatsports.ar", "https://goatsports.ar"],
      },
    },
    generator: "v0.dev",
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  const baseUrl = "https://goatsports.ar"
  const currentUrl = locale === "es" ? baseUrl : `${baseUrl}/${locale}`

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "GOAT Sports",
    alternateName: "GOAT Sports Argentina",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/goat-sports-logo.png`,
      width: 200,
      height: 60,
    },
    image: `${baseUrl}/images/training-center.jpg`,
    description:
      locale === "es"
        ? "Academia deportiva especializada en hockey sobre césped, fútbol y rugby en Buenos Aires, Argentina."
        : "Sports academy specializing in field hockey, football, and rugby in Buenos Aires, Argentina.",
    email: "hola@goatsports.ar",
    telephone: "+54 9 11 2657-8585",
    foundingDate: "2020",
    founders: [
      { "@type": "Person", name: "Santiago Tarazona" },
      { "@type": "Person", name: "Gonzalo Basualdo" },
      { "@type": "Person", name: "Thomas Habif" },
      { "@type": "Person", name: "Ignacio Anaya" },
    ],
    sameAs: [
      "https://www.instagram.com/goatsports.arg",
      "https://www.facebook.com/goatsports",
      "https://www.tiktok.com/@goatsports",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54 9 11 2657-8585",
      contactType: locale === "es" ? "Atención al cliente" : "Customer Service",
      availableLanguage: ["Spanish", "English"],
    },
  }

  // LocalBusiness / SportsClub Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["SportsClub", "LocalBusiness"],
    "@id": `${baseUrl}/#localbusiness`,
    name: "GOAT Sports",
    description:
      locale === "es"
        ? "Centro de entrenamiento de elite para hockey sobre césped, fútbol y rugby."
        : "Elite training center for field hockey, football, and rugby.",
    url: currentUrl,
    logo: `${baseUrl}/images/goat-sports-logo.png`,
    image: [
      `${baseUrl}/images/training-center.jpg`,
      `${baseUrl}/images/staff.jpg`,
      `${baseUrl}/images/campus-coaches-players.jpg`,
    ],
    telephone: "+54 9 11 2657-8585",
    email: "hola@goatsports.ar",
    priceRange: "$$",
    currenciesAccepted: "ARS",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, MercadoPago",
    address: {
      "@type": "PostalAddress",
      streetAddress: "San Martín 1649",
      addressLocality: "Vicente López",
      postalCode: "1638",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.5308,
      longitude: -58.4825,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -34.5308,
        longitude: -58.4825,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "es" ? "Servicios GOAT Sports" : "GOAT Sports Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "es" ? "Entrenamiento Personalizado" : "Personal Training",
            description:
              locale === "es"
                ? "Sesiones individuales adaptadas a tus necesidades específicas"
                : "Individual sessions tailored to your specific needs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "es" ? "Academias de Hockey y Rugby" : "Hockey and Rugby Academies",
            description:
              locale === "es"
                ? "Programa estructurado con sesiones regulares de entrenamiento"
                : "Structured program with regular training sessions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "es" ? "Campus Deportivos" : "Sports Camps",
            description:
              locale === "es"
                ? "Experiencias inmersivas de entrenamiento intensivo"
                : "Immersive intensive training experiences",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "es" ? "Consultoría Deportiva" : "Sports Consulting",
            description:
              locale === "es"
                ? "Asesoramiento para clubes, colegios y comunidades"
                : "Advisory services for clubs, schools, and communities",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  }

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "GOAT Sports",
    url: baseUrl,
    inLanguage: locale === "es" ? "es-AR" : "en-US",
    publisher: { "@id": `${baseUrl}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "es" ? "Inicio" : "Home",
        item: currentUrl,
      },
    ],
  }

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: locale === "es" ? "¿Qué edades atienden en GOAT Sports?" : "What ages do you serve at GOAT Sports?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "es"
              ? "Trabajamos con atletas desde 8 hasta 30 años, adaptando los programas según nivel y objetivos individuales."
              : "We work with athletes from 8 to 30 years old, adapting programs according to individual level and goals.",
        },
      },
      {
        "@type": "Question",
        name: locale === "es" ? "¿Necesito experiencia previa?" : "Do I need prior experience?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "es"
              ? "No, tenemos programas para todos los niveles desde principiantes hasta elite. Nuestros entrenadores adaptan las sesiones a tu nivel actual."
              : "No, we have programs for all levels from beginners to elite. Our coaches adapt sessions to your current level.",
        },
      },
      {
        "@type": "Question",
        name: locale === "es" ? "¿Dónde están ubicados?" : "Where are you located?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "es"
              ? "Nuestro Training Center principal está en Vicente López (San Martín 1649), Buenos Aires, Argentina. Contamos con 2 campos de césped sintético y gimnasio."
              : "Our main Training Center is in Vicente López (San Martín 1649), Buenos Aires, Argentina. We have 2 synthetic turf fields and a gym.",
        },
      },
      {
        "@type": "Question",
        name: locale === "es" ? "¿Ofrecen becas para estudiar en USA?" : "Do you offer scholarships to study in the USA?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "es"
              ? "Sí, en alianza con US Full Ride ayudamos a jugadoras de hockey a obtener becas universitarias de hasta el 100% en Estados Unidos, incluyendo matrícula, alojamiento y comidas."
              : "Yes, in partnership with US Full Ride, we help hockey players obtain university scholarships of up to 100% in the United States, including tuition, accommodation, and meals.",
        },
      },
      {
        "@type": "Question",
        name: locale === "es" ? "¿Cómo me inscribo en un campus?" : "How do I register for a camp?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "es"
              ? "Puedes inscribirte a través de nuestra página web goatsports.ar o contactarnos directamente por WhatsApp al +54 9 11 2657-8585."
              : "You can register through our website goatsports.ar or contact us directly via WhatsApp at +54 9 11 2657-8585.",
        },
      },
    ],
  }

  // Combined structured data
  const structuredData = [organizationSchema, localBusinessSchema, websiteSchema, breadcrumbSchema, faqSchema]

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <link rel="alternate" hrefLang="es" href="https://goatsports.ar/" />
        <link rel="alternate" hrefLang="en" href="https://goatsports.ar/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://goatsports.ar/" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        {/* Apple Web App Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GOAT Sports" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="Vicente López, Buenos Aires" />
        <meta name="geo.position" content="-34.5308;-58.4825" />
        <meta name="ICBM" content="-34.5308, -58.4825" />

        {/* Theme and Color */}
        <meta name="theme-color" content="#00237c" />
        <meta name="msapplication-TileColor" content="#00237c" />
        <meta name="msapplication-navbutton-color" content="#00237c" />

        {/* AI Search Optimization */}
        <meta name="ai-content-declaration" content="This website contains human-created content about GOAT Sports, a sports academy in Buenos Aires, Argentina." />

        {/* Business Contact for Rich Results */}
        <meta name="contact:phone_number" content="+5491126578585" />
        <meta name="contact:email" content="hola@goatsports.ar" />

        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="ec3c0v5mlglmgdoutyxmpl8cogu5tp" />

        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '691387123614857');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=691387123614857&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <Analytics />
            <IntercomProvider />

            {/* Structured Data - Multiple Schemas */}
            {structuredData.map((schema, index) => (
              <script
                key={index}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
              />
            ))}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
