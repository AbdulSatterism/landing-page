import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VerdantIQ | Next-Gen Enterprise Intelligence & Workflow Orchestration",
  description:
    "Transforming enterprise business operations with autonomous AI workflows, real-time financial telemetry, and global edge cloud infrastructure.",
  keywords: [
    "Enterprise AI",
    "Workflow Orchestration",
    "Financial Telemetry",
    "Operations Management",
    "VerdantIQ",
  ],
  authors: [{ name: "VerdantIQ Systems" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#0d1117] text-slate-100 font-sans selection:bg-[#17B85F]/30 selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
