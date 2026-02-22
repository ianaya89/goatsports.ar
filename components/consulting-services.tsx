"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Building2, GraduationCap, Users, ClipboardList, Target, MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"
import DiagonalImageSplit from "./diagonal-image-split"

export default function ConsultingServices() {
  const t = useTranslations("consulting")

  const whatsappLink = getWhatsAppLink(t("whatsappMessage"))

  const services = [
    {
      icon: Building2,
      title: t("services.clubs.title"),
      description: t("services.clubs.description"),
    },
    {
      icon: GraduationCap,
      title: t("services.schools.title"),
      description: t("services.schools.description"),
    },
    {
      icon: Users,
      title: t("services.communities.title"),
      description: t("services.communities.description"),
    },
    {
      icon: ClipboardList,
      title: t("services.methods.title"),
      description: t("services.methods.description"),
    },
    {
      icon: Target,
      title: t("services.clinics.title"),
      description: t("services.clinics.description"),
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1 relative">
          <DiagonalImageSplit
            image1="/images/consulting.jpeg"
            image2="/images/hockey-coaching-demo.jpg"
            alt1="Servicios de Consultoría GOAT Sports"
            alt2="Demostración de técnicas de hockey por entrenador GOAT"
            className="h-[500px] rounded-lg shadow-lg overflow-hidden"
          />
        </div>
        <div className="lg:col-span-5 order-1 lg:order-2">
          <h2 className="text-2xl font-bold mb-6">{t("servicesTitle")}</h2>

          <div className="space-y-5">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                {t("cta")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
