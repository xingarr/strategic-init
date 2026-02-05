"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState("fadeIn")

  useEffect(() => {
    // Don't run the transition on initial render
    if (displayChildren === children) return

    // Start transition - fade out
    setTransitionStage("fadeOut")

    // After fade out completes, update content and scroll to top
    const switchContentTimeout = setTimeout(() => {
      // Scroll to top while content is invisible
      window.scrollTo(0, 0)

      // Update the content
      setDisplayChildren(children)

      // Trigger fade in
      setTransitionStage("fadeIn")

      // Reset transitioning state after fade in completes
      const resetTimeout = setTimeout(() => {
        setIsTransitioning(false)
      }, 600) // Match this with the CSS fadeIn duration

      return () => clearTimeout(resetTimeout)
    }, 400) // Match this with the CSS fadeOut duration

    return () => clearTimeout(switchContentTimeout)
  }, [children])

  // When pathname changes, start the transition process
  useEffect(() => {
    setIsTransitioning(true)
  }, [pathname])

  return (
    <div
      className={cn(
        "transition-opacity duration-500 ease-in-out",
        transitionStage === "fadeIn" ? "animate-page-fade-in" : "animate-page-fade-out",
      )}
    >
      {displayChildren}
    </div>
  )
}
