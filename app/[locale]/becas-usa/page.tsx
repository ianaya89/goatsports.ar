"use client"

import { useTranslations } from "next-intl"
import { ArrowRight, CalendarDays, GraduationCap } from "lucide-react"
import { Link } from "@/i18n/routing"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { openUsaVacancies } from "@/data/usa-vacancies"

export default function UsaVacanciesPage() {
  const t = useTranslations("usaVacancies")

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        <div
          className="py-12 tablet:py-16"
          style={{ background: "linear-gradient(135deg, #00237c 0%, #1a56db 50%, #3b82f6 100%)" }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link href="/#becas-usa" className="text-white/80 hover:text-white text-sm">
                ← {t("back")}
              </Link>
              <p className="mt-6 text-cyan-300 font-semibold uppercase tracking-wide text-sm">{t("eyebrow")}</p>
              <h1 className="mt-2 text-3xl tablet:text-5xl font-black text-white uppercase tracking-tight">
                {t("title")}
              </h1>
              <p className="mt-4 text-white/90 text-base tablet:text-lg leading-relaxed">{t("subtitle")}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10 tablet:py-12">
          <div className="max-w-3xl mx-auto">
            {openUsaVacancies.length === 0 ? (
              <p className="bg-white rounded-2xl border border-gray-200 p-6 text-gray-700">{t("empty")}</p>
            ) : (
              <ul className="space-y-4">
                {openUsaVacancies.map((vacancy) => (
                  <li
                    key={vacancy.id}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col tablet:flex-row tablet:items-center gap-5"
                  >
                    <div className="hidden tablet:flex w-12 h-12 rounded-xl bg-blue-50 text-[#00237c] items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-flex items-center rounded-full bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5">
                          {t("open")}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-600">
                          <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
                          {t("intakeLabel")}: {t(`items.${vacancy.translationKey}.intake`)}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-[#00237c]">{t(`items.${vacancy.translationKey}.title`)}</h2>
                      <p className="mt-1 text-gray-700 text-sm leading-relaxed">
                        {t(`items.${vacancy.translationKey}.description`)}
                      </p>
                    </div>
                    <Link
                      href={`/becas-usa/${vacancy.id}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00237c] hover:bg-[#1a56db] text-white font-bold px-6 py-3 transition-colors flex-shrink-0 group"
                    >
                      {t("apply")}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <p className="mt-8 text-sm text-gray-600 leading-relaxed border-l-4 border-cyan-400 bg-white p-4 rounded-r-lg">
              {t("disclaimer")}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
