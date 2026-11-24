import React from "react";
import {
  profile,
  skills,
  projects,
  timeline,
  certificates,
} from "@/data/portfolioData";

/**
 * PrintPortfolio — Halaman khusus yang hanya tampil saat print/PDF.
 * Semua konten proyek dan sertifikat ditampilkan full (expanded).
 * Di-render di dalam DOM normal tapi disembunyikan dengan CSS (print:block).
 */
export default function PrintPortfolio() {
  return (
    <div id="print-portfolio" className="hidden print:block print-portfolio">
      {/* ── HEADER ── */}
      <div className="print-header">
        <h1 className="print-name">{profile.name}</h1>
        <p className="print-title">{profile.title}</p>
        <p className="print-title" style={{ fontSize: "11px", marginTop: "4px", color: "#475569" }}>
          {profile.university} &nbsp;·&nbsp; {profile.email} &nbsp;·&nbsp; {profile.phone}
        </p>
        <div className="print-divider" />
      </div>

      {/* ── ABOUT ── */}
      <section className="print-section">
        <h2 className="print-section-title">Tentang Saya</h2>
        <p className="print-body">{profile.aboutDescription}</p>
      </section>

      {/* ── SKILLS ── */}
      <section className="print-section">
        <h2 className="print-section-title">Keahlian</h2>
        {["Programming", "Frontend", "Backend", "AI & Data", "Network & IoT", "Design & Office", "Tools"].map((cat) => {
          const catSkills = skills.filter((s) => s.category === cat);
          if (!catSkills.length) return null;
          return (
            <div key={cat} className="print-skill-row">
              <span className="print-skill-cat">{cat}:</span>
              <span className="print-skill-list">
                {catSkills.map((s) => s.name).join("  ·  ")}
              </span>
            </div>
          );
        })}
      </section>

      {/* ── PROJECTS ── */}
      <section className="print-section">
        <h2 className="print-section-title">Proyek</h2>
        {projects.map((p) => (
          <div key={p.slug} className="print-project">
            <h3 className="print-project-title">{p.name}</h3>
            <p className="print-label">{p.category}</p>
            <p className="print-body" style={{ marginTop: "4px" }}>{p.description}</p>

            {p.detail && (
              <>
                <div className="print-block">
                  <span className="print-block-label">Overview: </span>
                  <span className="print-body">{p.detail.overview}</span>
                </div>
                <div className="print-block">
                  <span className="print-block-label">Problem: </span>
                  <span className="print-body">{p.detail.problem}</span>
                </div>
                <div className="print-block">
                  <span className="print-block-label">Solution: </span>
                  <span className="print-body">{p.detail.solution}</span>
                </div>
                <div className="print-block">
                  <span className="print-block-label">Tech Stack: </span>
                  <span className="print-body">{p.detail.stack.join(" · ")}</span>
                </div>
                {p.detail.features && p.detail.features.length > 0 && (
                  <div className="print-block">
                    <span className="print-block-label">Features:</span>
                    <ul className="print-list">
                      {p.detail.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                )}
                {p.detail.challenges && p.detail.challenges.length > 0 && (
                  <div className="print-block">
                    <span className="print-block-label">Challenges:</span>
                    <ul className="print-list">
                      {p.detail.challenges.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </div>
                )}
                <div className="print-result">
                  <span className="print-block-label">Result &amp; Impact: </span>
                  <span className="print-body">{p.detail.result}</span>
                </div>
              </>
            )}

            {(p.github || p.demo) && (
              <p className="print-link">
                {p.github && <span>GitHub: {p.github}</span>}
                {p.github && p.demo && <span>  |  </span>}
                {p.demo && <span>Demo: {p.demo}</span>}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* ── EXPERIENCE / TIMELINE ── */}
      <section className="print-section">
        <h2 className="print-section-title">Riwayat &amp; Pengalaman</h2>
        {timeline.map((t) => (
          <div key={t.id} className="print-timeline-item">
            <div className="print-timeline-header">
              <strong className="print-project-title" style={{ fontSize: "11px" }}>{t.title}</strong>
              <span className="print-label" style={{ marginLeft: "auto" }}>{t.period}</span>
            </div>
            <p className="print-label" style={{ color: "#0ea5e9", marginBottom: "3px" }}>{t.org}</p>
            <p className="print-body">{t.description}</p>
            <p className="print-body" style={{ color: "#64748b", marginTop: "2px" }}>
              {t.skills.join(" · ")}
            </p>
          </div>
        ))}
      </section>

      {/* ── CERTIFICATES ── */}
      <section className="print-section">
        <h2 className="print-section-title">Sertifikasi &amp; Penghargaan</h2>
        {certificates.map((c) => (
          <div key={c.id} className="print-cert">
            <div className="print-timeline-header">
              <strong className="print-project-title" style={{ fontSize: "11px" }}>{c.name}</strong>
              <span className="print-label" style={{ marginLeft: "auto" }}>{c.date || c.year}</span>
            </div>
            <p className="print-label" style={{ color: "#0ea5e9", marginBottom: "3px" }}>
              {c.institution}{c.faculty ? ` · ${c.faculty}` : ""}
            </p>
            {c.instructor && (
              <p className="print-body" style={{ marginBottom: "2px" }}>Instructor: {c.instructor}</p>
            )}
            <p className="print-body">{c.description}</p>
            <p className="print-body" style={{ color: "#64748b", marginTop: "2px" }}>
              {c.skills.join(" · ")}
            </p>
            {c.pdf && (
              <p className="print-link">PDF: {c.pdf}</p>
            )}
          </div>
        ))}
      </section>

      {/* ── FOOTER ── */}
      <div className="print-footer">
        <p>{profile.name} &nbsp;·&nbsp; {profile.email} &nbsp;·&nbsp; {profile.github}</p>
        <p>Generated from portfolio website · {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
