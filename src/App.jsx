import React, { useState, useEffect } from "react";
import LoadingScreen from "@/components/layout/LoadingScreen";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import ProjectDetailView from "@/components/sections/ProjectDetailView";
import Timeline from "@/components/sections/Timeline";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import ResumeModal from "@/components/resume/ResumeModal";
import PortfolioResumeDocument from "@/components/resume/PortfolioResumeDocument";
import { projects } from "@/data/portfolioData";
import { scrollToSection } from "@/lib/utils";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#projects/")) {
        const slug = hash.replace("#projects/", "");
        const found = projects.find((p) => p.slug === slug);
        if (found) {
          setSelectedProject(found);
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
      }
      if (selectedProject && !hash.startsWith("#projects/")) {
        setSelectedProject(null);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [selectedProject]);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    window.location.hash = `#projects/${project.slug}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    window.location.hash = "#projects";
    setTimeout(() => {
      scrollToSection("#projects");
    }, 50);
  };

  const handleNavigateHome = (targetHash) => {
    setSelectedProject(null);
    window.location.hash = targetHash;
    setTimeout(() => {
      scrollToSection(targetHash);
    }, 50);
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-sky-200 selection:text-sky-900">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />

      {/* Soft Sky Blue Grid Pattern & Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-grid-pattern bg-grid opacity-75 print:hidden"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-radial-glow print:hidden"
      />

      <Navbar
        onNavigateHome={handleNavigateHome}
        isDetailView={!!selectedProject}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      <main id="main-content">
        {selectedProject ? (
          <ProjectDetailView
            project={selectedProject}
            onBack={handleBackToProjects}
          />
        ) : (
          <>
            <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
            <About />
            <Skills />
            <Projects onSelectProject={handleSelectProject} />
            <Timeline />
            <Certificates />
            <Contact />
          </>
        )}
      </main>

      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* PDF Resume Modal (Interactive Screen Preview & Print) */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Standalone Print-only Fallback (if user hits Ctrl+P without opening modal) */}
      <div className="hidden print:block">
        {!isResumeModalOpen && <PortfolioResumeDocument />}
      </div>
    </div>
  );
}
