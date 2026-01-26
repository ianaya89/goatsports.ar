"use client"

import { useTranslations } from "next-intl"
import ImageWithFallback from "./image-with-fallback"

interface SponsorLogo {
  name: string
  src: string
  width: number
}

const sponsorLogos: SponsorLogo[] = [
  {
    name: "Dole",
    src: "/images/sponsors/dole-logo.svg",
    width: 140,
  },
  {
    name: "Treos",
    src: "/images/sponsors/treos-logo.svg",
    width: 160,
  },
  {
    name: "Maraton",
    src: "/images/sponsors/maraton.png",
    width: 100,
  },
  {
    name: "Algabo",
    src: "/images/sponsors/algabo.png",
    width: 140,
  },
]

export default function SponsorsSection() {
  const t = useTranslations("sponsors")

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">{t("title")}</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm">
            {t("description")}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {sponsorLogos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <ImageWithFallback
                src={logo.src || "/placeholder.svg"}
                alt={`${logo.name} - ${t("officialSponsor")}`}
                fallbackSrc={`/placeholder.svg?height=64&width=${logo.width}&query=${logo.name}%20logo`}
                className="h-12 md:h-16 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                style={{ maxWidth: logo.width }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
