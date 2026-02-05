import { ClientJourneyData } from "../types"

const OceanOptics: ClientJourneyData = {
  clientName: "Ocean Optics",
  logoPath: "/clients/oceanoptics-logo.png",
  backgroundImagePath: "/partnership-abstract.png",
  heroTitle: "Agile Rebuild and Empowerment",
  heroSubtitle: "Helped Ocean Optics migrate from an expensive CMS to a self-managed WordPress site—delivering speed, autonomy, and sustainable agility.",

  introSection: {
    tagline: "EMBEDDING FOR IMPACT",
    headline: "From Stuck to Self-Sufficient—A Modern Web Foundation",
    paragraphs: [
      "Ocean Optics needed out of a costly, underutilized CMS and a high-friction dev process that slowed marketing execution. Their internal team lacked the flexibility to make changes without outside help.",
      "UXCA partnered across their US and China teams, guiding them through a full website rebuild while embedding agile practices, providing documentation, and creating a clear path to independence.",
    ],
  },

  milestones: [
    {
      year: "2023 (Jan)",
      title: "MVP Launch in 3 Months",
      description: "Rebuilt the entire site on WordPress Blocks, enabling faster content changes and immediate marketing execution.",
    },
    {
      year: "2023 (Sept)",
      title: "Agile Maintenance Begins",
      description: "Transitioned into weekly deployments and iterative improvements based on marketing feedback.",
    },
    {
      year: "2024–Present",
      title: "Empowered & Independent",
      description: "Ocean Optics now self-manages their website and relies on UXCA for strategic enhancements and new features.",
    },
  ],

  pillars: [
    {
      icon: "Code",
      title: "Website Development",
      description: "Rebuilt the site from scratch using WordPress Blocks—enabling speed, flexibility, and scalability.",
    },
    {
      icon: "RefreshCw",
      title: "Agile Delivery",
      description: "Instituted a weekly development cadence with planning, retros, and stakeholder feedback loops.",
    },
    {
      icon: "LifeBuoy",
      title: "Website Maintenance & Support",
      description: "Provided consistent deployments, tech support, and living documentation for long-term sustainability.",
    },
  ],

  narratives: [
    {
      title: "Escaping the CMS Trap",
      paragraphs: [
        "Ocean Optics was bogged down by a heavyweight CMS (Optimizely) that required external developers and high spend to make basic changes.",
        "UXCA replaced it with a leaner, modern WordPress platform and trained their global marketing teams to manage it—giving them back control and cutting costs.",
      ],
      metric: {
        value: "3 Months",
        label: "To MVP Launch",
        icon: "Zap",
      },
    },
  ],

  quote: {
    text: "For the first time more than one salesperson got up at the global sales meeting in Dubai and commented on how much the website is better and more helpful for them in the sales process.",
    person: "— Kelly Radziski, Marketing Manager, Ocean Optics Inc.",
  },

  difference: [
    {
      title: "Collaborative",
      description: "Our approach emphasized shared sessions and education—especially with US and China teams.",
    },
    {
      title: "Reliable",
      description: "We consistently delivered updates, resolved issues quickly, and supported the team throughout transitions.",
    },
    {
      title: "Effective",
      description: "The redesigned site directly improved sales and earned recognition internally.",
    },
    {
      title: "Responsive",
      description: "Quick to act and always available—especially critical during handoffs and deployments.",
    },
  ],

  cta: {
    headline: "Need a team who can modernize and empower?",
    subtext: "Let’s make your website work for your team—not against it.",
    ctaText: "Book an Intro Call",
    ctaUrl: "/intro-call",
  },
}

export default OceanOptics
