"use client"

import type React from "react"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Menu, X, GraduationCap } from "lucide-react"
import LanguageSwitcher from "./language-switcher"

export default function Navbar() {
  const t = useTranslations("nav")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      window.history.pushState(null, "", `#${targetId}`)
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/images/goat-sports-logo.png" alt="GOAT Sports Logo" className="h-8 tablet:h-10 w-auto" />
            </Link>
          </div>

          <nav className="hidden tablet:flex items-center space-x-8">
            <a
              href="#becas-usa"
              className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors"
              onClick={(e) => handleSmoothScroll(e, "becas-usa")}
            >
              <GraduationCap className="w-4 h-4" />
              {t("studyInUSA")}
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={(e) => handleSmoothScroll(e, "services")}
            >
              {t("programs")}
            </a>
            <a
              href="#staff"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={(e) => handleSmoothScroll(e, "staff")}
            >
              {t("aboutUs")}
            </a>
            <a
              href="#training-center"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={(e) => handleSmoothScroll(e, "training-center")}
            >
              {t("trainingCenter")}
            </a>
            <a
              href="#campus"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={(e) => handleSmoothScroll(e, "campus")}
            >
              {t("campus")}
            </a>
            <a
              href="#consulting"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={(e) => handleSmoothScroll(e, "consulting")}
            >
              {t("consulting")}
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={(e) => handleSmoothScroll(e, "testimonials")}
            >
              {t("testimonials")}
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              {t("contact")}
            </a>
          </nav>

          <div className="hidden tablet:flex items-center">
            <LanguageSwitcher />
          </div>

          <div className="tablet:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="tablet:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#becas-usa"
              className="flex items-center gap-2 text-blue-600 font-semibold py-2 bg-blue-50 px-3 rounded-lg"
              onClick={(e) => handleSmoothScroll(e, "becas-usa")}
            >
              <GraduationCap className="w-5 h-5" />
              {t("studyInUSA")}
            </a>
            <a
              href="#services"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={(e) => handleSmoothScroll(e, "services")}
            >
              {t("programs")}
            </a>
            <a
              href="#staff"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={(e) => handleSmoothScroll(e, "staff")}
            >
              {t("aboutUs")}
            </a>
            <a
              href="#training-center"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={(e) => handleSmoothScroll(e, "training-center")}
            >
              {t("trainingCenter")}
            </a>
            <a
              href="#campus"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={(e) => handleSmoothScroll(e, "campus")}
            >
              {t("campus")}
            </a>
            <a
              href="#consulting"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={(e) => handleSmoothScroll(e, "consulting")}
            >
              {t("consulting")}
            </a>
            <a
              href="#testimonials"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={(e) => handleSmoothScroll(e, "testimonials")}
            >
              {t("testimonials")}
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              {t("contact")}
            </a>
            <div className="pt-4 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
