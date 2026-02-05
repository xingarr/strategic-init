import { NextResponse } from "next/server"
import { config } from "@/lib/config"

export async function POST(request: Request) {
  try {
    // Get the form data from the request
    const formData = await request.json()

    // Validate the required fields
    if (!formData.personal?.fullName || !formData.personal?.email) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Send the data to make.com webhook
    const response = await fetch(config.webhooks.makeComDiscoverySession, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error(`Webhook failed with status: ${response.status}`)
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    })
  } catch (error) {
    console.error("Error processing webhook:", error)

    return NextResponse.json({ success: false, message: "Error processing form submission" }, { status: 500 })
  }
}
