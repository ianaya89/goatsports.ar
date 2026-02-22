"use client"

import type { ReactNode } from "react"
import { useInView } from "@/hooks/use-in-view"

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimateOnScroll({ children, className = "", delay = 0 }: AnimateOnScrollProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
