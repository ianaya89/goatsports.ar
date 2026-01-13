"use client"

import { useTranslations } from "next-intl"
import { MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

export default function FloatingWhatsApp() {
  const t = useTranslations("common")
  const whatsappLink = getWhatsAppLink(t("whatsappMessage"))

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
    </a>
  )
}
