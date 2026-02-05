"use client"

import { useEffect } from "react"
import DiscoverySessionForm from "@/components/forms/DiscoverySessionForm"
import CalendlyForm from "@/components/forms/CalendlyForm"
import { ArrowRight, CheckCircle, Users, BarChart2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "@/lib/navigation"
import AnimateInView from "@/components/AnimateInView"

export default function DiscoverySessionPageClient() {
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
    <div className="pt-32 pb-24 bg-brand-black min-h-screen relative overflow-hidden">
      {/* Background grid pattern with reduced opacity */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-5">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border border-brand-teal"></div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-brand-teal/5 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-brand-teal/5 blur-3xl"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section with tighter spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Content - takes 7 columns on desktop */}
            <div className="lg:col-span-7 lg:pr-8">
              <AnimateInView variant="fade-right" duration={800} threshold={0.3}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4 leading-tight">
                  Let's Map Your Next Move—Together
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-400 mb-6">Your First Step Toward Clear Growth</h2>

                <div className="bg-brand-gray-dark bg-opacity-20 rounded-lg p-6 mb-6 border-l-4 border-brand-teal">
                  <p className="text-gray-300 text-lg">
                    Not sure where to start? No problem. Our Free Discovery Session is designed to uncover your goals,
                    challenges, and opportunities—without any pressure, sales pitches, or complicated tech talk.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-medium text-white flex items-center">
                    <span className="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-brand-teal" />
                    </span>
                    You'll leave with:
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-brand-gray-dark bg-opacity-30 p-4 rounded-lg flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex items-center justify-center mb-3">
                        <Zap className="h-5 w-5 text-brand-teal" />
                      </div>
                      <p className="text-white">Clear next steps</p>
                    </div>

                    <div className="bg-brand-gray-dark bg-opacity-30 p-4 rounded-lg flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex items-center justify-center mb-3">
                        <BarChart2 className="h-5 w-5 text-brand-teal" />
                      </div>
                      <p className="text-white">Strategic insights</p>
                    </div>

                    <div className="bg-brand-gray-dark bg-opacity-30 p-4 rounded-lg flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex items-center justify-center mb-3">
                        <Users className="h-5 w-5 text-brand-teal" />
                      </div>
                      <p className="text-white">Partnership clarity</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6">
                  Whether you have a specific project or just know something needs to change, we'll help you make sense
                  of it—and figure out a smarter way forward.
                </p>

                {/* Social proof */}
                <div className="flex flex-col sm:flex-row items-center justify-between bg-brand-gray-dark bg-opacity-20 rounded-lg p-4 mb-6">
                  <p className="text-gray-300 text-sm mb-3 sm:mb-0">Trusted by teams from:</p>
                  <div className="flex space-x-6">
                    <div className="opacity-70 hover:opacity-100 transition-opacity">
                      <div className="h-8 w-20 bg-gray-500/20 rounded flex items-center justify-center text-xs text-gray-400">
                        COMPANY 1
                      </div>
                    </div>
                    <div className="opacity-70 hover:opacity-100 transition-opacity">
                      <div className="h-8 w-20 bg-gray-500/20 rounded flex items-center justify-center text-xs text-gray-400">
                        COMPANY 2
                      </div>
                    </div>
                    <div className="opacity-70 hover:opacity-100 transition-opacity">
                      <div className="h-8 w-20 bg-gray-500/20 rounded flex items-center justify-center text-xs text-gray-400">
                        COMPANY 3
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button visible only on mobile */}
                <div className="lg:hidden">
                  <Button onClick={handleBookNow} className="primary-button w-full">
                    Book My Free Session <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </AnimateInView>
            </div>

            {/* Form Card - takes 5 columns on desktop */}
            <div className="lg:col-span-5">
              <AnimateInView variant="fade-up" duration={800} threshold={0.3}>
                <div
                  id="discovery-form"
                  className="bg-brand-gray-dark bg-opacity-30 rounded-lg p-6 shadow-lg shadow-brand-teal/5 border-t border-gray-800/50"
                >
                  {/* This is DiscoverySession!!!!! */}
                  <DiscoverySessionForm />
                  {/* <CalendlyForm /> */}
                </div>
              </AnimateInView>
            </div>
          </div>

          {/* How It Works Section - more visual with icons */}
          <AnimateInView variant="fade-up" duration={800} threshold={0.4}>
            <div className="mb-16 bg-brand-gray-dark bg-opacity-10 rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-brand-gray-dark bg-opacity-40 border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-brand-teal/5 rounded-bl-full"></div>
                  <div className="w-16 h-16 rounded-full bg-brand-teal/20 flex items-center justify-center mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-brand-teal text-brand-black flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Book a Time</h3>
                  <p className="text-gray-400">Fill out the quick form and pick a time that works for you.</p>
                </div>

                <div className="bg-brand-gray-dark bg-opacity-40 border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-brand-teal/5 rounded-bl-full"></div>
                  <div className="w-16 h-16 rounded-full bg-brand-teal/20 flex items-center justify-center mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-brand-teal text-brand-black flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Discovery Call</h3>
                  <p className="text-gray-400">We'll meet for 30–45 minutes to learn about your needs and goals.</p>
                </div>

                <div className="bg-brand-gray-dark bg-opacity-40 border border-gray-800 rounded-lg p-6 flex flex-col items-center text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-brand-teal/5 rounded-bl-full"></div>
                  <div className="w-16 h-16 rounded-full bg-brand-teal/20 flex items-center justify-center mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-brand-teal text-brand-black flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Roadmap Delivery</h3>
                  <p className="text-gray-400">
                    You'll receive a strategic overview outlining possible paths and next steps.
                  </p>
                </div>
              </div>
              <p className="text-center text-lg text-brand-teal mt-6 font-medium">
                No obligations. No fine print. Just clarity.
              </p>
            </div>
          </AnimateInView>

          {/* What to Expect Section - with visual improvements */}
          <AnimateInView variant="fade-up" duration={800} threshold={0.4}>
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">What to Expect</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-brand-gray-dark bg-opacity-20 rounded-lg p-5 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex-shrink-0 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Friendly, no-pressure conversation</h3>
                    <p className="text-gray-400">
                      We're here to understand your needs, not push services you don't need.
                    </p>
                  </div>
                </div>

                <div className="bg-brand-gray-dark bg-opacity-20 rounded-lg p-5 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex-shrink-0 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Strategic insights tailored to your goals</h3>
                    <p className="text-gray-400">
                      Get expert perspective on your specific challenges and opportunities.
                    </p>
                  </div>
                </div>

                <div className="bg-brand-gray-dark bg-opacity-20 rounded-lg p-5 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex-shrink-0 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Clear roadmap ideas — even if you don't hire us
                    </h3>
                    <p className="text-gray-400">
                      Walk away with actionable insights regardless of whether we work together.
                    </p>
                  </div>
                </div>

                <div className="bg-brand-gray-dark bg-opacity-20 rounded-lg p-5 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex-shrink-0 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Experienced technical leadership guiding the call
                    </h3>
                    <p className="text-gray-400">
                      Speak directly with senior team members who understand both business and technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateInView>

          {/* Closing CTA - with more visual appeal */}
          <AnimateInView variant="fade-up" duration={800} threshold={0.4}>
            <div className="text-center max-w-3xl mx-auto bg-gradient-to-b from-transparent to-brand-gray-dark/30 rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your next stage of growth is closer than you think.
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Book your Free Discovery Session today and let's start building something better.
              </p>
              <Button onClick={handleBookNow} className="primary-button text-lg px-10 py-6">
                Book Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AnimateInView>
        </div>
      </div>
    </div>
  )
}
