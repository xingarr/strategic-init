"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation" // Updated to Next.js App Router
import { Button } from "@/components/ui/button"
import AnimateInView from "@/components/AnimateInView"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  Users,
  BarChart2,
  RefreshCw,
  Code
} from "lucide-react"
import { ClientJourneyData } from "./types"

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="h-8 w-8" />,
  Users: <Users className="h-8 w-8" />,
  BarChart2: <BarChart2 className="h-8 w-8" />,
  RefreshCw: <RefreshCw className="h-8 w-8" />,
  Zap: <Zap className="h-12 w-12 mx-auto mb-4 text-brand-teal" />,
}

type Props = {
  data: ClientJourneyData
}

export default function ClientJourneyTemplate({ data }: Props) {
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleCTA = () => {
    if (data.cta?.ctaUrl) router.push(data.cta.ctaUrl)
  }

  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen relative overflow-hidden">
      {/* Grid BG */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-5 pointer-events-none z-0">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border border-brand-teal"></div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mb-16">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 to-brand-black z-10 pointer-events-none" />
          <Image
            src={data.backgroundImagePath}
            alt="Hero BG"
            fill
            className="object-cover opacity-30 pointer-events-none"
          />
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <AnimateInView variant="fade-in" duration={1000} threshold={0.3}>
            <div className="text-center max-w-4xl mx-auto">
              <Image src={data.logoPath} alt="Client Logo" width={320} height={320} className="mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">{data.heroTitle}</h1>
              <h2 className="text-xl md:text-2xl text-gray-400">{data.heroSubtitle}</h2>
            </div>
          </AnimateInView>
        </div>
      </section>

      {/* Intro + Timeline */}
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          <section className="mb-24">
            <AnimateInView variant="fade-up" duration={800} threshold={0.3}>
              <div className="inline-block px-4 py-1 rounded-full border border-brand-teal mb-6">
                <span className="text-brand-teal text-sm font-medium">{data.introSection?.tagline}</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{data.introSection?.headline}</h2>
                  {data.introSection?.paragraphs.map((p, i) => (
                    <p key={i} className="text-gray-300 text-lg mb-6">{p}</p>
                  ))}
                  <div className="mt-8 bg-brand-gray-dark bg-opacity-30 border-l-4 border-brand-teal p-6 rounded-r-lg">
                    <blockquote className="text-gray-300 text-lg italic">{`"${data.quote.text}"`}</blockquote>
                    <p className="text-brand-teal mt-4">{data.quote.person}</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-teal/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="relative z-10 bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-white mb-6">Partnership Timeline</h3>
                    <div className="space-y-8 relative">
                      <div className="absolute top-0 bottom-0 left-[22px] w-0.5 bg-gray-700"></div>
                      {data.milestones.map((m, i) => (
                        <div key={i} className="flex items-start">
                          <div className="h-11 w-11 rounded-full flex items-center justify-center z-10 relative">
                            <Clock className="h-5 w-5 text-brand-teal" />
                          </div>
                          <div className="ml-6">
                            <span className="text-brand-teal font-medium">{m.year}</span>
                            <h4 className="text-white text-lg font-medium">{m.title}</h4>
                            <p className="text-gray-400">{m.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateInView>
          </section>
        </div>
      </div>

      {/* Pillars */}
      <section className="container px-4 md:px-6 mx-auto mb-24">
        <h3 className="text-3xl font-bold text-white mb-12">Key Initiatives & Outcomes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.pillars.map((pillar, i) => (
            <div key={i} className="bg-brand-gray-dark border border-gray-800 rounded-lg p-6">
              <div className="text-brand-teal mb-4">{iconMap[pillar.icon]}</div>
              <h4 className="text-white text-xl font-semibold mb-2">{pillar.title}</h4>
              <p className="text-gray-400">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Narratives */}
      <section className="container px-4 md:px-6 mx-auto mb-24 space-y-24">
        {data.narratives.map((n, i) => (
          <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <h2 className="text-3xl font-bold text-white mb-6">{n.title}</h2>
              {n.paragraphs.map((p, j) => (
                <p key={j} className="text-gray-300 text-lg mb-4">{p}</p>
              ))}
            </div>
            {n.metric && (
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="bg-brand-gray-dark border border-gray-800 rounded-lg p-8 text-center">
                  {iconMap[n.metric.icon]}
                  <h3 className="text-white text-2xl font-semibold mb-2">{n.metric.value}</h3>
                  <p className="text-gray-300 text-lg">{n.metric.label}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* The UXCA Difference */}
      {data.difference && (
        <section className="container px-4 md:px-6 mx-auto mb-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">The UXCA Difference</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.difference.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-brand-teal/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container px-4 md:px-6 mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">{data.cta.headline}</h2>
        <p className="text-gray-300 text-lg mb-8">{data.cta.subtext}</p>
        <Button onClick={handleCTA} className="primary-button text-lg px-10 py-6">
          {data.cta.ctaText} <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>
    </div>
  )
}
