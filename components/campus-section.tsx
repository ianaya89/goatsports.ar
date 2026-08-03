"use client"

import type React from "react"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, ImageIcon, Instagram, ChevronLeft, ChevronRight } from "lucide-react"
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
  rescheduled?: boolean
}

const campusEvents: CampusEvent[] = [
  {
    id: "cissab-2026",
    translationKey: "cissab2026",
    imageUrl: "https://cissab.goatsports.ar/images/portada.jpg",
    isPast: false,
    comingSoon: false,
    link: "https://cissab.goatsports.ar",
    openRegistration: true,
  },
  {
    id: "showcase-2026",
    translationKey: "showcase2026",
    imageUrl: "/images/orlando-experience.jpg",
    isPast: false,
    comingSoon: true,
    openRegistration: false,
  },
  {
    id: "winter-2026",
    translationKey: "winter2026",
    imageUrl: "/images/winter25.jpeg",
    isPast: true,
    comingSoon: false,
    link: "https://winter.goatsports.ar",
    openRegistration: false,
  },
  {
    id: "rosario-2026",
    translationKey: "rosario2026",
    imageUrl: "https://rosario.goatsports.ar/images/portada.jpg",
    isPast: true,
    comingSoon: false,
    link: "https://rosario.goatsports.ar",
    openRegistration: false,
  },
  {
    id: "montegrande-semana-santa-2026",
    translationKey: "montegrandeSemanaSanta2026",
    imageUrl: "/images/mgrc25.jpeg",
    isPast: true,
    comingSoon: false,
    link: "https://montegrande.goatsports.ar",
    openRegistration: false,
  },
  {
    id: "showcase-usa-2026",
    translationKey: "showcaseUsa2026",
    imageUrl: "/images/showcase-usa.jpg",
    isPast: true,
    comingSoon: false,
    link: "https://usa.goatsports.ar",
    openRegistration: false,
  },
  {
    id: "summer-2026",
    translationKey: "summer2026",
    imageUrl: "/images/campus-2026.jpeg",
    isPast: true,
    comingSoon: false,
    link: "https://summer.goatsports.ar",
    galleryUrl: "https://photos.app.goo.gl/dL9YrX9dtnYV3DE5A",
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
  const [currentPage, setCurrentPage] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const activeEvents = campusEvents.filter((e) => !e.isPast)
  const pastEvents = campusEvents.filter((e) => e.isPast)

  const cardsPerPage = 4
  const totalPages = Math.ceil(pastEvents.length / cardsPerPage)
  const minSwipeDistance = 50

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) nextPage()
    else if (distance < -minSwipeDistance) prevPage()
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Active events */}
      {activeEvents.length > 0 && (
        <>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
            <h3 className="text-xl font-bold text-gray-900">{t("badges.openRegistration")}</h3>
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm font-semibold text-gray-400">{activeEvents.length} campus</span>
          </div>
        </>
      )}
      {activeEvents.length > 0 && (
        <div className={`grid grid-cols-1 ${activeEvents.length === 1 ? "max-w-2xl mx-auto" : "md:grid-cols-2"} gap-8 mb-12`}>
          {activeEvents.map((campus) => (
            <Card
              key={campus.id}
              className="overflow-hidden border border-gray-200 bg-white shadow-lg flex flex-col relative"
            >
              <div className="overflow-hidden h-40">
                <ImageWithFallback
                  src={campus.imageUrl || "/placeholder.svg"}
                  alt={`${t(`events.${campus.translationKey}.title`)}`}
                  fallbackSrc="/images/showcase-usa.jpg"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {campus.rescheduled && (
                <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {t("badges.rescheduled")}
                </span>
              )}
              {campus.openRegistration && !campus.rescheduled && (
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded animate-pulse">
                  {t("badges.openRegistration")}
                </span>
              )}
              {campus.comingSoon && !campus.isPast && !campus.rescheduled && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {t("badges.comingSoon")}
                </span>
              )}

              <CardContent className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">
                  {t(`events.${campus.translationKey}.title`)}
                </h3>
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-blue-600 mr-2" aria-hidden="true" />
                  <span className="text-gray-700 text-sm">{t(`events.${campus.translationKey}.date`)}</span>
                </div>
                <div className="flex items-center mb-3">
                  <MapPin className="h-4 w-4 text-blue-600 mr-2" aria-hidden="true" />
                  <span className="text-gray-700 text-sm">{t(`events.${campus.translationKey}.location`)}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{t(`events.${campus.translationKey}.description`)}</p>
                <div className="mt-auto space-y-2">
                  {campus.comingSoon ? (
                    <a href="https://www.instagram.com/goatsports.arg" target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="outline" size="sm" className="w-full border-pink-600 text-pink-600 hover:bg-pink-50">
                        <Instagram className="h-4 w-4 mr-2" aria-hidden="true" /> {t("buttons.followInstagram")}
                      </Button>
                    </a>
                  ) : (
                    <a href={campus.link} target="_blank" rel="noopener noreferrer" className="block">
                      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                        {t("buttons.registerNow")}
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Past events - carousel */}
      {pastEvents.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-center mb-6">{t("past")}</h3>
          <div className="relative">
            <div
              className="overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {Array.from({ length: totalPages }).map((_, pageIndex) => {
                  const startIdx = pageIndex * cardsPerPage
                  const pageItems = pastEvents.slice(startIdx, Math.min(startIdx + cardsPerPage, pastEvents.length))

                  return (
                    <div key={pageIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-1">
                        {pageItems.map((campus) => (
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
                            <span className="absolute top-2 left-2 bg-gray-800 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                              {t("badges.finished")}
                            </span>
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
                                <a
                                  href={campus.galleryUrl || "https://www.instagram.com/goatsports.arg"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block"
                                >
                                  <Button variant="outline" size="sm" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 text-xs">
                                    <ImageIcon className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" /> {t("buttons.viewGallery")}
                                  </Button>
                                </a>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            {totalPages > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-gray-200 text-gray-700 rounded-full z-10 shadow-md md:-left-5"
                  onClick={prevPage}
                  aria-label="Página anterior"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-gray-200 text-gray-700 rounded-full z-10 shadow-md md:-right-5"
                  onClick={nextPage}
                  aria-label="Página siguiente"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            {/* Dots */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentPage ? "bg-blue-600" : "bg-gray-300"}`}
                    aria-label={`Ir a página ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
