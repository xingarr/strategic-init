import { ClientJourneyData } from "../types"

const data: ClientJourneyData = {
  clientName: "Manwah USA",
  logoPath: "/clients/manwah-logo.png",
  backgroundImagePath: "/partnership-fabric-texture.png",
  heroTitle: "Agile Delivery for Legacy Rescue & Long-Term Growth",
  heroSubtitle: "Modernized legacy systems, stabilized core infrastructure, and introduced agile delivery to support rapid feature deployment and sustainable operations.",

  introSection: {
    tagline: "LEGACY MODERNIZED, FUTURE SECURED",
    headline: "From Technical Debt to Reliable Delivery—One Sprint at a Time",
    paragraphs: [
      "Manwah USA, a leading furniture supplier and producer, found itself stuck. A self-taught developer had built a bespoke ERP and fulfillment system that worked—until it didn’t. When the developer left, the app became outdated and brittle, lacking documentation, testing, and deployment processes.",
      "UXCA came in as more than engineers. We became strategic tech leaders—refactoring critical systems, introducing testing and DevOps, and embedding agile practices into their internal workflow. The result? A stable, scalable foundation with room to grow."
    ]
  },

  milestones: [
    {
      year: "Sep 2024",
      title: "Kickoff & Rescue",
      description: "Stabilized the legacy app by upgrading frameworks and packages, refactoring code, and ensuring core services were functional during their peak sales season.",
    },
    {
      year: "Nov 2024",
      title: "Foundational Stability",
      description: "Established testing, documentation, and deployment processes, allowing the client to safely ship updates and minimize operational risk.",
    },
    {
      year: "Jan 2025",
      title: "Feature Velocity",
      description: "Scaled up agile delivery and began rolling out high-impact features aligned with evolving business needs.",
    },
    {
      year: "Jul 2025–Present",
      title: "Ongoing Agile Partnership",
      description: "Actively delivering features, fixing issues, and maintaining the application with clear processes and minimal disruption to daily operations.",
    },
  ],

  pillars: [
    {
      icon: "RefreshCw",
      title: "Legacy Modernization",
      description: "Updated the Ruby-based system by 2 major versions and modernized critical gem packages without disruption.",
    },
    {
      icon: "Code",
      title: "Fullstack Engineering",
      description: "Refactored the entire application while simultaneously delivering new features under a sprint-based process.",
    },
    {
      icon: "CheckCircle",
      title: "DevOps & QA",
      description: "Established deployment pipelines, automated testing, and added robust monitoring for confident releases.",
    },
    {
      icon: "Activity",
      title: "Agile Delivery",
      description: "Embedded sprint planning, retrospectives, and velocity tracking to deliver consistent, predictable results.",
    },
  ],

  narratives: [
    {
      title: "Stabilizing the Unstable",
      paragraphs: [
        "When UXCA arrived, the custom-built ERP platform was fragile. Ruby and core packages were several versions behind, and pushing updates risked breaking key workflows.",
        "We upgraded the system, introduced test coverage, and delivered critical fixes—all without disrupting service during their busiest season."
      ],
      metric: {
        value: "0 Downtime",
        label: "During busiest sales season",
        icon: "ShieldCheck",
      },
    },
    {
      title: "Testing for Confidence",
      paragraphs: [
        "The application had no automated tests, meaning every code change posed a risk. UXCA prioritized test coverage for 70% of the codebase, focusing on critical business logic.",
        "Now, feature rollouts are faster, and bugs are caught early—before they reach customers or internal users."
      ],
      metric: {
        value: "70%",
        label: "Codebase test coverage",
        icon: "ClipboardCheck",
      },
    },
    {
      title: "Future-Proof Agile Partnership",
      paragraphs: [
        "From feature development to architecture planning, UXCA continues to serve as an embedded tech team. We work side-by-side with Manwah USA’s leadership, balancing stability with innovation.",
        "The agile methodology we introduced has reshaped how the business approaches tech—reducing friction, improving visibility, and aligning tech with business goals."
      ],
      metric: {
        value: "4+ Sprints",
        label: "Per month delivered on time",
        icon: "TrendingUp",
      },
    },
  ],

  quote: {
    text: "UXCA is a good team. They are sharp and know what they’re doing.",
    person: "— Jim Hunsberger, CFO Manwah USA",
  },

  difference: [
    {
      title: "Reliable",
      description: "We bring predictability to software development—even when rescuing legacy systems under pressure.",
    },
    {
      title: "Sharp",
      description: "Our experienced team quickly grasps complex codebases and business logic, reducing ramp-up time.",
    },
    {
      title: "Strategic",
      description: "We advise on architecture, deployment, and process—not just code—ensuring long-term impact.",
    },
    {
      title: "Agile-Minded",
      description: "Our team operates in sprints, delivers value fast, and iterates based on real business needs.",
    },
  ],

  cta: {
    headline: "Stuck with legacy software?",
    subtext: "Let’s turn it into your competitive advantage.",
    ctaText: "Book an Intro Call",
    ctaUrl: "/intro-call/",
  },
}

export default data
