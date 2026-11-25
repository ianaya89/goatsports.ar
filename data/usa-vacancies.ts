type Localized = { es: string; en: string }

export interface UsaVacancy {
  id: string
  isOpen: boolean
  title: Localized
  intake: Localized
  description: Localized
}

// Adding a search = adding one entry here. The id becomes the form URL (/becas-usa/<id>)
// and is stored with every application, so never rename one that already has applications.
export const usaVacancies: UsaVacancy[] = [
  {
    id: "hockey-agosto-2027",
    isOpen: true,
    title: { es: "Jugadoras de hockey", en: "Field hockey players" },
    intake: { es: "Agosto 2027", en: "August 2027" },
    description: {
      es: "US Full Ride y GOAT están en la búsqueda activa de jugadoras de hockey para estudiar en USA a través de una beca deportiva comenzando en agosto 2027 (si terminás el secundario en diciembre de 2026) o en agosto 2028 (si terminás el secundario en diciembre de 2027).",
      en: "US Full Ride and GOAT are actively looking for field hockey players to study in the USA on an athletic scholarship starting August 2027 (if you finish high school in December 2026) or August 2028 (if you finish high school in December 2027).",
    },
  },
]

export const openUsaVacancies = usaVacancies.filter((vacancy) => vacancy.isOpen)

export function getUsaVacancy(id: string) {
  return openUsaVacancies.find((vacancy) => vacancy.id === id)
}

export function localize(text: Localized, locale: string) {
  return locale === "en" ? text.en : text.es
}

export function vacancyLabel(vacancy: UsaVacancy, locale: string) {
  return `${localize(vacancy.title, locale)} · ${localize(vacancy.intake, locale)}`
}
