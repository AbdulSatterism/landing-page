"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Mail, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LANDING_PAGE_DATA } from "@/constants/landing-data";
import { fadeInUp } from "@/lib/animations";

export function CTA() {
  const { cta } = LANDING_PAGE_DATA;
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#0d1117] overflow-hidden">
      {/* Dynamic ambient backdrop illumination */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#408E1A]/15 via-[#17B85F]/20 to-transparent blur-[160px] rounded-full" />

      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative rounded-3xl p-[1px] bg-gradient-to-r from-[#408E1A]/50 via-[#17B85F]/70 to-[#408E1A]/50 shadow-2xl"
        >
          <div className="relative rounded-3xl bg-[#111620] px-6 py-12 sm:px-12 sm:py-16 text-center overflow-hidden">
            {/* Soft decorative grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <Badge variant="subtle" className="mb-5">
                <span className="flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#17B85F]" />
                  {cta.badge}
                </span>
              </Badge>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {cta.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#408E1A] to-[#17B85F]">
                  {cta.titleGradient}
                </span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
                {cta.subtitle}
              </p>

              {/* Direct Email Signup Form or Direct CTA */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
              >
                <div className="relative w-full">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#17B85F] transition-colors"
                  />
                </div>
                <Button
                  type="submit"
                  variant="gradient"
                  size="md"
                  className="w-full sm:w-auto shrink-0 shadow-lg shadow-[#17B85F]/20"
                  rightIcon={isSubmitted ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                >
                  {isSubmitted ? "Invited!" : "Get Started"}
                </Button>
              </form>

              {isSubmitted && (
                <p className="text-xs text-[#17B85F] mt-2 font-medium">
                  Thanks! We&apos;ve sent your enterprise trial credentials to your inbox.
                </p>
              )}

              {/* Enterprise Guarantee Badges */}
              <div className="mt-10 pt-7 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {cta.perks.map((perk, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center gap-2 text-xs font-medium text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#17B85F] shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
