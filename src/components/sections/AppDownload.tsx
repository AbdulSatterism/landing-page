"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  CheckCircle2,
  Bell,
  TrendingUp,
  ArrowRight,
  QrCode,
  Shield,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LANDING_PAGE_DATA } from "@/constants/landing-data";
import { slideInLeft, slideInRight } from "@/lib/animations";

export function AppDownload() {
  const { appDownload } = LANDING_PAGE_DATA;
  const [showQr, setShowQr] = useState(false);

  return (
    <section
      id="download"
      className="relative py-20 sm:py-28 bg-[#0d1117] border-t border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -bottom-24 left-1/3 w-[500px] h-[500px] bg-gradient-to-t from-[#17B85F]/15 to-transparent blur-[150px] rounded-full" />

      <Container>
        <SectionHeader
          badge={appDownload.badge}
          title={appDownload.title}
          titleGradient={appDownload.titleGradient}
          subtitle={appDownload.subtitle}
        />

        {/* Streamlined Card Shell */}
        <div className="relative rounded-3xl bg-[#12161f] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Mobile pitch & Store buttons */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-7 flex flex-col gap-5"
            >
              {/* Rating stars */}
              <div className="flex items-center gap-2.5">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white">
                  {appDownload.rating} / 5.0
                </span>
                <span className="text-xs text-slate-400">
                  ({appDownload.totalReviews})
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Real-Time Enterprise Telemetry in Your Pocket
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Inspect live throughput, receive immediate critical breach alerts, and approve transactions securely from anywhere in the world.
              </p>

              {/* Mobile Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {appDownload.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#17B85F] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Store Download Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                {/* Apple App Store */}
                <a
                  href={appDownload.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[#17B85F] text-white flex items-center gap-3 transition-all duration-200 active:scale-95 group shadow-md"
                  aria-label="Download on Apple App Store"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 shrink-0 text-white group-hover:text-emerald-300 transition-colors"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.66-.82 1.11-1.96.99-3.1-.96.04-2.11.64-2.79 1.44-.6.68-1.12 1.77-.98 2.87 1.07.08 2.13-.53 2.78-1.21z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] tracking-wider uppercase text-slate-300 font-semibold">
                      Download on
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      App Store
                    </span>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href={appDownload.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[#17B85F] text-white flex items-center gap-3 transition-all duration-200 active:scale-95 group shadow-md"
                  aria-label="Get it on Google Play"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 shrink-0 text-white group-hover:text-emerald-300 transition-colors"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.37-.34-.61-.83-.61-1.38V3.194c0-.55.24-1.04.61-1.38zm11.603 11.603l2.673-2.673c.33-.33.33-.87 0-1.2l-2.673-2.673-2.128 2.128 2.128 2.128zM4.686.737L14.498 10.55l-2.128 2.128L4.686.737zm0 22.526l7.684-11.94 2.128 2.128-9.812 9.812z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] tracking-wider uppercase text-slate-300 font-semibold">
                      Get it on
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      Google Play
                    </span>
                  </div>
                </a>

                {/* Instant Scan QR Toggle */}
                <button
                  onClick={() => setShowQr(!showQr)}
                  className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-300 hover:text-white hover:bg-white/10 flex items-center gap-2 transition-colors cursor-pointer"
                  title="Scan QR Code"
                >
                  <QrCode className="w-4 h-4 text-[#17B85F]" />
                  <span>{showQr ? "Hide QR" : "Scan QR"}</span>
                </button>
              </div>

              {/* QR Code Reveal */}
              {showQr && (
                <div className="p-3.5 rounded-xl bg-black/60 border border-[#17B85F]/30 backdrop-blur-md flex items-center gap-3.5 max-w-sm mt-1">
                  <div className="p-2 rounded-lg bg-white shrink-0">
                    <QrCode className="w-10 h-10 text-slate-900" />
                  </div>
                  <div className="text-xs text-slate-300">
                    <span className="font-bold text-white block mb-0.5">
                      Point camera to install
                    </span>
                    Direct mobile download for iOS 16+ & Android 12+.
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right Column: Sleek Smartphone Preview */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-[280px] rounded-[36px] bg-black p-2.5 shadow-2xl border-[3px] border-slate-700/60 shadow-[#17B85F]/10">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#17B85F] animate-pulse" />
                </div>

                {/* Screen Content */}
                <div className="relative rounded-[28px] bg-[#0c1017] border border-white/10 overflow-hidden p-4 pt-8 flex flex-col gap-3">
                  {/* Mini Header */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#17B85F] flex items-center justify-center text-[10px] font-bold text-white">
                        V
                      </div>
                      <span className="text-xs font-bold text-white">Verdant Mobile</span>
                    </div>
                    <Bell className="w-3.5 h-3.5 text-slate-400" />
                  </div>

                  {/* Savings KPI Widget */}
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      Today&apos;s Operational Savings
                    </span>
                    <span className="text-xl font-extrabold text-white mt-0.5 block">
                      {appDownload.phoneMockup.savingsMetric}
                    </span>
                    <div className="flex items-center gap-1 mt-1 text-[10px] text-[#17B85F] font-semibold">
                      <TrendingUp className="w-3 h-3" />
                      <span>+22.4% vs benchmark</span>
                    </div>
                  </div>

                  {/* Push Notification Card */}
                  <div className="p-3 rounded-xl bg-[#161b22] border border-[#17B85F]/30">
                    <div className="flex items-center justify-between text-[9px] text-slate-400 mb-0.5">
                      <span className="font-bold text-[#17B85F] flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5" /> Auto-Resolved
                      </span>
                      <span>2m ago</span>
                    </div>
                    <p className="text-xs font-semibold text-white leading-tight">
                      Invoice Reconciled
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      INV-8492 verified with 0% error margin
                    </p>
                  </div>

                  {/* Quick Action */}
                  <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#408E1A] to-[#17B85F] text-white flex items-center justify-center gap-1.5 text-xs font-bold shadow-md cursor-pointer hover:brightness-110">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Run Security Audit</span>
                    <ArrowRight className="w-3 h-3 ml-auto" />
                  </div>

                  {/* Home Bar */}
                  <div className="w-20 h-1 bg-white/20 rounded-full mx-auto mt-1" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
