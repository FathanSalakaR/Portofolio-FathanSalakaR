import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/SocialIcons";
import { Mail } from "lucide-react";
import { profile } from "@/data/portfolioData";

export default function Footer({ onOpenResume }) {
  const year = new Date().getFullYear();

  const socials = [
    { icon: Github, href: profile.github, label: "GitHub" },
    { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  ];

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200/80 bg-white/60">
      <div className="section-container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: copyright */}
        <p className="text-sm text-slate-500 font-medium">
          © {year} {profile.name}. All rights reserved.
        </p>

        {/* Center: Open Complete PDF Resume Modal */}
        <motion.button
          type="button"
          onClick={onOpenResume}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-50 px-5 py-2.5 text-xs font-bold text-sky-800 shadow-sm transition-all duration-300 hover:border-sky-400 hover:bg-sky-100 hover:text-sky-900 cursor-pointer"
        >
          <FileText size={15} className="text-sky-600" />
          <span>Lihat &amp; Unduh PDF Resume Portofolio</span>
        </motion.button>

        {/* Right: socials + back to top */}
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
            >
              <Icon size={16} />
            </motion.a>
          ))}

          <motion.button
            type="button"
            onClick={scrollTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600 cursor-pointer"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
