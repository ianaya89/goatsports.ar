"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import ImageWithFallback from "./image-with-fallback"

interface CampusPromoModalProps {
  isOpen: boolean
  onClose: () => void
}

interface PromoEvent {
  id: string
  badge: string
  title: string
  titleAccent: string
  description: string
  image: string
  imagePosition?: string
  link: string
  cta: string
  stats: { value: string; label: string }[]
  hidden?: boolean
}

const allEvents: PromoEvent[] = [
  {
    id: "matreros-2026",
    hidden: true,
    badge: "Inscripciones abiertas",
    title: "Clínica GOAT x Los Matreros",
    titleAccent: "28 de Noviembre 2026",
    description:
      "Por primera vez la clínica GOAT llega a Los Matreros. Jugamos por la primera cancha de hockey de agua del club.",
    image: "https://matreros.goatsports.ar/images/portada.jpg",
    link: "https://matreros.goatsports.ar",
    cta: "Quiero inscribirme",
    stats: [
      { value: "28 Nov", label: "9 a 13hs" },
      { value: "Castelar", label: "Los Matreros" },
      { value: "1ra Edición", label: "Por la cancha de agua" },
    ],
  },
  {
    id: "showcase-2026",
    badge: "Inscripciones abiertas",
    title: "Showcase by US Full Ride",
    titleAccent: "21 de Septiembre 2026",
    description:
      "Mostrá tu nivel en GEBA y dá el próximo paso hacia el hockey universitario en USA. Cupos limitados.",
    image: "/images/orlando-experience.jpg",
    imagePosition: "object-top",
    link: "https://usa.goatsports.ar",
    cta: "Quiero inscribirme",
    stats: [
      { value: "21 Sept", label: "2026" },
      { value: "GEBA", label: "Buenos Aires" },
      { value: "US Full Ride", label: "Universidades USA" },
    ],
  },
]

const events = allEvents.filter((e) => !e.hidden)

export default function CampusPromoModal({ isOpen, onClose }: CampusPromoModalProps) {
  const [mounted, setMounted] = useState(false)
  const [index, setIndex] = useState(0)

  const event = events[index]
  const hasMultiple = events.length > 1

  const goTo = (next: number) => {
    setMounted(false)
    setIndex((next + events.length) % events.length)
  }

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setMounted(true), 100)
      return () => clearTimeout(timer)
    }
    setMounted(false)
    setIndex(0)
  }, [isOpen])

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[520px] max-h-[90vh] w-[calc(100%-2rem)] overflow-y-auto p-0 border-0 rounded-2xl shadow-2xl shadow-blue-900/30 bg-[#00237c] [&>button:last-child]:hidden gap-0">
        <DialogTitle className="sr-only">Próximo evento: {event.title}</DialogTitle>

        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4 pb-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-200/60 font-semibold font-heading">
              Próximos eventos
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-all flex items-center justify-center touch-manipulation"
            aria-label="Cerrar"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2.5} />
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full h-44 sm:h-52 overflow-hidden mt-3">
          <ImageWithFallback
            key={event.id}
            src={event.image}
            alt={event.title}
            fallbackSrc="/placeholder-kngc1.png"
            className={`w-full h-full object-cover ${event.imagePosition || "object-center"} scale-105 transition-all duration-500`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00237c]/10 via-transparent to-[#00237c]" />
          <div
            className="absolute -bottom-1 left-0 right-0 h-12"
            style={{ background: "#00237c", clipPath: "polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)" }}
          />
          <div className={`absolute top-3 left-3 z-10 transition-all duration-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
            <span className="inline-flex items-center gap-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 shadow-lg bg-amber-400 text-[#00237c]">
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-pulse" />
              {event.badge}
            </span>
          </div>

          {hasMultiple && (
            <>
              <button
                onClick={() => goTo(index - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors touch-manipulation"
                aria-label="Evento anterior"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
              </button>
              <button
                onClick={() => goTo(index + 1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors touch-manipulation"
                aria-label="Evento siguiente"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="relative px-5 pb-5 sm:px-6 sm:pb-6 -mt-1">

          {/* Title */}
          <div className={`text-center mb-3 transition-all duration-400 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-heading leading-[0.95] tracking-tight">
              {event.title}
              <span className="block text-amber-400">{event.titleAccent}</span>
            </h2>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-2 mb-3 transition-all duration-400 delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {event.stats.map((stat) => (
              <div key={stat.label} className="bg-white/[0.06] border border-white/[0.08] rounded-xl py-2.5 px-2 text-center">
                <p className="text-base sm:text-lg font-black text-white font-heading leading-none mb-0.5">{stat.value}</p>
                <p className="text-[9px] uppercase tracking-wider text-blue-200/50 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className={`mb-4 transition-all duration-400 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className="text-xs sm:text-sm text-blue-100/70 text-center leading-relaxed">{event.description}</p>
          </div>

          {/* CTA */}
          <div className={`space-y-2 transition-all duration-400 delay-[350ms] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <a href={event.link} target="_blank" rel="noopener noreferrer" className="group block w-full">
              <div className="bg-amber-400 hover:bg-amber-300 text-[#00237c] font-extrabold py-3.5 text-center text-sm uppercase tracking-wide transition-colors duration-200 rounded-xl">
                <span className="flex items-center justify-center gap-2 font-heading">
                  {event.cta}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </div>
            </a>

            {hasMultiple && (
              <div className="flex items-center justify-center gap-2 pt-1">
                {events.map((e, i) => (
                  <button
                    key={e.id}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-amber-400" : "w-1.5 bg-white/25 hover:bg-white/40"}`}
                    aria-label={`Ver ${e.title}`}
                    aria-current={i === index}
                  />
                ))}
              </div>
            )}

            <button
              onClick={onClose}
              className="w-full text-blue-300/30 hover:text-blue-200/50 py-1.5 text-xs font-medium transition-colors touch-manipulation"
            >
              Tal vez más tarde
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
