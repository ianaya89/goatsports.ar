"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

export default function TrainingCenter() {
  const t = useTranslations("trainingCenter")
  const whatsappLink = getWhatsAppLink(t("whatsappMessage"))

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 tablet:gap-16 items-center">
        {/* Left: info */}
        <div className="text-white">
          <div className="w-12 h-1 bg-gradient-to-r from-accent-400 to-blue-400 mb-6 rounded-full"></div>
          <h3 className="text-2xl tablet:text-3xl font-bold mb-4">
            {t("facilityTitle")}
          </h3>
          <p className="text-white/80 leading-relaxed mb-6 text-lg">
            {t("facilityDescription")}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>{t("availableNow")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>{t("location")}</span>
            </div>
          </div>
        </div>

        {/* Right: CTA card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">{t("ctaTitle")}</h3>
          <p className="text-white/70 mb-6 leading-relaxed">
            {t("ctaDescription")}
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-blue-700 hover:bg-white/90 font-semibold flex items-center gap-2 mx-auto">
              <MessageCircle className="h-5 w-5" />
              {t("scheduleVisit")}
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
