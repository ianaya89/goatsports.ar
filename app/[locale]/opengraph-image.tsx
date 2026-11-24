import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ogContentType, ogSize, pickLocale, renderOgImage } from "@/lib/og"

export const alt = "GOAT Sports"
export const size = ogSize
export const contentType = ogContentType

const copy = {
  es: {
    eyebrow: "Hockey · Fútbol · Rendimiento",
    title: "Academia deportiva de elite",
    subtitle: "Entrenamiento personalizado, academia, campus y becas en USA.",
    badge: "Buenos Aires",
  },
  en: {
    eyebrow: "Hockey · Football · Performance",
    title: "Elite sports academy",
    subtitle: "Personal training, academy, camps and US scholarships.",
    badge: "Buenos Aires",
  },
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const photo = await readFile(join(process.cwd(), "public/images/campus-coaches-players.jpg"))

  return renderOgImage({ ...pickLocale(copy, locale), photo })
}
