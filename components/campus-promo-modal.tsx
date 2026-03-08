"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X, ArrowRight } from "lucide-react"
import ImageWithFallback from "./image-with-fallback"

interface CampusPromoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CampusPromoModal({ isOpen, onClose }: CampusPromoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setMounted(true), 100)
      return () => clearTimeout(timer)
    } else {
      setMounted(false)
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[520px] max-h-[85vh] w-[calc(100%-2rem)] overflow-y-auto p-0 border-0 rounded-2xl shadow-2xl shadow-blue-900/30 bg-[#00237c] [&>button:last-child]:hidden gap-0">
        <DialogTitle className="sr-only">Showcase USA - Becas Universitarias de Hockey</DialogTitle>

        {/* === TOP: Image with diagonal clip === */}
        <div className="relative w-full h-40 sm:h-56 overflow-hidden">
          <ImageWithFallback
            src="/images/showcase-usa.jpg"
            alt="Showcase USA - Becas Universitarias"
            fallbackSrc="/placeholder-kngc1.png"
            className="w-full h-full object-cover scale-105"
          />
          {/* Dark vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#00237c]/30 via-transparent to-[#00237c]" />

          {/* Diagonal cut at bottom */}
          <div
            className="absolute -bottom-1 left-0 right-0 h-16"
            style={{
              background: "#00237c",
              clipPath: "polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/60 transition-all flex items-center justify-center touch-manipulation"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" strokeWidth={2.5} />
          </button>

          {/* Badge */}
          <div
            className={`absolute top-3 left-3 z-10 transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 text-[#00237c] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00237c] animate-pulse" />
              Inscripciones abiertas
            </span>
          </div>

          {/* USA flag accent line */}
          <div className="absolute bottom-14 left-0 right-0 flex h-[3px]">
            <div className="flex-1 bg-blue-400/60" />
            <div className="flex-1 bg-white/60" />
            <div className="flex-1 bg-red-400/60" />
          </div>
        </div>

        {/* === CONTENT on navy background === */}
        <div className="relative px-5 pb-5 sm:px-6 sm:pb-6 -mt-2">
          {/* Collab line */}
          <div
            className={`flex items-center gap-3 mb-3 sm:mb-4 transition-all duration-500 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-400/40" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-200/60 font-semibold font-heading whitespace-nowrap">
              GOAT Sports &times; US Full Ride
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-400/40" />
          </div>

          {/* Title block */}
          <div
            className={`text-center mb-3 sm:mb-5 transition-all duration-600 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-2xl sm:text-4xl font-black text-white font-heading leading-[0.95] tracking-tight mb-1 sm:mb-2">
              SHOWCASE
              <span className="block text-amber-400">USA 🇺🇸</span>
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-blue-200/70 uppercase tracking-widest font-heading">
              Becas universitarias de hockey
            </p>
          </div>

          {/* Stats row */}
          <div
            className={`grid grid-cols-3 gap-2 mb-3 sm:mb-5 transition-all duration-500 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              { value: "100%", label: "Becas" },
              { value: "GEBA", label: "Buenos Aires" },
              { value: "14-22", label: "Años" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="relative bg-white/[0.06] border border-white/[0.08] rounded-xl py-2.5 sm:py-3 px-2 text-center group hover:bg-white/[0.1] transition-colors"
              >
                <p className="text-lg sm:text-xl font-black text-white font-heading leading-none mb-0.5">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-blue-200/50 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div
            className={`mb-4 sm:mb-6 transition-all duration-500 delay-[400ms] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xs sm:text-sm text-blue-100/70 text-center leading-relaxed">
              Evaluación técnica y táctica, grabación en video y charla
              informativa sobre becas <span className="text-amber-400/90 font-semibold">NCAA</span>.
              Estudiá y jugá al hockey en universidades de Estados Unidos.
            </p>
          </div>

          {/* CTA */}
          <div
            className={`space-y-2.5 transition-all duration-500 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="https://usa.goatsports.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full overflow-hidden rounded-xl"
            >
              <div className="relative bg-amber-400 hover:bg-amber-300 text-[#00237c] font-extrabold py-3.5 text-center text-sm uppercase tracking-wide transition-colors duration-200">
                <span className="relative z-10 flex items-center justify-center gap-2 font-heading">
                  ¡Quiero saber más!
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </div>
            </a>

            <button
              onClick={onClose}
              className="w-full text-blue-300/40 hover:text-blue-200/60 py-2 text-xs font-medium transition-colors touch-manipulation"
            >
              Tal vez más tarde
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
