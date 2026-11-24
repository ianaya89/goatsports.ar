import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ogContentType, ogSize, pickLocale, renderOgImage } from "@/lib/og"

export const alt = "Campus de Hockey GOAT Sports"
export const size = ogSize
export const contentType = ogContentType

const copy = {
  es: {
    eyebrow: "Campus GOAT Sports",
    title: "Campus de Hockey",
    subtitle: "Entrenamiento intensivo con entrenadores de elite, para todos los niveles.",
    badge: "Inscribite",
  },
  en: {
    eyebrow: "GOAT Sports Camps",
    title: "Hockey Camps",
    subtitle: "Intensive training with elite coaches, for every level.",
    badge: "Register",
  },
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const photo = await readFile(join(process.cwd(), "public/images/campus-group-photo.jpg"))

  return renderOgImage({ ...pickLocale(copy, locale), photo })
}
