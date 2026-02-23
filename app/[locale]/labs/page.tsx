"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { ArrowLeft, ArrowRight, Activity, Cpu, BarChart3, Target, Play, ChevronRight, MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"
import AnimateOnScroll from "@/components/animate-on-scroll"
export default function LabsPage() {
  const t = useTranslations("labs")
  const whatsappLink = getWhatsAppLink(t("ctaWhatsapp"))

  const pillars = [
    { icon: Cpu, title: t("pillarSoftware"), desc: t("pillarSoftwareDesc"), tag: "01" },
    { icon: Activity, title: t("pillarHardware"), desc: t("pillarHardwareDesc"), tag: "02" },
    { icon: BarChart3, title: t("pillarMetrics"), desc: t("pillarMetricsDesc"), tag: "03" },
    { icon: Target, title: t("pillarTraining"), desc: t("pillarTrainingDesc"), tag: "04" },
  ]

  const steps = [
    { num: "01", title: t("step1Title"), desc: t("step1Desc") },
    { num: "02", title: t("step2Title"), desc: t("step2Desc") },
    { num: "03", title: t("step3Title"), desc: t("step3Desc") },
    { num: "04", title: t("step4Title"), desc: t("step4Desc") },
  ]

  const techFeatured = [
    {
      title: t("techVald"),
      desc: t("techValdDesc"),
      accent: "blue" as const,
    },
    {
      title: t("techGOATOS"),
      desc: t("techGOATOSDesc"),
      accent: "gold" as const,
      link: "https://os.goatsports.ar",
      linkText: t("techGOATOSLink"),
    },
  ]

  const techItems = [
    { title: t("techVideoAnalysis"), desc: t("techVideoAnalysisDesc"), icon: "◉" },
    { title: t("techGPS"), desc: t("techGPSDesc"), icon: "◎" },
  ]

  return (
    <div className="min-h-screen bg-blue-950 text-white selection:bg-accent-500/30 selection:text-white">
      {/* Scan line effect */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="labs-scan-line"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-blue-950/80 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <img
              src="/images/horizontal-logo-white.png"
              alt="GOAT Sports"
              className="h-8 tablet:h-9 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-400 font-semibold bg-accent-400/10 border border-accent-400/20 px-3 py-1 rounded-full">
              Labs
            </span>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-blue-950 px-4 py-2 rounded-full text-xs font-semibold transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t("heroCta")}</span>
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Grid background */}
        <div className="absolute inset-0 labs-grid-bg"></div>

        {/* Noise texture */}
        <div className="absolute inset-0 labs-noise opacity-50"></div>

        {/* Radial glows in brand colors */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/[0.08] rounded-full blur-[120px]"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent-500/[0.06] rounded-full blur-[100px]"></div>

        {/* Watermark */}
        <img
          src="/mosca.svg"
          alt=""
          aria-hidden="true"
          className="absolute right-[-8%] top-1/2 -translate-y-1/2 h-[70%] w-auto opacity-[0.04] pointer-events-none select-none"
          style={{ filter: "brightness(0) invert(1)" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo + Badge */}
            <AnimateOnScroll>
              <div className="flex flex-col items-center gap-5 mb-10">
                <img
                  src="/images/horizontal-logo-white.png"
                  alt="GOAT Sports"
                  className="h-14 tablet:h-16 w-auto"
                />
                <div className="inline-flex items-center gap-2 border border-accent-400/30 bg-accent-400/[0.08] rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse"></span>
                  <span className="text-xs font-mono uppercase tracking-widest text-accent-300">{t("badge")}</span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Title */}
            <AnimateOnScroll delay={0.1}>
              <h1 className="text-6xl tablet:text-8xl font-bold tracking-tighter mb-2 font-heading">
                <span className="text-white">GOAT</span>
                {" "}
                <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-accent-400 bg-clip-text text-transparent">
                  Labs
                </span>
              </h1>
            </AnimateOnScroll>

            {/* Subtitle */}
            <AnimateOnScroll delay={0.2}>
              <p className="text-lg tablet:text-2xl text-blue-200/50 font-heading tracking-wide mt-4 mb-8">
                {t("subtitle")}
              </p>
            </AnimateOnScroll>

            {/* Description */}
            <AnimateOnScroll delay={0.3}>
              <p className="text-base tablet:text-lg text-blue-100/60 max-w-2xl mx-auto leading-relaxed mb-12">
                {t("heroDescription")}
              </p>
            </AnimateOnScroll>

            {/* CTAs */}
            <AnimateOnScroll delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-accent-500 hover:bg-accent-400 text-blue-950 font-semibold px-8 py-4 rounded-full text-sm transition-all hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:scale-105 active:scale-95"
                >
                  {t("heroCta")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#process"
                  className="flex items-center gap-3 border border-white/30 hover:border-white/50 bg-white/[0.06] hover:bg-white/[0.1] text-white/90 hover:text-white px-8 py-4 rounded-full text-sm font-medium transition-all"
                >
                  <Play className="w-4 h-4" />
                  {t("heroCtaSecondary")}
                </a>
              </div>
            </AnimateOnScroll>
          </div>

        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950 to-transparent"></div>
      </section>

      {/* ===== PILLARS ===== */}
      <section className="py-24 tablet:py-32 relative overflow-hidden">
        {/* Subtle brand glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-20">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest mb-4 block">
                {t("pillarsLabel")}
              </span>
              <h2 className="text-3xl tablet:text-5xl font-bold font-heading tracking-tight mb-6">
                {t("pillarsTitle")}
              </h2>
              <p className="text-blue-200/45 text-lg leading-relaxed">
                {t("pillarsDescription")}
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="group relative bg-blue-900/20 border border-blue-400/[0.08] rounded-2xl p-8 tablet:p-10 hover:bg-blue-900/35 hover:border-blue-400/20 transition-all duration-500">
                  {/* Tag number */}
                  <span className="absolute top-6 right-8 font-mono text-[10px] text-blue-300/20 tracking-widest">
                    {pillar.tag}
                  </span>

                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/15 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 group-hover:border-blue-400/30 transition-all">
                    <pillar.icon className="w-5 h-5 text-blue-300" />
                  </div>

                  <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-accent-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-blue-200/40 leading-relaxed text-sm">
                    {pillar.desc}
                  </p>

                  {/* Hover corner accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 right-4 w-8 h-px bg-gradient-to-l from-accent-400/50 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 w-px h-8 bg-gradient-to-t from-accent-400/50 to-transparent"></div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" className="py-24 tablet:py-32 relative overflow-hidden">
        {/* Divider */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"></div>

        {/* Brand watermark */}
        <img
          src="/mosca.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-[-6%] top-1/2 -translate-y-1/2 h-[60%] w-auto opacity-[0.03] pointer-events-none select-none"
          style={{ filter: "brightness(0) invert(1)" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest mb-4 block">
                {t("processLabel")}
              </span>
              <h2 className="text-3xl tablet:text-5xl font-bold font-heading tracking-tight mb-6">
                {t("processTitle")}
              </h2>
              <p className="text-blue-200/45 text-lg leading-relaxed">
                {t("processDescription")}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Steps */}
          <div className="max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 0.15}>
                <div className="group flex gap-6 tablet:gap-10 mb-2 last:mb-0">
                  {/* Left: Number + Line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border-2 border-blue-400/15 group-hover:border-accent-400/50 flex items-center justify-center transition-all duration-500 bg-blue-950 relative z-10">
                      <span className="font-heading text-sm font-semibold text-blue-300/50 group-hover:text-accent-400 transition-colors">{step.num}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-blue-400/15 to-transparent min-h-[60px]"></div>
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className="pb-12 last:pb-0">
                    <h3 className="text-lg tablet:text-xl font-bold font-heading mb-2 group-hover:text-accent-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-blue-200/40 leading-relaxed text-sm tablet:text-base max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY ===== */}
      <section className="py-24 tablet:py-32 relative overflow-hidden">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"></div>

        {/* Glows */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent-500/[0.04] rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest mb-4 block">
                {t("techLabel")}
              </span>
              <h2 className="text-3xl tablet:text-5xl font-bold font-heading tracking-tight mb-6">
                {t("techTitle")}
              </h2>
            </div>
          </AnimateOnScroll>

          {/* Featured: VALD & GOAT OS */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 max-w-5xl mx-auto mb-4">
            {techFeatured.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.15}>
                <div
                  className={`group relative rounded-2xl p-8 tablet:p-10 transition-all duration-500 h-full ${
                    item.accent === "blue"
                      ? "bg-blue-500/[0.06] border border-blue-400/15 hover:border-blue-400/30 hover:bg-blue-500/[0.1]"
                      : "bg-accent-500/[0.06] border border-accent-400/15 hover:border-accent-400/30 hover:bg-accent-500/[0.1]"
                  }`}
                >
                  {/* Corner decoration */}
                  <div className={`absolute top-6 right-8 font-mono text-[10px] tracking-widest ${
                    item.accent === "blue" ? "text-blue-300/40" : "text-accent-400/40"
                  }`}>
                    {item.accent === "blue" ? "HARDWARE" : "SOFTWARE"}
                  </div>

                  <h3 className={`text-2xl font-bold font-heading mb-4 ${
                    item.accent === "blue" ? "text-blue-200" : "text-accent-400"
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-blue-200/45 leading-relaxed text-sm mb-6">
                    {item.desc}
                  </p>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 text-sm font-semibold transition-colors"
                    >
                      {item.linkText}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Secondary tech items */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {techItems.map((item, i) => (
              <AnimateOnScroll key={i} delay={0.3 + i * 0.1}>
                <div className="group relative border border-blue-400/[0.08] rounded-2xl p-8 hover:border-blue-400/15 transition-all duration-500 bg-blue-900/15 hover:bg-blue-900/25 h-full">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl text-blue-300/20 group-hover:text-blue-300/40 transition-colors flex-shrink-0 mt-1">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold font-heading mb-2 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-blue-200/35 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 tablet:py-32 relative overflow-hidden">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"></div>

        {/* Radial glow behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.06] rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <div className="labs-gradient-border rounded-3xl p-px">
                <div className="bg-blue-950 rounded-3xl px-8 py-16 tablet:px-16 tablet:py-20">
                  {/* GOAT logo */}
                  <img
                    src="/images/horizontal-logo-white.png"
                    alt=""
                    aria-hidden="true"
                    className="h-10 w-auto mx-auto mb-8 opacity-50"
                  />
                  <h2 className="text-3xl tablet:text-5xl font-bold font-heading tracking-tight mb-6">
                    {t("ctaTitle")}
                  </h2>
                  <p className="text-blue-200/45 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                    {t("ctaDescription")}
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-400 text-blue-950 font-semibold px-10 py-4 rounded-full text-sm transition-all hover:shadow-[0_0_50px_rgba(245,158,11,0.25)] hover:scale-105 active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t("ctaButton")}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-400/[0.08] py-8">
        <div className="container mx-auto px-4 flex flex-col tablet:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/images/horizontal-logo-white.png" alt="GOAT Sports" className="h-8 w-auto opacity-70" />
            <span className="w-px h-4 bg-white/10"></span>
            <span className="text-xs font-heading uppercase tracking-widest text-accent-400/60 font-semibold">Labs</span>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 text-blue-200/40 hover:text-white text-xs transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            {t("backHome")}
          </Link>
          <p className="text-blue-300/20 text-xs">
            &copy; {new Date().getFullYear()} GOAT Sports
          </p>
        </div>
      </footer>
    </div>
  )
}
