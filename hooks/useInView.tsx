"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface InViewOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: InViewOptions = {},
): [React.RefObject<T>, boolean] {
  const { threshold = 0.25, rootMargin = "0px", triggerOnce = true } = options
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting
        setIsInView(isVisible)

        // If triggerOnce is true and element is visible, unobserve it
        if (isVisible && triggerOnce && element) {
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return [ref, isInView]
}
