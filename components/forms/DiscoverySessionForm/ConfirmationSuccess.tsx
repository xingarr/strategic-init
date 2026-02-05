"use client";

import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle } from "lucide-react";
import { FormData } from "./types";
import { useRouter } from "@/lib/navigation";

type ConfirmationSuccessProps = {
  formData: FormData;
  webhookError: string | null;
};

export default function ConfirmationSuccess({ formData, webhookError }: ConfirmationSuccessProps) {
  const router = useRouter();

  return (
    <div className="bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg p-8 text-center">
      {/* Success Icon */}
      <div className="flex justify-center mb-6">
        <div className="rounded-full bg-green-500/20 p-3">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-white mb-4">You're Booked!</h2>
      <p className="text-gray-300 mb-8">
        We're excited to meet you. A confirmation has been sent to your email.
      </p>

      {/* Webhook Error Warning */}
      {webhookError && (
        <div className="bg-yellow-900/20 border border-yellow-500 rounded-lg p-4 text-yellow-500 mb-8 text-left">
          <p className="font-medium">Note: There was an issue with our notification system.</p>
          <p className="text-sm">Our team has been notified and will contact you shortly.</p>
          <p className="text-xs mt-2 text-yellow-600">Technical details: {webhookError}</p>
        </div>
      )}

      {/* Session Details */}
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
              We'll discuss your goals, challenges, and explore how YohDev can help you achieve your vision.
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <Button
        onClick={() => router.navigate("/")}
        className="bg-brand-teal hover:bg-brand-teal/90 text-black font-medium"
      >
        Return to Homepage
      </Button>
    </div>
  );
}
