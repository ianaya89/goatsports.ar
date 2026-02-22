"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

function TikTok({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export default function Footer() {
  const t = useTranslations("footer")
  const tNav = useTranslations("nav")

  const whatsappLink = getWhatsAppLink(tNav("whatsappMessage"))

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Subtle top accent line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-accent-400 to-blue-600"></div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <img src="/images/horizontal-logo-white.png" alt="GOAT Sports Logo" width={180} height={48} className="h-14 w-auto" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              <span dangerouslySetInnerHTML={{ __html: t("tagline").replace("mucho más que un training center", "<b>mucho más que un training center</b>") }} />
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=61575793396752"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/goatsports.arg"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/goatsportsar"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-6">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  {tNav("programs")}
                </Link>
              </li>
              <li>
                <Link href="#staff" className="text-gray-400 hover:text-white transition-colors">
                  {tNav("aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="#training-center" className="text-gray-400 hover:text-white transition-colors">
                  {tNav("trainingCenter")}
                </Link>
              </li>
              <li>
                <Link href="#campus" className="text-gray-400 hover:text-white transition-colors">
                  {tNav("campus")}
                </Link>
              </li>
              <li>
                <Link href="#consulting" className="text-gray-400 hover:text-white transition-colors">
                  {tNav("consulting")}
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  {tNav("testimonials")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  {tNav("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-6">{t("contact")}</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-400">San Martin 1649 (Vicente Lopez CP1638), Buenos Aires - Argentina</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0" aria-hidden="true" />
                <a href={`tel:+5491126578585`} className="text-gray-400 hover:text-white transition-colors">
                  +54 9 11 2567 8585
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:hola@goatsports.ar" className="text-gray-400 hover:text-white transition-colors">
                  hola@goatsports.ar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-6">{t("hours")}</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-medium text-gray-300">{t("weekdays")}:</span> 8:00 - 21:00
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="https://www.linkedin.com/jobs/goat-sports-jobs-worldwide"
                className="inline-flex items-center bg-white/10 hover:bg-white/15 text-white transition-colors px-4 py-2.5 rounded-full font-medium text-sm"
              >
                {t("joinTeam")}
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col tablet:flex-row justify-center items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
          <a
            href="https://comercial.goatsports.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-400 hover:text-accent-300 text-sm font-medium transition-colors"
          >
            {t("commercialProposal")}
          </a>
        </div>
      </div>
    </footer>
  )
}
