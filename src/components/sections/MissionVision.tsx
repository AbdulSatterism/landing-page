"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Compass,
  CheckCircle2,
  Scale,
  Eye,
  Cpu,
  Rocket,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { LANDING_PAGE_DATA } from "@/constants/landing-data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function MissionVision() {
  const { missionVision } = LANDING_PAGE_DATA;
  const [activeTab, setActiveTab] = useState<"both" | "mission" | "vision">("both");

  const getValueIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5 text-white" };
    switch (iconName) {
      case "Scale":
        return <Scale {...iconProps} />;
      case "Eye":
        return <Eye {...iconProps} />;
      case "Cpu":
        return <Cpu {...iconProps} />;
      case "Rocket":
        return <Rocket {...iconProps} />;
      default:
        return <Target {...iconProps} />;
    }
  };

  return (
    <section
      id="mission"
      className="relative py-24 sm:py-32 bg-[#0d1117] overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#408E1A]/10 to-[#17B85F]/10 blur-[150px] rounded-full" />

      <Container>
        <SectionHeader
          badge={missionVision.badge}
          title={missionVision.title}
          titleGradient={missionVision.titleGradient}
          subtitle={missionVision.subtitle}
        />

        {/* View Switcher Controls (Mobile/Compact Option) */}
        <div className="flex sm:hidden justify-center mb-8">
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.05] border border-white/10">
            <button
              onClick={() => setActiveTab("both")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === "both"
                  ? "bg-[#17B85F] text-white"
                  : "text-slate-400"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === "mission"
                  ? "bg-[#17B85F] text-white"
                  : "text-slate-400"
              }`}
            >
              Mission
            </button>
            <button
              onClick={() => setActiveTab("vision")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === "vision"
                  ? "bg-[#17B85F] text-white"
                  : "text-slate-400"
              }`}
            >
              Vision
            </button>
          </div>
        </div>

        {/* Dual-Card Split Layout with subtle gradient borders (border border-[#17B85F]/20) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Mission Card */}
          {(activeTab === "both" || activeTab === "mission") && (
            <motion.div variants={fadeInUp} className="h-full">
              <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-b from-[#17B85F]/40 via-white/10 to-transparent shadow-xl">
                <div className="h-full rounded-2xl bg-[#12161f] p-8 sm:p-10 border border-[#17B85F]/20 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#408E1A] to-[#17B85F] flex items-center justify-center shadow-lg shadow-[#17B85F]/20">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <Badge
                        variant="subtle"
                        hasDot={false}
                        className="text-xs uppercase font-semibold text-emerald-400"
                      >
                        Purpose Driven
                      </Badge>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                      {missionVision.mission.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#17B85F] mb-4">
                      {missionVision.mission.tagline}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {missionVision.mission.description}
                    </p>

                    {/* Actionable Commitments */}
                    <ul className="flex flex-col gap-3 pt-4 border-t border-white/10">
                      {missionVision.mission.bulletPoints.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#17B85F] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Vision Card */}
          {(activeTab === "both" || activeTab === "vision") && (
            <motion.div variants={fadeInUp} className="h-full">
              <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-b from-[#408E1A]/40 via-white/10 to-transparent shadow-xl">
                <div className="h-full rounded-2xl bg-[#12161f] p-8 sm:p-10 border border-[#17B85F]/20 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#17B85F] to-[#408E1A] flex items-center justify-center shadow-lg shadow-[#17B85F]/20">
                        <Compass className="w-6 h-6 text-white" />
                      </div>
                      <Badge
                        variant="subtle"
                        hasDot={false}
                        className="text-xs uppercase font-semibold text-emerald-400"
                      >
                        Global Horizon
                      </Badge>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                      {missionVision.vision.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#17B85F] mb-4">
                      {missionVision.vision.tagline}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {missionVision.vision.description}
                    </p>

                    {/* Actionable Commitments */}
                    <ul className="flex flex-col gap-3 pt-4 border-t border-white/10">
                      {missionVision.vision.bulletPoints.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#17B85F] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Core Values 4-Card Grid with subtle gradient borders */}
        <div className="pt-8">
          <div className="text-center mb-10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#17B85F]">
              Foundational Principles
            </h4>
            <p className="text-xl sm:text-2xl font-bold text-white mt-1">
              The Values That Power VerdantIQ
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {missionVision.values.map((val) => (
              <motion.div key={val.title} variants={fadeInUp}>
                <div className="h-full p-6 rounded-xl bg-white/[0.02] border border-[#17B85F]/20 hover:border-[#17B85F]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#17B85F]/10 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#408E1A] to-[#17B85F] flex items-center justify-center mb-4 shadow-sm">
                      {getValueIcon(val.icon)}
                    </div>
                    <h5 className="text-base font-bold text-white mb-2">
                      {val.title}
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
