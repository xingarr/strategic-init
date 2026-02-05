"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when pressing escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    router.push(path)
  }

  const handleNavigateToBookCall = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsMenuOpen(false)
    router.push("/intro-call")
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[99999] transition-all duration-500",
        scrolled ? "bg-brand-black/95 backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-20">
        <a
          href="/"
          className=" items-center flex z-[9998] pl-0"
          onClick={(e) => {
            e.preventDefault()
            router.push("/")
          }}
        >
          <Image src="https://www.theuxda.com/themes/uxda/assets/img/nav/uxda-logo-white.svg" alt="UXCA Logo" width={100} height={33} className="h-8 w-auto" />
        </a>
        {/* <span className="md:hidden"></span> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="/about" onClick={(e) => handleNavigate(e, "/about")} className="nav-item">
            About UXCA
          </a>
          <a href="/client-journeys" onClick={(e) => handleNavigate(e, "/client-journeys")} className="nav-item">
            Client Journeys
          </a>
          <a href="/resources" onClick={(e) => handleNavigate(e, "/resources")} className="nav-item">
            Resources
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block pr-0">
          {/* <a href="/discovery-session" onClick={handleNavigateToBookCall} className="secondary-button">
            Book a Free Session
          </a> */}
          <a href="/intro-call" onClick={handleNavigateToBookCall} className="secondary-button">
            Book an Intro Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-[10001] text-white focus:outline-none pr-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-[33px] w-6 text-white" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black  backdrop-blur-sm blur-sm transition-opacity duration-500 md:hidden z-[9998]",
            isMenuOpen ? "opacity-75 h-screen" : "opacity-0 pointer-events-auto",
          )}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
        {/* Mobile Menu Panel */}
        <div
          className={cn(
            "fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-brand-gray-dark z-[9999] transform transition-transform duration-500 ease-in-out md:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
        >
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="p-6  border-b border-gray-800">
              <Image
                src="https://www.theuxda.com/themes/uxda/assets/img/nav/uxda-logo-white.svg"
                alt="UXCA Logo"
                width={100}
                height={33}
                className="h-7 w-auto opacity-0 md:opacity-100"
              />
            </div>
            <nav className="flex flex-col space-y-6 p-6">
              <a href="/client-journeys" onClick={(e) => handleNavigate(e, "/client-journeys")} className="nav-item">
                Client Journeys
              </a>
              <a href="/about-UXCA" onClick={(e) => handleNavigate(e, "/about")} className="nav-item">
                About UXCA
              </a>
              <a href="/resources" onClick={(e) => handleNavigate(e, "/resources")} className="nav-item">
                Resources
              </a>
            </nav>

            <div className="mt-auto p-6">
              <a
                // href="/discovery-session"
                href="/intro-call"
                onClick={handleNavigateToBookCall}
                className="primary-button w-full text-center block"
              >
                Book an Intro Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
