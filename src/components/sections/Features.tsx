"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  TrendingUp,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { LANDING_PAGE_DATA } from "@/constants/landing-data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Features() {
  const { features } = LANDING_PAGE_DATA;

  const getFeatureIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5 text-white" };
    switch (iconName) {
      case "Workflow":
        return <Workflow {...iconProps} />;
      case "TrendingUp":
        return <TrendingUp {...iconProps} />;
      case "ShieldCheck":
        return <ShieldCheck {...iconProps} />;
      case "Zap":
        return <Zap {...iconProps} />;
      default:
        return <Sparkles {...iconProps} />;
    }
  };

  return (
    <section
      id="features"
      className="relative py-20 sm:py-28 bg-[#0d1117] overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#17B85F]/5 blur-[150px] rounded-full" />

      <Container>
        <SectionHeader
          badge={features.badge}
          title={features.title}
          titleGradient={features.titleGradient}
          subtitle={features.subtitle}
        />

        {/* Streamlined 4-Card Grid (2x2) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {features.items.map((item) => (
            <motion.div key={item.id} variants={fadeInUp} className="h-full">
              <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:from-[#17B85F]/40 hover:via-[#17B85F]/20 transition-all duration-300 group">
                <div className="h-full rounded-2xl bg-[#12161f] p-6 sm:p-8 flex flex-col justify-between border border-white/5 group-hover:border-[#17B85F]/30 transition-all duration-300">
                  <div>
                    {/* Top Row: Icon & Tag */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#408E1A] to-[#17B85F] flex items-center justify-center shadow-md shadow-[#17B85F]/20 group-hover:scale-105 transition-transform duration-200">
                        {getFeatureIcon(item.icon)}
                      </div>

                      {item.badge && (
                        <Badge
                          variant="outline"
                          hasDot={false}
                          className="text-[11px] font-semibold text-emerald-400 border-[#17B85F]/30 bg-[#17B85F]/5"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-white group-hover:text-[#17B85F] transition-colors mb-2.5 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                      {item.description}
                    </p>

                    {/* Key Highlights */}
                    <ul className="flex flex-col gap-2 mb-6 pt-4 border-t border-white/5">
                      {item.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#17B85F] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Metric Pill */}
                  {item.metric && (
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-[#408E1A] to-[#17B85F]">
                          {item.metric}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {item.metricLabel}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#17B85F] group-hover:translate-x-1 transition-all" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
