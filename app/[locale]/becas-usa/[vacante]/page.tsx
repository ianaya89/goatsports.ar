"use client"

import type React from "react"
import { useState } from "react"
import { useParams } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getUsaVacancy } from "@/data/usa-vacancies"

const PROVINCES = [
  "Buenos Aires",
  "CABA",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
]

// `value` is what lands in the sheet (always Spanish); `key` picks the translated label
const GRADUATION_OPTIONS = [
  { value: "Diciembre 2026", key: "dec2026" },
  { value: "Diciembre 2027", key: "dec2027" },
  { value: "Ya terminé", key: "finished" },
  { value: "Otro", key: "other" },
]
const POSITION_OPTIONS = [
  { value: "Delantera", key: "forward" },
  { value: "Volante", key: "midfielder" },
  { value: "Defensora", key: "defender" },
  { value: "Arquera", key: "goalkeeper" },
]
const VIDEO_OPTIONS = [
  { value: "Sí", key: "yes" },
  { value: "No", key: "no" },
]
const ENGLISH_OPTIONS = [
  { value: "Básico", key: "basic" },
  { value: "Intermedio", key: "intermediate" },
  { value: "Avanzado", key: "advanced" },
  { value: "Bilingüe", key: "bilingual" },
]
const SOURCE_OPTIONS = [
  { value: "Instagram", key: "instagram" },
  { value: "Cartel en el Training Center", key: "poster" },
  { value: "Mi entrenador o entrenadora", key: "coach" },
  { value: "Una amiga", key: "friend" },
  { value: "Otro", key: "other" },
]

const initialForm = {
  fullName: "",
  birthDate: "",
  province: "",
  graduation: "",
  school: "",
  club: "",
  category: "",
  position: "",
  nationalTeam: "",
  hasVideos: "",
  englishLevel: "",
  englishExam: "",
  playerPhone: "",
  email: "",
  guardianName: "",
  guardianPhone: "",
  source: "",
}

type FormField = keyof typeof initialForm

const inputClass =
  "w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"

export default function UsaVacancyApplicationPage() {
  const t = useTranslations("usaVacancies")
  const locale = useLocale()
  const { vacante } = useParams<{ vacante: string }>()
  const vacancy = getUsaVacancy(vacante)

  const [form, setForm] = useState(initialForm)
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!vacancy) return
    setStatus("submitting")

    try {
      const response = await fetch("/api/becas-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, consent, vacancyId: vacancy.id, locale }),
      })
      if (!response.ok) throw new Error(`Request failed: ${response.status}`)

      setStatus("success")
      setForm(initialForm)
      setConsent(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (error) {
      console.error("Error submitting scholarship application:", error)
      setStatus("error")
    }
  }

  const label = (field: FormField, required = false) => (
    <label htmlFor={field} className="block text-sm font-medium text-gray-800 mb-1">
      {t(`form.fields.${field}`)}
      {required && <span className="text-red-600"> *</span>}
    </label>
  )

  const textField = (
    field: FormField,
    { required = false, type = "text", hint = false, autoComplete }: {
      required?: boolean
      type?: string
      hint?: boolean
      autoComplete?: string
    } = {},
  ) => (
    <div>
      {label(field, required)}
      <input
        type={type}
        id={field}
        name={field}
        value={form[field]}
        onChange={handleChange}
        required={required}
        maxLength={200}
        autoComplete={autoComplete}
        placeholder={hint ? t(`form.hints.${field}`) : undefined}
        className={inputClass}
      />
    </div>
  )

  const radioField = (
    field: FormField,
    options: { value: string; key: string }[],
    { required = false, inline = false }: { required?: boolean; inline?: boolean } = {},
  ) => (
    <fieldset>
      <legend className="block text-sm font-medium text-gray-800 mb-2">
        {t(`form.fields.${field}`)}
        {required && <span className="text-red-600"> *</span>}
      </legend>
      <div className={inline ? "flex flex-wrap gap-x-6 gap-y-2" : "grid grid-cols-1 tablet:grid-cols-2 gap-2"}>
        {options.map((option) => (
          <label key={option.key} className="flex items-center gap-2 text-gray-700 cursor-pointer">
            <input
              type="radio"
              name={field}
              value={option.value}
              checked={form[field] === option.value}
              onChange={handleChange}
              required={required}
              className="h-4 w-4 accent-blue-700"
            />
            {t(`form.options.${field}.${option.key}`)}
          </label>
        ))}
      </div>
    </fieldset>
  )

  const section = (number: number, key: string, children: React.ReactNode) => (
    <section className="pt-8 first:pt-0">
      <h2 className="flex items-baseline gap-2 mb-4">
        <span className="text-xs font-bold uppercase tracking-wide text-cyan-600">
          {t("form.sectionLabel")} {number}
        </span>
        <span className="text-xl font-bold text-[#00237c]">{t(`form.sections.${key}`)}</span>
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-10 tablet:py-12">
          <div className="max-w-2xl mx-auto">
            <Link href="/becas-usa" className="text-blue-700 hover:underline text-sm">
              ← {t("form.back")}
            </Link>

            {!vacancy ? (
              <div className="mt-6 bg-white rounded-2xl border border-gray-200 p-6 tablet:p-8">
                <h1 className="text-2xl font-bold text-[#00237c] mb-2">{t("form.notFound.title")}</h1>
                <p className="text-gray-700">{t("form.notFound.message")}</p>
              </div>
            ) : status === "success" ? (
              <div className="mt-6 bg-green-50 border border-green-200 text-green-800 rounded-2xl p-6 tablet:p-8" role="status">
                <h1 className="text-2xl font-bold mb-2">{t("form.success.title")}</h1>
                <p>{t("form.success.message")}</p>
              </div>
            ) : (
              <div className="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 tablet:p-8">
                <p className="text-cyan-600 font-semibold uppercase tracking-wide text-xs">{t("eyebrow")}</p>
                <h1 className="mt-1 text-2xl tablet:text-3xl font-black text-[#00237c]">
                  {t(`items.${vacancy.translationKey}.title`)} · {t(`items.${vacancy.translationKey}.intake`)}
                </h1>

                <div className="mt-5 border-l-4 border-cyan-400 bg-cyan-50 rounded-r-lg p-4 text-sm text-gray-800 space-y-2 leading-relaxed">
                  <p>{t("form.intro")}</p>
                  <p>
                    <strong className="text-[#00237c]">{t("form.importantLabel")}</strong> {t("form.important")}
                  </p>
                  <p className="text-gray-600">{t("form.privacy")}</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 divide-y divide-gray-200 [&>section]:pb-8">
                  {section(
                    1,
                    "player",
                    <>
                      {textField("fullName", { required: true, autoComplete: "name" })}
                      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
                        {textField("birthDate", { required: true, type: "date", autoComplete: "bday" })}
                        <div>
                          {label("province", true)}
                          <select
                            id="province"
                            name="province"
                            value={form.province}
                            onChange={handleChange}
                            required
                            className={inputClass}
                          >
                            <option value="">{t("form.selectProvince")}</option>
                            {PROVINCES.map((province) => (
                              <option key={province} value={province}>
                                {province}
                              </option>
                            ))}
                            <option value="Fuera de Argentina">{t("form.outsideArgentina")}</option>
                          </select>
                        </div>
                      </div>
                      {radioField("graduation", GRADUATION_OPTIONS, { required: true })}
                      {textField("school")}
                    </>,
                  )}

                  {section(
                    2,
                    "hockey",
                    <>
                      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
                        {textField("club", { required: true })}
                        {textField("category", { required: true, hint: true })}
                      </div>
                      {radioField("position", POSITION_OPTIONS, { required: true })}
                      {textField("nationalTeam", { hint: true })}
                      {radioField("hasVideos", VIDEO_OPTIONS, { required: true, inline: true })}
                    </>,
                  )}

                  {section(
                    3,
                    "english",
                    <>
                      {radioField("englishLevel", ENGLISH_OPTIONS, { required: true })}
                      {textField("englishExam", { hint: true })}
                    </>,
                  )}

                  {section(
                    4,
                    "contact",
                    <>
                      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
                        {textField("playerPhone", { required: true, type: "tel", autoComplete: "tel" })}
                        {textField("email", { required: true, type: "email", autoComplete: "email" })}
                        {textField("guardianName", { required: true })}
                        {textField("guardianPhone", { required: true, type: "tel" })}
                      </div>
                      {radioField("source", SOURCE_OPTIONS)}
                    </>,
                  )}

                  <div className="pt-8 space-y-5">
                    <label className="flex items-start gap-3 bg-cyan-50 border-l-4 border-cyan-400 rounded-r-lg p-4 text-sm text-gray-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        required
                        className="mt-0.5 h-4 w-4 accent-blue-700 flex-shrink-0"
                      />
                      <span>
                        {t("form.consent")}
                        <span className="text-red-600"> *</span>
                      </span>
                    </label>

                    {status === "error" && (
                      <p className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md" role="alert">
                        {t("form.error")}
                      </p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#00237c] hover:bg-[#1a56db] text-white font-bold"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? t("form.submitting") : t("form.submit")}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
