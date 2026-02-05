import { ClientJourneyData } from "../types"

const StrikerCo: ClientJourneyData = {
  clientName: "Striker Co.",
  logoPath: "/clients/striker-logo.png",
  backgroundImagePath: "/partnership-analytics-bg.png",
  heroTitle: "From Guesswork to Clarity",
  heroSubtitle: "UXCA brought precision analytics and a new plugin framework to Striker’s site—turning vague assumptions into real engagement data and usable business tools.",

  introSection: {
    tagline: "DATA-DRIVEN DECISIONS",
    headline: "Analytics, Engagement Tracking, and Smarter Deployments",
    paragraphs: [
      "Striker Co. wanted clarity on how users were interacting with their website—but their offshore dev team struggled to deliver results. With limited insights and a clunky update process, Striker couldn’t make confident, data-backed decisions.",
      "UXCA stepped in to implement custom Google Analytics tracking, visualize key metrics, and establish a reliable deployment cadence for site updates. What started as a one-off analytics project has evolved into a long-term partnership focused on stability and growth."
    ],
  },

  milestones: [
    {
      year: "Apr 2025",
      title: "Analytics Transformation",
      description: "Delivered custom scroll depth tracking, form submissions, and click events for critical CTA buttons. Created a dedicated reporting dashboard tailored to Striker’s goals.",
    },
    {
      year: "Jun 2025",
      title: "Ongoing Web Ops",
      description: "Kicked off website management with agile sprints, plugin development, and safe deployment processes.",
    },
    {
      year: "Jul–Present",
      title: "Plugin Development and Site Maturity",
      description: "Built a QR Code Contact Card plugin to simplify how sales reps connect with leads at events and trade shows.",
    },
  ],

  pillars: [
    {
      icon: "BarChart",
      title: "Advanced Analytics",
      description: "Custom event tracking, scroll-depth analysis, and click mapping brought visibility to how users engage with the site.",
    },
    {
      icon: "Code",
      title: "WordPress Development",
      description: "Improved theme structure, plugin organization, and deployment pipeline for sustainable iteration.",
    },
    {
      icon: "QrCode",
      title: "Custom Plugin Development",
      description: "Developed a QR code generator that links users to vCards for easy sales team access.",
    },
    {
      icon: "RefreshCw",
      title: "Agile Delivery",
      description: "Introduced weekly update cadence, retro cycles, and ticket management for a more responsive web roadmap.",
    },
  ],

  narratives: [
    {
      title: "Clarity Through Analytics",
      paragraphs: [
        "Striker needed better insights into how users scrolled, clicked, and engaged with key CTAs across their marketing site. UXCA implemented custom event tracking using Google Analytics and built a reporting dashboard that focused only on the events that mattered.",
        "This new layer of visibility helped the marketing team make smarter content decisions and track campaign performance with confidence."
      ],
      metric: {
        value: "5+ Events",
        label: "Tracked with full context",
        icon: "MousePointer",
      },
    },
    {
      title: "From Friction to Feature Velocity",
      paragraphs: [
        "Before UXCA, site updates were inconsistent and error-prone. Striker’s team had no clear process for content changes or plugin enhancements.",
        "Now, UXCA manages deployments, QA, and new feature rollouts—including a QR code plugin that helps reps share contact info at events."
      ],
      metric: {
        value: "100%",
        label: "Safe deployment success rate",
        icon: "ShieldCheck",
      },
    },
  ],

  quote: {
    text: "UXCA gave us what our last dev team couldn’t—insight and reliability. We finally know how our users are behaving, and we have tools that make our sales team faster and more effective.",
    person: "— Marketing Lead, Striker Co.",
  },

  difference: [
    {
      title: "Insightful",
      description: "We focus on actionable data—not vanity metrics—so teams can make smarter decisions.",
    },
    {
      title: "Process-Driven",
      description: "We brought clarity to deployments and plugin development, reducing risk and boosting confidence.",
    },
    {
      title: "Adaptable",
      description: "Whether it’s analytics or plugins, we adjust quickly to new priorities while delivering clean code.",
    },
    {
      title: "Empowering",
      description: "Our dashboard and tooling improvements helped Striker take back control from a previously unreliable offshore team.",
    },
  ],

  cta: {
    headline: "Want to track what matters—and deploy with confidence?",
    subtext: "UXCA helps teams move from guessing to growing.",
    ctaText: "Book an Intro Call",
    ctaUrl: "/intro-call",
  },
}

export default StrikerCo
