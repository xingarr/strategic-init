"use client"

import { useRouter as useNextRouter } from "next/navigation"

/**
 * Utility function to scroll to the top of the page
 * No smooth scrolling, just instant jump
 */
export function scrollToTop() {
  window.scrollTo(0, 0)
}

/**
 * Enhanced router hook with transition support
 */
export function useRouter() {
  const router = useNextRouter()

  const navigate = (path: string) => {
    // Just navigate - the PageTransition component will handle the scroll timing
    router.push(path)
  }

  return {
    ...router,
    navigate,
  }
}
