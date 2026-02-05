import CalendlyPageClient from "./CalendlyPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book an Intro Call | UXCA",
  description:
    "Book a free intro call with UXCA.",
}

export default function BookAnIntroCallPage() {
  // <h2 className="text-white mt-[240px]">Calendly From Page</h2>
  return <CalendlyPageClient />
}
