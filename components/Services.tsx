"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import AnimateInView from "./AnimateInView"

interface Service {
  id: string
  title: string
  description: string
  link: string
}

export default function Services() {
  const [activeService, setActiveService] = useState("uxui")

  const services: Service[] = [
    {
      id: "uxui",
      title: "UX/UI Design",
      description: "We use screen recording tools, UX insights, and event & conversion tracking to design interfaces that engage users and improve performance.",
      link: "/services/ux-ui-design",
    },
    {
      id: "fullstack",
      title: "Fullstack Engineering",
      description: "End-to-end web app development—built to scale, documented to last, and engineered for rapid deploys.",
      link: "/services/fullstack-development",
    },
    {
      id: "website",
      title: "Website Development",
      description: "Modern, fast websites that are easy to update, SEO-focused, and built with analytics in mind.",
      link: "/services/website-development",
    },
    {
      id: "seo",
      title: "SEO Consulting + Managed WordPress",
      description: "Technical SEO health, research, reporting, and strategy—plus on-demand SEO AI consulting and expert WordPress management.",
      link: "/services/seo-wordpress",
    },
    {
      id: "ai",
      title: "AI & Chatbots",
      description: "We consult on AI tools, build custom models, and implement intelligent chatbots tailored to your business needs.",
      link: "/services/ai-automation",
    },
    {
      id: "legacy",
      title: "Legacy System Modernization",
      description: "We modernize outdated systems into secure, scalable apps—adding automated testing and deployment pipelines to boost reliability and future-proof your stack.",
      link: "/services/legacy-modernization",
    }

  ]

  return (
    <section className="w-full py-24 bg-brand-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col max-w-7xl mx-auto">
          {/* Section Label */}
          <AnimateInView variant="fade-right" duration={800} threshold={0.5}>
            <div className="inline-block px-4 py-1 rounded-full border border-brand-teal mb-8 self-start">
              <span className="text-brand-teal text-sm font-medium">OUR SERVICES</span>
            </div>
          </AnimateInView>

          {/* Section Header */}
          <AnimateInView variant="fade-up" duration={1000} threshold={0.5}>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-gray-500">What we </span>
                <span className="gradient-text">bring</span>
                <br className="hidden md:block" />
                <span className="text-gray-500">to the </span>
                <span className="text-gray-500">table...</span>
              </h2>
            </div>
          </AnimateInView>

          {/* Services Accordion */}
          <div className="w-full">
            {services.map((service, index) => (
              <AnimateInView key={service.id} variant="fade-up" delay={150 * index} duration={1000} threshold={0.4}>
                <div className="border-b border-gray-800 last:border-b-0">
                  <button
                    onClick={() => setActiveService(service.id)}
                    className={cn(
                      "w-full py-6 px-4 flex items-center justify-between text-left transition-all duration-300 min-h-[80px]",
                      activeService === service.id
                        ? "bg-brand-gray-dark bg-opacity-30 text-brand-teal"
                        : "text-gray-400 hover:text-white",
                    )}
                  >
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-4 text-sm">/00{index + 1}</span>
                      <span className="text-2xl md:text-3xl font-medium">{service.title}</span>
                    </div>
                    <ArrowUpRight className="h-6 w-6 flex-shrink-0" />
                  </button>

                  {/* Service Description (Expandable) */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500",
                      "bg-brand-gray-dark bg-opacity-20",
                      activeService === service.id ? "max-h-40 py-4 px-4 md:px-16" : "max-h-0",
                    )}
                  >
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <Link href={service.link} className="text-brand-teal hover:underline inline-flex items-center">
                      Learn more <ArrowUpRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
