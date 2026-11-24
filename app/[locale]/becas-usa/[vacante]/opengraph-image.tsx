import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ogContentType, ogSize, renderOgImage } from "@/lib/og"
import { getUsaVacancy, localize, vacancyLabel } from "@/data/usa-vacancies"
import BecasImage from "../opengraph-image"

export const alt = "Becas deportivas en EE.UU. · GOAT Sports × US Full Ride"
export const size = ogSize
export const contentType = ogContentType

export default async function Image({ params }: { params: Promise<{ locale: string; vacante: string }> }) {
  const { locale, vacante } = await params
  const vacancy = getUsaVacancy(vacante)
  if (!vacancy) return BecasImage({ params })

  const photo = await readFile(join(process.cwd(), "public/images/hockey-academy.jpg"))
  return renderOgImage({
    eyebrow: locale === "en" ? "US scholarships · Open search" : "Becas en EE.UU. · Búsqueda activa",
    title: vacancyLabel(vacancy, locale),
    subtitle: localize(vacancy.description, locale),
    badge: locale === "en" ? "Apply now" : "Postulate",
    photo,
  })
}
