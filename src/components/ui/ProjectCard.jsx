import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Github, Figma } from "@/components/SocialIcons";
import { fadeUp } from "@/lib/utils";

export default function ProjectCard({ project, index, onSelectProject }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index * 0.1}
      whileHover={{ y: -8 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-sky-100/70 hover:border-sky-300 cursor-pointer"
      onClick={() => onSelectProject && onSelectProject(project)}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={project.thumbnail}
          alt={`${project.name} thumbnail`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/95 px-3 py-1 text-[11px] font-bold text-sky-700 shadow-sm backdrop-blur-md">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-sky-600">
            {project.name}
          </h3>
          <ArrowRight
            size={16}
            className="text-slate-400 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-sky-600"
          />
        </div>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-700 font-normal text-justify">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 pt-3 border-t border-slate-100">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${project.name} GitHub repository`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-sky-300 hover:text-sky-600 hover:bg-sky-50"
            >
              <Github size={15} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={
                project.demo.includes("figma.com")
                  ? `${project.name} Figma design`
                  : `${project.name} live demo`
              }
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-sky-300 hover:text-sky-600 hover:bg-sky-50"
            >
              {project.demo.includes("figma.com") ? (
                <Figma size={15} />
              ) : (
                <ExternalLink size={15} />
              )}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
