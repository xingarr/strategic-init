"use client"

import { useEffect } from "react"
import { ArrowRight, CheckCircle, Users, MessageSquare, Shield, Handshake, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "@/lib/navigation"
import AnimateInView from "@/components/AnimateInView"
import Image from "next/image"

// Team member type
interface TeamMember {
  name: string
  title: string
  bio: string
  image: string
  linkedin?: string
}

export default function AboutPageClient() {
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

  // Sample team members (placeholders)
  const teamMembers: TeamMember[] = [
    {
      name: "Mark V. Smetanin",
      title: "Founder, CEO, & Technical Lead",
      bio: "Passionate about solving problems with elegant solutions. 10+ years experience in web development.",
      image: "",
      linkedin: "https://linkedin.com/in/username",
    }
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">About UXCA</h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-400">Your Agile Development Team—On Demand</h2>
            </div>
          </AnimateInView>

          {/* Mission Section */}
          <AnimateInView variant="fade-up" duration={800} threshold={0.3}>
            <div className="mb-20 max-w-3xl">
              <div className="inline-block px-4 py-1 rounded-full border border-brand-teal mb-6">
                <span className="text-brand-teal text-sm font-medium">OUR MISSION</span>
              </div>

              <div className="bg-brand-gray-dark bg-opacity-20 rounded-lg p-8 border-l-4 border-brand-teal">
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  At UXCA, we believe every company deserves a technology partner that can scale with them, not slow
                  them down. We exist to remove growth barriers, strengthen your internal teams, and lead with clear,
                  strategic execution — so you can focus on building your business, not fighting your tech.
                </p>
              </div>
            </div>
          </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-6 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-teal/5 rounded-bl-full"></div>
            <div className="text-brand-teal mb-4">
              <Handshake className="h-10 w-10" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Client Focused</h3>
            <p className="text-gray-400">We don’t just serve clients—we champion their goals. Every interaction is rooted in delivering results that matter.</p>
          </div>

          <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-6 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-teal/5 rounded-bl-full"></div>
            <div className="text-brand-teal mb-4">
              <MessageSquare className="h-10 w-10" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Communication</h3>
            <p className="text-gray-400">We keep it clear, honest, and proactive—because great work starts with great conversations.</p>
          </div>

          <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-6 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-teal/5 rounded-bl-full"></div>
            <div className="text-brand-teal mb-4">
              <Shield className="h-10 w-10" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Integrity</h3>
            <p className="text-gray-400">We lead with transparency and do the right thing—even when no one’s watching.</p>
          </div>

          <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-6 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-teal/5 rounded-bl-full"></div>
            <div className="text-brand-teal mb-4">
              <Users className="h-10 w-10" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Team Players</h3>
            <p className="text-gray-400">We work as one. Collaboration fuels smarter solutions and bolder outcomes.</p>
          </div>

          <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-6 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-teal/5 rounded-bl-full"></div>
            <div className="text-brand-teal mb-4">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Accountability</h3>
            <p className="text-gray-400">We own the outcome. Good or bad, we show up, improve, and deliver what we promise.</p>
          </div>

          <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-6 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-teal/5 rounded-bl-full"></div>
            <div className="text-brand-teal mb-4">
              {/* <Zap className="h-10 w-10" /> */}
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-400">We stay curious, embrace change, and push boundaries to build what’s next.</p>
          </div>
        </div>


          {/* How We're Different Section */}
          <AnimateInView variant="fade-up" duration={800} threshold={0.3}>
            <div className="my-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">We're not just developers.</h2>
                  <div className="space-y-4">
                    <p className="text-gray-300 text-lg">
                      We're strategic partners who bring leadership, technical expertise, and a proven process to every
                      engagement.
                    </p>
                    <p className="text-gray-300 text-lg">
                      When you work with UXCA, you're not buying code—you're gaining a reliable extension of your team
                      that's focused on sustainable growth.
                    </p>
                  </div>
                </div>

                <div className="bg-brand-gray-dark bg-opacity-20 rounded-lg p-6 border border-gray-800">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-brand-teal/20 flex-shrink-0 flex items-center justify-center mt-1">
                        <CheckCircle className="h-4 w-4 text-brand-teal" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Strategic Leadership</h3>
                        <p className="text-gray-400">We guide your technical roadmap with expertise and foresight.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-brand-teal/20 flex-shrink-0 flex items-center justify-center mt-1">
                        <CheckCircle className="h-4 w-4 text-brand-teal" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Agile Process</h3>
                        <p className="text-gray-400">Our proven methodology delivers value at every step.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-brand-teal/20 flex-shrink-0 flex items-center justify-center mt-1">
                        <CheckCircle className="h-4 w-4 text-brand-teal" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Team Integration</h3>
                        <p className="text-gray-400">We work seamlessly with your existing teams and processes.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-brand-teal/20 flex-shrink-0 flex items-center justify-center mt-1">
                        <CheckCircle className="h-4 w-4 text-brand-teal" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Long-term Vision</h3>
                        <p className="text-gray-400">We build solutions that scale with your business.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateInView>

          {/* Meet Your Team Section */}
          <AnimateInView variant="fade-up" duration={800} threshold={0.3}>
            <div className="my-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The People Behind UXCA</h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Our team is made up of seasoned developers, designers, strategists, and technical consultants who love
                  solving hard problems — and making your life easier. We bring energy, expertise, and real-world
                  experience to every project, no matter the size.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <AnimateInView key={member.name} variant="fade-up" delay={index * 100} duration={400} threshold={0.3}>
                    <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg overflow-hidden group">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent opacity-70"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-white text-xl font-semibold mb-1">{member.name}</h3>
                        <p className="text-brand-teal text-sm mb-3">{member.title}</p>
                        <p className="text-gray-400 mb-4">{member.bio}</p>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-brand-teal text-sm inline-flex items-center transition-colors"
                          >
                            LinkedIn Profile <ArrowRight className="ml-1 h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </AnimateInView>
                ))}
              </div>
            </div>
          </AnimateInView>

          {/* CTA Section */}
          <AnimateInView variant="fade-up" duration={800} threshold={0.3}>
            <div className="text-center max-w-3xl mx-auto bg-gradient-to-b from-transparent to-brand-gray-dark/30 rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build What's Next?</h2>
              <p className="text-gray-300 text-lg mb-8">
                We're here to help you plan smarter, move faster, and build better. Start with an intro call
                and let's map out your next move — together.
              </p>
              {/* <p className="text-gray-300 text-lg mb-8">
                We're here to help you plan smarter, move faster, and build better. Start with a free discovery session
                and let's map out your next move — together.
              </p> */}
              {/* <Button onClick={handleBookSession} className="primary-button text-lg px-10 py-6">
                Book a Free Discovery Session <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
              <Button onClick={handleBookSession} className="primary-button text-lg px-10 py-6">
                Book an Intro Call<ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AnimateInView>
        </div>
      </div>
    </div>
  )
}
