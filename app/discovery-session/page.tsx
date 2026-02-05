import DiscoverySessionPageClient from "./DiscoverySessionPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Discovery Session | UXCA",
  description:
    "Book a free discovery session with UXCA to discuss your project goals and map your next move together.",
}

export default function FreeDiscoverySessionPage() {
  return <DiscoverySessionPageClient />
}
