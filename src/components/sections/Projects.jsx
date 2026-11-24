import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolioData";
import { staggerContainer } from "@/lib/utils";

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="Koleksi proyek yang telah saya kembangkan, mulai dari UI/UX Design, riset Data Mining & Machine Learning, hingga Web Simulation."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              onSelectProject={onSelectProject}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
