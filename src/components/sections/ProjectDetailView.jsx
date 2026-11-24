import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Target,
  Lightbulb,
  ListChecks,
  Wrench,
  GitBranch,
  AlertTriangle,
  Trophy,
  ZoomIn,
  X,
} from "lucide-react";
import { Github, Figma } from "@/components/SocialIcons";
import { fadeUp, staggerContainer } from "@/lib/utils";

const blocks = [
  { key: "overview", label: "Overview", icon: Layers },
  { key: "problem", label: "Problem", icon: Target },
  { key: "solution", label: "Solution", icon: Lightbulb },
];

export default function ProjectDetailView({ project, onBack }) {
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setPreviewImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (!project) return null;

  const isMobileApp =
    project.category.toLowerCase().includes("mobile") ||
    project.category.toLowerCase().includes("ui/ux") ||
    project.slug.includes("lumbung");

  return (
    <article className="relative pb-24 pt-32 sm:pt-40">
      <div className="section-container">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-sky-600 cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.1)}
          className="mt-8 flex flex-col gap-3"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            {project.category}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            {project.name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-base text-slate-600 sm:text-lg font-normal"
          >
            {project.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-3 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <Github size={16} />
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                {project.demo.includes("figma.com") ? (
                  <>
                    <Figma size={16} />
                    View Figma Design
                  </>
                ) : (
                  <>
                    <ExternalLink size={16} />
                    Live Demo
                  </>
                )}
              </a>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mt-10 aspect-video w-full overflow-hidden rounded-3xl border border-sky-100 shadow-xl shadow-sky-100/50 bg-slate-100"
        >
          <img
            src={project.thumbnail}
            alt={`${project.name} preview`}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {blocks.map(({ key, label, icon: Icon }) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              variants={fadeUp}
              className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-sky-600">
                <Icon size={18} />
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  {label}
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 font-medium">
                {project.detail[key]}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer(0.08)}
          className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-2 text-sky-600"
            >
              <ListChecks size={18} />
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Features
              </h2>
            </motion.div>
            <ul className="space-y-3">
              {project.detail.features.map((feature) => (
                <motion.li
                  key={feature}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-sm text-slate-700 font-medium"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-2 text-sky-600"
            >
              <Wrench size={18} />
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Technology Stack
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {project.detail.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-sky-100 bg-sky-50/60 px-3 py-1.5 text-xs font-semibold text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mb-5 mt-10 flex items-center gap-2 text-sky-600"
            >
              <GitBranch size={18} />
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Development Process
              </h2>
            </motion.div>
            <ol className="space-y-3">
              {project.detail.process.map((step, i) => (
                <motion.li
                  key={step}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-sm text-slate-700 font-medium"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-[10px] font-bold text-sky-700">
                    {i + 1}
                  </span>
                  {step}
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeUp}
          className="mt-14 rounded-2xl border border-amber-200/80 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-2 text-amber-600">
            <AlertTriangle size={18} />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Challenges
            </h2>
          </div>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {project.detail.challenges.map((challenge) => (
              <li
                key={challenge}
                className="rounded-xl border border-amber-100 bg-amber-50/40 p-4 text-sm text-slate-800 leading-relaxed font-medium"
              >
                {challenge}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Screenshot Gallery */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              variants={fadeUp}
              className="text-sm font-bold uppercase tracking-wider text-slate-900"
            >
              Screenshot Gallery ({project.detail.gallery.length} Screens)
            </motion.h2>
            <span className="text-xs text-slate-500 font-medium">Click screen to inspect</span>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer(0.08)}
            className={
              isMobileApp
                ? "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
                : "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
            }
          >
            {project.detail.gallery.map((image, i) => (
              <motion.div
                key={`${image}-${i}`}
                variants={fadeUp}
                whileHover={{ scale: 1.03, y: -4 }}
                onClick={() => setPreviewImage(image)}
                className={`group relative overflow-hidden rounded-2xl border border-sky-100 bg-white cursor-pointer shadow-sm transition-all duration-300 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-100 ${
                  isMobileApp ? "aspect-[9/18]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={image}
                  alt={`${project.name} screenshot ${i + 1}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]">
                  <span className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-800 shadow-md">
                    <ZoomIn size={14} />
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Project Result Section - High Contrast & Guaranteed Visibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-3xl border-2 border-sky-300 bg-white p-8 sm:p-10 text-center shadow-xl shadow-sky-100/70"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-md shadow-sky-500/30">
            <Trophy size={24} />
          </div>
          <h2 className="mt-4 text-base font-extrabold uppercase tracking-wider text-sky-900">
            Project Result & Impact
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg leading-relaxed font-semibold text-slate-900">
            {project.detail.result}
          </p>
        </motion.div>
      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] max-w-full overflow-hidden rounded-2xl border border-white/20 bg-white p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/70 text-white transition-colors hover:bg-slate-900 cursor-pointer"
              >
                <X size={20} />
              </button>

              <img
                src={previewImage}
                alt="Enlarged screenshot"
                className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
