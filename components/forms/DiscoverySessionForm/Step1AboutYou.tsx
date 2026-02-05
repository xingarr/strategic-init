"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ReCAPTCHA from "react-google-recaptcha";
import { StepProps } from "./types";
import { useRef } from "react";

type Step1AboutYouProps = StepProps & {
  setRecaptchaToken: (token: string | null) => void;
};

export default function Step1AboutYou({ formData, errors, updateFormData, setRecaptchaToken }: Step1AboutYouProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-2">About You</h2>
        <p className="text-gray-400">Let's start with some basic information.</p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
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

        {/* Email */}
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

        {/* Company Name */}
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

        {/* Title */}
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

        {/* CAPTCHA */}
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
  );
}
