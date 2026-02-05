"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { StepProps } from "./types";

const goalOptions = [
  "Website Improvement",
  "New Web Application",
  "Legacy System Modernization",
  "AI/Automation Integration",
  "SEO & Performance Optimization",
  "Other",
];

export default function Step2YourGoals({ formData, errors, updateFormData }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-2">Your Goals</h2>
        <p className="text-gray-400">Help us understand what you're looking to accomplish.</p>
      </div>

      <div className="space-y-6">
        {/* Project Goals */}
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
                      updateFormData("projectGoals", [...formData.projectGoals, goal]);
                    } else {
                      updateFormData(
                        "projectGoals",
                        formData.projectGoals.filter((g) => g !== goal),
                      );
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

        {/* Other Goal Input */}
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

        {/* Current Challenges */}
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
  );
}
