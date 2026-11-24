import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import UsaApplicationForm from "@/components/usa-application-form"
import { getUsaVacancy, localize, vacancyLabel } from "@/data/usa-vacancies"

type Params = Promise<{ locale: string; vacante: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, vacante } = await params
  const vacancy = getUsaVacancy(vacante)
  if (!vacancy) return { robots: { index: false } }

  const suffix = locale === "en" ? "US Sports Scholarships" : "Becas deportivas en EE.UU."
  const title = `${vacancyLabel(vacancy, locale)} · ${suffix} | GOAT Sports`
  const description = localize(vacancy.description, locale)
  const path = `${locale === "es" ? "" : `/${locale}`}/becas-usa/${vacancy.id}`

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "es-AR": `/becas-usa/${vacancy.id}`,
        "en-US": `/en/becas-usa/${vacancy.id}`,
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

export default async function UsaVacancyApplicationPage({ params }: { params: Params }) {
  const { locale, vacante } = await params
  const vacancy = getUsaVacancy(vacante)
  const t = await getTranslations({ locale, namespace: "usaVacancies" })

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-6 tablet:py-12">
          <div className="max-w-2xl mx-auto">
            <Link href="/becas-usa" className="inline-block py-2 text-blue-700 hover:underline text-sm">
              ← {t("form.back")}
            </Link>

            <div className="mt-3">
              {vacancy ? (
                <UsaApplicationForm vacancy={vacancy} />
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 p-5 tablet:p-8">
                  <h1 className="text-2xl font-bold text-[#00237c] mb-2">{t("form.notFound.title")}</h1>
                  <p className="text-gray-700">{t("form.notFound.message")}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
