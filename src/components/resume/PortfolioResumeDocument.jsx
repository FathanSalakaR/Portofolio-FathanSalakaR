import React from "react";
import {
  profile,
  skills,
  projects,
  timeline,
  certificates,
} from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Trophy,
  Globe,
} from "lucide-react";
import { Github, Linkedin, Figma } from "@/components/SocialIcons";

export default function PortfolioResumeDocument() {
  const categories = [
    { name: "Programming", label: "Bahasa Pemrograman" },
    { name: "AI & Data", label: "AI & Pengolahan Data" },
    { name: "Frontend", label: "Web & Frontend" },
    { name: "Backend", label: "Backend & Database" },
    { name: "Network & IoT", label: "Jaringan & IoT" },
    { name: "Design & Office", label: "Desain UI/UX & Tools" },
  ];

  return (
    <div
      id="portfolio-resume-document"
      className="mx-auto w-full max-w-[210mm] bg-white text-slate-900 font-sans shadow-2xl print:shadow-none print:max-w-none print:w-full"
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          BAGIAN 1: PROFIL, PENDIDIKAN, KEAHLIAN & PENGALAMAN
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="p-8 sm:p-10 border-b-4 border-sky-500/20 print:border-none print:p-0">
        {/* Banner Link ke Portofolio Online */}
        <div className="mb-5 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 p-3 sm:p-3.5 text-white shadow-sm flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 text-white shrink-0">
              <Globe size={16} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white">
                Portofolio Online Fathan Salaka R
              </p>
              <p className="text-[11px] text-sky-100">
                {profile.liveUrl}
              </p>
            </div>
          </div>
          <a
            href={profile.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-sky-700 shadow-sm hover:bg-sky-50 transition-all shrink-0"
          >
            <span>Buka Website</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Header: Foto + Nama + Kampus + Kontak */}
        <div className="flex flex-col sm:flex-row gap-6 items-start justify-between pb-5 border-b border-sky-100">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-bold text-sky-700 mb-2">
              <span>Universitas Lampung (UNILA) · IPK 3.90 / 4.00</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {profile.name}
            </h1>
            <p className="text-base font-semibold text-sky-600 mt-1">
              Mahasiswa S1 Teknik Informatika · Universitas Lampung
            </p>

            {/* Badges Prestasi & Peran */}
            <div className="flex flex-wrap gap-2 mt-2.5">
              <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-[11px] font-bold text-amber-800">
                ★ Penerima Beasiswa FCS 2024 (Paragon Corp × NAMA)
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-sky-50 border border-sky-200 px-2.5 py-0.5 text-[11px] font-bold text-sky-800">
                ★ Asisten Lab Teknik Digital
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[11px] font-bold text-blue-800">
                ★ Sekretaris Umum HIMATRO
              </span>
            </div>

            {/* Baris Kontak & Link Aktif */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
              <a
                href={profile.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-sky-600 transition-colors sm:col-span-2"
              >
                <Globe size={13} className="text-sky-600 shrink-0" />
                <span className="font-semibold text-sky-700 underline">{profile.liveUrl}</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-slate-700 hover:text-sky-600 transition-colors"
              >
                <Mail size={13} className="text-sky-600 shrink-0" />
                <span className="font-medium underline">{profile.email}</span>
              </a>

              <a
                href={`https://wa.me/62${profile.phone.slice(1)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-sky-600 transition-colors"
              >
                <Phone size={13} className="text-sky-600 shrink-0" />
                <span className="font-medium underline">{profile.phone}</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-sky-600 transition-colors"
              >
                <Github size={13} className="text-sky-600 shrink-0" />
                <span className="font-medium underline">{profile.github}</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-sky-600 transition-colors"
              >
                <Linkedin size={13} className="text-sky-600 shrink-0" />
                <span className="font-medium underline">{profile.linkedin}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-600 sm:col-span-2">
                <MapPin size={13} className="text-sky-600 shrink-0" />
                <span>Bandar Lampung, Lampung, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Foto Profil */}
          <div className="shrink-0 self-center sm:self-start">
            <div className="relative w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden border-2 border-sky-300 shadow-md bg-slate-100">
              <img
                src="/assets/fathan_profile.jpg"
                alt={profile.name}
                className="w-full h-full object-cover object-[center_20%] scale-105"
              />
            </div>
          </div>
        </div>

        {/* Section: Tentang Saya */}
        <div className="mt-5">
          <div className="flex items-center gap-2 mb-1.5 section-header">
            <div className="h-3.5 w-1 bg-sky-600 rounded-full" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Tentang Saya
            </h2>
          </div>
          <p className="text-xs leading-relaxed text-slate-700 text-justify">
            {profile.aboutDescription}
          </p>
        </div>

        {/* Section: Keahlian */}
        <div className="mt-5">
          <div className="flex items-center gap-2 mb-2 section-header">
            <div className="h-3.5 w-1 bg-sky-600 rounded-full" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Keahlian
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {categories.map(({ name, label }) => {
              const items = skills.filter((s) => s.category === name);
              if (!items.length) return null;
              return (
                <div
                  key={name}
                  className="rounded-lg border border-sky-100 bg-sky-50/40 p-2"
                >
                  <p className="text-[10px] font-bold text-sky-900 mb-1">
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {items.map((s) => (
                      <span
                        key={s.name}
                        className="inline-block rounded bg-white border border-sky-200/80 px-1.5 py-0.5 text-[10px] font-medium text-slate-700"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Pendidikan & Pengalaman */}
        <div className="mt-5">
          <div className="flex items-center gap-2 mb-2 section-header">
            <div className="h-3.5 w-1 bg-sky-600 rounded-full" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Pendidikan &amp; Pengalaman
            </h2>
          </div>

          <div className="space-y-2">
            {timeline.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-white p-2.5"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-sky-100 text-sky-700">
                  {item.icon === "university" ? (
                    <GraduationCap size={14} />
                  ) : item.icon === "briefcase" ? (
                    <Briefcase size={14} />
                  ) : (
                    <Award size={14} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="text-xs font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <span className="text-[9.5px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-[10.5px] font-semibold text-slate-600 mt-0.5">
                    {item.org}
                  </p>
                  <p className="text-[10.5px] text-slate-600 mt-0.5 leading-snug text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Sertifikasi & Beasiswa */}
        <div className="mt-5">
          <div className="flex items-center gap-2 mb-2 section-header">
            <div className="h-3.5 w-1 bg-sky-600 rounded-full" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Sertifikasi &amp; Beasiswa
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="rounded-xl border border-sky-200 bg-white p-2.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[9.5px] font-bold text-slate-500 mb-0.5">
                    <span className="text-sky-700">{cert.institution}</span>
                    <span>{cert.date || cert.year}</span>
                  </div>
                  <h3 className="text-[11.5px] font-bold text-slate-900">{cert.name}</h3>
                  {cert.faculty && (
                    <p className="text-[10px] font-semibold text-sky-600 mt-0.5">
                      {cert.faculty}
                    </p>
                  )}
                  <p className="text-[10.5px] text-slate-600 mt-1 leading-snug text-justify">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[9.5px]">
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((sk) => (
                      <span
                        key={sk}
                        className="rounded bg-sky-50 px-1 py-0.5 font-medium text-sky-800"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                  {cert.pdf && (
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-sky-600 hover:underline inline-flex items-center gap-1"
                    >
                      PDF <ExternalLink size={9} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          BAGIAN 2: DAFTAR PROYEK (MULAI DENGAN BERSIH TANPA GAP)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="p-8 sm:p-10 print:p-0 print:pt-4" style={{ breakBefore: "page", pageBreakBefore: "always" }}>
        <div className="mb-4 pb-2 border-b border-sky-100 section-header">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-3.5 w-1 bg-sky-600 rounded-full" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Proyek
            </h2>
          </div>
          <p className="text-[11px] text-slate-600">
            Berikut proyek yang pernah saya kerjakan. Tautan GitHub dan Figma dapat diklik langsung.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-5">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className="page-break-avoid rounded-xl border border-sky-200 bg-white p-4 shadow-sm"
              style={{ breakInside: "avoid", pageBreakInside: "avoid" }}
            >
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-sky-100 pb-2 mb-2.5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-sky-100 px-2 py-0.5 text-[9.5px] font-bold text-sky-800">
                      Proyek {i + 1}
                    </span>
                    <span className="text-[10.5px] font-semibold text-sky-600">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-1">
                    {p.name}
                  </h3>
                </div>

                {/* Clickable Links */}
                <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-800 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                    >
                      <Github size={12} />
                      <span>GitHub ↗</span>
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-sky-300 bg-sky-50 px-2.5 py-1 text-[11px] font-bold text-sky-700 hover:bg-sky-100 transition-colors"
                    >
                      <Figma size={12} />
                      <span>Figma ↗</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Banner Screenshot Preview */}
              {p.thumbnail && (
                <div className="mb-2.5 aspect-[24/9] w-full max-h-40 overflow-hidden rounded-lg border border-sky-100 bg-slate-50 flex items-center justify-center">
                  <img
                    src={p.thumbnail}
                    alt={p.name}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}

              {/* Ringkasan & Solusi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2.5">
                <div className="rounded-lg border border-sky-100 bg-sky-50/40 p-2">
                  <p className="text-[10px] font-bold text-sky-800 mb-0.5">
                    Ringkasan Proyek
                  </p>
                  <p className="text-[10.5px] leading-snug text-slate-700 text-justify">
                    {p.detail.overview}
                  </p>
                </div>

                <div className="rounded-lg border border-emerald-100 bg-emerald-50/40 p-2">
                  <p className="text-[10px] font-bold text-emerald-800 mb-0.5">
                    Solusi
                  </p>
                  <p className="text-[10.5px] leading-snug text-slate-700 text-justify">
                    {p.detail.solution}
                  </p>
                </div>
              </div>

              {/* Fitur & Tools */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2 pt-2 border-t border-slate-100 text-[10.5px]">
                <div>
                  <p className="font-bold text-slate-800 mb-1 flex items-center gap-1 text-sky-700">
                    <CheckCircle2 size={12} /> Fitur Utama
                  </p>
                  <ul className="space-y-0.5 text-slate-700">
                    {p.detail.features.slice(0, 3).map((f, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-sky-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-slate-800 mb-1 text-sky-700">
                    Tools &amp; Teknologi
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {p.detail.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-sky-200 bg-sky-50 px-1.5 py-0.5 text-[9.5px] font-medium text-sky-900"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hasil */}
              <div className="rounded-lg border border-sky-300 bg-sky-50/60 p-2 flex items-start gap-2">
                <Trophy size={13} className="text-sky-600 shrink-0 mt-0.5" />
                <p className="text-[10px] text-slate-800 leading-snug text-justify">
                  <strong className="text-sky-900">Hasil:</strong> {p.detail.result}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Box Penutup Portofolio Online */}
        <div className="mt-6 rounded-xl border border-sky-200 bg-sky-50/60 p-3 text-center">
          <p className="text-xs font-bold text-slate-800">
            Portofolio Online Fathan Salaka R:
          </p>
          <a
            href={profile.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 underline hover:text-sky-900 mt-0.5"
          >
            <span>{profile.liveUrl} ↗</span>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-2.5 border-t border-slate-200 text-center text-[10.5px] text-slate-500">
          <p className="font-medium text-slate-700">
            {profile.name} · S1 Teknik Informatika Universitas Lampung
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">
            Email: {profile.email} · GitHub: {profile.github} · LinkedIn: {profile.linkedin}
          </p>
        </div>
      </section>
    </div>
  );
}
