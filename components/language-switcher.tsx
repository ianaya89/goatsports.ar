"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/routing"

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: "es" | "en") => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div className="flex items-center space-x-1 bg-gray-100 rounded-full p-1">
      <button
        onClick={() => switchLocale("es")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          locale === "es"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-gray-600 hover:text-blue-600 hover:bg-gray-200"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          locale === "en"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-gray-600 hover:text-blue-600 hover:bg-gray-200"
        }`}
      >
        EN
      </button>
    </div>
  )
}
