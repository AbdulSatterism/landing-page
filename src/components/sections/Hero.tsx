"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle,
  BarChart3,
  Server,
  Layers,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LANDING_PAGE_DATA } from "@/constants/landing-data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  const { hero } = LANDING_PAGE_DATA;
  const [activeTab, setActiveTab] = useState<"telemetry" | "workflows" | "security">("telemetry");

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-[#408E1A]/20 via-[#17B85F]/20 to-transparent blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute top-1/2 -right-40 w-[400px] h-[400px] bg-[#17B85F]/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 -left-40 w-[400px] h-[400px] bg-[#408E1A]/10 blur-[130px] rounded-full" />

      {/* Subtle tech background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Top Pill Badge */}
          <motion.div variants={fadeInUp}>
            <Badge variant="subtle" className="mb-6 cursor-default">
              <span className="flex items-center gap-1.5 font-semibold">
                <Zap className="w-3.5 h-3.5 text-[#17B85F]" />
                {hero.badge}
              </span>
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]"
          >
            {hero.titleStart}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#408E1A] to-[#17B85F]">
              {hero.titleGradient}
            </span>{" "}
            {hero.titleEnd}
          </motion.h1>

          {/* Subtitle Value Proposition */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Button
              href={hero.primaryCta.href}
              variant="gradient"
              size="lg"
              className="w-full sm:w-auto shadow-xl shadow-[#17B85F]/20"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              {hero.primaryCta.label}
            </Button>

            <Button
              href={hero.secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          {/* Quick micro guarantees */}
          <motion.div
            variants={fadeInUp}
            className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400"
          >
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-[#17B85F]" />
              No credit card required
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-[#17B85F]" />
              5-minute instant setup
            </span>
          </motion.div>

          {/* Quick Metrics Strip */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-8 border-t border-white/10"
          >
            {hero.stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  {stat.trend && (
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-[#17B85F]/15 text-[#17B85F]">
                      {stat.trend}
                    </span>
                  )}
                </div>
                <span className="text-xs text-slate-400 mt-1 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Streamlined Interactive Product Preview */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 max-w-5xl mx-auto"
        >
          {/* Subtle container glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#408E1A]/20 via-[#17B85F]/20 to-[#408E1A]/20 blur-xl opacity-60" />

          {/* Product Window Shell */}
          <div className="relative rounded-2xl bg-[#0f141c] border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* Window Topbar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#161b22]/90 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#17B85F]/80" />
                <span className="ml-3 text-xs text-slate-400 font-mono hidden sm:inline">
                  app.verdantiq.com/control-plane
                </span>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5 text-xs">
                <button
                  onClick={() => setActiveTab("telemetry")}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    activeTab === "telemetry"
                      ? "bg-[#17B85F]/20 text-[#17B85F] font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Live Telemetry
                </button>
                <button
                  onClick={() => setActiveTab("workflows")}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    activeTab === "workflows"
                      ? "bg-[#17B85F]/20 text-[#17B85F] font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Workflows
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    activeTab === "security"
                      ? "bg-[#17B85F]/20 text-[#17B85F] font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Security
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-[#17B85F] animate-pulse" />
                <span className="hidden sm:inline">Real-time Stream</span>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-4 sm:p-6 lg:p-7">
              {activeTab === "telemetry" && (
                <div>
                  {/* KPI Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                          Processed Volume
                        </span>
                        <span className="text-xl sm:text-2xl font-bold text-white mt-1 block">
                          $4,892,420
                        </span>
                      </div>
                      <span className="p-2 rounded-lg bg-[#17B85F]/15 text-[#17B85F]">
                        <TrendingUp className="w-5 h-5" />
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                          Edge Throughput
                        </span>
                        <span className="text-xl sm:text-2xl font-bold text-white mt-1 block">
                          {hero.dashboardPreview.activeUsersValue} ops/s
                        </span>
                      </div>
                      <span className="p-2 rounded-lg bg-[#408E1A]/20 text-emerald-400">
                        <Activity className="w-5 h-5" />
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                          Global P99 Latency
                        </span>
                        <span className="text-xl sm:text-2xl font-bold text-[#17B85F] mt-1 block">
                          {hero.dashboardPreview.executionSpeed}
                        </span>
                      </div>
                      <span className="p-2 rounded-lg bg-[#17B85F]/15 text-[#17B85F]">
                        <Zap className="w-5 h-5" />
                      </span>
                    </div>
                  </div>

                  {/* SVG Chart Visualization */}
                  <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-[#17B85F]" />
                        <span className="text-sm font-semibold text-white">
                          Predictive Execution Velocity (Last 24 Hours)
                        </span>
                      </div>
                      <span className="text-xs text-emerald-400 font-mono font-medium">
                        +142.8% YoY
                      </span>
                    </div>

                    <div className="h-32 sm:h-40 w-full relative flex items-end">
                      <svg
                        viewBox="0 0 600 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                      >
                        <defs>
                          <linearGradient id="heroGraphGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#17B85F" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#408E1A" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="heroStrokeGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#408E1A" />
                            <stop offset="50%" stopColor="#17B85F" />
                            <stop offset="100%" stopColor="#38ef7d" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 85 Q 60 75, 120 50 T 240 55 T 360 28 T 480 22 T 600 12 L 600 120 L 0 120 Z"
                          fill="url(#heroGraphGrad)"
                        />
                        <path
                          d="M0 85 Q 60 75, 120 50 T 240 55 T 360 28 T 480 22 T 600 12"
                          stroke="url(#heroStrokeGrad)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <circle cx="240" cy="55" r="4" fill="#ffffff" stroke="#17B85F" strokeWidth="2.5" />
                        <circle cx="360" cy="28" r="4" fill="#ffffff" stroke="#17B85F" strokeWidth="2.5" />
                        <circle cx="480" cy="22" r="4" fill="#ffffff" stroke="#17B85F" strokeWidth="2.5" />
                        <circle cx="600" cy="12" r="4" fill="#ffffff" stroke="#17B85F" strokeWidth="2.5" />
                      </svg>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-3 border-t border-white/5 text-[11px] text-slate-400 font-mono">
                      <div>Cluster: US-East Edge</div>
                      <div>Sync Delay: 0.38ms</div>
                      <div>Memory: 18.2%</div>
                      <div className="text-right text-[#17B85F]">Status: 100% Operational</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "workflows" && (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#17B85F]/20 text-[#17B85F]">
                        <Layers className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Automated Reconciliation Pipeline</h4>
                        <p className="text-xs text-slate-400">Triggered on invoice creation • 1,420 events/min</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#17B85F]/20 text-[#17B85F]">
                      Active • 0 errors
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                        <Server className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Multi-Cloud Event Sync</h4>
                        <p className="text-xs text-slate-400">AWS + GCP + Azure bi-directional webhook router</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#17B85F]/20 text-[#17B85F]">
                      Active • 4.2ms
                    </span>
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#17B85F]/20 text-[#17B85F]">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Zero-Trust Attribute Access (ABAC)</h4>
                        <p className="text-xs text-slate-400">SOC2 Type II & ISO 27001 automated compliance</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#17B85F]/20 text-[#17B85F]">
                      Verified Clean
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Cryptographic Transaction Ledger</h4>
                        <p className="text-xs text-slate-400">Immutable SHA-256 state hashing on all operations</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#17B85F]/20 text-[#17B85F]">
                      100% Validated
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Enterprise Logos Ribbon */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Empowering mission-critical workflows at scale
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-75">
            {hero.trustedCompanies.map((co) => (
              <div
                key={co.name}
                className="flex items-center gap-2 group transition-transform hover:scale-105"
              >
                <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[10px] font-mono font-bold text-white group-hover:bg-[#17B85F]/20 group-hover:text-[#17B85F]">
                  {co.symbol.slice(0, 2)}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                  {co.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
