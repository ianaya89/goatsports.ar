import type { Metadata } from "next"
import type React from "react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const titles: Record<string, string> = {
    es: "Becas deportivas en EE.UU. · Búsquedas activas | GOAT Sports",
    en: "US Sports Scholarships · Open Searches | GOAT Sports",
  }

  const descriptions: Record<string, string> = {
    es: "US Full Ride y GOAT buscan jugadoras de hockey para estudiar en USA con una beca deportiva. Mirá las búsquedas activas y postulate.",
    en: "US Full Ride and GOAT are looking for field hockey players to study in the USA on an athletic scholarship. See the open searches and apply.",
  }

  const title = titles[locale] || titles.es
  const description = descriptions[locale] || descriptions.es
  const path = locale === "es" ? "/becas-usa" : `/${locale}/becas-usa`

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "es-AR": "/becas-usa",
        "en-US": "/en/becas-usa",
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

export default function BecasUsaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
