import { ogContentType, ogSize, pickLocale, renderOgImage } from "@/lib/og"

export const alt = "GOAT Labs"
export const size = ogSize
export const contentType = ogContentType

const copy = {
  es: {
    eyebrow: "GOAT Labs",
    title: "Rendimiento medido. Resultados reales.",
    subtitle: "Tecnología, datos y ciencia del deporte para potenciar tu rendimiento y prevenir lesiones.",
    badge: "Nuevo servicio",
  },
  en: {
    eyebrow: "GOAT Labs",
    title: "Measured performance. Real results.",
    subtitle: "Technology, data and sports science to boost your performance and prevent injuries.",
    badge: "New service",
  },
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return renderOgImage({ ...pickLocale(copy, locale), dark: true })
}
