import type { Metadata } from "next"
import type React from "react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const titles: Record<string, string> = {
    es: "GOAT Labs · Rendimiento medido, resultados reales | GOAT Sports",
    en: "GOAT Labs · Measured performance, real results | GOAT Sports",
  }

  const descriptions: Record<string, string> = {
    es: "Combinamos tecnología, datos y ciencia del deporte para potenciar tu rendimiento y prevenir lesiones. No adivinamos: medimos, analizamos y optimizamos.",
    en: "We combine technology, data and sports science to boost your performance and prevent injuries. We don't guess: we measure, analyze and optimize.",
  }

  const title = titles[locale] || titles.es
  const description = descriptions[locale] || descriptions.es
  const path = locale === "es" ? "/labs" : `/${locale}/labs`

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "es-AR": "/labs",
        "en-US": "/en/labs",
      },
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "GOAT Sports",
      type: "website",
      locale: locale === "es" ? "es_AR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
