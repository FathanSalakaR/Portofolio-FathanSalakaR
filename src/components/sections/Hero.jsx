import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowDown, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/SocialIcons";
import ProfilePhotoCard from "@/components/ui/ProfilePhotoCard";
import { profile } from "@/data/portfolioData";
import { scrollToSection, EASE } from "@/lib/utils";

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

export default function Hero({ onOpenResume }) {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden w-full flex items-center"
    >
      <div className="section-container relative flex flex-col lg:grid lg:grid-cols-12 min-h-screen items-center gap-8 lg:gap-12 py-20 lg:py-0">
        {/* Left Column: Bio & Action Buttons */}
        <div className="flex flex-col justify-center items-start text-left order-2 lg:order-1 relative z-10 w-full lg:col-span-7">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="w-full max-w-xl"
          >
            <motion.span variants={heroItem} className="eyebrow mb-4 inline-block">
              Welcome to my portfolio
            </motion.span>

            <motion.h1
              variants={heroItem}
              className="text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{profile.name}</span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-4 text-lg font-semibold text-sky-600 sm:text-xl"
            >
              {profile.title}
            </motion.p>

            <motion.p
              variants={heroItem}
              className="mt-5 text-sm leading-relaxed text-slate-700 sm:text-base font-normal text-justify"
            >
              {profile.heroDescription}
            </motion.p>

            <motion.div
              variants={heroItem}
              className="mt-9 flex flex-wrap items-center justify-start gap-3"
            >
              {/* Primary: Open Complete Portfolio Resume PDF */}
              <motion.button
                type="button"
                onClick={onOpenResume}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary cursor-pointer shadow-lg shadow-sky-500/30"
              >
                <FileText size={16} />
                PDF Resume Portofolio
              </motion.button>

              <motion.a
                href={profile.cvUrl}
                download="CV_Fathan_Salaka_R.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn-ghost cursor-pointer"
              >
                <Download size={16} />
                Download CV
              </motion.a>

              <motion.a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn-ghost cursor-pointer"
              >
                <Github size={16} />
                GitHub
              </motion.a>

              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn-ghost cursor-pointer"
              >
                <Linkedin size={16} />
                LinkedIn
              </motion.a>

              <motion.button
                type="button"
                onClick={() => scrollToSection("#contact")}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn-ghost cursor-pointer"
              >
                <Mail size={16} />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Clean Modern Square/Rectangle Photo Card */}
        <div className="flex justify-center items-center w-full order-1 lg:order-2 lg:col-span-5 relative z-10">
          <ProfilePhotoCard />
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection("#about")}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 p-2 text-slate-500 shadow-sm backdrop-blur-sm hover:text-sky-600 lg:flex cursor-pointer"
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
