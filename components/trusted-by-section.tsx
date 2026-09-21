"use client"

import { useTranslations } from "next-intl"
import AnimateOnScroll from "./animate-on-scroll"

interface Club {
  name: string
  logo: string
}

const clubs: Club[] = [
  { name: "GEBA", logo: "/images/clubs/geba.png" },
  { name: "Club Comunicaciones", logo: "/images/clubs/comunicaciones.png" },
  { name: "Club DAOM", logo: "/images/clubs/daom.png" },
  { name: "Los Matreros", logo: "/images/clubs/matreros.png" },
  { name: "Monte Grande RC", logo: "/images/clubs/montegrande.png" },
  { name: "CISSAB", logo: "/images/clubs/cissab.png" },
  { name: "Estancia Damfield", logo: "/images/clubs/damfield.png" },
]

export default function TrustedBySection() {
  const t = useTranslations("trustedBy")

  return (
    <section className="py-16 tablet:py-20 bg-white relative border-y border-gray-100" id="trusted-by">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest mb-2 block">
              {t("eyebrow")}
            </span>
            <h2 className="text-3xl tablet:text-4xl font-bold mb-4 text-gray-900">{t("title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{t("description")}</p>
          </div>
        </AnimateOnScroll>

        <ul className="flex flex-wrap items-start justify-center gap-x-6 gap-y-10 tablet:gap-x-10 max-w-6xl mx-auto">
          {clubs.map((club, i) => (
            <li key={club.name} className="w-28 tablet:w-32">
              <AnimateOnScroll delay={0.05 * i} className="group flex flex-col items-center text-center">
                <div className="h-20 w-full flex items-center justify-center mb-3">
                  <img
                    src={club.logo}
                    alt=""
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 leading-tight">
                  {club.name}
                </span>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
