"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import StaffCarousel from "./staff-carousel"
import { CheckCircle2 } from "lucide-react"

export default function StaffSection() {
  const t = useTranslations("staff")
  const [slidesToShow, setSlidesToShow] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 980) {
        setSlidesToShow(2)
      } else if (window.innerWidth < 1280) {
        setSlidesToShow(3)
      } else {
        setSlidesToShow(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const features = [
    {
      title: t("features.experts.title"),
      description: t("features.experts.description"),
    },
    {
      title: t("features.personalized.title"),
      description: t("features.personalized.description"),
    },
    {
      title: t("features.facilities.title"),
      description: t("features.facilities.description"),
    },
    {
      title: t("features.results.title"),
      description: t("features.results.description"),
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl tablet:text-4xl font-bold mb-4">{t("title")}</h2>
        <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg">
          {t("description")}
          <br />
          <br />
          {t("description2")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-accent-500/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
          <img
            src="/images/staff.jpg"
            alt="Equipo de Entrenadores de GOAT Sports"
            className="relative rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500 hover-lift"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="space-y-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start group hover:bg-blue-50/50 p-4 rounded-xl transition-all duration-300"
            >
              <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300 mr-4">
                <CheckCircle2 className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-accent-100/30 rounded-full blur-2xl animate-float animation-delay-2000"></div>

        <div className="text-center mb-8 relative z-10">
          <h3 className="text-3xl font-bold mb-4">{t("teamTitle")}</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-accent-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">{t("teamDescription")}</p>
        </div>

        <div className="relative z-10">
          <StaffCarousel />
        </div>
      </div>
    </div>
  )
}
