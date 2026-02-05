import Link from "next/link"
import {
  TeamIntegrationIcon,
  GrowthBarriersIcon,
  TechLeadershipIcon,
  TransparentPartnershipsIcon,
} from "./icons/CustomIcons"
import AnimateInView from "./AnimateInView"

export default function WhoWeWork() {
  return (
    <section className="w-full py-24 bg-brand-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-start max-w-7xl mx-auto">
          {/* Section Label */}
          <AnimateInView variant="fade-right" duration={800} threshold={0.5}>
            <div className="inline-block px-4 py-1 rounded-full border border-brand-teal mb-8">
              <span className="text-brand-teal text-sm font-medium">WHO WE WORK WITH</span>
            </div>
          </AnimateInView>

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full mb-16">
            <AnimateInView variant="fade-up" duration={1000} threshold={0.5}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight tracking-tight mb-6 md:mb-0 max-w-2xl">
                We Partner <br className="hidden md:block" />
                with Teams that
              </h2>
            </AnimateInView>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <AnimateInView variant="fade-up" delay={150} duration={1200} threshold={0.3}>
              <div className="border border-gray-800 p-8 flex flex-col h-full min-h-[240px]">
                <div className="text-brand-teal mb-6">
                  <TeamIntegrationIcon />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Have internal marketing or operations teams</h3>
              </div>
            </AnimateInView>

            {/* Card 2 */}
            <AnimateInView variant="fade-up" delay={300} duration={1200} threshold={0.3}>
              <div className="border border-gray-800 p-8 flex flex-col h-full min-h-[240px]">
                <div className="text-brand-teal mb-6">
                  <GrowthBarriersIcon />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Are facing growth or tech bottlenecks</h3>
              </div>
            </AnimateInView>

            {/* Card 3 */}
            <AnimateInView variant="fade-up" delay={450} duration={1200} threshold={0.3}>
              <div className="border border-gray-800 p-8 flex flex-col h-full min-h-[240px]">
                <div className="text-brand-teal mb-6">
                  <TechLeadershipIcon />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Need technical leadership and agile&nbsp;delivery</h3>
              </div>
            </AnimateInView>

            {/* Card 4 */}
            <AnimateInView variant="fade-up" delay={600} duration={1200} threshold={0.3}>
              <div className="border border-gray-800 p-8 flex flex-col h-full min-h-[240px]">
                <div className="text-brand-teal mb-6">
                  <TransparentPartnershipsIcon />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Value process, partnership, and transparency</h3>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  )
}
