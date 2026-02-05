import type { Metadata } from "next"
// import ChatgptPromptPageClient from "./ChatgptPromptPageClient"
import PromptArchiveForm from "@/components/forms/PromptArchiveForm"

export const metadata: Metadata = {
  title: "Chatgpt Prompts | UXCA",
  description:
    "Chatgpt Prompts",
}

export default function BookAnIntroCallPage() {
  return <PromptArchiveForm />
}
