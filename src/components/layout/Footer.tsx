"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { LANDING_PAGE_DATA } from "@/constants/landing-data";

export function Footer() {
  const { footer } = LANDING_PAGE_DATA;
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSocialIcon = (name: string) => {
    const iconClass = "w-4 h-4 fill-currentColor text-slate-300 group-hover:text-white transition-colors";
    switch (name.toLowerCase()) {
      case "twitter / x":
      case "twitter":
        return (
          <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        );
      case "github":
        return (
          <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
          </svg>
        );
      case "instagram":
        return (
          <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      default:
        return <Sparkles className="w-4 h-4 text-slate-300" />;
    }
  };

  return (
    <footer className="relative bg-[#0d1117] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#17B85F]/10 to-transparent blur-3xl opacity-50" />

      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Logo with strict white background badge rule */}
            <Logo size="lg" />

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {footer.description}
            </p>

            {/* Newsletter Subscription */}
            <div className="mt-2 flex flex-col gap-2.5">
              <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                Subscribe to Executive Telemetry
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="flex-1 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#17B85F] transition-colors"
                />
                <Button
                  type="submit"
                  size="sm"
                  variant="gradient"
                  className="shrink-0"
                >
                  {isSubscribed ? "Joined!" : "Subscribe"}
                </Button>
              </form>
              {isSubscribed && (
                <div className="flex items-center gap-1.5 text-xs text-[#17B85F] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Welcome aboard! You have joined 10,000+ business leaders.</span>
                </div>
              )}
            </div>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 w-fit text-xs text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#17B85F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#17B85F]" />
              </span>
              <span>All Systems Operational (99.99%)</span>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footer.sections.map((section) => (
              <div key={section.title} className="flex flex-col gap-3.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-150 inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Headquarters & Contact
            </h3>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#17B85F] shrink-0 mt-0.5" />
                <span>{footer.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#17B85F] shrink-0" />
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {footer.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#17B85F] shrink-0" />
                <a
                  href={`tel:${footer.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {footer.contact.phone}
                </a>
              </li>
            </ul>

            {/* Social Media Links with hover gradient glow */}
            <div className="pt-2">
              <span className="text-xs font-medium text-slate-400 block mb-2.5">
                Follow VerdantIQ
              </span>
              <div className="flex items-center gap-2.5">
                {footer.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} page`}
                    className="group relative p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white transition-all duration-200 hover:border-[#17B85F]/50 hover:bg-[#17B85F]/10 hover:shadow-lg hover:shadow-[#17B85F]/20"
                  >
                    {renderSocialIcon(social.name)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{footer.copyright}</p>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            {footer.legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-slate-200 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
