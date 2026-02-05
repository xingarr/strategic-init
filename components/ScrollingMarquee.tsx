"use client"

import { cn } from "@/lib/utils"

interface ScrollingMarqueeProps {
  className?: string
}

export default function ScrollingMarquee({ className }: ScrollingMarqueeProps) {
  const services = [
    "Software Development",
    "UX/UI Design",
    "A.I. Implementation",
    "Legacy Modernization",
    "WordPress & SEO",
    "Web Apps",
    "Shopify Development",
    "Cloud Infrastructure",
    "API Integration",
  ]

  return (
    <div className={cn("w-full overflow-hidden bg-brand-black py-16 relative", className)}>
      {/* Background marquee - gray color */}
      <div className="marquee-wrapper marquee-slant-container">
        <div className="marquee-track marquee-left marquee-background">
          {Array.from({ length: 2 }).map((_, trackIndex) => (
            <div key={`bg-${trackIndex}`} className="marquee-content">
              {services.map((service, index) => (
                <span
                  key={`bg-${index}`}
                  className="text-gray-500 text-3xl md:text-4xl lg:text-5xl font-medium inline-flex items-center"
                >
                  {service} <span className="mx-6 text-gray-500">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Foreground marquee - teal color */}
      <div className="marquee-wrapper marquee-slant-container marquee-foreground">
        <div className="marquee-track marquee-right">
          {Array.from({ length: 2 }).map((_, trackIndex) => (
            <div key={`fg-${trackIndex}`} className="marquee-content">
              {services.map((service, index) => (
                <span
                  key={`fg-${index}`}
                  className="text-brand-teal text-3xl md:text-4xl lg:text-5xl font-medium inline-flex items-center"
                >
                  {service} <span className="mx-6 text-brand-teal">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
