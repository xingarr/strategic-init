"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { StepProps } from "./types";

export default function Step3TeamTimeline({ formData, errors, updateFormData }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-2">Team & Timeline</h2>
        <p className="text-gray-400">Let's understand your team structure and project timeline.</p>
      </div>

      <div className="space-y-8">
        {/* Team Structure */}
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

        {/* Timeline */}
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
              <RadioGroupItem value="1-3-months" id="timeline-1-3" className="border-gray-600 text-brand-teal" />
              <Label htmlFor="timeline-1-3" className="text-gray-300">
                1–3 months
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="3-6-months" id="timeline-3-6" className="border-gray-600 text-brand-teal" />
              <Label htmlFor="timeline-3-6" className="text-gray-300">
                3–6 months
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="exploring" id="timeline-exploring" className="border-gray-600 text-brand-teal" />
              <Label htmlFor="timeline-exploring" className="text-gray-300">
                Just exploring options
              </Label>
            </div>
          </RadioGroup>
          {errors.timeline && <p className="mt-2 text-sm text-red-500">{errors.timeline}</p>}
        </div>

        {/* Budget */}
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

        {/* Budget Range */}
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
                <RadioGroupItem value="50-100k" id="range-50-100k" className="border-gray-600 text-brand-teal" />
                <Label htmlFor="range-50-100k" className="text-gray-300">
                  $50K–$100K
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="100k-plus" id="range-100k-plus" className="border-gray-600 text-brand-teal" />
                <Label htmlFor="range-100k-plus" className="text-gray-300">
                  $100K+
                </Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {/* Referral Source */}
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
  );
}
