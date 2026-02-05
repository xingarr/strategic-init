import ClientJourneyTemplate from "../ClientJourneyTemplate"
import { notFound } from "next/navigation"

// Dynamic import based on slug param
export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const dataModule = await import(`../data/${params.slug}`)
    const data = dataModule.default

    return <ClientJourneyTemplate data={data} />
  } catch (error) {
    return notFound()
  }
}
