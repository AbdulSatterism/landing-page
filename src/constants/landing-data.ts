import { LandingPageData } from "@/types";

export const LANDING_PAGE_DATA: LandingPageData = {
  navLinks: [
    { label: "Overview", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "Platform", href: "#platform" },
    { label: "Mobile App", href: "#download" },
  ],
  hero: {
    badge: "Next-Gen Enterprise Platform 3.0",
    titleStart: "Intelligent Workflows for the",
    titleGradient: "Modern Enterprise",
    titleEnd: "at Scale",
    subtitle:
      "Automate complex operations, monitor predictive financial telemetry, and orchestrate mission-critical business logic with sub-second precision.",
    primaryCta: {
      label: "Start Free Trial",
      href: "#download",
    },
    secondaryCta: {
      label: "Explore Features",
      href: "#features",
    },
    stats: [
      { value: "99.99%", label: "Uptime SLA", trend: "+0.09%", isPositive: true },
      { value: "10k+", label: "Enterprise Teams", trend: "+48% YoY", isPositive: true },
      { value: "$4.8B+", label: "Annual Volume", trend: "Verified", isPositive: true },
      { value: "< 12ms", label: "Edge Latency", trend: "Global", isPositive: true },
    ],
    dashboardPreview: {
      growthValue: "+142.8%",
      growthLabel: "Quarterly Revenue Velocity",
      activeUsersValue: "184,920",
      uptimeValue: "99.99%",
      executionSpeed: "11.4 ms",
    },
    trustedCompanies: [
      { name: "Apex Global", symbol: "APX" },
      { name: "NovaDynamics", symbol: "NVD" },
      { name: "Synthetix AI", symbol: "SYN" },
      { name: "HyperScale", symbol: "HSC" },
      { name: "Vanguard Systems", symbol: "VGD" },
      { name: "Aetherial Labs", symbol: "AET" },
    ],
  },
  features: {
    badge: "Core Platform Capabilities",
    title: "Engineered for Speed, Scalability, and",
    titleGradient: "Absolute Precision",
    subtitle:
      "Four enterprise-grade pillars built to eliminate manual friction, mitigate risks, and accelerate organizational throughput.",
    items: [
      {
        id: "autonomous-workflows",
        title: "Autonomous Workflow Orchestration",
        description:
          "Connect cross-departmental operations with self-healing automation pipelines that dynamically adapt to workload spikes and API anomalies.",
        icon: "Workflow",
        badge: "AI Orchestrated",
        metric: "4.8x",
        metricLabel: "Faster Resolution",
        highlights: [
          "Zero-code visual flow trigger builder",
          "Automated anomaly mitigation protocols",
          "Multi-cloud synchronous event hooks",
        ],
      },
      {
        id: "predictive-telemetry",
        title: "Predictive Financial Telemetry",
        description:
          "Anticipate liquidity variances, invoice delays, and operational friction weeks before they impact corporate balance sheets.",
        icon: "TrendingUp",
        badge: "Real-Time AI",
        metric: "98.4%",
        metricLabel: "Forecast Accuracy",
        highlights: [
          "Continuous multivariate cashflow modeling",
          "Predictive churn and retention telemetry",
          "One-click scenario impact simulations",
        ],
      },
      {
        id: "zero-trust-security",
        title: "Zero-Trust Security & Governance",
        description:
          "Enforce automated SOC2 Type II, ISO 27001, and HIPAA guardrails integrated seamlessly into every data path and transaction perimeter.",
        icon: "ShieldCheck",
        badge: "Bank Grade",
        metric: "256-bit",
        metricLabel: "Quantum-Safe Encryption",
        highlights: [
          "Granular attribute-based access control (ABAC)",
          "Immutable cryptographic audit trails",
          "Automated compliance evidence export",
        ],
      },
      {
        id: "global-edge-infra",
        title: "Global Low-Latency Edge Mesh",
        description:
          "Deploy business logic across 32 regional edge nodes worldwide to guarantee responsive customer and internal operations everywhere.",
        icon: "Zap",
        badge: "Worldwide",
        metric: "< 12ms",
        metricLabel: "Global P99 Latency",
        highlights: [
          "Distributed edge caching & compute",
          "Multi-region active failover routing",
          "Dedicated Tier-1 peering connectivity",
        ],
      },
    ],
  },
  about: {
    badge: "Platform & Vision",
    title: "Built to Eliminate Drag and",
    titleGradient: "Accelerate Enterprise Velocity",
    subtitle:
      "We founded VerdantIQ on a simple conviction: enterprise software shouldn't be sluggish, fractured, or fragile.",
    story: [
      "Modern companies lose hundreds of hours every quarter wrangling fragmented systems, reconciling disconnected spreadsheets, and manually troubleshooting integration breakdowns.",
      "VerdantIQ brings operations, telemetry, and automation together into a single, self-optimizing backbone designed for modern scale.",
    ],
    stats: [
      {
        value: "99.99%",
        label: "Guaranteed SLA",
        description: "Zero downtime deployments across redundant global clusters.",
        highlight: "Reliability",
      },
      {
        value: "10k+",
        label: "Enterprise Teams",
        description: "Leading tech firms, financial institutions, and global logistics.",
        highlight: "Adoption",
      },
      {
        value: "$4.8B+",
        label: "Volume Orchestrated",
        description: "Protected by end-to-end encryption and audit vaults.",
        highlight: "Scale",
      },
      {
        value: "4.9 / 5",
        label: "Customer Rating",
        description: "Based on 3,400+ verified enterprise reviews.",
        highlight: "Satisfaction",
      },
    ],
    keyHighlights: [
      "Unified operational intelligence replacing 5+ legacy tools",
      "API-first architecture with 200+ pre-built integrations",
      "Enterprise security: SOC2 Type II, ISO 27001, GDPR compliant",
      "24/7 dedicated engineering support and SLA guarantees",
    ],
    milestones: [
      {
        step: "01",
        title: "Connect",
        description: "Plug in your existing tools via 200+ native connectors in minutes.",
      },
      {
        step: "02",
        title: "Automate",
        description: "Deploy intelligent workflows with self-healing exception rules.",
      },
      {
        step: "03",
        title: "Accelerate",
        description: "Monitor real-time telemetry and optimize cashflow velocity.",
      },
    ],
  },
  missionVision: {
    badge: "Guiding Principles",
    title: "Guided by a Mission to",
    titleGradient: "Empower Global Teams",
    subtitle:
      "Our principles guide every architectural decision, user interface interaction, and security protocol we release.",
    mission: {
      title: "Our Mission",
      tagline: "Driving operational velocity through intelligent automation.",
      description:
        "To eliminate enterprise friction by delivering a unified digital backbone that allows high-growth teams to automate, monitor, and scale with certainty.",
      bulletPoints: [
        "Eliminate repetitive manual bottlenecks with autonomous intelligence",
        "Provide real-time data transparency across all business units",
        "Enable frictionless cross-border scaling with zero infrastructure drag",
      ],
    },
    vision: {
      title: "Our Vision",
      tagline: "The global standard for autonomous enterprise operations.",
      description:
        "A future where operational decisions are proactively guided by telemetry, transactions are safeguarded automatically, and teams focus on high-impact innovation.",
      bulletPoints: [
        "Proactive intelligence replacing reactive troubleshooting",
        "Zero-compromise security woven into every transaction",
        "Adaptive architecture scaling seamlessly from startup to Fortune 500",
      ],
    },
    values: [
      {
        title: "Relentless Scalability",
        description: "Engineered to handle billions in transactions with predictable sub-second response times.",
        icon: "Scale",
        gradient: "from-[#408E1A] to-[#17B85F]",
      },
      {
        title: "Radical Transparency",
        description: "Clear SLA disclosures, immutable audit records, and live system status with zero ambiguity.",
        icon: "Eye",
        gradient: "from-[#17B85F] to-[#408E1A]",
      },
      {
        title: "Precision Engineering",
        description: "Built with uncompromising rigor, strict type safety, and military-grade encryption.",
        icon: "Cpu",
        gradient: "from-[#408E1A] to-[#17B85F]",
      },
      {
        title: "Customer Velocity",
        description: "We measure success by how quickly and reliably VerdantIQ compounds your team's output.",
        icon: "Rocket",
        gradient: "from-[#17B85F] to-[#408E1A]",
      },
    ],
  },
  appDownload: {
    badge: "Mobile Telemetry",
    title: "Control Your Operations",
    titleGradient: "From Anywhere",
    subtitle:
      "Stay connected to live metrics, approve key transactions, and receive instant anomaly alerts on iOS and Android.",
    appStoreUrl: "https://apple.com/app-store",
    playStoreUrl: "https://play.google.com/store",
    rating: "4.9",
    totalReviews: "12,400+ reviews",
    features: [
      "Biometric secure authentication (FaceID & Fingerprint)",
      "Real-time push alerts for critical workflow events",
      "Offline-first cached telemetry and quick sync",
      "One-tap executive signoff for financial items",
    ],
    phoneMockup: {
      activeStatus: "Live Systems Synced",
      savingsMetric: "$124,580.00",
      savingsPeriod: "Optimized Today",
      recentNotification: {
        title: "Automated Approval Granted",
        message: "Invoice #INV-8492 reconciled with 0% error margin",
        timeAgo: "2m ago",
      },
    },
  },
  cta: {
    badge: "Get Started Today",
    title: "Ready to Accelerate Your",
    titleGradient: "Business Operations?",
    subtitle:
      "Join over 10,000 forward-thinking enterprises that rely on VerdantIQ to automate workflows, safeguard data, and scale with velocity.",
    primaryCta: {
      label: "Start 14-Day Free Trial",
      href: "#download",
    },
    secondaryCta: {
      label: "Schedule Demo",
      href: "mailto:sales@verdantiq.com",
    },
    perks: [
      "No credit card required to start",
      "Instant 5-minute setup",
      "Dedicated onboarding specialist",
      "SOC2 Type II certified",
    ],
  },
  footer: {
    brandName: "VerdantIQ",
    brandTagline: "Next-Gen Enterprise Intelligence",
    description:
      "The unified operating backbone for autonomous workflow orchestration, predictive financial telemetry, and global-scale operations management.",
    sections: [
      {
        title: "Product",
        links: [
          { label: "Overview", href: "#hero" },
          { label: "Features", href: "#features" },
          { label: "Platform", href: "#platform" },
          { label: "Mobile App", href: "#download" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "#platform" },
          { label: "Guiding Principles", href: "#platform" },
          { label: "Careers", href: "#" },
          { label: "Security & Trust", href: "#features" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Documentation", href: "#" },
          { label: "API Reference", href: "#" },
          { label: "System Status (99.99%)", href: "#" },
          { label: "Case Studies", href: "#" },
        ],
      },
    ],
    socialLinks: [
      { name: "Twitter / X", href: "https://twitter.com", icon: "Twitter" },
      { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
      { name: "GitHub", href: "https://github.com", icon: "Github" },
    ],
    contact: {
      email: "contact@verdantiq.com",
      phone: "+1 (800) 582-9104",
      address: "100 Montgomery St, Suite 2400, San Francisco, CA 94104",
      availability: "24/7 Enterprise Support",
    },
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security", href: "#" },
    ],
    copyright: "© 2026 VerdantIQ Systems Inc. All rights reserved.",
  },
};
