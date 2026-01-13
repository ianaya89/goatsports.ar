import type { ServiceDetails } from "@/components/service-modal"

export function getServicesData(t: (key: string) => string): ServiceDetails[] {
  return [
    {
      title: t("personalTraining.title"),
      description: t("personalTraining.description"),
      longDescription: t("personalTraining.longDescription"),
      schedule: [t("personalTraining.schedule.0"), t("personalTraining.schedule.1")],
      features: [
        t("personalTraining.features.0"),
        t("personalTraining.features.1"),
        t("personalTraining.features.2"),
        t("personalTraining.features.3"),
      ],
      images: [
        {
          src: "/images/personalizado.jpeg",
          alt: t("personalTraining.images.0"),
        },
        {
          src: "/images/personalizado-hockey.jpeg",
          alt: t("personalTraining.images.1"),
        },
        {
          src: "/images/personalizado-hockey-2.jpeg",
          alt: t("personalTraining.images.2"),
        },
        {
          src: "/images/personalizado-hockey-3.jpeg",
          alt: t("personalTraining.images.3"),
        },
      ],
    },
    {
      title: t("academies.title"),
      description: t("academies.description"),
      longDescription: t("academies.longDescription"),
      schedule: [t("academies.schedule.0"), t("academies.schedule.1"), t("academies.schedule.2")],
      features: [
        t("academies.features.0"),
        t("academies.features.1"),
        t("academies.features.2"),
        t("academies.features.3"),
      ],
      images: [
        {
          src: "/images/hockey-academy.jpg",
          alt: "Entrenamiento de academia de hockey",
        },
        {
          src: "/images/hockey-academy-2.jpeg",
          alt: "Entrenamiento juvenil de rugby",
        },
        {
          src: "/images/hockey-academy-3.jpeg",
          alt: "Práctica de equipo de hockey",
        },
        {
          src: "/images/rugby-training-indoor.jpeg",
          alt: "Taller de habilidades de rugby",
        },
      ],
    },
    {
      title: t("teamTraining.title"),
      description: t("teamTraining.description"),
      longDescription: t("teamTraining.longDescription"),
      schedule: [
        t("teamTraining.schedule.0"),
        t("teamTraining.schedule.1"),
        t("teamTraining.schedule.2"),
        t("teamTraining.schedule.3"),
      ],
      features: [
        t("teamTraining.features.0"),
        t("teamTraining.features.1"),
        t("teamTraining.features.2"),
        t("teamTraining.features.3"),
        t("teamTraining.features.4"),
      ],
      images: [
        {
          src: "/images/uba.jpg",
          alt: "Equipo de hockey entrenando",
        },
        {
          src: "/images/team-recovery-session.jpeg",
          alt: "Sesión de entrenamiento de equipo de rugby",
        },
      ],
    },
  ]
}

// Legacy export for backwards compatibility during migration
export const servicesData: ServiceDetails[] = [
  {
    title: "Entrenamiento Personalizado",
    description:
      "Sesiones individuales adaptadas a tus necesidades específicas. Desarrolla tus habilidades con atención personalizada de nuestros entrenadores expertos.",
    longDescription:
      "Nuestro programa de entrenamiento personalizado está diseñado para maximizar tu potencial deportivo a través de sesiones individualizadas. Trabajamos con un enfoque integral que abarca aspectos técnicos, tácticos, físicos y mentales. Cada sesión es planificada específicamente para vos, considerando tus objetivos, nivel actual y posición de juego. Nuestros entrenadores te ayudan a identificar áreas de mejora y desarrollar un plan progresivo que te lleve al siguiente nivel.",
    schedule: [
      "Lunes a Viernes: 8:00 - 21:00 (sesiones de 60 o 90 minutos)",
      "Sábados: 9:00 - 13:00 (sesiones de 60 o 90 minutos)",
    ],
    features: [
      "Evaluación inicial completa de habilidades o condición física",
      "Plan de entrenamiento personalizado según objetivos",
      "Acceso a instalaciones de primer nivel",
      "Entrenadores con experiencia nacional e internacional",
    ],
    images: [
      {
        src: "/images/personalizado.jpeg",
        alt: "Entrenamiento personal de hockey",
      },
      {
        src: "/images/personalizado-hockey.jpeg",
        alt: "Entrenamiento personal de hockey",
      },
      {
        src: "/images/personalizado-hockey-2.jpeg",
        alt: "Análisis de rendimiento deportivo",
      },
      {
        src: "/images/personalizado-hockey-3.jpeg",
        alt: "Entrenamiento juvenil de rugby",
      },
    ],
  },
  {
    title: "Academias de Hockey y Rugby",
    description:
      "Unite a nuestro programa estructurado con sesiones regulares de entrenamiento, talleres de desarrollo de habilidades y oportunidades de juego competitivo en hockey y rugby.",
    longDescription:
      "Las Academias GOAT Sports ofrecen un programa integral de desarrollo para jugadores de hockey y rugby de todos los niveles. Los participantes entrenan en grupos reducidos organizados por edad y nivel, lo que permite una atención integral dentro de un entorno de equipo.",
    schedule: [
      "Hockey - Lunes a Viernes 18:00 - 21:00",
      "Rugby - Miercoles y Viernes de 17:00 a 19:00",
      "Sesiones adicionales de preparación física",
    ],
    features: [
      "Grupos reducidos (máximo 8 jugadores por entrenador)",
      "Programa estructurado con objetivos mensuales",
      "Entrenadores especializados con experiencia nacional e internacional",
      "Acceso a clínicas especiales con jugadores profesionales",
    ],
    images: [
      {
        src: "/images/hockey-academy.jpg",
        alt: "Entrenamiento de academia de hockey",
      },
      {
        src: "/images/hockey-academy-2.jpeg",
        alt: "Entrenamiento juvenil de rugby",
      },
      {
        src: "/images/hockey-academy-3.jpeg",
        alt: "Práctica de equipo de hockey",
      },
      {
        src: "/images/rugby-training-indoor.jpeg",
        alt: "Taller de habilidades de rugby",
      },
    ],
  },
  {
    title: "Vení a entrenar con tu equipo",
    description:
      "Alquilá nuestras instalaciones de primer nivel para entrenamientos con tu equipo. Acceso completo a campos, equipamiento y todo lo que necesitas para entrenar.",
    longDescription:
      "Ofrecemos nuestras instalaciones para equipos que buscan un espacio profesional para sus entrenamientos. El alquiler incluye acceso completo a nuestros campos de juego con superficie sintética profesional, equipamiento de entrenamiento especializado y gimnasio de alto rendimiento Opcionalmente, podemos proporcionar entrenadores especializados para sesiones específicas o clínicas temáticas. Nuestras instalaciones son ideales para equipos de club, selecciones, equipos escolares o grupos corporativos que buscan una experiencia de entrenamiento premium.",
    schedule: [
      "Lunes a viernes: 7:00 - 23:00 (sujeto a disponibilidad)",
      "Sábados: 8:00 - 13:00",
      "Posibilidad de reservas recurrentes semanales o mensuales",
      "Horarios especiales disponibles para concentraciones o jornadas intensivas",
    ],
    features: [
      "Campos de juego con superficie sintética profesional",
      "Equipamiento completo de entrenamiento",
      "Acceso a gimnasio de alto rendimiento",
      "Vestuarios con duchas",
      "Opción de contratar entrenadores especializados",
    ],
    images: [
      {
        src: "/images/uba.jpg",
        alt: "Equipo de hockey entrenando",
      },
      {
        src: "/images/team-recovery-session.jpeg",
        alt: "Sesión de entrenamiento de equipo de rugby",
      },
    ],
  },
]
