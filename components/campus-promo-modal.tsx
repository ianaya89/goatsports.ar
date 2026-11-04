"use client"

import { useState, useEffect, useMemo } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X, ArrowUpRight } from "lucide-react"

interface CampusPromoModalProps {
  isOpen: boolean
  onClose: () => void
}

interface PromoEvent {
  id: string
  kind: "Clínica" | "Campus"
  club: string
  start: string
  end?: string
  time: string
  place: string
  status?: string
  statusUntil?: string
  image: string
  clubLogo?: string
  link: string
  hidden?: boolean
}

const allEvents: PromoEvent[] = [
  {
    id: "matreros-2026",
    kind: "Clínica",
    club: "Los Matreros",
    start: "2026-11-28",
    time: "9 a 13hs",
    place: "Castelar",
    image: "https://matreros.goatsports.ar/images/portada.jpg",
    clubLogo: "/images/clubs/matreros.png",
    link: "https://matreros.goatsports.ar",
  },
  {
    id: "rosario-verano-2026",
    kind: "Campus",
    club: "Estancia Damfield",
    start: "2026-12-11",
    end: "2026-12-13",
    time: "Vie 17–21 · S/D 9–13hs",
    place: "Funes, Rosario",
    status: "Preventa",
    statusUntil: "2026-11-10",
    image: "https://rosario.goatsports.ar/images/portada-grupo.jpg",
    clubLogo: "/images/clubs/damfield.png",
    link: "https://rosario.goatsports.ar",
  },
  {
    id: "daom-2026",
    kind: "Clínica",
    club: "Club DAOM",
    start: "2026-12-12",
    time: "9 a 13hs",
    place: "Bajo Flores",
    image: "https://daom.goatsports.ar/images/portada.jpg",
    clubLogo: "/images/clubs/daom.png",
    link: "https://daom.goatsports.ar",
  },
  {
    id: "comu-2026",
    kind: "Clínica",
    club: "Comunicaciones",
    start: "2026-12-13",
    time: "9 a 13hs",
    place: "Agronomía",
    image: "https://comu.goatsports.ar/images/portada.jpg",
    clubLogo: "/images/clubs/comunicaciones.png",
    link: "https://comu.goatsports.ar",
  },
  {
    id: "summer-dic-2026",
    kind: "Campus",
    club: "GEBA · Summer",
    start: "2026-12-14",
    end: "2026-12-18",
    time: "9 a 16hs",
    place: "Sede San Martín",
    status: "Preventa",
    image: "https://summer.goatsports.ar/images/portada-grupo.jpg",
    clubLogo: "/images/clubs/geba.png",
    link: "https://summer.goatsports.ar",
  },
]

const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
const WEEKDAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
const DAY_MS = 86_400_000

const parseDate = (iso: string) => new Date(`${iso}T00:00:00`)

function countdown(start: Date, today: Date) {
  const days = Math.round((start.getTime() - today.getTime()) / DAY_MS)
  if (days <= 0) return "Hoy"
  if (days === 1) return "Mañana"
  return `En ${days} días`
}

export default function CampusPromoModal({ isOpen, onClose }: CampusPromoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!isOpen) return setMounted(false)
    const timer = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(timer)
  }, [isOpen])

  const { today, groups, total } = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const upcoming = allEvents
      .filter((e) => !e.hidden && parseDate(e.end ?? e.start) >= today)
      .sort((a, b) => a.start.localeCompare(b.start))

    const groups: { month: string; events: PromoEvent[] }[] = []
    for (const e of upcoming) {
      const d = parseDate(e.start)
      const month = `${MONTHS[d.getMonth()]} ${d.getFullYear()}`
      const last = groups[groups.length - 1]
      if (last?.month === month) last.events.push(e)
      else groups.push({ month, events: [e] })
    }
    return { today, groups, total: upcoming.length }
  }, [isOpen])

  if (total === 0) return null

  const nextId = groups[0].events[0].id
  let row = 0

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[560px] max-h-[90vh] w-[calc(100%-2rem)] flex flex-col p-0 border-0 rounded-2xl shadow-2xl shadow-blue-950/50 bg-[#00237c] overflow-hidden [&>button:last-child]:hidden gap-0">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #fff 0 1px, transparent 1px 56px), repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 56px)",
            maskImage: "linear-gradient(to bottom, black, transparent 45%)",
          }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />

        <header className="relative flex items-center justify-between gap-4 px-5 pt-4 pb-3 sm:px-6 sm:pt-5">
          <div>
            <div className="mb-1.5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-blue-200/70 font-semibold font-heading">
                Agenda GOAT · {total} {total === 1 ? "fecha" : "fechas"}
              </span>
            </div>
            <DialogTitle className="text-2xl sm:text-3xl font-black text-white font-heading leading-[0.9] tracking-tight">
              Próximas <span className="text-amber-400">fechas</span>
            </DialogTitle>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-9 h-9 rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-all flex items-center justify-center touch-manipulation"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </header>

        <div className="relative min-h-0 flex-1 overflow-y-auto px-3 pb-1 sm:px-5">
          {groups.map((group) => (
            <section key={group.month} className="mb-2 last:mb-0">
              <div className="flex items-center gap-3 px-1 py-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-amber-400 font-heading">
                  {group.month}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-amber-400/40 to-transparent" />
              </div>

              <ol className="space-y-1.5">
                {group.events.map((event) => {
                  const start = parseDate(event.start)
                  const end = event.end ? parseDate(event.end) : null
                  const isNext = event.id === nextId
                  const delay = 60 + row++ * 70
                  const showStatus = event.status && (!event.statusUntil || parseDate(event.statusUntil) >= today)

                  return (
                    <li
                      key={event.id}
                      style={{ transitionDelay: `${delay}ms` }}
                      className={`transition-all duration-500 ease-out ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                    >
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative flex items-stretch overflow-hidden rounded-xl border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                          isNext
                            ? "border-amber-400/50 bg-white/[0.07]"
                            : "border-white/[0.08] bg-white/[0.04] hover:border-white/20"
                        }`}
                      >
                        <img
                          src={event.image}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
                            isNext ? "opacity-30" : "opacity-[0.12] group-hover:opacity-30"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00237c] via-[#00237c]/85 to-[#00237c]/40" />

                        <div
                          className={`relative flex w-16 sm:w-[72px] shrink-0 flex-col items-center justify-center border-r border-dashed py-2 ${
                            isNext ? "border-amber-400/40 bg-amber-400 text-[#00237c]" : "border-white/15 text-white"
                          }`}
                        >
                          <span className={`text-[9px] font-bold uppercase tracking-[0.15em] ${isNext ? "text-[#00237c]/70" : "text-blue-200/60"}`}>
                            {end ? `${WEEKDAYS[start.getDay()]}–${WEEKDAYS[end.getDay()]}` : WEEKDAYS[start.getDay()]}
                          </span>
                          <span className={`font-heading font-black leading-none tabular-nums tracking-tighter ${end ? "text-lg sm:text-xl" : "text-2xl sm:text-[28px]"}`}>
                            {end ? `${start.getDate()}–${end.getDate()}` : start.getDate()}
                          </span>
                        </div>

                        <div className="relative flex min-w-0 flex-1 items-center gap-2.5 px-3 py-2 sm:px-4">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <h3 className="truncate font-heading text-[15px] sm:text-base font-black leading-tight text-white">
                                {event.club}
                              </h3>
                              {isNext && (
                                <span className="shrink-0 rounded-sm bg-amber-400 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-[#00237c]">
                                  {countdown(start, today)}
                                </span>
                              )}
                              {showStatus && (
                                <span className="shrink-0 rounded-sm bg-amber-400/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-300">
                                  {event.status}
                                </span>
                              )}
                            </div>
                            <p className="mt-0.5 truncate text-[11px] text-blue-100/60">
                              <span className="font-bold uppercase tracking-wider text-blue-100/80">{event.kind}</span>
                              {" · "}
                              {event.place}
                              {" · "}
                              {event.time}
                            </p>
                          </div>

                          {event.clubLogo && (
                            <img
                              src={event.clubLogo}
                              alt=""
                              aria-hidden="true"
                              className="hidden sm:block h-8 w-8 shrink-0 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.55)]"
                            />
                          )}

                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45 ${
                              isNext ? "bg-amber-400 text-[#00237c]" : "bg-white/10 text-white group-hover:bg-amber-400 group-hover:text-[#00237c]"
                            }`}
                          >
                            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                          </span>
                        </div>
                        <span className="sr-only">Inscribirme: {event.kind} {event.club}</span>
                      </a>
                    </li>
                  )
                })}
              </ol>
            </section>
          ))}
        </div>

        <footer className="relative px-5 pt-1 pb-3 sm:px-6">
          <button
            onClick={onClose}
            className="w-full text-blue-300/50 hover:text-blue-200/80 py-1.5 text-xs font-medium transition-colors touch-manipulation"
          >
            Tal vez más tarde
          </button>
        </footer>
      </DialogContent>
    </Dialog>
  )
}
