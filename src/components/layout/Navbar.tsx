"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LANDING_PAGE_DATA } from "@/constants/landing-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current active section
      const sections = ["hero", "features", "platform", "download"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const navHeight = 80;
        const targetPos = targetEl.offsetTop - navHeight;
        window.scrollTo({
          top: targetPos >= 0 ? targetPos : 0,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0d1117]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5"
          : "bg-[#0d1117]/50 backdrop-blur-sm border-b border-white/5 py-5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo with strict white badge requirement */}
          <Logo size="md" />

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md"
            aria-label="Main Navigation"
          >
            {LANDING_PAGE_DATA.navLinks.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-xs lg:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200",
                    isActive
                      ? "text-white bg-white/10 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: "Get Started" gradient button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="#download"
              variant="gradient"
              size="sm"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              href="#download"
              variant="gradient"
              size="sm"
              className="px-3 py-1.5 text-xs"
            >
              Start
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[65px] bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-[#0d1117] border-b border-white/10 shadow-2xl p-6 z-50 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {LANDING_PAGE_DATA.navLinks.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors",
                        isActive
                          ? "bg-white/10 text-white font-semibold"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        className={cn(
                          "w-4 h-4 transition-transform",
                          isActive
                            ? "text-[#17B85F] translate-x-1"
                            : "text-slate-500"
                        )}
                      />
                    </a>
                  );
                })}

                <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                  <Button
                    href="#download"
                    variant="gradient"
                    size="md"
                    className="w-full justify-center"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started Today
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
