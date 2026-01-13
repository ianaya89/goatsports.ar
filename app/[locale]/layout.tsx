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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: "GOAT Sports",
    description:
      locale === "es"
        ? "Academia deportiva especializada en hockey sobre césped, fútbol y rugby."
        : "Sports academy specializing in field hockey, football, and rugby.",
    url: locale === "es" ? "https://goatsports.ar" : `https://goatsports.ar/${locale}`,
    logo: "https://goatsports.ar/images/goat-sports-logo.png",
    image: "https://goatsports.ar/images/training-center-main.png",
    telephone: "+5491126578585",
    email: "hola@goatsports.ar",
    address: {
      "@type": "PostalAddress",
      streetAddress: "San Martin 1649",
      addressLocality: "Vicente Lopez",
      postalCode: "1638",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-34.5308",
      longitude: "-58.4825",
    },
    openingHours: "Mo,Tu,We,Th,Fr 08:00-21:00",
    sameAs: [
      "https://www.facebook.com/goatsports",
      "https://www.instagram.com/goatsports",
      "https://www.tiktok.com/@goatsports",
    ],
    offers: {
      "@type": "Offer",
      name: locale === "es" ? "Programas de entrenamiento deportivo" : "Sports training programs",
      description:
        locale === "es"
          ? "Entrenamiento personalizado, campus deportivos y servicios de consultoría."
          : "Personalized training, sports camps, and consulting services.",
    },
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <link rel="alternate" hrefLang="es" href="https://goatsports.ar/" />
        <link rel="alternate" hrefLang="en" href="https://goatsports.ar/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://goatsports.ar/" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="Buenos Aires" />

        <meta name="theme-color" content="#00237c" />

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

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
