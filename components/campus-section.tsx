"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, ImageIcon, Instagram } from "lucide-react"
import { useState } from "react"
import ImageWithFallback from "./image-with-fallback"

interface CampusEvent {
  id: string
  translationKey: string
  imageUrl: string
  isPast: boolean
  link?: string
  galleryUrl?: string
  comingSoon?: boolean
  openRegistration?: boolean
}

const upcomingCampus: CampusEvent[] = [
  {
    id: "showcase-usa-2026",
    translationKey: "showcaseUsa2026",
    imageUrl: "/images/showcase-usa.jpg",
    isPast: false,
    comingSoon: false,
    link: "https://usa.goatsports.ar",
    openRegistration: true,
  },
  {
    id: "summer-2026",
    translationKey: "summer2026",
    imageUrl: "/images/campus-2026.jpeg",
    isPast: true,
    comingSoon: false,
    link: "https://summer.goatsports.ar",
    openRegistration: false,
  },
  {
    id: "rosario-2025",
    translationKey: "rosario2025",
    imageUrl: "/images/damfield.jpg",
    isPast: true,
    link: "https://rosario.goatsports.ar",
    openRegistration: false,
  },
  {
    id: "summer-2025",
    translationKey: "summer2025",
    imageUrl: "/images/campus-coaches-players.jpg",
    isPast: true,
    comingSoon: false,
    link: "https://summer.goatsports.ar",
    galleryUrl: "https://drive.google.com/drive/u/0/folders/1bsYB7a6nSPdCvlogMs8gukOTYH0Fq-Nr",
    openRegistration: false,
  },
  {
    id: "winter-2025",
    translationKey: "winter2025",
    imageUrl: "/images/winter25.jpeg",
    isPast: true,
    link: "https://winter25.goatsports.ar",
    galleryUrl: "https://drive.google.com/drive/folders/1EbotRoIMf4MHTL7ar82Q1Ku6ftFJKHo7",
  },
  {
    id: "gba-sur-2025",
    translationKey: "gbaSur2025",
    imageUrl: "/images/mgrc25.jpeg",
    isPast: true,
    link: "https://montegrande.goatsports.ar",
    galleryUrl: "https://drive.google.com/drive/u/0/folders/1eTnvBJl8nGCrNiUJOQlleytsRagyDOb_",
  },
]

export default function CampusSection() {
  const t = useTranslations("campus")
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group"></div>
      </div>

      {activeTab === "upcoming" && (
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Próximos Eventos</h2>
          <div className="max-w-6xl mx-auto">
            {/* Featured events - first 2, large cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {upcomingCampus.slice(0, 2).map((campus) => (
                <Card
                  key={campus.id}
                  className="overflow-hidden border border-gray-200 bg-white shadow-lg flex flex-col min-h-[600px] relative"
                >
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={campus.imageUrl || "/placeholder.svg"}
                      alt={`${t(`events.${campus.translationKey}.title`)} - Grupo de participantes en campo de hockey`}
                      fallbackSrc="/placeholder-kngc1.png"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  {campus.openRegistration && (
                    <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded animate-pulse">
                      {t("badges.openRegistration")}
                    </span>
                  )}
                  {campus.isPast && (
                    <span className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                      {t("badges.finished")}
                    </span>
                  )}
                  {campus.comingSoon && !campus.isPast && (
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      {t("badges.comingSoon")}
                    </span>
                  )}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-4">{t(`events.${campus.translationKey}.title`)}</h3>
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" aria-hidden="true" />
                      <span className="text-gray-700">{t(`events.${campus.translationKey}.date`)}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <MapPin className="h-5 w-5 text-blue-600 mr-2" aria-hidden="true" />
                      <span className="text-gray-700">{t(`events.${campus.translationKey}.location`)}</span>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">{t(`events.${campus.translationKey}.description`)}</p>
                    <div className="mt-auto space-y-3">
                      {campus.comingSoon ? (
                        <a href="https://www.instagram.com/goatsports.arg" target="_blank" rel="noopener noreferrer" className="block">
                          <Button variant="outline" className="w-full border-pink-600 text-pink-600 hover:bg-pink-50">
                            <Instagram className="h-5 w-5 mr-2" aria-hidden="true" /> {t("buttons.followInstagram")}
                          </Button>
                        </a>
                      ) : campus.isPast ? (
                        <a href={campus.galleryUrl || "https://www.instagram.com/goatsports.arg"} target="_blank" rel="noopener noreferrer" className="block">
                          <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                            <ImageIcon className="h-4 w-4 mr-2" aria-hidden="true" /> {t("buttons.viewGallery")}
                          </Button>
                        </a>
                      ) : (
                        <>
                          <a href={`${campus.link}/inscripcion`} target="_blank" rel="noopener noreferrer" className="block">
                            <Button className="bg-blue-600 hover:bg-blue-700 w-full text-lg py-3">
                              {t("buttons.registerNow")}
                            </Button>
                          </a>
                          <a href={campus.link} target="_blank" rel="noopener noreferrer" className="block">
                            <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                              {t("buttons.moreInfo")}
                            </Button>
                          </a>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Remaining events - 4 per row, compact cards */}
            {upcomingCampus.length > 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {upcomingCampus.slice(2).map((campus) => (
                  <Card
                    key={campus.id}
                    className="overflow-hidden border border-gray-200 bg-white shadow-md flex flex-col relative"
                  >
                    <div className="h-36 overflow-hidden">
                      <ImageWithFallback
                        src={campus.imageUrl || "/placeholder.svg"}
                        alt={`${t(`events.${campus.translationKey}.title`)} - Grupo de participantes en campo de hockey`}
                        fallbackSrc="/placeholder-kngc1.png"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    {campus.openRegistration && (
                      <span className="absolute top-2 left-2 bg-green-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded animate-pulse">
                        {t("badges.openRegistration")}
                      </span>
                    )}
                    {campus.isPast && (
                      <span className="absolute top-2 left-2 bg-gray-800 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                        {t("badges.finished")}
                      </span>
                    )}
                    {campus.comingSoon && !campus.isPast && (
                      <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                        {t("badges.comingSoon")}
                      </span>
                    )}
                    <CardContent className="p-4 flex flex-col flex-grow">
                      <h3 className="text-base font-bold mb-2">{t(`events.${campus.translationKey}.title`)}</h3>
                      <div className="flex items-center mb-1.5">
                        <Calendar className="h-4 w-4 text-blue-600 mr-1.5" aria-hidden="true" />
                        <span className="text-gray-700 text-sm">{t(`events.${campus.translationKey}.date`)}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        <MapPin className="h-4 w-4 text-blue-600 mr-1.5" aria-hidden="true" />
                        <span className="text-gray-700 text-sm">{t(`events.${campus.translationKey}.location`)}</span>
                      </div>
                      <div className="mt-auto">
                        {campus.comingSoon ? (
                          <a href="https://www.instagram.com/goatsports.arg" target="_blank" rel="noopener noreferrer" className="block">
                            <Button variant="outline" size="sm" className="w-full border-pink-600 text-pink-600 hover:bg-pink-50 text-xs">
                              <Instagram className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" /> {t("buttons.followInstagram")}
                            </Button>
                          </a>
                        ) : campus.isPast ? (
                          <a href={campus.galleryUrl || "https://www.instagram.com/goatsports.arg"} target="_blank" rel="noopener noreferrer" className="block">
                            <Button variant="outline" size="sm" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 text-xs">
                              <ImageIcon className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" /> {t("buttons.viewGallery")}
                            </Button>
                          </a>
                        ) : (
                          <>
                            <a href={`${campus.link}/inscripcion`} target="_blank" rel="noopener noreferrer" className="block mb-2">
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 w-full text-xs">
                                {t("buttons.registerNow")}
                              </Button>
                            </a>
                            <a href={campus.link} target="_blank" rel="noopener noreferrer" className="block">
                              <Button variant="outline" size="sm" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 text-xs">
                                {t("buttons.moreInfo")}
                              </Button>
                            </a>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
