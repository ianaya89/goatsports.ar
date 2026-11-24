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
    es: "Becas deportivas en EE.UU. · Búsquedas activas | GOAT Sports",
    en: "US Sports Scholarships · Open Searches | GOAT Sports",
  }

  const descriptions: Record<string, string> = {
    es: "Universidades de Estados Unidos buscan jugadoras de hockey para otorgar becas deportivas. Mirá las búsquedas activas de GOAT Sports y US Full Ride y postulate.",
    en: "US universities are looking for field hockey players to award athletic scholarships. See the open searches from GOAT Sports and US Full Ride and apply.",
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
      url: `${baseUrl}${path}`,
      siteName: "GOAT Sports",
      type: "website",
    },
  }
}

export default function BecasUsaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
