import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ogContentType, ogSize, pickLocale, renderOgImage } from "@/lib/og"

export const alt = "Becas deportivas en EE.UU. · GOAT Sports × US Full Ride"
export const size = ogSize
export const contentType = ogContentType

const copy = {
  es: {
    eyebrow: "US Full Ride × GOAT Sports",
    title: "Buscamos jugadoras para becas en EE.UU.",
    subtitle: "Universidades de EE.UU. otorgan becas deportivas de hockey. Ingreso agosto 2027.",
    badge: "Postulate",
  },
  en: {
    eyebrow: "US Full Ride × GOAT Sports",
    title: "Hockey players wanted for US scholarships",
    subtitle: "US universities are awarding field hockey scholarships. August 2027 intake.",
    badge: "Apply now",
  },
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const photo = await readFile(join(process.cwd(), "public/images/hockey-academy.jpg"))

  return renderOgImage({ ...pickLocale(copy, locale), photo })
}
