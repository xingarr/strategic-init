"use client"

import { useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "@/lib/navigation"
import AnimateInView from "@/components/AnimateInView"
import Image from "next/image"

// Story card type
interface StoryCard {
  company: string
  title: string
  description: string
  logo: string
  link?: string
}

export default function ClientJourneysPageClient() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const router = useRouter()

  // const handleBookSession = () => {
  //   router.navigate("/free-discovery-session")
  // }
  const handleBookSession = () => {
    router.navigate("/intro-call")
  }

  // Sample story cards
  const storyCards: StoryCard[] = [
    {
  company: "Canter Power Systems",
      title: "Fueling Growth Post-Acquisition",
      description:
        "Following their private equity acquisition, Canter Power Systems partnered with UXCA to modernize their digital infrastructure and activate a scalable marketing engine. From backend system improvements to frontend performance and lead-gen strategies, UXCA is helping power Canter’s next phase of growth.",
      logo: "/clients/canter-power-logo.png",
      link: "/client-journeys/canter-power-systems"
    },
    {
      company: "FloLogic, Inc.",
      title: "Migration, Stability, and B2B Growth",
      description:
        "UXCA led FloLogic’s transition from WooCommerce to Shopify Plus, cleaning legacy data, boosting reliability, and preparing the platform for private equity growth.",
      logo: "/clients/flologic-logo.png",
      link: "/client-journeys/flologic",
    },
    {
      company: "Manwah USA",
      title: "Legacy Rescue and Agile Modernization",
      description:
        "UXCA stabilized and modernized Manwah USA's custom ERP system, embedding agile delivery, DevOps, and fullstack engineering to ensure long-term stability and rapid feature development.",
      logo: "/clients/manwah-logo.png",
      link: "/client-journeys/manwah",
    },
    {
      company: "Ocean Optics",
      title: "Modern Web Rebuild & Team Enablement",
      description:
        "UXCA transitioned Ocean Optics from a costly CMS to a flexible WordPress solution—empowering global teams and accelerating marketing execution.",
      logo: "/clients/oceanoptics-logo.png",
      link: "/client-journeys/oceanoptics",
    },
    {
      company: "Reliable Tank Line",
      title: "Brand-Ready Redesign with Application Insights",
      description:
        "UXCA rebuilt Reliable Tank Line’s website from the ground up—modernizing their UX, adding visibility into job application clicks, and enabling full marketing autonomy.",
      logo: "/clients/reliable-tankline.png",
      link: "/client-journeys/reliable-tank-line",
    },
    {
      company: "Striker Co.",
      title: "From Analytics Confusion to Real-Time Insight",
      description:
        "UXCA implemented custom event tracking, built a QR plugin for sales reps, and brought process clarity to site deployments for Striker Co.",
      logo: "/clients/striker-logo.png",
      link: "/client-journeys/striker",
    },
  ]

  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen relative overflow-hidden">
      {/* Background grid pattern */}
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
          {/* Hero Section */}
          <AnimateInView variant="fade-in" duration={800} threshold={0.3}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">Partnerships That Scale</h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8">
                Stories of Real Teams, Real Growth, and Real Impact
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                At UXCA, we don't just deliver projects—we build partnerships that help companies grow smarter, move
                faster, and unlock new opportunities. Here's a glimpse into some of the teams we've partnered with and
                the impact we've made together.
              </p>
            </div>
          </AnimateInView>

          {/* Story Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {storyCards.map((card, index) => (
              <AnimateInView key={card.company} variant="fade-up" delay={index * 100} duration={800} threshold={0.3}>
                <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-brand-teal/50 hover:shadow-lg hover:shadow-brand-teal/5">
                  {/* Logo Area */}
                  <div className="p-6 bg-gray-950 border-b border-gray-800 flex items-center justify-center h-40">
                    <Image
                      src={card.logo || "/placeholder.svg"}
                      alt={`${card.company} logo`}
                      width={260}
                      height={120}
                      className="max-h-28 w-auto object-contain drop-shadow-md"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow">
                    <h3 className="text-white text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-400 mb-6">{card.description}</p>

                    {card.link && (
                      <a
                        href={card.link}
                        className="text-brand-teal hover:text-brand-teal/80 inline-flex items-center transition-colors"
                      >
                        View Story <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </div>

                  {/* Company Name Tag */}
                  <div className="bg-gray-900 px-6 py-3 border-t border-gray-800">
                    <p className="text-gray-300 font-medium">{card.company}</p>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>

          {/* CTA Section */}
          <AnimateInView variant="fade-up" duration={800} threshold={0.3}>
            <div className="text-center max-w-3xl mx-auto bg-gradient-to-b from-transparent to-brand-gray-dark/30 rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Own Success Story?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Let's talk about how we can help your team grow smarter and scale faster.
              </p>
              {/* <Button onClick={handleBookSession} className="primary-button text-lg px-10 py-6">
                Book a Free Discovery Session <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
              <Button onClick={handleBookSession} className="primary-button text-lg px-10 py-6">
                Book an Intro Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AnimateInView>
        </div>
      </div>
    </div>
  )
}
