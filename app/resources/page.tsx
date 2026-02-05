import ResourceArchiveClient from "./ResourceArchiveClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resource Archive | UXCA",
  description:
    "Access our collection of guides, templates, and resources to help you build better digital experiences.",
}

export default function ResourceArchivePage() {
  return <ResourceArchiveClient />
}
