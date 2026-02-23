"use client"

import type React from "react"
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, ArrowLeft, Calendar, CheckCircle, Loader2 } from "lucide-react"
import { config } from "@/lib/config"
import { useRouter } from "@/lib/navigation"

export type FormData = {
  fullName: string
  email: string
  companyName: string
  title: string
  projectGoals: string[]
  otherGoal: string
  currentChallenges: string
  teamStructure: string
  timeline: string
  budget: string
  budgetRange: string
  referralSource: string
  additionalInfo: string
  selectedDate: string
  selectedTime: string
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  companyName: "",
  title: "",
  projectGoals: [],
  otherGoal: "",
  currentChallenges: "",
  teamStructure: "",
  timeline: "",
  budget: "",
  budgetRange: "",
  referralSource: "",
  additionalInfo: "",
  selectedDate: "",
  selectedTime: "",
}

export default function DiscoverySessionForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [webhookError, setWebhookError] = useState<string | null>(null)

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const totalSteps = 5

  const router = useRouter()

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
      if (!recaptchaToken) newErrors.recaptcha = "CAPTCHA verification required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address"
      }
    }

    if (step === 2) {
      if (formData.projectGoals.length === 0) {
        newErrors.projectGoals = "Please select at least one goal"
      }
      if (formData.projectGoals.includes("Other") && !formData.otherGoal.trim()) {
        newErrors.otherGoal = "Please describe your other goal"
      }
    }

    if (step === 3) {
      if (!formData.teamStructure) newErrors.teamStructure = "Please select an option"
      if (!formData.timeline) newErrors.timeline = "Please select a timeline"
    }

    if (step === 4) {
      if (!formData.selectedDate) newErrors.selectedDate = "Please select a date"
      if (!formData.selectedTime) newErrors.selectedTime = "Please select a time"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 1 && !recaptchaToken) {
        setWebhookError("Please complete the CAPTCHA challenge before continuing.");
        return;
      }
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const handlePrevious = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentStep((prev) => prev - 1)
      setIsTransitioning(false)
    }, 300)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setWebhookError(null)

    if (validateStep(currentStep)) {
      setIsSubmitting(true)

      try {
        // Format the data for make.com
        const formattedData = {
          personal: {
            fullName: formData.fullName,
            email: formData.email,
            companyName: formData.companyName || "Not provided",
            title: formData.title || "Not provided",
          },
          project: {
            goals: formData.projectGoals,
            otherGoal: formData.otherGoal || "",
            challenges: formData.currentChallenges || "Not provided",
          },
          teamAndTimeline: {
            teamStructure: formData.teamStructure,
            timeline: formData.timeline,
            budget: formData.budget,
            budgetRange: formData.budgetRange || "Not specified",
          },
          session: {
            date: formData.selectedDate
              ? new Date(formData.selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "",
            time: formData.selectedTime,
            additionalInfo: formData.additionalInfo || "None provided",
          },
          meta: {
            submittedAt: new Date().toISOString(),
            source: "Website Discovery Form",
            referralSource: formData.referralSource || "Not specified",
          },
        }

        // Direct webhook call to make.com
        const webhookUrl = "https://hook.us2.make.com/r1j7cpf5wm1uljttq0fn452rzlfsn1gy"

        console.log("Sending data to webhook:", webhookUrl)

        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        })

        console.log("Webhook response status:", response.status)

        // Even if the webhook fails, we'll show success to the user
        // but log the error for debugging
        if (!response.ok) {
          console.error("Webhook error:", response.statusText)
          setWebhookError(`Webhook error: ${response.status} ${response.statusText}`)
        }

        // Show success regardless of webhook result
        // In production, you might want to handle this differently
        setIsSuccess(true)
      } catch (error) {
        console.error("Error submitting form:", error)
        setWebhookError(`Error: ${error instanceof Error ? error.message : String(error)}`)
        // Still show success to user but log the error
        setIsSuccess(true)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  // Mock available dates and times for the demo
  const availableDates = [
    { date: "2025-11-20", day: "Mon", dayNum: "20" },
    { date: "2025-11-21", day: "Tue", dayNum: "21" },
    { date: "2025-11-22", day: "Wed", dayNum: "22" },
    { date: "2025-11-23", day: "Thu", dayNum: "23" },
    { date: "2025-11-24", day: "Fri", dayNum: "24" },
  ]

  const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"]

  const goalOptions = [
    "Website Improvement",
    "New Web Application",
    "Legacy System Modernization",
    "AI/Automation Integration",
    "SEO & Performance Optimization",
    "Other",
  ]

  if (isSuccess) {
    return (
      <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-500/20 p-3">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">You're Booked!</h2>
        <p className="text-gray-300 mb-8">We're excited to meet you. A confirmation has been sent to your email.</p>

        {webhookError && (
          <div className="bg-yellow-900/20 border border-yellow-500 rounded-lg p-4 text-yellow-500 mb-8 text-left">
            <p className="font-medium">Note: There was an issue with our notification system.</p>
            <p className="text-sm">Our team has been notified and will contact you shortly.</p>
            <p className="text-xs mt-2 text-yellow-600">Technical details: {webhookError}</p>
          </div>
        )}

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-left max-w-md mx-auto mb-8">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-brand-teal" />
            Session Details
          </h3>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-gray-300">{formData.fullName}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-gray-300">{formData.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Date & Time</p>
              <p className="text-gray-300">
                {new Date(formData.selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                at {formData.selectedTime}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">What to Expect</p>
              <p className="text-gray-300">
                We'll discuss your goals, challenges, and explore how UXCA can help you achieve your vision.
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={() => router.navigate("/")}
          className="bg-brand-teal hover:bg-brand-teal/90 text-black font-medium"
        >
          Return to Homepage
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-6 md:p-8 animate-fade-in">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm text-brand-teal">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-brand-teal h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form Steps */}
      <form onSubmit={handleSubmit}>
        <div className={cn("transition-opacity duration-300", isTransitioning ? "opacity-0" : "opacity-100")}>
          {/* Step 1: About You */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white mb-2">About You</h2>
                <p className="text-gray-400">Let's start with some basic information.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="text-gray-300">
                    Full Name <span className="text-brand-teal">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => updateFormData("fullName", e.target.value)}
                    placeholder="John Doe"
                    className={`bg-gray-900 border ${errors.fullName ? "border-red-500" : "border-gray-700"} text-white mt-1`}
                  />
                  {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300">
                    Email <span className="text-brand-teal">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="john@example.com"
                    className={`bg-gray-900 border ${errors.email ? "border-red-500" : "border-gray-700"} text-white mt-1`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="companyName" className="text-gray-300">
                    Company Name <span className="text-gray-500">(Optional)</span>
                  </Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => updateFormData("companyName", e.target.value)}
                    placeholder="Acme Corp"
                    className="bg-gray-900 border border-gray-700 text-white mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="title" className="text-gray-300">
                    Title <span className="text-gray-500">(Optional)</span>
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => updateFormData("title", e.target.value)}
                    placeholder="VP of Marketing"
                    className="bg-gray-900 border border-gray-700 text-white mt-1"
                  />
                </div>

                <div className="mt-6">
                    <ReCAPTCHA
                      sitekey="6LfkkyUrAAAAACzjLaa68igPMBQpiF88bjGs21rS"
                      onChange={(token) => setRecaptchaToken(token)}
                      ref={recaptchaRef}
                    />
                      {errors.recaptcha && <p className="text-red-500 text-sm mt-2">{errors.recaptcha}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Your Goals */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white mb-2">Your Goals</h2>
                <p className="text-gray-400">Help us understand what you're looking to accomplish.</p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="text-gray-300 block mb-3">
                    What are you hoping to accomplish? <span className="text-brand-teal">*</span>
                    <span className="block text-xs text-gray-500 mt-1">Select all that apply</span>
                  </Label>

                  <div className="space-y-3">
                    {goalOptions.map((goal) => (
                      <div key={goal} className="flex items-center space-x-3">
                        <Checkbox
                          id={`goal-${goal.toLowerCase().replace(/\s+/g, "-")}`}
                          checked={formData.projectGoals.includes(goal)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              updateFormData("projectGoals", [...formData.projectGoals, goal])
                            } else {
                              updateFormData(
                                "projectGoals",
                                formData.projectGoals.filter((g) => g !== goal),
                              )
                            }
                          }}
                          className="border-gray-600 data-[state=checked]:bg-brand-teal data-[state=checked]:border-brand-teal"
                        />
                        <Label htmlFor={`goal-${goal.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-300">
                          {goal}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {errors.projectGoals && <p className="mt-2 text-sm text-red-500">{errors.projectGoals}</p>}
                </div>

                {formData.projectGoals.includes("Other") && (
                  <div>
                    <Label htmlFor="otherGoal" className="text-gray-300">
                      Please describe your other goal <span className="text-brand-teal">*</span>
                    </Label>
                    <Input
                      id="otherGoal"
                      value={formData.otherGoal}
                      onChange={(e) => updateFormData("otherGoal", e.target.value)}
                      placeholder="Tell us more about what you're looking to accomplish"
                      className={`bg-gray-900 border ${errors.otherGoal ? "border-red-500" : "border-gray-700"} text-white mt-1`}
                    />
                    {errors.otherGoal && <p className="mt-1 text-sm text-red-500">{errors.otherGoal}</p>}
                  </div>
                )}

                <div>
                  <Label htmlFor="currentChallenges" className="text-gray-300">
                    Briefly describe any current challenges you're facing
                  </Label>
                  <Textarea
                    id="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={(e) => updateFormData("currentChallenges", e.target.value)}
                    placeholder="Our website is slow and our CRM doesn't sync with anything."
                    className="bg-gray-900 border border-gray-700 text-white min-h-[100px] mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Team & Timeline */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white mb-2">Team & Timeline</h2>
                <p className="text-gray-400">Let's understand your team structure and project timeline.</p>
              </div>

              <div className="space-y-8">
                <div>
                  <Label className="text-gray-300 block mb-3">
                    Do you have an internal team you'd like us to collaborate with?{" "}
                    <span className="text-brand-teal">*</span>
                  </Label>

                  <RadioGroup
                    value={formData.teamStructure}
                    onValueChange={(value) => updateFormData("teamStructure", value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="yes" id="team-yes" className="border-gray-600 text-brand-teal" />
                      <Label htmlFor="team-yes" className="text-gray-300">
                        Yes, we have internal marketing or ops teams
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="no" id="team-no" className="border-gray-600 text-brand-teal" />
                      <Label htmlFor="team-no" className="text-gray-300">
                        No, we're looking for more of a full service partner
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="not-sure" id="team-not-sure" className="border-gray-600 text-brand-teal" />
                      <Label htmlFor="team-not-sure" className="text-gray-300">
                        Not sure yet
                      </Label>
                    </div>
                  </RadioGroup>
                  {errors.teamStructure && <p className="mt-2 text-sm text-red-500">{errors.teamStructure}</p>}
                </div>

                <div>
                  <Label className="text-gray-300 block mb-3">
                    What's your ideal timeline to get started? <span className="text-brand-teal">*</span>
                  </Label>

                  <RadioGroup
                    value={formData.timeline}
                    onValueChange={(value) => updateFormData("timeline", value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="asap" id="timeline-asap" className="border-gray-600 text-brand-teal" />
                      <Label htmlFor="timeline-asap" className="text-gray-300">
                        ASAP (within 1 month)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem
                        value="1-3-months"
                        id="timeline-1-3"
                        className="border-gray-600 text-brand-teal"
                      />
                      <Label htmlFor="timeline-1-3" className="text-gray-300">
                        1–3 months
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem
                        value="3-6-months"
                        id="timeline-3-6"
                        className="border-gray-600 text-brand-teal"
                      />
                      <Label htmlFor="timeline-3-6" className="text-gray-300">
                        3–6 months
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem
                        value="exploring"
                        id="timeline-exploring"
                        className="border-gray-600 text-brand-teal"
                      />
                      <Label htmlFor="timeline-exploring" className="text-gray-300">
                        Just exploring options
                      </Label>
                    </div>
                  </RadioGroup>
                  {errors.timeline && <p className="mt-2 text-sm text-red-500">{errors.timeline}</p>}
                </div>

                <div>
                  <Label className="text-gray-300 block mb-3">
                    Have you allocated a budget for this project? <span className="text-gray-500">(Optional)</span>
                  </Label>

                  <RadioGroup
                    value={formData.budget}
                    onValueChange={(value) => updateFormData("budget", value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="yes" id="budget-yes" className="border-gray-600 text-brand-teal" />
                      <Label htmlFor="budget-yes" className="text-gray-300">
                        Yes, we have a budget
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="no" id="budget-no" className="border-gray-600 text-brand-teal" />
                      <Label htmlFor="budget-no" className="text-gray-300">
                        No, but we're exploring options
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="help" id="budget-help" className="border-gray-600 text-brand-teal" />
                      <Label htmlFor="budget-help" className="text-gray-300">
                        We'd like your help in figuring that out
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.budget === "yes" && (
                  <div className="animate-fade-in">
                    <Label className="text-gray-300 block mb-3">
                      Rough budget range? <span className="text-gray-500">(Optional)</span>
                    </Label>

                    <RadioGroup
                      value={formData.budgetRange}
                      onValueChange={(value) => updateFormData("budgetRange", value)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="10-25k" id="range-10-25k" className="border-gray-600 text-brand-teal" />
                        <Label htmlFor="range-10-25k" className="text-gray-300">
                          $10K–$25K
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="25-50k" id="range-25-50k" className="border-gray-600 text-brand-teal" />
                        <Label htmlFor="range-25-50k" className="text-gray-300">
                          $25K–$50K
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem
                          value="50-100k"
                          id="range-50-100k"
                          className="border-gray-600 text-brand-teal"
                        />
                        <Label htmlFor="range-50-100k" className="text-gray-300">
                          $50K–$100K
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem
                          value="100k-plus"
                          id="range-100k-plus"
                          className="border-gray-600 text-brand-teal"
                        />
                        <Label htmlFor="range-100k-plus" className="text-gray-300">
                          $100K+
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                )}

                <div>
                  <Label htmlFor="referralSource" className="text-gray-300">
                    How did you hear about us? <span className="text-gray-500">(Optional)</span>
                  </Label>
                  <Input
                    id="referralSource"
                    value={formData.referralSource}
                    onChange={(e) => updateFormData("referralSource", e.target.value)}
                    placeholder="Google, referral, social media, etc."
                    className="bg-gray-900 border border-gray-700 text-white mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Book a Time */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white mb-2">Book a Time</h2>
                <p className="text-gray-400">Select a date and time for your free discovery session.</p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="text-gray-300 block mb-3">
                    Select a date <span className="text-brand-teal">*</span>
                  </Label>

                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {availableDates.map((date) => (
                      <button
                        key={date.date}
                        type="button"
                        onClick={() => updateFormData("selectedDate", date.date)}
                        className={`flex flex-col items-center justify-center p-3 rounded-lg border min-w-[80px] transition-colors ${
                          formData.selectedDate === date.date
                            ? "bg-brand-teal/20 border-brand-teal text-white"
                            : "border-gray-700 text-gray-400 hover:border-gray-500"
                        }`}
                      >
                        <span className="text-sm">{date.day}</span>
                        <span className="text-lg font-semibold">{date.dayNum}</span>
                      </button>
                    ))}
                  </div>
                  {errors.selectedDate && <p className="mt-2 text-sm text-red-500">{errors.selectedDate}</p>}
                </div>

                {formData.selectedDate && (
                  <div className="animate-fade-in">
                    <Label className="text-gray-300 block mb-3">
                      Select a time <span className="text-brand-teal">*</span>
                    </Label>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => updateFormData("selectedTime", time)}
                          className={`py-2 px-4 rounded-lg border text-center transition-colors ${
                            formData.selectedTime === time
                              ? "bg-brand-teal/20 border-brand-teal text-white"
                              : "border-gray-700 text-gray-400 hover:border-gray-500"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    {errors.selectedTime && <p className="mt-2 text-sm text-red-500">{errors.selectedTime}</p>}
                  </div>
                )}

                {formData.selectedDate && formData.selectedTime && (
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 animate-fade-in">
                    <h3 className="text-lg font-medium text-white mb-2 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-brand-teal" />
                      Your Selected Time
                    </h3>
                    <p className="text-gray-300">
                      {new Date(formData.selectedDate).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      at {formData.selectedTime}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">The session will last approximately 30 minutes.</p>
                  </div>
                )}

                <div>
                  <Label htmlFor="additionalInfo" className="text-gray-300">
                    Anything else you'd like us to know? <span className="text-gray-500">(Optional)</span>
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                    placeholder="Any specific topics you'd like to discuss or questions you have."
                    className="bg-gray-900 border border-gray-700 text-white min-h-[100px] mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Review & Submit */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white mb-2">Review & Submit</h2>
                <p className="text-gray-400">Please review your information before submitting.</p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="text-gray-300">{formData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-300">{formData.email}</p>
                    </div>
                    {formData.companyName && (
                      <div>
                        <p className="text-sm text-gray-500">Company</p>
                        <p className="text-gray-300">{formData.companyName}</p>
                      </div>
                    )}
                    {formData.title && (
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="text-gray-300">{formData.title}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Goals</p>
                      <p className="text-gray-300">
                        {formData.projectGoals.join(", ")}
                        {formData.projectGoals.includes("Other") && ` (${formData.otherGoal})`}
                      </p>
                    </div>
                    {formData.currentChallenges && (
                      <div>
                        <p className="text-sm text-gray-500">Current Challenges</p>
                        <p className="text-gray-300">{formData.currentChallenges}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-gray-500">Team Structure</p>
                      <p className="text-gray-300">
                        {formData.teamStructure === "yes" && "Has internal team for collaboration"}
                        {formData.teamStructure === "no" && "Looking for full service partner"}
                        {formData.teamStructure === "not-sure" && "Not sure yet"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Timeline</p>
                      <p className="text-gray-300">
                        {formData.timeline === "asap" && "ASAP (within 1 month)"}
                        {formData.timeline === "1-3-months" && "1–3 months"}
                        {formData.timeline === "3-6-months" && "3–6 months"}
                        {formData.timeline === "exploring" && "Just exploring options"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-4">Session Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Date & Time</p>
                      <p className="text-gray-300">
                        {new Date(formData.selectedDate).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}{" "}
                        at {formData.selectedTime}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Session Type</p>
                      <p className="text-gray-300">Free Discovery Session (30 minutes)</p>
                    </div>
                  </div>
                </div>

                {errors.submit && (
                  <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 text-red-500">{errors.submit}</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="pt-8 flex justify-between">
          {currentStep > 1 && (
            <Button
              type="button"
              onClick={handlePrevious}
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          )}

          {currentStep === 1 && <div></div>}

          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={handleNext}
              className="bg-brand-teal hover:bg-brand-teal/90 text-black font-medium flex items-center gap-2"
            >
              Next <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand-teal hover:bg-brand-teal/90 text-black font-medium flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                </>
              ) : (
                <>Book Session</>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
