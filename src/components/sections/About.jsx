import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Sparkles,
  Code,
  Smartphone,
  BrainCircuit,
  Palette,
  Database,
  Cpu,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolioData";
import { fadeUp, staggerContainer } from "@/lib/utils";

const interestIcons = {
  "Software Development": Code,
  "Web Development": Code,
  "Mobile Development": Smartphone,
  "Artificial Intelligence": BrainCircuit,
  "UI/UX Design": Palette,
  "Database Management": Database,
  "Data Mining & Analytics": Database,
  "Internet of Things": Cpu,
};

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Get to know me"
          title="About Me"
          description="Cerita singkat tentang latar belakang, pendidikan, dan fokus saya di dunia teknologi informasi."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0.12)}
            className="lg:col-span-3"
          >
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-slate-700 sm:text-lg font-normal text-justify"
            >
              {profile.aboutDescription}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 space-y-4">
              <div className="glass-card flex items-start gap-4 p-5">
                <div className="rounded-xl bg-sky-50 border border-sky-100 p-2.5 text-sky-600">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {profile.university}
                  </p>
                  <p className="text-xs text-sky-600 font-semibold mt-0.5">
                    Informatics Engineering &middot; {profile.start} &middot; IPK {profile.gpa}
                  </p>
                </div>
              </div>

              <div className="glass-card flex items-start gap-4 p-5">
                <div className="rounded-xl bg-sky-50 border border-sky-100 p-2.5 text-sky-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {profile.background}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{profile.major}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0.08)}
            className="lg:col-span-2"
          >
            <motion.div variants={fadeUp} className="mb-4 flex items-center gap-2">
              <Sparkles size={16} className="text-sky-600" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Interests
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {profile.interests.map((interest) => {
                const Icon = interestIcons[interest] || Code;
                return (
                  <motion.div
                    key={interest}
                    variants={fadeUp}
                    whileHover={{ y: -3 }}
                    className="glass flex items-center gap-3 rounded-xl p-3.5 transition-all duration-300 hover:border-sky-300 hover:shadow-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600 border border-sky-100/60">
                      <Icon size={16} />
                    </span>
                    <span className="text-xs font-semibold text-slate-800">
                      {interest}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
