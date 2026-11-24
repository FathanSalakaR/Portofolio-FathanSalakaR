import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { navLinks } from "@/data/portfolioData";
import { scrollToSection, cn } from "@/lib/utils";

export default function Navbar({ onNavigateHome, isDetailView, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isDetailView) {
      setActive("#projects");
      return;
    }

    let observer;
    let timeoutId;

    const initObserver = () => {
      const sections = navLinks
        .map((l) => document.querySelector(l.href))
        .filter(Boolean);

      if (sections.length === 0) {
        timeoutId = setTimeout(initObserver, 100);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(`#${entry.target.id}`);
            }
          });
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );

      sections.forEach((s) => observer.observe(s));
    };

    timeoutId = setTimeout(initObserver, 300);

    return () => {
      clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, [isDetailView]);

  const handleNavClick = useCallback(
    (href) => {
      setOpen(false);
      if (isDetailView) {
        onNavigateHome(href);
      } else {
        scrollToSection(href);
      }
    },
    [isDetailView, onNavigateHome]
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 pointer-events-none",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="section-container pointer-events-auto">
        <nav
          className={cn(
            "relative z-[60] flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500",
            scrolled
              ? "bg-white/85 backdrop-blur-xl border border-sky-100 shadow-md shadow-sky-100/40"
              : "bg-white/50 backdrop-blur-md border border-white/80"
          )}
          aria-label="Primary"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-lg font-bold tracking-tight text-slate-900"
          >
            Fathan<span className="text-primary">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={cn(
                      "relative block px-4 py-2 text-sm font-medium transition-colors duration-300",
                      isActive
                        ? "text-sky-600 font-semibold"
                        : "text-slate-600 hover:text-sky-600"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        className="absolute inset-0 -z-10 rounded-full bg-sky-50 border border-sky-200/80 shadow-sm"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-50 px-3.5 py-1.5 text-xs font-bold text-sky-700 shadow-2xs hover:bg-sky-100 hover:border-sky-400 hover:text-sky-800 transition-all cursor-pointer"
            >
              <FileText size={13} />
              <span>PDF Resume</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-slate-700 bg-white border border-slate-200 shadow-sm"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <ul className="mt-2 bg-white/95 backdrop-blur-xl border border-sky-100 shadow-xl rounded-2xl p-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        active === link.href
                          ? "bg-sky-50 text-sky-600 font-semibold"
                          : "text-slate-600 hover:text-sky-600 hover:bg-slate-50"
                      )}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}

                <li className="pt-2 border-t border-slate-100 mt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      onOpenResume();
                    }}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-50 border border-sky-200 px-4 py-2.5 text-xs font-bold text-sky-700"
                  >
                    <FileText size={14} />
                    <span>Buka &amp; Unduh PDF Resume</span>
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
