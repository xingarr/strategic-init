import Hero from "@/components/Hero"
import WhoWeWork from "@/components/WhoWeWork"
import ScrollingMarquee from "@/components/ScrollingMarquee"
import Challenges from "@/components/Challenges"
import HowWeWork from "@/components/HowWeWork"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import CallToAction from "@/components/CallToAction"
import AnimateInView from "@/components/AnimateInView"

export default function Home() {
  return (
    <>
      <section id="hero">
        <AnimateInView variant="fade-in" duration={600} threshold={0.1}>
          <Hero />
        </AnimateInView>
      </section>

      <section id="who-we-work" >
        <AnimateInView variant="fade-up" duration={400} threshold={0.2}>
          <WhoWeWork />
        </AnimateInView>
      </section>

      <AnimateInView variant="fade-in" threshold={0.3} duration={500}>
        <ScrollingMarquee />
      </AnimateInView>

      <section id="challenges">
        <AnimateInView variant="fade-up" duration={600} threshold={0.3}>
          <Challenges />
        </AnimateInView>
      </section>

      <section id="how-we-work">
        <AnimateInView variant="fade-up" duration={600} threshold={0.35} rootMargin="-100px">
          <HowWeWork />
        </AnimateInView>
      </section>

      <section id="services">
        <AnimateInView variant="fade-up" duration={600} threshold={0.4} rootMargin="-100px">
          <Services />
        </AnimateInView>
      </section>

      <section id="testimonials">
        <AnimateInView variant="fade-up" duration={600} threshold={0.4} rootMargin="-100px">
          <Testimonials />
        </AnimateInView>
      </section>

      <section id="cta">
        <AnimateInView variant="fade-up" duration={600} threshold={0.45} rootMargin="-100px">
          <CallToAction />
        </AnimateInView>
      </section>
    </>
  )
}
