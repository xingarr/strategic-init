"use client";

import React from "react";

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-400">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm text-brand-teal">{progress}% Complete</span>
      </div>
      <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
        <div
          className="bg-brand-teal h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
