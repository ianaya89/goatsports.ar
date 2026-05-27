"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X, ArrowRight } from "lucide-react"
import ImageWithFallback from "./image-with-fallback"

interface CampusPromoModalProps {
  isOpen: boolean
  onClose: () => void
}

const events = [
  {
    id: "winter-2026",
    tab: "Invierno 2026",
    title: "Campus Invierno",
    titleAccent: "2026 · GEBA",
    subtitle: "Buenos Aires",
    description: "Campus Invierno 2026 en GEBA. Inscripciones abiertas para todas las categorías.",
    image: "/images/winter25.jpeg",
    link: "https://winter.goatsports.ar",
    tagLabel: "Inscripciones abiertas",
    tagClass: "bg-amber-400 text-[#00237c]",
    stats: [
      { value: "GEBA", label: "Buenos Aires" },
      { value: "Jul/Ago", label: "2026" },
      { value: "Abiertas", label: "Inscripciones" },
    ],
    usBranch: {
      label: "Categoría Elite dentro de este campus",
      title: "US Full Ride × GOAT",
      description: "Orientación universitaria USA. Evaluación técnica, video para tu perfil y proceso de becas NCAA. Para jugadoras nacidas desde 2008.",
      image: "/images/showcase.png",
    },
  },
  {
    id: "rosario-2026",
    tab: "Rosario 2026",
    title: "Campus Rosario",
    titleAccent: "2026",
    subtitle: "Estancia Damfield · Santa Fe",
    description: "La experiencia GOAT llega a Rosario. Instalaciones de primer nivel en Estancia Damfield. Inscripciones abiertas.",
    image: "https://rosario.goatsports.ar/images/portada.jpg",
    link: "https://rosario.goatsports.ar",
    tagLabel: "Inscripciones abiertas",
    tagClass: "bg-amber-400 text-[#00237c]",
    stats: [
      { value: "Rosario", label: "Santa Fe" },
      { value: "Damfield", label: "Estancia" },
      { value: "2026", label: "Nueva edición" },
    ],
    usBranch: null,
  },
  {
    id: "montegrande-2026",
    tab: "Monte Grande",
    title: "Campus Semana Santa",
    titleAccent: "Monte Grande",
    subtitle: "MGRC · Zona Sur",
    description: "Viví una experiencia GOAT en Monte Grande Rugby Club durante Semana Santa. Ambiente profesional y divertido.",
    image: "/images/mgrc25.jpeg",
    link: "https://montegrande.goatsports.ar",
    tagLabel: "Inscripciones abiertas",
    tagClass: "bg-green-400 text-[#00237c]",
    stats: [
      { value: "MGRC", label: "Monte Grande" },
      { value: "Abril", label: "2026" },
      { value: "GBA", label: "Zona Sur" },
    ],
    usBranch: null,
  },
]

export default function CampusPromoModal({ isOpen, onClose }: CampusPromoModalProps) {
  const [mounted, setMounted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setMounted(true), 100)
      return () => clearTimeout(timer)
    } else {
      setMounted(false)
      setActiveIndex(0)
      setPaused(false)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || paused) return
    const interval = setInterval(() => {
      setActiveIndex((i) => (i === events.length - 1 ? 0 : i + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [isOpen, paused])

  const handleTabClick = (i: number) => {
    setActiveIndex(i)
    setPaused(true)
    const t = setTimeout(() => setPaused(false), 10000)
    return () => clearTimeout(t)
  }

  const event = events[activeIndex]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[520px] max-h-[90vh] w-[calc(100%-2rem)] overflow-y-auto p-0 border-0 rounded-2xl shadow-2xl shadow-blue-900/30 bg-[#00237c] [&>button:last-child]:hidden gap-0">
        <DialogTitle className="sr-only">Próximos Campus GOAT Sports 2026</DialogTitle>

        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4 pb-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-200/60 font-semibold font-heading">
              {events.length} próximos campus · 2026
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

        {/* Named tabs */}
        <div className="flex gap-1.5 px-4 pt-3 pb-0 overflow-x-auto scrollbar-none">
          {events.map((e, i) => (
            <button
              key={e.id}
              onClick={() => handleTabClick(i)}
              className={`flex-shrink-0 text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full transition-all duration-200 font-heading ${
                i === activeIndex
                  ? "bg-amber-400 text-[#00237c] shadow-lg"
                  : "bg-white/10 text-white/50 hover:bg-white/20 hover:text-white/80"
              }`}
            >
              {e.tab}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        {!paused && (
          <div className="px-4 pt-2">
            <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
              <div
                key={`${activeIndex}-${paused}`}
                className="h-full bg-amber-400/60 rounded-full"
                style={{ animation: "progress-bar 5s linear forwards" }}
              />
            </div>
          </div>
        )}

        {/* Image */}
        <div className="relative w-full h-40 sm:h-48 overflow-hidden mt-3">
          <ImageWithFallback
            src={event.image}
            alt={event.title}
            fallbackSrc="/placeholder-kngc1.png"
            className="w-full h-full object-cover scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00237c]/10 via-transparent to-[#00237c]" />
          <div
            className="absolute -bottom-1 left-0 right-0 h-12"
            style={{ background: "#00237c", clipPath: "polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)" }}
          />
          <div className={`absolute top-3 left-3 z-10 transition-all duration-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
            <span className={`inline-flex items-center gap-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 shadow-lg ${event.tagClass}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-pulse" />
              {event.tagLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative px-5 pb-5 sm:px-6 sm:pb-6 -mt-1">

          {/* Title */}
          <div className={`text-center mb-3 transition-all duration-400 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-heading leading-[0.95] tracking-tight">
              {event.title}
              <span className="block text-amber-400">{event.titleAccent}</span>
            </h2>
            <p className="text-xs font-semibold text-blue-200/60 uppercase tracking-widest font-heading mt-1">
              {event.subtitle}
            </p>
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
          <div className={`mb-3 transition-all duration-400 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className="text-xs sm:text-sm text-blue-100/70 text-center leading-relaxed">{event.description}</p>
          </div>

          {/* US Full Ride branch callout — Winter 2026 only */}
          {event.usBranch && (
            <div className={`mb-4 transition-all duration-500 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="rounded-xl overflow-hidden border border-cyan-400/30 bg-white/[0.04]">
                {/* Branch label */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-400/10 border-b border-cyan-400/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
                  <span className="text-[9px] uppercase tracking-[0.18em] text-cyan-300/80 font-bold font-heading">
                    {event.usBranch.label}
                  </span>
                </div>
                {/* Branch content */}
                <div className="flex gap-3 p-3">
                  <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white/10">
                    <ImageWithFallback
                      src={event.usBranch.image}
                      alt="US Full Ride"
                      fallbackSrc="/images/showcase-usa.jpg"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-black text-cyan-300 font-heading leading-tight mb-1">
                      {event.usBranch.title}
                    </p>
                    <p className="text-[10px] text-blue-200/60 leading-relaxed">
                      {event.usBranch.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className={`space-y-2 transition-all duration-400 delay-[350ms] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <a href={event.link} target="_blank" rel="noopener noreferrer" className="group block w-full">
              <div className="bg-amber-400 hover:bg-amber-300 text-[#00237c] font-extrabold py-3.5 text-center text-sm uppercase tracking-wide transition-colors duration-200 rounded-xl">
                <span className="flex items-center justify-center gap-2 font-heading">
                  ¡Inscribirme ahora!
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </div>
            </a>
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
