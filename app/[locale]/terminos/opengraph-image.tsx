import { ogContentType, ogSize, pickLocale, renderOgImage } from "@/lib/og"

export const alt = "Términos y Condiciones · GOAT Sports"
export const size = ogSize
export const contentType = ogContentType

const copy = {
  es: {
    eyebrow: "GOAT Sports",
    title: "Términos y Condiciones",
    subtitle: "Condiciones de uso de los servicios de GOAT Sports.",
  },
  en: {
    eyebrow: "GOAT Sports",
    title: "Terms and Conditions",
    subtitle: "Terms of use for GOAT Sports services.",
  },
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return renderOgImage({ ...pickLocale(copy, locale) })
}
