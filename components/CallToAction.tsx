"use client"

import type React from "react"
import { useRouter } from "@/lib/navigation"

export default function CallToAction() {
  const router = useRouter()

  // const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault()
  //   // Just navigate without scrolling first
  //   router.navigate("/discovery-session")
  // }
  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.navigate("/intro-call")
  }

  return (
    <section id="cta" className="w-full py-24 bg-brand-black relative">
      {/* Curved Divider */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <div className="absolute bottom-0 w-full h-24 bg-brand-black rounded-[50%_50%_0_0] transform translate-y-1/2"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-gray-500">Start with a</span>
            <br />
            <span className="gradient-text">intro call</span>

            {/* <span className="gradient-text">free discovery</span> */}
            {/* <br /> */}
            {/* <span className="text-gray-500">session.</span> */}
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            We'll explore your goals and map a path forward—no strings attached.
          </p>

          {/* <a href="/discovery-session" onClick={handleNavigate} className="primary-button">
            Book a Free Session
          </a> */}
          <a href="/intro-call" onClick={handleNavigate} className="primary-button">
            Book an Intro Call
          </a>
        </div>
      </div>

      {/* Bottom Curved Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <div className="absolute top-0 w-full h-24 bg-brand-black rounded-[0_0_50%_50%] transform translate-y-[-50%]"></div>
      </div>
    </section>
  )
}
