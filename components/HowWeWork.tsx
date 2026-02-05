"use client"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import AnimateInView from "./AnimateInView"

interface ProcessStep {
  number: number
  title: string
  description: string
}

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(1)
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipStepIndex, setTooltipStepIndex] = useState<number | null>(null)
  const tooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const tooltipMessages = [
    "Whoa there! Let's not skip the process.",
    "One step at a time, just like good development.",
    "Patience, young padawan. Process matters.",
    "Sorry, no skipping allowed in our methodology.",
    "Great things take time and proper sequence.",
  ]

  const [tooltipMessage, setTooltipMessage] = useState(tooltipMessages[0])

  const steps: ProcessStep[] = [
    {
      number: 1,
      title: "Discovery",
      description: "We align on goals through workshops, interviews, and audits—building a clear foundation for the right solution.",
    },
    {
      number: 2,
      title: "Roadmap",
      description: "We turn insights into a clear plan—prioritizing features, timelines, and deliverables to guide development.",
    },
    {
      number: 3,
      title: "Agile Sprints",
      description: "We build in short, focused cycles—delivering usable progress, gathering feedback, and adapting quickly.",
    },
    {
      number: 4,
      title: "Optimize",
      description: "We adapt based on your team's feedback and user behavior. improving collaboration, UX, and impact over time.",
    }
  ]

  const handleStepHover = (step: number, stepIndex: number) => {
    // Allow moving to the next step or any previous step
    if (step <= activeStep + 1) {
      setActiveStep(step)
      hideTooltip()
    } else {
      // Show tooltip when trying to skip steps
      const randomIndex = Math.floor(Math.random() * tooltipMessages.length)
      setTooltipMessage(tooltipMessages[randomIndex])
      setTooltipStepIndex(stepIndex)
      setShowTooltip(true)

      // Hide tooltip after 3 seconds
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current)
      }

      tooltipTimeoutRef.current = setTimeout(() => {
        setShowTooltip(false)
      }, 3000)
    }
  }

  const hideTooltip = () => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current)
    }
    setShowTooltip(false)
  }

  return (
    <section className="w-full py-24 bg-brand-black relative">
      {/* Background grid lines - subtle effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-brand-teal"></div>
        <div className="absolute top-1/4 left-0 right-0 h-px bg-brand-teal"></div>
        <div className="absolute top-2/4 left-0 right-0 h-px bg-brand-teal"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-brand-teal"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-teal"></div>

        <div className="absolute left-0 top-0 bottom-0 w-px bg-brand-teal"></div>
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-brand-teal"></div>
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-brand-teal"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-brand-teal"></div>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-brand-teal"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center max-w-7xl mx-auto">
          {/* Section Label */}
          <AnimateInView variant="fade-in" duration={800} threshold={0.5}>
            <div className="inline-block px-4 py-1 rounded-full border border-brand-teal mb-8">
              <span className="text-brand-teal text-sm font-medium">HOW WE WORK</span>
            </div>
          </AnimateInView>

          {/* Section Header */}
          <AnimateInView variant="fade-up" duration={1000} threshold={0.5}>
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-gray-500">Process-driven.</span> <br />
                <span className="gradient-text">Partnership-first.</span>
              </h2>
            </div>
          </AnimateInView>

          {/* Process Timeline */}
          <div className="w-full relative">
            {/* Timeline Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-800"></div>

            {/* Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <AnimateInView key={step.number} variant="fade-up" delay={250 * index} duration={1200} threshold={0.4}>
                  <div className="flex flex-col items-center relative">
                    {/* Tooltip */}
                    {showTooltip && tooltipStepIndex === index && (
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-brand-teal text-brand-black px-4 py-2 rounded-lg shadow-lg text-sm font-medium z-50 min-w-[200px] text-center animate-bounce-once">
                        {tooltipMessage}
                        <div className="absolute w-3 h-3 bg-brand-teal rotate-45 -bottom-1 left-1/2 transform -translate-x-1/2"></div>
                      </div>
                    )}

                    {/* Step Circle */}
                    <div
                      onMouseEnter={() => handleStepHover(step.number, index)}
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center mb-6 relative z-10 transition-all duration-500 cursor-pointer",
                        activeStep === step.number
                          ? "bg-brand-teal text-brand-black shadow-[0_0_15px_rgba(85,253,246,0.5)]"
                          : step.number <= activeStep + 1
                            ? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                            : "bg-gray-800 text-gray-600 cursor-not-allowed",
                      )}
                    >
                      <span className="font-medium">{step.number}</span>
                    </div>

                    {/* Step Content */}
                    <div
                      className={cn(
                        "text-center transition-all duration-500",
                        activeStep === step.number ? "opacity-100" : "opacity-50",
                      )}
                    >
                      <h3
                        className={cn(
                          "text-xl font-semibold mb-3 transition-colors duration-500",
                          activeStep === step.number ? "text-white" : "text-gray-400",
                        )}
                      >
                        {step.title}
                      </h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
