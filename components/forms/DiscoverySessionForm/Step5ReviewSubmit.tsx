// File: /components/forms/DiscoverySessionForm/Step5ReviewSubmit.tsx

"use client";

import { StepProps } from "./types";

export default function Step5ReviewSubmit({ formData, errors }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-2">Review & Submit</h2>
        <p className="text-gray-400">Please review your information before submitting.</p>
      </div>

      <div className="space-y-6">
        {/* Personal Information */}
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
                <p className="text-sm text-gray-500">Title</p>
                <p className="text-gray-300">{formData.title}</p>
              </div>
            )}
          </div>
        </div>

        {/* Project Details */}
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

        {/* Session Details */}
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

        {/* Submit error */}
        {errors.submit && (
          <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 text-red-500">
            {errors.submit}
          </div>
        )}
      </div>
    </div>
  );
}
