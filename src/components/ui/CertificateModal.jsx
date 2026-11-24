import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, FileText, CheckCircle2, ShieldCheck } from "lucide-react";

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = certificate ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={certificate.name}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-sky-100 bg-white p-0 shadow-2xl max-h-[92vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/70 text-white transition-colors hover:bg-slate-900 cursor-pointer shadow-md"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[16/10] w-full bg-slate-100/70 flex items-center justify-center p-3 sm:p-5 border-b border-slate-100">
              <img
                src={certificate.image}
                alt={certificate.name}
                className="max-h-full max-w-full object-contain rounded-xl shadow-sm"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700 border border-sky-200/80">
                  <ShieldCheck size={14} className="text-sky-600" />
                  <span>{certificate.institution}</span>
                </div>
                <span className="text-xs font-bold text-slate-500">
                  {certificate.date || certificate.year}
                </span>
              </div>

              <h3 className="mt-3 text-xl sm:text-2xl font-extrabold text-slate-900">
                {certificate.name}
              </h3>
              {certificate.faculty && (
                <p className="mt-1 text-xs sm:text-sm font-semibold text-sky-600">
                  {certificate.faculty}
                </p>
              )}
              {certificate.instructor && (
                <p className="mt-1 text-xs text-slate-600 font-medium">
                  Instructor: <span className="font-bold text-slate-800">{certificate.instructor}</span>
                </p>
              )}

              <p className="mt-4 text-sm leading-relaxed text-slate-700 font-normal">
                {certificate.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 rounded-full border border-sky-100 bg-sky-50/70 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    <CheckCircle2 size={12} className="text-sky-500" />
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 pt-5 border-t border-slate-100">
                {certificate.pdf && (
                  <a
                    href={certificate.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs !py-2.5 !px-5 inline-flex items-center gap-2"
                  >
                    <FileText size={14} />
                    Lihat Dokumen PDF Resmi
                  </a>
                )}
                {certificate.certId && (
                  <span className="text-xs font-mono text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg ml-auto">
                    Cert ID: {certificate.certId}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
