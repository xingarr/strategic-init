"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  quote: string
  image: string
  logo?: string
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Joel Bennett",
      title: "Marketing Director",
      company: "Carter Power Systems, LLC",
      quote:
        "Andrew Hewitt is one of those bright, hardworking people that you wish you had on your team. He is a great leader, innovator and creative problem solver that always goes the extra 10 MILES to deliver and delight his clients. We have had tremendous success working with Andrew and his team at UXCA and are looking forward to many more years of collaboration and achievement.",
      image: "/placeholder.svg?height=400&width=300",
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      title: "CEO",
      company: "Innovate Solutions",
      quote:
        "Working with UXCA has transformed our digital presence. Their team's technical expertise and creative approach helped us overcome complex challenges and deliver a product that exceeded our expectations. They're not just developers, they're strategic partners.",
      image: "/placeholder.svg?height=400&width=300",
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      id: "3",
      name: "Michael Chen",
      title: "CTO",
      company: "TechForward Inc.",
      quote:
        "UXCA's ability to modernize our legacy systems while ensuring business continuity was impressive. Their agile approach and clear communication made a complex project manageable. We've seen significant improvements in performance and user satisfaction.",
      image: "/placeholder.svg?height=400&width=300",
      logo: "/placeholder.svg?height=60&width=120",
    },
  ]

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)
    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <section className="w-full py-24 bg-brand-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-5">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border border-brand-teal"></div>
        ))}
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center max-w-7xl mx-auto">
          {/* Section Label */}
          <div className="inline-block px-4 py-1 rounded-full border border-brand-teal mb-8">
            <span className="text-brand-teal text-sm font-medium">TESTIMONIALS</span>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-white">Trusted </span>
              <span className="text-gray-500">by</span>
              <br />
              <span className="text-gray-500">growing </span>
              <span className="gradient-text">teams</span>
            </h2>
          </div>

          {/* Testimonial Carousel */}
          <div className="w-full relative">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                      {/* Image */}
                      <div className="hidden md:block">
                        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-purple-100">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="md:col-span-2 bg-brand-gray-dark bg-opacity-30 p-8 rounded-lg relative min-h-[320px] flex flex-col">
                        <Quote className="absolute top-6 left-6 h-10 w-10 text-brand-teal opacity-30" />
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                          <p className="text-gray-400">
                            {testimonial.title}, {testimonial.company}
                          </p>
                        </div>
                        <p className="text-gray-300 relative z-10 mb-6 flex-grow">{testimonial.quote}</p>
                        {testimonial.logo && (
                          <div className="mt-auto">
                            <Image
                              src={testimonial.logo || "/placeholder.svg"}
                              alt={testimonial.company}
                              width={120}
                              height={40}
                              className="opacity-80"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-gray-700 text-gray-400 hover:text-brand-teal hover:border-brand-teal transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (isAnimating) return
                      setIsAnimating(true)
                      setActiveIndex(index)
                      setTimeout(() => setIsAnimating(false), 500)
                    }}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      activeIndex === index ? "bg-brand-teal w-6" : "bg-gray-600 hover:bg-gray-400",
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-gray-700 text-gray-400 hover:text-brand-teal hover:border-brand-teal transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
