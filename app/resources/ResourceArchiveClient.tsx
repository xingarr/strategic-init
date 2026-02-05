"use client"

import { useEffect, useState } from "react"
import EmailGateForm from "@/components/resources/EmailGateForm"
import ResourcesContent from "@/components/resources/ResourcesContent"
import AnimateInView from "@/components/AnimateInView"

export default function ResourceArchiveClient() {
  const [hasAccess, setHasAccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check if user already has access when component mounts
  useEffect(() => {
    // Check localStorage for access token
    const accessToken = localStorage.getItem("UXCA_resource_access")
    if (accessToken) {
      try {
        const userData = JSON.parse(accessToken)
        // Verify the token has the required fields and isn't expired
        if (userData.email && userData.firstName && userData.timestamp) {
          // Optional: Check if token is expired (e.g., after 30 days)
          const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000
          const isExpired = Date.now() - userData.timestamp > thirtyDaysInMs

          if (!isExpired) {
            setHasAccess(true)
          }
        }
      } catch (error) {
        console.error("Error parsing access token:", error)
        // Invalid token, clear it
        localStorage.removeItem("UXCA_resource_access")
      }
    }

    setIsLoading(false)
  }, [])

  const handleAccessGranted = (firstName: string, email: string) => {
    // Store access information in localStorage
    const accessData = {
      firstName,
      email,
      timestamp: Date.now(),
    }

    localStorage.setItem("UXCA_resource_access", JSON.stringify(accessData))
    setHasAccess(true)
  }

  // Show loading state while checking access
  if (isLoading) {
    return (
      <div className="pt-32 pb-24 bg-brand-black min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-brand-teal">Loading...</div>
      </div>
    )
  }

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
          <AnimateInView variant="fade-in" duration={800} threshold={0.3}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">Resource Archive</h1>
              <h2 className="text-xl md:text-2xl text-gray-400 mb-8">
                Tools, Templates, and Guides to Help You Build Better
              </h2>
            </div>
          </AnimateInView>

          {hasAccess ? <ResourcesContent /> : <EmailGateForm onAccessGranted={handleAccessGranted} />}
        </div>
      </div>
    </div>
  )
}
