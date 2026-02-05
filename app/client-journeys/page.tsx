import ClientJourneysPageClient from "./ClientJourneysPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Partnerships That Scale | UXCA",
  description:
    "Discover how UXCA builds partnerships that help companies grow smarter, move faster, and unlock new opportunities.",
}

export default function ClientJourneysPage() {
  return <ClientJourneysPageClient />
}
