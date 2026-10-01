"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  TrendingUp,
  Award,
  Users,
  Shield,
  Sparkles,
  Scale,
  Eye,
  Cpu,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { LANDING_PAGE_DATA } from "@/constants/landing-data";
import { slideInLeft, slideInRight } from "@/lib/animations";

export function About() {
  const { about, missionVision } = LANDING_PAGE_DATA;
  const [activeStatIndex, setActiveStatIndex] = useState<number>(0);

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Scale className="w-5 h-5 text-[#17B85F]" />;
      case 1:
        return <Eye className="w-5 h-5 text-[#17B85F]" />;
      case 2:
        return <Cpu className="w-5 h-5 text-[#17B85F]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#17B85F]" />;
    }
  };

  return (
    <section
      id="platform"
      className="relative py-20 sm:py-28 bg-[#0b0e14] border-y border-white/5 overflow-hidden"
    >
      <div id="about" className="absolute -top-24 left-0" />
      {/* Decorative ambient gradients */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-[#408E1A]/10 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute -top-20 -right-20 w-[450px] h-[450px] bg-[#17B85F]/10 blur-[140px] rounded-full" />

      <Container>
        <SectionHeader
          badge={about.badge}
          title={about.title}
          titleGradient={about.titleGradient}
          subtitle={about.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Narrative Story & Milestones */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="flex items-center gap-2">
              <Badge variant="subtle" hasDot={false} icon={<Sparkles className="w-3.5 h-3.5" />}>
                Unified Operating Backbone
              </Badge>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              Eliminating operational drag so high-growth teams can move with velocity.
            </h3>

            <div className="flex flex-col gap-3.5 text-base text-slate-300 leading-relaxed font-normal">
              {about.story.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Value Pillars / Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {about.keyHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#17B85F] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Execution Milestones */}
            <div className="mt-4 pt-6 border-t border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                How It Works
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {about.milestones.map((m) => (
                  <div
                    key={m.step}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#17B85F]">
                        STEP {m.step}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-1 mb-1">
                        {m.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Metrics & Principles */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {/* Metric Panel */}
            <div className="rounded-2xl p-[1px] bg-gradient-to-r from-[#408E1A]/30 to-[#17B85F]/30 shadow-xl">
              <div className="bg-[#12161f] rounded-2xl p-6 sm:p-7 flex flex-col gap-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Audited Enterprise Metrics
                  </span>
                  <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#17B85F] animate-pulse" />
                    Live Q3 2026
                  </span>
                </div>

                {/* 4 Interactive Stat Cards */}
                <div className="grid grid-cols-2 gap-3.5">
                  {about.stats.map((stat, idx) => {
                    const isSelected = activeStatIndex === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveStatIndex(idx)}
                        className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                          isSelected
                            ? "bg-[#17B85F]/15 border-[#17B85F] shadow-lg shadow-[#17B85F]/10 scale-[1.02]"
                            : "bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                            {stat.highlight}
                          </span>
                          {idx === 0 && <Award className="w-3.5 h-3.5 text-[#17B85F]" />}
                          {idx === 1 && <Users className="w-3.5 h-3.5 text-[#17B85F]" />}
                          {idx === 2 && <TrendingUp className="w-3.5 h-3.5 text-[#17B85F]" />}
                          {idx === 3 && <Shield className="w-3.5 h-3.5 text-[#17B85F]" />}
                        </div>

                        <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                          {stat.value}
                        </div>

                        <div className="text-xs font-semibold text-slate-200">
                          {stat.label}
                        </div>

                        <p className="text-[11px] text-slate-400 mt-1 leading-snug line-clamp-2">
                          {stat.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Foundational Principles Cards */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Engineering Principles
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {missionVision.values.slice(0, 3).map((val, idx) => (
                  <div
                    key={val.title}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#17B85F]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#17B85F]/15 flex items-center justify-center mb-2.5">
                      {getPillarIcon(idx)}
                    </div>
                    <h5 className="text-xs font-bold text-white mb-1">
                      {val.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
