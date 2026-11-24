import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, Download, FileText, CheckCircle2 } from "lucide-react";
import PortfolioResumeDocument from "./PortfolioResumeDocument";
import { profile } from "@/data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex flex-col bg-slate-950/80 backdrop-blur-md overflow-hidden print:static print:bg-transparent print:p-0">
        {/* Sticky Top Control Toolbar (Hidden in Print) */}
        <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-slate-900/95 px-6 py-3.5 text-white shadow-xl backdrop-blur-lg print:hidden">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 border border-sky-400/30">
              <FileText size={20} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-extrabold text-white">
                Dokumen Portofolio Resume Lengkap — Fathan Salaka R
              </h2>
              <p className="text-xs text-sky-200/80 flex items-center gap-1.5 mt-0.5">
                <CheckCircle2 size={13} className="text-sky-400 shrink-0" />
                Format resume lengkap: Seluruh link GitHub, Figma, dan gambar aktif.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Direct Download Original CV */}
            <a
              href={profile.cvUrl}
              download="CV_Fathan_Salaka_R.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Unduh CV Asli</span>
            </a>

            {/* Print / Save as PDF Button */}
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2 text-xs font-extrabold text-white shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-102 transition-all cursor-pointer"
            >
              <Printer size={15} />
              <span>Simpan sebagai PDF</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup preview"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </header>

        {/* Scrollable Document Container */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-12 print:p-0 print:overflow-visible">
          {/* Helpful printing guide banner (Hidden in Print) */}
          <div className="mx-auto max-w-[210mm] mb-6 rounded-2xl border border-sky-300/40 bg-sky-950/60 p-4 text-xs text-sky-200 backdrop-blur-md shadow-md print:hidden flex items-start gap-3">
            <span className="text-base">💡</span>
            <div>
              <p className="font-bold text-sky-100">
                Petunjuk Simpan PDF dengan Tampilan Sempurna:
              </p>
              <p className="mt-0.5 text-sky-200/90 leading-relaxed">
                Klik tombol <strong>"Simpan sebagai PDF"</strong> di atas (atau tekan <strong>Ctrl + P</strong>), lalu pada jendela cetak browser pilih Destination: <strong>"Save as PDF"</strong> / <strong>"Simpan sebagai PDF"</strong>. Pastikan opsi <em>Background graphics</em> dicentang agar warna kartu dan badge tetap keluar dengan indah. Semua link GitHub &amp; Figma di dalam file PDF tetap aktif dan dapat diklik!
              </p>
            </div>
          </div>

          {/* Actual Document Sheet */}
          <PortfolioResumeDocument />
        </main>
      </div>
    </AnimatePresence>
  );
}
