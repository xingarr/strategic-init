"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { StepProps } from "./types";

const availableDates = [
  { date: "2025-11-20", day: "Mon", dayNum: "20" },
  { date: "2025-11-21", day: "Tue", dayNum: "21" },
  { date: "2025-11-22", day: "Wed", dayNum: "22" },
  { date: "2025-11-23", day: "Thu", dayNum: "23" },
  { date: "2025-11-24", day: "Fri", dayNum: "24" },
];

const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"];

export default function Step4BookTime({ formData, errors, updateFormData }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-2">Book a Time</h2>
        <p className="text-gray-400">Select a date and time for your free discovery session.</p>
      </div>

      <div className="space-y-6">
        {/* Select a date */}
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

        {/* Select a time */}
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

        {/* Session Summary */}
        {formData.selectedDate && formData.selectedTime && (
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 animate-fade-in">
            <h3 className="text-lg font-medium text-white mb-2">Your Selected Time</h3>
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

        {/* Additional Info */}
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
  );
}
