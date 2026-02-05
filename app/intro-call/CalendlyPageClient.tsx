"use client"

import { useEffect } from "react"
import DiscoverySessionForm from "@/components/forms/DiscoverySessionForm"
import CalendlyForm from "@/components/forms/CalendlyForm"
import { ArrowRight, CheckCircle, Users, BarChart2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "@/lib/navigation"
import AnimateInView from "@/components/AnimateInView"

export default function CalendlyPageClient() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const router = useRouter()

  const handleBookNow = () => {
    // Scroll to the form
    const formElement = document.getElementById("discovery-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
    <div className="pt-32 pb-24 bg-brand-black min-h-screen relative overflow-hidden">
      <div className="container px-0 md:px-6 mx-auto relative z-10">
          {/* Form Card - takes 5 columns on desktop */}
          <AnimateInView variant="fade-up" duration={800} threshold={0.3}>
            <div
              id="calendly-form"
              className="bg-brand-gray-dark bg-opacity-30 rounded-lg p-2 md:p-6 shadow-lg shadow-brand-teal/5 border-t border-gray-800/50"
            >
            
              <CalendlyForm />
            </div>
          </AnimateInView>
      </div>
    </div>
    {/* <CalendlyForm /> */}
    </>
  )
}
