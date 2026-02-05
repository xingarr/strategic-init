"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Lock, FileText, ArrowRight } from "lucide-react"
import AnimateInView from "@/components/AnimateInView"

interface EmailGateFormProps {
  onAccessGranted: (firstName: string, email: string) => void
}

export default function EmailGateForm({ onAccessGranted }: EmailGateFormProps) {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [acceptMarketing, setAcceptMarketing] = useState(false)
  const [errors, setErrors] = useState<{ firstName?: string; email?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: { firstName?: string; email?: string } = {}

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // In a real implementation, you would send this data to your server
      // For now, we'll simulate a network request with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Call the callback to grant access
      onAccessGranted(firstName, email)

      // Optional: Send data to a webhook or API
      // This is where you'd integrate with your email marketing system
      // Example: await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ firstName, email, acceptMarketing }) })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <AnimateInView variant="fade-right" duration={800} threshold={0.3}>
          <div>
            <div className="flex items-center mb-6">
              <Lock className="h-6 w-6 text-brand-teal mr-3" />
              <h3 className="text-2xl font-semibold text-white">Unlock Our Resource Library</h3>
            </div>

            <p className="text-gray-300 text-lg mb-6">
              Get instant access to our collection of guides, templates, and resources designed to help you build better
              digital experiences.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-brand-teal">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Technical Guides</h4>
                  <p className="text-gray-400">Step-by-step instructions for implementing modern web solutions</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-3 text-brand-teal">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Project Templates</h4>
                  <p className="text-gray-400">Ready-to-use templates to kickstart your next digital project</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-3 text-brand-teal">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Case Studies</h4>
                  <p className="text-gray-400">Detailed breakdowns of successful projects and their outcomes</p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm">
              Enter your information once, and you'll have unlimited access to our resource library. We respect your
              privacy and will never share your information with third parties.
            </p>
          </div>
        </AnimateInView>

        <AnimateInView variant="fade-left" duration={800} threshold={0.3}>
          <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Get Instant Access</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="firstName" className="text-gray-300">
                  First Name <span className="text-brand-teal">*</span>
                </Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Your first name"
                  className={`bg-gray-900 border ${errors.firstName ? "border-red-500" : "border-gray-700"} text-white mt-1`}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-300">
                  Email <span className="text-brand-teal">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className={`bg-gray-900 border ${errors.email ? "border-red-500" : "border-gray-700"} text-white mt-1`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="acceptMarketing"
                  checked={acceptMarketing}
                  onCheckedChange={(checked) => setAcceptMarketing(checked === true)}
                  className="border-gray-600 data-[state=checked]:bg-brand-teal data-[state=checked]:border-brand-teal mt-1"
                />
                <Label htmlFor="acceptMarketing" className="text-gray-400 text-sm">
                  I'd like to receive occasional updates about new resources and industry insights. (Optional)
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-teal hover:bg-brand-teal/90 text-black font-medium w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  "Processing..."
                ) : (
                  <>
                    Get Access <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-gray-500 text-xs text-center">
                By submitting this form, you agree to our{" "}
                <a href="/privacy-policy" className="text-brand-teal hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </AnimateInView>
      </div>
    </div>
  )
}
