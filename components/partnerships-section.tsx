"use client"

import { useTranslations } from "next-intl"
import { CheckCircle2, ArrowRight } from "lucide-react"
import ImageWithFallback from "./image-with-fallback"
import { Button } from "@/components/ui/button"

export default function PartnershipsSection() {
  const t = useTranslations("partnerships")

  return (
    <section className="relative overflow-hidden" id="becas-usa">
      <div
        className="py-16 tablet:py-24 relative"
        style={{
          background: "linear-gradient(135deg, #1a1f4e 0%, #00237c 50%, #1a3a8f 100%)",
        }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 tablet:w-48 overflow-hidden opacity-20 tablet:opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#00237c] z-10"></div>
          <svg viewBox="0 0 100 200" className="h-full w-full" preserveAspectRatio="xMinYMin slice">
            <rect fill="#B22234" x="0" y="0" width="100" height="15.38" />
            <rect fill="#FFFFFF" x="0" y="15.38" width="100" height="15.38" />
            <rect fill="#B22234" x="0" y="30.77" width="100" height="15.38" />
            <rect fill="#FFFFFF" x="0" y="46.15" width="100" height="15.38" />
            <rect fill="#B22234" x="0" y="61.54" width="100" height="15.38" />
            <rect fill="#FFFFFF" x="0" y="76.92" width="100" height="15.38" />
            <rect fill="#B22234" x="0" y="92.31" width="100" height="15.38" />
            <rect fill="#FFFFFF" x="0" y="107.69" width="100" height="15.38" />
            <rect fill="#B22234" x="0" y="123.08" width="100" height="15.38" />
            <rect fill="#FFFFFF" x="0" y="138.46" width="100" height="15.38" />
            <rect fill="#B22234" x="0" y="153.85" width="100" height="15.38" />
            <rect fill="#FFFFFF" x="0" y="169.23" width="100" height="15.38" />
            <rect fill="#B22234" x="0" y="184.62" width="100" height="15.38" />
            <rect fill="#3C3B6E" x="0" y="0" width="40" height="107.69" />
            {[...Array(5)].map((_, row) =>
              [...Array(6)].map((_, col) => (
                <circle key={`star-${row}-${col}`} fill="white" cx={3.3 + col * 6.6} cy={5.4 + row * 21.5} r="2" />
              ))
            )}
            {[...Array(4)].map((_, row) =>
              [...Array(5)].map((_, col) => (
                <circle key={`star2-${row}-${col}`} fill="white" cx={6.6 + col * 6.6} cy={16.2 + row * 21.5} r="2" />
              ))
            )}
          </svg>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 tablet:mb-14">
            <h2 className="text-3xl tablet:text-5xl desktop:text-6xl font-black mb-6 text-white tracking-tight uppercase">
              {t("headline")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                {t("headlineHighlight")}
              </span>
            </h2>
          </div>

          <div className="flex flex-col tablet:flex-row items-center justify-center gap-6 tablet:gap-10 mb-8">
            <div>
              <ImageWithFallback
                src="/images/partnerships/us-full-ride-logo.png"
                alt="US Full Ride"
                fallbackSrc="/placeholder.svg?height=60&width=160&query=US%20Full%20Ride%20logo"
                className="h-14 tablet:h-16 w-auto object-contain brightness-0 invert drop-shadow-lg"
                style={{ maxWidth: 200 }}
              />
            </div>

            <span className="text-4xl tablet:text-5xl font-bold text-white/80">&</span>

            <div>
              <ImageWithFallback
                src="/images/goat-sports-logo.png"
                alt="GOAT Sports"
                fallbackSrc="/placeholder.svg?height=60&width=160&query=GOAT%20Sports%20logo"
                className="h-14 tablet:h-16 w-auto object-contain brightness-0 invert drop-shadow-lg"
                style={{ maxWidth: 200 }}
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-xl tablet:text-2xl desktop:text-3xl font-bold text-white uppercase tracking-wide">
              {t("tagline")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 tablet:p-10 border border-white/20">
              <h3 className="text-2xl tablet:text-3xl font-bold text-white mb-6 text-center">{t("allianceTitle")}</h3>
              <p className="text-white/90 text-lg tablet:text-xl leading-relaxed text-center mb-8">
                <strong className="text-cyan-300">GOAT Sports</strong> y{" "}
                <strong className="text-cyan-300">US Full Ride</strong> {t("allianceDescription")}
              </p>

              <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t("benefits.scholarships.title")}</h4>
                    <p className="text-white/70 text-sm">{t("benefits.scholarships.description")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t("benefits.competition.title")}</h4>
                    <p className="text-white/70 text-sm">{t("benefits.competition.description")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t("benefits.support.title")}</h4>
                    <p className="text-white/70 text-sm">{t("benefits.support.description")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t("benefits.network.title")}</h4>
                    <p className="text-white/70 text-sm">{t("benefits.network.description")}</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a href="https://usfullride.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group uppercase tracking-wide"
                  >
                    {t("cta")}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 tablet:gap-8 max-w-3xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl tablet:text-5xl font-black text-white mb-1">100+</div>
              <div className="text-white/60 text-sm tablet:text-base">{t("stats.athletes")}</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl tablet:text-5xl font-black text-white mb-1">50+</div>
              <div className="text-white/60 text-sm tablet:text-base">{t("stats.universities")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl tablet:text-5xl font-black text-white mb-1">100%</div>
              <div className="text-white/60 text-sm tablet:text-base">{t("stats.guidedProcess")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
