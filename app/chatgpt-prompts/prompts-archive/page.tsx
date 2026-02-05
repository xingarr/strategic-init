import PromptArchiveForm from "@/components/forms/PromptArchiveForm"
import type { Metadata } from "next"
// import PromptArchivePageClient from "./PromptArchivePageClient"

export const metadata: Metadata = {
  title: "Prompts Archive | UXCA",
  description:
    "Prompts Archive",
}


export default function BookAnIntroCallPage() {
  return <PromptArchiveForm />
}
