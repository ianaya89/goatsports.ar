export interface UsaVacancy {
  id: string
  translationKey: string
  isOpen: boolean
}

export const usaVacancies: UsaVacancy[] = [
  {
    id: "hockey-agosto-2027",
    translationKey: "hockey2027",
    isOpen: true,
  },
]

export const openUsaVacancies = usaVacancies.filter((vacancy) => vacancy.isOpen)

export function getUsaVacancy(id: string) {
  return openUsaVacancies.find((vacancy) => vacancy.id === id)
}
