"use client"

import { useTranslations } from "next-intl"
import ImageWithFallback from "./image-with-fallback"

interface SponsorLogo {
  name: string
  src: string
  width: number
  url?: string
  featured?: boolean
}

const sponsorLogos: SponsorLogo[] = [
  {
    name: "Dole",
    src: "/images/sponsors/dole-logo.svg",
    width: 100,
  },
  {
    name: "Treos",
    src: "/images/sponsors/treos-logo.svg",
    width: 110,
  },
  {
    name: "Vlack",
    src: "/images/sponsors/vlack-logo.webp",
    width: 320,
    url: "https://vlackhockey.com.ar",
    featured: true,
  },
  {
    name: "Maraton",
    src: "/images/sponsors/maraton.png",
    width: 70,
  },
  {
    name: "Algabo",
    src: "/images/sponsors/algabo.png",
    width: 100,
  },
]

export default function SponsorsSection() {
  const t = useTranslations("sponsors")

  return (
    <section className="py-16 bg-gray-950 relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent-400 font-semibold text-xs uppercase tracking-widest mb-3 block">
            Partners
          </span>
          <h2 className="text-2xl font-bold text-white">{t("title")}</h2>
        </div>

        {/* Featured sponsor */}
        {sponsorLogos.filter((l) => l.featured).map((logo) => (
          <div key={logo.name} className="flex flex-col items-center mb-10">
            <span className="text-white/50 text-xs uppercase tracking-widest mb-4">Main Sponsor</span>
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <ImageWithFallback
                src={logo.src || "/placeholder.svg"}
                alt={`${logo.name} - ${t("officialSponsor")}`}
                fallbackSrc={`/placeholder.svg?height=64&width=${logo.width}&query=${logo.name}%20logo`}
                className="h-20 md:h-24 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
                style={{ maxWidth: logo.width }}
              />
            </a>
          </div>
        ))}

        {/* Other sponsors */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
          {sponsorLogos.filter((l) => !l.featured).map((logo) => {
            const image = (
              <ImageWithFallback
                src={logo.src || "/placeholder.svg"}
                alt={`${logo.name} - ${t("officialSponsor")}`}
                fallbackSrc={`/placeholder.svg?height=64&width=${logo.width}&query=${logo.name}%20logo`}
                className="h-9 md:h-12 w-auto object-contain filter brightness-0 invert opacity-40 hover:opacity-80 transition-all duration-300 hover:scale-105"
                style={{ maxWidth: logo.width }}
              />
            )

            return (
              <div key={logo.name} className="flex items-center justify-center">
                {logo.url ? (
                  <a href={logo.url} target="_blank" rel="noopener noreferrer">
                    {image}
                  </a>
                ) : (
                  image
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
