"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { cn } from "@/lib/utils";
import { useRouter } from "@/lib/navigation";

import { FormData, initialFormData } from "./types";
import ProgressBar from "./ProgressBar";
import Step1AboutYou from "./Step1AboutYou";
import Step2YourGoals from "./Step2YourGoals";
import Step3TeamTimeline from "./Step3TeamTimeline";
import Step4BookTime from "./Step4BookTime";
import Step5ReviewSubmit from "./Step5ReviewSubmit";
import ConfirmationSuccess from "./ConfirmationSuccess";

export default function DiscoverySessionForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [webhookError, setWebhookError] = useState<string | null>(null);

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const totalSteps = 5;
  const router = useRouter();

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!recaptchaToken) newErrors.recaptcha = "CAPTCHA verification required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (step === 2) {
      if (formData.projectGoals.length === 0) {
        newErrors.projectGoals = "Please select at least one goal";
      }
      if (formData.projectGoals.includes("Other") && !formData.otherGoal.trim()) {
        newErrors.otherGoal = "Please describe your other goal";
      }
    }

    if (step === 3) {
      if (!formData.teamStructure) newErrors.teamStructure = "Please select an option";
      if (!formData.timeline) newErrors.timeline = "Please select a timeline";
    }

    if (step === 4) {
      if (!formData.selectedDate) newErrors.selectedDate = "Please select a date";
      if (!formData.selectedTime) newErrors.selectedTime = "Please select a time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 1 && !recaptchaToken) {
        setWebhookError("Please complete the CAPTCHA challenge before continuing.");
        return;
      }
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep((prev) => prev - 1);
      setIsTransitioning(false);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setWebhookError(null);

    if (validateStep(currentStep)) {
      setIsSubmitting(true);

      try {
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
        };

        const webhookUrl = "https://hook.us2.make.com/r1j7cpf5wm1uljttq0fn452rzlfsn1gy";

        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        });

        if (!response.ok) {
          console.error("Webhook error:", response.statusText);
          setWebhookError(`Webhook error: ${response.status} ${response.statusText}`);
        }

        setIsSuccess(true);
      } catch (error) {
        console.error("Error submitting form:", error);
        setWebhookError(`Error: ${error instanceof Error ? error.message : String(error)}`);
        setIsSuccess(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isSuccess) {
    return <ConfirmationSuccess formData={formData} webhookError={webhookError} />;
  }

  return (
    <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-6 md:p-8 animate-fade-in">
      {/* Progress */}
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className={cn("transition-opacity duration-300", isTransitioning ? "opacity-0" : "opacity-100")}>
          {currentStep === 1 && (
            <Step1AboutYou
              formData={formData}
              errors={errors}
              updateFormData={updateFormData}
              setRecaptchaToken={setRecaptchaToken}
            />
          )}
          {currentStep === 2 && <Step2YourGoals formData={formData} errors={errors} updateFormData={updateFormData} />}
          {currentStep === 3 && <Step3TeamTimeline formData={formData} errors={errors} updateFormData={updateFormData} />}
          {currentStep === 4 && <Step4BookTime formData={formData} errors={errors} updateFormData={updateFormData} />}
          {currentStep === 5 && <Step5ReviewSubmit formData={formData} errors={errors} updateFormData={updateFormData} />}
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
  );
}
