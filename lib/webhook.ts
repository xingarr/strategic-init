/**
 * Utility function to send data to make.com webhook
 */
export async function sendWebhook(webhookUrl: string, data: any) {
  try {
    console.log("Sending webhook to:", webhookUrl)
    console.log("Webhook payload:", JSON.stringify(data, null, 2))

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`Webhook failed with status: ${response.status}`)
    }

    // Try to parse as JSON, but don't fail if it's not JSON
    try {
      const responseData = await response.json()
      console.log("Webhook response:", responseData)
      return { success: true, data: responseData }
    } catch (e) {
      // If response is not JSON, just return success with text
      const text = await response.text()
      console.log("Webhook response (text):", text)
      return { success: true, message: text }
    }
  } catch (error) {
    console.error("Error sending webhook:", error)
    // Return error object instead of throwing
    return { success: false, error: String(error) }
  }
}
