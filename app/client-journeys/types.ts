export interface Milestone {
  year: string
  title: string
  description: string
}

export interface Pillar {
  icon: string // Icon name from Lucide
  title: string
  description: string
}

export interface NarrativeBlock {
  title: string
  paragraphs: string[]
  metric?: {
    value: string
    label: string
    icon: string // Icon name from Lucide
  }
}

export interface ClientJourneyData {
  introSection?: {
    tagline: string
    headline: string
    paragraphs: string[]
  }

  clientName: string
  logoPath: string
  backgroundImagePath: string
  heroTitle: string
  heroSubtitle: string
  milestones: Milestone[]
  pillars: Pillar[]
  narratives: NarrativeBlock[]
  quote: {
    text: string
    person: string
  }
  difference?: {
    title: string
    description: string
  }[]
  cta: {
    headline: string
    subtext: string
    ctaText: string
    ctaUrl: string
  }
}
