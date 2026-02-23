"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Menu, X, GraduationCap } from "lucide-react"
import LanguageSwitcher from "./language-switcher"

export default function Navbar() {
  const t = useTranslations("nav")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/images/goat-sports-logo.png" alt="GOAT Sports Logo" width={160} height={48} className="h-10 tablet:h-12 w-auto" />
            </Link>
          </div>

          <nav className="hidden tablet:flex items-center space-x-6">
            <a
              href="#becas-usa"
              className="flex items-center gap-1.5 text-blue-700 hover:text-blue-800 font-semibold bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors border border-blue-200"
              onClick={(e) => handleSmoothScroll(e, "becas-usa")}
            >
              <GraduationCap className="w-4 h-4" aria-hidden="true" />
              {t("studyInUSA")}
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              onClick={(e) => handleSmoothScroll(e, "services")}
            >
              {t("programs")}
            </a>
            <a
              href="#staff"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              onClick={(e) => handleSmoothScroll(e, "staff")}
            >
              {t("aboutUs")}
            </a>
            <a
              href="#training-center"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              onClick={(e) => handleSmoothScroll(e, "training-center")}
            >
              {t("trainingCenter")}
            </a>
            <a
              href="#campus"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              onClick={(e) => handleSmoothScroll(e, "campus")}
            >
              {t("campus")}
            </a>
            <a
              href="#consulting"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              onClick={(e) => handleSmoothScroll(e, "consulting")}
            >
              {t("consulting")}
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              onClick={(e) => handleSmoothScroll(e, "testimonials")}
            >
              {t("testimonials")}
            </a>
          </nav>

          <div className="hidden tablet:flex items-center">
            <LanguageSwitcher />
          </div>

          <div className="tablet:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md p-1"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="tablet:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#becas-usa"
              className="flex items-center gap-2 text-blue-700 font-semibold py-2 bg-blue-50 px-3 rounded-lg border border-blue-200"
              onClick={(e) => handleSmoothScroll(e, "becas-usa")}
            >
              <GraduationCap className="w-5 h-5" aria-hidden="true" />
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
            <div className="pt-2 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
