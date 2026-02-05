import {
  WebsiteWoesIcon,
  PlanningGapsIcon,
  ToolChaosIcon,
  DevLimitsIcon,
  StrategicRoadmapIcon
} from "./icons/CustomIcons"

import AnimateInView from "./AnimateInView"

export default function Challenges() {
  return (
    <section className="w-full py-24 bg-brand-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center max-w-7xl mx-auto">
          {/* Section Label */}
          <AnimateInView variant="fade-in" duration={800} threshold={0.5}>
            <div className="inline-block px-4 py-1 rounded-full border border-brand-teal mb-8">
              <span className="text-brand-teal text-sm font-medium">CHALLENGES WE SOLVE</span>
            </div>
          </AnimateInView>

          {/* Section Header */}
          <AnimateInView variant="fade-up" duration={1000} threshold={0.5}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
                <span className="text-gray-500">You</span> <span className="gradient-text">Might</span>{" "}
                <span className="text-gray-500">be here</span> <span className="gradient-text">Because</span>
              </h2>
            </div>
          </AnimateInView>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Challenge 1 */}
            <AnimateInView variant="fade-up" delay={150} duration={1200} threshold={0.3}>
              <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-6 flex flex-col h-full min-h-[220px]">
                <div className="text-brand-teal mb-6">
                  <WebsiteWoesIcon />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Website Woes</h3>
                <p className="text-gray-400">Your website is slow, buggy, or hard to manage</p>
              </div>
            </AnimateInView>

            {/* Challenge 2 */}
            <AnimateInView variant="fade-up" delay={300} duration={1200} threshold={0.3}>
              <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-6 flex flex-col h-full min-h-[220px]">
                <div className="text-brand-teal mb-6">
                  <PlanningGapsIcon />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Planning Gaps</h3>
                <p className="text-gray-400">Projects stall due to unclear technical planning</p>
              </div>
            </AnimateInView>

            {/* Challenge 3 */}
            <AnimateInView variant="fade-up" delay={450} duration={1200} threshold={0.3}>
              <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-6 flex flex-col h-full min-h-[220px]">
                <div className="text-brand-teal mb-6">
                  <ToolChaosIcon />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Tool Chaos</h3>
                <p className="text-gray-400">Marketing tools don't talk to each other</p>
              </div>
            </AnimateInView>

            {/* Challenge 4 */}
            <AnimateInView variant="fade-up" delay={600} duration={1200} threshold={0.3}>
              <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-6 flex flex-col h-full min-h-[220px]">
                <div className="text-brand-teal mb-6">
                  <DevLimitsIcon />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">Dev Limits</h3>
                <p className="text-gray-400">internal dev at max capacity or your agency isn't deliverying solid dev</p>
              </div>
            </AnimateInView>

            {/* Challenge 5 */}
            <AnimateInView variant="fade-up" delay={750} duration={1200} threshold={0.3}>
              <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-6 flex flex-col h-full min-h-[220px]">
                <div className="text-brand-teal mb-6">
                  <StrategicRoadmapIcon />
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">No Roadmap</h3>
                <p className="text-gray-400">You need a roadmap, not just design and a deadline</p>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  )
}
