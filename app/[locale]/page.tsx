"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import StaffSection from "@/components/staff-section"
import TrainingCenter from "@/components/training-center"
import ConsultingServices from "@/components/consulting-services"
import CampusSection from "@/components/campus-section"
import HeroSection from "@/components/hero-section"
import ContactForm from "@/components/contact-form"
import NewsletterForm from "@/components/newsletter-form"
import SponsorsSection from "@/components/sponsors-section"
import PartnershipsSection from "@/components/partnerships-section"
import CampusPromoModal from "@/components/campus-promo-modal"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import AnimateOnScroll from "@/components/animate-on-scroll"
import { getServicesData } from "@/data/services-data"

export default function Home() {
  const t = useTranslations()
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false)
  const isPromoEnabled = true

  useEffect(() => {
    if (!isPromoEnabled) return
    const timer = setTimeout(() => {
      setIsPromoModalOpen(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [isPromoEnabled])

  const handleClosePromoModal = () => {
    setIsPromoModalOpen(false)
  }

  const servicesData = getServicesData(t)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <HeroSection />

      <section
        className="py-16 tablet:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        id="services"
      >
        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll>
            <div className="mb-16">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest mb-2 block">
                Programas
              </span>
              <h2 className="text-3xl tablet:text-5xl font-bold mb-4">{t("services.title")}</h2>
              <p className="text-gray-600 max-w-2xl leading-relaxed">{t("services.description")}</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8">
            <AnimateOnScroll delay={0.1}>
              <ServiceCard
                title={servicesData[0].title}
                description={servicesData[0].description}
                icon="UserCog"
                imageSrc="/images/personal-training.jpg"
                details={servicesData[0]}
                index={0}
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.25}>
              <ServiceCard
                title={servicesData[1].title}
                description={servicesData[1].description}
                icon="GraduationCap"
                imageSrc="/images/hockey-academy.jpg"
                details={servicesData[1]}
                index={1}
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <ServiceCard
                title={servicesData[2].title}
                description={servicesData[2].description}
                icon="Users"
                imageSrc="/placeholder-u7g4m.png"
                details={servicesData[2]}
                index={2}
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <PartnershipsSection />

      <section
        className="py-16 tablet:py-24 bg-white relative"
        id="staff"
      >
        <div className="container mx-auto px-4">
          <StaffSection />
        </div>
      </section>

      <section
        className="py-16 tablet:py-24 relative overflow-hidden"
        id="training-center"
      >
        {/* Photo background */}
        <img
          src="/images/training-center.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-900/85 to-gray-950/90"></div>

        {/* Watermark */}
        <img
          src="/mosca.svg"
          alt=""
          aria-hidden="true"
          className="absolute right-[-5%] top-1/2 -translate-y-1/2 h-[80%] w-auto opacity-[0.07] pointer-events-none select-none"
          style={{ filter: "brightness(0) invert(1)" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="text-white/50 font-semibold text-sm uppercase tracking-widest mb-2 block">
                Training Center
              </span>
              <h2 className="text-3xl tablet:text-5xl font-bold mb-6 text-white">{t("trainingCenter.title")}</h2>
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-lg">
                {t("trainingCenter.description")}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <TrainingCenter />
          </AnimateOnScroll>
        </div>
      </section>

      <section
        className="py-16 tablet:py-24 relative overflow-hidden"
        id="campus"
      >
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-[1px]"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/campus-coaches-players.jpg"
        >
          <source src="/final.mp4" type="video/mp4" />
        </video>

        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/[0.92]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest mb-2 block">
                Campus
              </span>
              <h2 className="text-3xl tablet:text-5xl font-bold mb-4">{t("campus.title")}</h2>
              <p className="text-gray-600 max-w-6xl mx-auto leading-relaxed text-lg">
                {t("campus.description")}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <CampusSection />
          </AnimateOnScroll>
        </div>
      </section>

      <section
        className="py-16 tablet:py-24 bg-gray-50 relative overflow-hidden"
        id="consulting"
      >
        {/* Watermark */}
        <img
          src="/mosca.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-[-5%] top-1/2 -translate-y-1/2 h-[80%] w-auto opacity-[0.04] pointer-events-none select-none"
        />

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll>
            <div className="mb-16">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest mb-2 block">
                Consulting
              </span>
              <h2 className="text-3xl tablet:text-5xl font-bold mb-4">
                {t("consulting.title")}
              </h2>
              <p className="text-gray-600 max-w-2xl leading-relaxed">
                {t("consulting.description")}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <ConsultingServices />
          </AnimateOnScroll>
        </div>
      </section>

      <section
        className="py-16 tablet:py-24 bg-white relative"
        id="testimonials"
      >
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="mb-16">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest mb-2 block">
                Testimonios
              </span>
              <h2 className="text-3xl tablet:text-5xl font-bold mb-4">{t("testimonials.title")}</h2>
              <p className="text-gray-600 max-w-2xl leading-relaxed">{t("testimonials.description")}</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 tablet:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <AnimateOnScroll delay={0.1}>
              <TestimonialCard
                quote={t("testimonials.items.catalina.quote")}
                name={t("testimonials.items.catalina.name")}
                title={t("testimonials.items.catalina.title")}
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <TestimonialCard
                quote={t("testimonials.items.angie.quote")}
                name={t("testimonials.items.angie.name")}
                title={t("testimonials.items.angie.title")}
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <TestimonialCard
                quote={t("testimonials.items.martina.quote")}
                name={t("testimonials.items.martina.name")}
                title={t("testimonials.items.martina.title")}
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <TestimonialCard
                quote={t("testimonials.items.sofia.quote")}
                name={t("testimonials.items.sofia.name")}
                title={t("testimonials.items.sofia.title")}
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section
        className="py-16 tablet:py-24 text-white relative overflow-hidden"
        id="contact"
        style={{
          background: "linear-gradient(135deg, #00237c 0%, #1a56db 50%, #3b82f6 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 -left-20 w-72 h-72 bg-accent-400/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-12 tablet:gap-16 items-center">
            <AnimateOnScroll>
              <div>
                <span className="text-white/70 font-semibold text-sm uppercase tracking-widest mb-3 block">
                  Contacto
                </span>
                <h2 className="text-3xl tablet:text-5xl font-bold mb-6">{t("contact.title")}</h2>
                <p className="text-lg leading-relaxed text-white/80 mb-8">
                  {t("contact.description")}
                </p>
                <div className="flex flex-col gap-4 text-white/70">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                    </div>
                    <span>hola@goatsports.ar</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                    </div>
                    <span>San Martin 1649, Vicente Lopez, Buenos Aires</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <ContactForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-4">
          <NewsletterForm />
        </div>
      </section>

      <SponsorsSection />

      <Footer />

      <FloatingWhatsApp />

      {isPromoEnabled && <CampusPromoModal isOpen={isPromoModalOpen} onClose={handleClosePromoModal} />}
    </div>
  )
}
