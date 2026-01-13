"use client"

import type React from "react"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface StaffMember {
  id: number
  name: string
  translationKey: string
  imageUrl: string
}

const staffMembers: StaffMember[] = [
  {
    id: 2,
    name: "Santiago Tarazona",
    translationKey: "santiago",
    imageUrl: "santi.jpg",
  },
  {
    id: 3,
    name: "Gonzalo Basualdo",
    translationKey: "gonzalo",
    imageUrl: "gonza.jpg",
  },
  {
    id: 4,
    name: "Thomas Habif",
    translationKey: "thomas",
    imageUrl: "thomas.jpg",
  },
  {
    id: 1,
    name: "Ignacio Anaya",
    translationKey: "ignacio",
    imageUrl: "nacho.jpg",
  },
]

export default function StaffCarousel() {
  const t = useTranslations("staff")
  const [currentPage, setCurrentPage] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Number of cards per page
  const cardsPerPage = 4

  // Calculate total number of pages
  const totalPages = Math.ceil(staffMembers.length / cardsPerPage)

  // The minimum swipe distance (in px) to trigger a slide change
  const minSwipeDistance = 50

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1))
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1))
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
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
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextPage()
    } else if (isRightSwipe) {
      prevPage()
    }
  }

  // Get current page items
  const getCurrentPageItems = () => {
    const startIdx = currentPage * cardsPerPage
    const endIdx = Math.min(startIdx + cardsPerPage, staffMembers.length)
    return staffMembers.slice(startIdx, endIdx)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
      <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => {
            const startIdx = pageIndex * cardsPerPage
            const pageItems = staffMembers.slice(
              startIdx,
              Math.min(startIdx + cardsPerPage, staffMembers.length)
            )

            return (
              <div key={pageIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
                  {pageItems.map((member) => (
                    <Card key={member.id} className="border-none shadow-lg h-full">
                      <CardContent className="p-0 flex flex-col h-full">
                        <div className="w-full h-48">
                          <img
                            src={`images/${member.imageUrl}?height=200&width=300`}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                          <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                          <p className="text-blue-600 font-medium mb-2">{t(`members.${member.translationKey}.position`)}</p>
                          <p className="text-gray-600 text-sm">{t(`members.${member.translationKey}.bio`)}</p>
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
            aria-label={t("prevPage")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-gray-200 text-gray-700 rounded-full z-10 shadow-md md:-right-5"
            onClick={nextPage}
            aria-label={t("nextPage")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentPage ? "bg-blue-600" : "bg-gray-300"}`}
              aria-label={`${t("goToPage")} ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
