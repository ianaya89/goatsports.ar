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
      es: "Universidades de Estados Unidos buscan jugadoras de hockey para otorgar becas deportivas a partir de agosto 2027.",
      en: "US universities are looking for field hockey players to award athletic scholarships starting August 2027.",
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
