import { ClientJourneyData } from "../types"

const data: ClientJourneyData = {
  clientName: "FloLogic, Inc.",
  logoPath: "/clients/flologic-logo.png",
  backgroundImagePath: "/partnership-water-pattern.png",
  heroTitle: "Migration, Stability, and B2B Readiness",
  heroSubtitle: "FloLogic scaled its ecommerce capabilities with UXCA’s strategic technical leadership—moving from WordPress to Shopify Plus, cleaning legacy data, and enabling long-term growth.",

  introSection: {
    tagline: "RELIABLE THROUGH THE RAPIDS",
    headline: "From Crashing Sites to Confident Scale-Up",
    paragraphs: [
      "FloLogic, a water monitoring technology company, had outgrown its existing WooCommerce site. With mounting reliability issues, data chaos, and an unsupported tech stack, they needed a partner who could turn instability into momentum.",
      "UXCA stepped in as a long-term technical partner, providing DevOps guidance, B2B-ready Shopify Plus architecture, and seamless collaboration across departments—from marketing to operations. Our phased approach ensured growth without disruption."
    ]
  },

  milestones: [
    {
      year: "2019",
      title: "Partnership Begins",
      description: "Ongoing WordPress website management and support as FloLogic’s ecommerce business begins expanding.",
    },
    {
      year: "2023",
      title: "Scalability Limits Hit",
      description: "FloLogic’s WooCommerce platform could no longer support business growth. UXCA began strategic planning for a Shopify Plus migration.",
    },
    {
      year: "2024",
      title: "Migration & Data Cleanup",
      description: "Full migration project launched. UXCA led legacy data cleanup, system design, and a scalable B2B implementation using Shopify Plus and QuickBooks integration.",
    },
    {
      year: "Early 2025",
      title: "New Platform Launches",
      description: "New Shopify Plus site launched successfully. Teams gained efficiency, and FloLogic was ready to scale post-acquisition.",
    },
  ],

  pillars: [
    {
      icon: "Database",
      title: "Legacy Data Cleanup",
      description: "Reorganized, cleaned, and structured customer and order data to fit new platform requirements and long-term needs.",
    },
    {
      icon: "ShoppingCart",
      title: "Ecommerce Migration",
      description: "Moved from WooCommerce to Shopify Plus, enabling better stability, growth, and B2B functionality.",
    },
    {
      icon: "Settings",
      title: "QuickBooks Integration",
      description: "Connected ecommerce and accounting platforms to streamline operations and reduce manual errors.",
    },
    {
      icon: "Users",
      title: "Cross-Department Collaboration",
      description: "Worked closely with Sales, Marketing, Customer Service, and Leadership to align platform goals with business strategy.",
    },
  ],

  narratives: [
    {
      title: "Migrate, Scale Up, and Move Forward",
      paragraphs: [
        "FloLogic’s WooCommerce site couldn’t keep up with traffic and operations. Crashes were frequent and sales were being lost.",
        "UXCA moved the site to a high-performance host with multi-environment support—ensuring staging, QA, and production flows were smooth and secure."
      ],
      metric: {
        value: "0 Outages",
        label: "Post-migration site reliability",
        icon: "Server",
      },
    },
    {
      title: "From WooCommerce to Shopify Plus",
      paragraphs: [
        "UXCA architected and led a complex Shopify Plus migration while untangling years of messy ecommerce data. The team also implemented QuickBooks syncing and B2B account structuring.",
        "The result: a streamlined, modern ecommerce platform that’s scalable, maintainable, and aligned with FloLogic’s future."
      ],
      metric: {
        value: "2x Efficiency",
        label: "Team productivity post-launch",
        icon: "Activity",
      },
    },
    {
      title: "Built to Impress Investors",
      paragraphs: [
        "The new system launched in time for FloLogic’s private equity acquisition. UXCA’s work ensured the company’s tech stack was investor-ready.",
        "With scalability and clean systems in place, the client now operates with speed and confidence."
      ],
      metric: {
        value: "PE Acquired",
        label: "Post-platform launch",
        icon: "Briefcase",
      },
    },
  ],

  quote: {
    text: "UXCA is my go-to for keeping my company’s website functioning and relevant, compliant with the demands of Google algorithms and safe as an e-commerce platform. It’s a great pleasure working with UXCA and I feel grateful to collaborate to keep my business moving.",
    person: "— Ian Greene, Marketing Director, FloLogic, Inc.",
  },

  difference: [
    {
      title: "Reliable",
      description: "From maintenance to major migrations, UXCA consistently delivers without downtime.",
    },
    {
      title: "Fast",
      description: "We moved quickly through complex data and system challenges to get FloLogic to market on time.",
    },
    {
      title: "Trusted",
      description: "Our partnership extended across departments—building trust not just with tech, but across the whole business.",
    },
    {
      title: "Strategic",
      description: "More than developers—we advised on systems, ecommerce operations, and how to scale the tech with business growth.",
    },
  ],

  cta: {
    headline: "Need your ecommerce systems investor-ready?",
    subtext: "UXCA can migrate, clean up, and scale with you.",
    ctaText: "Book an Intro Call",
    ctaUrl: "/intro-call/",
  },
}

export default data
