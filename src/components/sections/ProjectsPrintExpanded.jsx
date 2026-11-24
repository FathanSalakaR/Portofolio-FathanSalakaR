import React from "react";
import { projects } from "@/data/portfolioData";
import {
  Layers,
  Target,
  Lightbulb,
  ListChecks,
  Wrench,
  AlertTriangle,
  Trophy,
} from "lucide-react";

const blocks = [
  { key: "overview", label: "Overview", icon: Layers },
  { key: "problem", label: "Problem", icon: Target },
  { key: "solution", label: "Solution", icon: Lightbulb },
];

/**
 * ProjectsPrintExpanded — Hanya aktif saat print / Save as PDF.
 * Menampilkan SEMUA 6 proyek dalam keadaan terbuka penuh (detail lengkap:
 * overview, problem, solution, features, tech stack, challenges, result & impact).
 */
export default function ProjectsPrintExpanded() {
  return (
    <section className="hidden print:block py-6">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center mb-10 pb-4 border-b border-sky-200">
          <span className="eyebrow text-xs tracking-widest uppercase text-sky-600 font-bold">
            Full Portfolio Catalog
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
            Projects &amp; Case Studies (Detail Lengkap)
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto">
            Seluruh proyek teknologi, riset data mining, perancangan sistem, dan desain UI/UX dengan arsitektur solusi lengkap.
          </p>
        </div>

        {/* List of all projects fully expanded */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <article
              key={project.slug}
              className="page-break-avoid rounded-3xl border-2 border-sky-200/90 bg-white p-8 shadow-sm"
              style={{ breakInside: "avoid", pageBreakInside: "avoid" }}
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sky-100 pb-4 mb-6">
                <div>
                  <span className="inline-block rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-700">
                    Proyek {idx + 1} &nbsp;·&nbsp; {project.category}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-2">
                    {project.name}
                  </h3>
                </div>
                {(project.github || project.demo) && (
                  <div className="text-xs text-slate-600 font-mono">
                    {project.github && <span>GitHub: {project.github}</span>}
                    {project.demo && (
                      <span className="ml-2">Figma: {project.demo}</span>
                    )}
                  </div>
                )}
              </div>

              {/* Main Banner Screenshot */}
              {project.thumbnail && (
                <div className="mb-6 aspect-video w-full max-h-72 overflow-hidden rounded-2xl border border-sky-100 bg-slate-50 flex items-center justify-center">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}

              {/* 3 Pillars: Overview, Problem, Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {blocks.map(({ key, label, icon: Icon }) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-sky-100 bg-sky-50/40 p-4"
                  >
                    <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
                      <Icon size={16} />
                      <span>{label}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-700 font-medium text-justify">
                      {project.detail[key]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Features & Tech Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 pt-4 border-t border-slate-100">
                {/* Features */}
                <div>
                  <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-3">
                    <ListChecks size={16} />
                    <span>Fitur Utama</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {project.detail.features.slice(0, 6).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack & Challenges */}
                <div>
                  <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
                    <Wrench size={16} />
                    <span>Technology Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.detail.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-sky-200 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.detail.challenges && project.detail.challenges.length > 0 && (
                    <>
                      <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider mb-2">
                        <AlertTriangle size={15} />
                        <span>Tantangan &amp; Solusi Teknis</span>
                      </div>
                      <ul className="space-y-1 text-xs text-slate-600 font-medium">
                        {project.detail.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-amber-500">▸</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>

              {/* Result Card */}
              <div className="rounded-2xl border-2 border-sky-300 bg-sky-50/70 p-4 flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white">
                  <Trophy size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-900">
                    Hasil &amp; Dampak Proyek (Result &amp; Impact)
                  </h4>
                  <p className="text-xs font-semibold text-slate-800 mt-1 leading-relaxed text-justify">
                    {project.detail.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
