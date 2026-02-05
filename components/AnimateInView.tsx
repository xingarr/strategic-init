"use client"

import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import type { ReactNode } from "react"

type AnimationVariant = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-up"

interface AnimateInViewProps {
  children: ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  threshold?: number
  rootMargin?: string
  duration?: number
}

export default function AnimateInView({
  children,
  className,
  variant = "fade-up",
  delay = 600,
  threshold = 0.25,
  rootMargin = "-50px",
  duration = 600,
}: AnimateInViewProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce: true,
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 767)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const isVisible = isMobile || isInView

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        {
          "opacity-0 translate-y-10": variant === "fade-up" && !isVisible,
          "opacity-0": variant === "fade-in" && !isVisible,
          "opacity-0 translate-x-10": variant === "fade-left" && !isVisible,
          "opacity-0 -translate-x-10": variant === "fade-right" && !isVisible,
          "opacity-0 scale-95": variant === "scale-up" && !isVisible,
          "opacity-100 translate-y-0 translate-x-0 scale-100": isVisible,
        },
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  )
}
