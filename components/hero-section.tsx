"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

export default function HeroSection() {
  const t = useTranslations("hero")
  const tNav = useTranslations("nav")

  const objetivos = [
    t("objectives.0"),
    t("objectives.1"),
    t("objectives.2"),
    t("objectives.3"),
    t("objectives.4"),
    t("objectives.5"),
    t("objectives.6"),
    t("objectives.7"),
    t("objectives.8"),
    t("objectives.9"),
  ]

  const whatsappLink = getWhatsAppLink(tNav("whatsappMessage"))

  const [currentObjetivo, setCurrentObjetivo] = useState(0)
  const [displayedObjetivo, setDisplayedObjetivo] = useState(objetivos[0])
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    const rotateObjetivos = () => {
      setIsChanging(true)

      setTimeout(() => {
        const nextIndex = (currentObjetivo + 1) % objetivos.length
        setCurrentObjetivo(nextIndex)
        setDisplayedObjetivo(objetivos[nextIndex])

        setTimeout(() => {
          setIsChanging(false)
        }, 300)
      }, 500)
    }

    const interval = setInterval(rotateObjetivos, 3500)
    return () => clearInterval(interval)
  }, [currentObjetivo, objetivos])

  const scrollToPrograms = (e: React.MouseEvent) => {
    e.preventDefault()
    const programsSection = document.getElementById("services")
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/fondo.jpeg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-blue-800/80"></div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-24 w-96 h-96 bg-accent-400 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl tablet:text-6xl font-bold text-white animate-fade-in-up">
          <span className="block mb-4">{t("title")}</span>

          <div className="relative flex items-center justify-center mt-4 mb-8 min-h-[120px] py-4">
            <span
              className={`
                inline-block
                text-5xl sm:text-6xl tablet:text-7xl
                transition-[opacity,transform] duration-500 ease-in-out
                ${isChanging ? "opacity-0 transform translate-y-8" : "opacity-100 transform translate-y-0"}
              `}
              style={{
                background: "linear-gradient(45deg, #ffffff, #fbbf24, #f59e0b, #ffffff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: "800",
                animation: "gradient 4s linear infinite",
                backgroundSize: "300% auto",
                textShadow: "0 0 30px rgba(251,191,36,0.2)",
              }}
            >
              {displayedObjetivo}
            </span>
          </div>
        </h1>

        <p
          className="text-xl text-white/90 max-w-2xl mb-8 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          {t("subtitle")}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 flex items-center gap-2 w-full sm:w-auto hover-lift transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 font-semibold"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {t("bookSession")}
            </Button>
          </a>
          <Button
            size="lg"
            className="glass-effect text-white hover:bg-white/20 border border-white/30 w-full sm:w-auto hover-lift transition-all duration-300"
            onClick={scrollToPrograms}
          >
            {t("explorePrograms")}
          </Button>
        </div>
      </div>
    </section>
  )
}
