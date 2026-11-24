import type { Metadata } from "next"
import type React from "react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const titles: Record<string, string> = {
    es: "Términos y Condiciones | GOAT Sports",
    en: "Terms and Conditions | GOAT Sports",
  }

  const descriptions: Record<string, string> = {
    es: "Términos y condiciones de uso de los servicios de GOAT Sports.",
    en: "Terms and conditions for using GOAT Sports services.",
  }

  const title = titles[locale] || titles.es
  const description = descriptions[locale] || descriptions.es
  const path = locale === "es" ? "/terminos" : `/${locale}/terminos`

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "es-AR": "/terminos",
        "en-US": "/en/terminos",
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

export default function TerminosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
