import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories, skills } from "@/data/portfolioData";
import { cn, fadeUp, staggerContainer } from "@/lib/utils";

export default function Skills() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? skills : skills.filter((s) => s.category === filter)),
    [filter]
  );

  const tabs = ["All", ...skillCategories];

  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & Technologies"
          description="Kumpulan bahasa pemrograman, framework, tools, dan bidang teknologi yang saya pelajari dan gunakan."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm cursor-pointer",
                filter === tab
                  ? "border-sky-500 bg-sky-500 text-white shadow-md shadow-sky-500/20"
                  : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-600 shadow-sm"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={staggerContainer(0.04)}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeOut" } }}
              className="contents"
            >
              {filtered.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-sky-100 bg-white px-4 py-6 text-center shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-md hover:shadow-sky-100/60"
                >
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 border border-sky-100 text-sky-600 transition-transform duration-300 group-hover:scale-110">
                    <Code2 size={20} />
                  </span>
                  <span className="relative text-xs font-bold text-slate-900 sm:text-sm">
                    {skill.name}
                  </span>
                  <span className="relative text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    {skill.category}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
