import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, ZoomIn, FileText, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CertificateModal from "@/components/ui/CertificateModal";
import { certificates } from "@/data/portfolioData";
import { fadeUp, staggerContainer } from "@/lib/utils";

export default function Certificates() {
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Proof of learning"
          title="Certificates"
          description="Sertifikasi resmi dan kompetensi terverifikasi yang telah saya selesaikan."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="mx-auto max-w-2xl"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-sky-200/80 bg-white shadow-xl shadow-sky-100/60 transition-all duration-500 hover:border-sky-400"
            >
              {/* Image Preview with click to open modal */}
              <div
                onClick={() => setActive(cert)}
                className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50 flex items-center justify-center p-4 sm:p-6 cursor-pointer border-b border-sky-100 group"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-102 rounded-lg shadow-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]">
                  <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-slate-800 shadow-md">
                    <ZoomIn size={15} />
                    Lihat Pratinjau Penuh
                  </span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200/80 px-3.5 py-1 text-xs font-bold text-sky-700">
                    <Award size={14} className="text-sky-600" />
                    <span>{cert.institution}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-500">
                    {cert.date || cert.year}
                  </span>
                </div>

                <h3 className="mt-3 text-xl sm:text-2xl font-extrabold text-slate-900">
                  {cert.name}
                </h3>
                {cert.faculty && (
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-sky-600">
                    {cert.faculty}
                  </p>
                )}
                {cert.instructor && (
                  <p className="mt-1 text-xs text-slate-600 font-medium">
                    Instructor: <span className="font-bold text-slate-800">{cert.instructor}</span>
                  </p>
                )}

                <p className="mt-4 text-sm leading-relaxed text-slate-700 font-normal">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full border border-sky-100 bg-sky-50/80 px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      <CheckCircle2 size={12} className="text-sky-500" />
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3 pt-5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setActive(cert)}
                    className="btn-primary text-xs !py-2.5 !px-5 cursor-pointer"
                  >
                    <ZoomIn size={14} />
                    Pratinjau Sertifikat
                  </button>
                  {cert.pdf && (
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost text-xs !py-2.5 !px-5 inline-flex items-center gap-2"
                    >
                      <FileText size={14} />
                      Buka PDF Asli
                    </a>
                  )}
                  {cert.certId && (
                    <span className="ml-auto text-[11px] font-mono text-slate-400">
                      ID: {cert.certId.slice(0, 18)}...
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <CertificateModal certificate={active} onClose={() => setActive(null)} />
    </section>
  );
}
