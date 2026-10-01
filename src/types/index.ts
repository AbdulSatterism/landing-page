export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface HeroStat {
  value: string;
  label: string;
  trend?: string;
  isPositive?: boolean;
}

export interface HeroData {
  badge: string;
  titleStart: string;
  titleGradient: string;
  titleEnd: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  stats: HeroStat[];
  dashboardPreview: {
    growthValue: string;
    growthLabel: string;
    activeUsersValue: string;
    uptimeValue: string;
    executionSpeed: string;
  };
  trustedCompanies: {
    name: string;
    symbol: string;
  }[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  metric?: string;
  metricLabel?: string;
  highlights: string[];
}

export interface FeaturesData {
  badge: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  items: FeatureItem[];
}

export interface AboutStat {
  value: string;
  label: string;
  description: string;
  highlight?: string;
}

export interface AboutMilestone {
  step: string;
  title: string;
  description: string;
}

export interface AboutData {
  badge: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  story: string[];
  stats: AboutStat[];
  keyHighlights: string[];
  milestones: AboutMilestone[];
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface MissionVisionData {
  badge: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  mission: {
    title: string;
    tagline: string;
    description: string;
    bulletPoints: string[];
  };
  vision: {
    title: string;
    tagline: string;
    description: string;
    bulletPoints: string[];
  };
  values: ValueItem[];
}

export interface AppDownloadData {
  badge: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  appStoreUrl: string;
  playStoreUrl: string;
  rating: string;
  totalReviews: string;
  features: string[];
  phoneMockup: {
    activeStatus: string;
    savingsMetric: string;
    savingsPeriod: string;
    recentNotification: {
      title: string;
      message: string;
      timeAgo: string;
    };
  };
}

export interface CTAData {
  badge: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  perks: string[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  availability: string;
}

export interface FooterData {
  brandName: string;
  brandTagline: string;
  description: string;
  sections: FooterSection[];
  socialLinks: SocialLink[];
  contact: ContactInfo;
  legalLinks: FooterLink[];
  copyright: string;
}

export interface LandingPageData {
  navLinks: NavItem[];
  hero: HeroData;
  features: FeaturesData;
  about: AboutData;
  missionVision: MissionVisionData;
  appDownload: AppDownloadData;
  cta: CTAData;
  footer: FooterData;
}
