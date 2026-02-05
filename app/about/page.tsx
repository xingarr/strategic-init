import AboutPageClient from "./AboutPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About UXCA | Your Agile Engineering Team",
  description: "Learn about UXCA's mission, values, and the team behind your on-demand engineering solutions.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
