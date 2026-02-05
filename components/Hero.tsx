"use client"

import type React from "react"

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()

    const section = document.getElementById(sectionId)
    if (section) {
      const headerOffset = 80
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="w-full pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-20 lg:pb-20 xl:pt-24 xl:pb-24 bg-brand-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold gradient-text leading-tight tracking-tight mb-8">
            Every Great Brand Needs an Agile Development Team.
          </h1>

          <p className="text-white text-lg sm:text-xl md:text-2xl mb-12">
            Your team deserves a development partner that understands your goals, delivers on time, and empowers your team to learn, grow, and become more agile.
          </p>
        </div>
      </div>
    </section>
  )
}
