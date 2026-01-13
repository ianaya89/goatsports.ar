import type { Metadata } from "next"
import type React from "react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const baseUrl = "https://goatsports.ar"

  const titles: Record<string, string> = {
    es: "Inscripción Campus de Hockey | GOAT Sports",
    en: "Hockey Camp Registration | GOAT Sports",
  }

  const descriptions: Record<string, string> = {
    es: "Inscríbete en nuestros Campus de Hockey GOAT Sports. Entrenamiento intensivo con entrenadores de elite, instalaciones de primer nivel y experiencias inmersivas para jugadores de todos los niveles.",
    en: "Register for our GOAT Sports Hockey Camps. Intensive training with elite coaches, first-class facilities, and immersive experiences for players of all levels.",
  }

  return {
    title: titles[locale] || titles.es,
    description: descriptions[locale] || descriptions.es,
    keywords: [
      "campus de hockey",
      "hockey camp",
      "inscripción",
      "registration",
      "entrenamiento intensivo",
      "intensive training",
      "Buenos Aires",
      "Argentina",
      "GOAT Sports",
    ],
    alternates: {
      canonical: locale === "es" ? "/inscripcion-campus" : `/${locale}/inscripcion-campus`,
      languages: {
        "es-AR": "/inscripcion-campus",
        "en-US": "/en/inscripcion-campus",
      },
    },
    openGraph: {
      title: titles[locale] || titles.es,
      description: descriptions[locale] || descriptions.es,
      url: locale === "es" ? `${baseUrl}/inscripcion-campus` : `${baseUrl}/${locale}/inscripcion-campus`,
      siteName: "GOAT Sports",
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/campus-coaches-players.jpg`,
          width: 1200,
          height: 630,
          alt: locale === "es" ? "Campus de Hockey GOAT Sports" : "GOAT Sports Hockey Camp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale] || titles.es,
      description: descriptions[locale] || descriptions.es,
      images: [`${baseUrl}/images/campus-coaches-players.jpg`],
    },
  }
}

export default function InscripcionCampusLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
