import React from "react";
import { profile, projects, timeline, certificates } from "@/data/portfolioData";

// ─── Slide Dimensions ───────────────────────────────────────────────────
const W = 1120;
const H = 630;

// ─── Shared design tokens (literals only – html2canvas safe) ────────────
const C = {
  blue: "#0284c7",
  blueDk: "#0369a1",
  blueLt: "#0ea5e9",
  sky50: "#f0f9ff",
  sky100: "#e0f2fe",
  sky200: "#bae6fd",
  white: "#ffffff",
  dark: "#0f172a",
  slate7: "#334155",
  slate5: "#64748b",
  slate2: "#e2e8f0",
  slate1: "#f1f5f9",
  amber: "#f59e0b",
};

const font = "'Inter', 'Segoe UI', Arial, sans-serif";

const trunc = (str, n) =>
  str && str.length > n ? str.slice(0, n) + "…" : str || "";

// ─── Reusable Sub-components ────────────────────────────────────────────

function Base({ bg = C.white, children, padding = "36px 48px 28px" }) {
  return (
    <div
      style={{
        width: W,
        height: H,
        overflow: "hidden",
        position: "relative",
        backgroundColor: bg,
        fontFamily: font,
        boxSizing: "border-box",
        padding,
      }}
    >
      {children}
    </div>
  );
}

function Brand({ light = false }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 18,
        right: 28,
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: light ? "rgba(255,255,255,0.65)" : C.blue,
      }}
    >
      FATHAN SALAKA R · PORTFOLIO
    </div>
  );
}

function PageNum({ n, total }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 14,
        right: 24,
        fontSize: 10,
        color: C.slate5,
        fontWeight: 500,
      }}
    >
      {n} / {total}
    </div>
  );
}

function Accent({ color = C.blue }) {
  return (
    <div
      style={{
        width: 44,
        height: 4,
        borderRadius: 2,
        background: `linear-gradient(90deg, ${color}, #0ea5e9)`,
        marginBottom: 14,
      }}
    />
  );
}

function Eyebrow({ text, color = C.blue }) {
  return (
    <div
      style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color,
        marginBottom: 8,
      }}
    >
      {text}
    </div>
  );
}

function Tag({ children, bg = C.sky50, border = C.sky200, color = C.blue }) {
  return (
    <span
      style={{
        display: "inline-block",
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 20,
        padding: "3px 10px",
        fontSize: 10.5,
        fontWeight: 600,
        color,
        marginRight: 5,
        marginBottom: 5,
      }}
    >
      {children}
    </span>
  );
}

// ─── SLIDE 1 · Cover ────────────────────────────────────────────────────
function CoverSlide({ total }) {
  return (
    <div
      style={{
        width: W,
        height: H,
        display: "flex",
        fontFamily: font,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Left — Blue gradient panel */}
      <div
        style={{
          width: "54%",
          height: "100%",
          background:
            "linear-gradient(140deg, #0369a1 0%, #0284c7 55%, #0ea5e9 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "50px 52px",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -90,
            right: -90,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.09)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
            marginBottom: 20,
          }}
        >
          PORTFOLIO PRESENTATION
        </div>
        <div
          style={{
            fontSize: 46,
            fontWeight: 900,
            color: C.white,
            lineHeight: 1.08,
            letterSpacing: "-1.5px",
            marginBottom: 14,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "rgba(255,255,255,0.88)",
            marginBottom: 30,
          }}
        >
          {profile.title}
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
          {[`IPK ${profile.gpa}`, profile.universityShort, "Penerima FCS 2024"].map((b) => (
            <span
              key={b}
              style={{
                background: "rgba(255,255,255,0.18)",
                borderRadius: 20,
                padding: "5px 14px",
                fontSize: 12,
                fontWeight: 600,
                color: C.white,
              }}
            >
              {b}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.78)" }}>
            ✉ {profile.email}
          </div>
          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.78)" }}>
            ⚙ {profile.github}
          </div>
        </div>
      </div>

      {/* Right — Photo */}
      <div
        style={{
          flex: 1,
          height: "100%",
          background: C.sky50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 28,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: 268,
            height: 358,
            borderRadius: 24,
            overflow: "hidden",
            border: `3px solid ${C.sky200}`,
            boxShadow: "0 24px 64px rgba(2,132,199,0.22)",
            position: "relative",
            backgroundColor: C.sky100,
          }}
        >
          <img
            src="/assets/fathan_profile.jpg"
            alt={profile.name}
            crossOrigin="anonymous"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 20%",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "12px 14px",
              background: "rgba(255,255,255,0.96)",
            }}
          >
            <div style={{ fontSize: 12.5, fontWeight: 800, color: C.dark }}>
              {profile.name}
            </div>
            <div
              style={{
                fontSize: 10.5,
                color: C.blue,
                fontWeight: 600,
                marginTop: 2,
              }}
            >
              {profile.title}
            </div>
          </div>
        </div>
      </div>

      <PageNum n={1} total={total} />
    </div>
  );
}

// ─── SLIDE 2 · About + Skills ───────────────────────────────────────────
function AboutSlide({ n, total }) {
  const catSkills = [
    { cat: "Programming", items: ["Python", "Java", "JavaScript", "PHP", "C++"] },
    { cat: "AI & Data", items: ["Scikit-learn", "Pandas", "NumPy", "Google Colab"] },
    { cat: "Frontend", items: ["HTML", "CSS", "Tailwind CSS", "React"] },
    { cat: "Network & IoT", items: ["Cisco Packet Tracer", "Arduino", "Proteus"] },
    { cat: "Design", items: ["Figma", "Canva"] },
    { cat: "Tools", items: ["Git", "GitHub", "VS Code", "Docker", "MySQL"] },
  ];

  return (
    <Base>
      <Brand />
      <div style={{ display: "flex", gap: 44, height: "100%" }}>
        {/* Left */}
        <div style={{ flex: "0 0 44%", paddingTop: 2 }}>
          <Eyebrow text="Who I Am" />
          <div style={{ fontSize: 26, fontWeight: 900, color: C.dark, lineHeight: 1.15, marginBottom: 10 }}>
            About Me
          </div>
          <Accent />
          <p
            style={{
              fontSize: 12,
              lineHeight: 1.75,
              color: C.slate7,
              textAlign: "justify",
              marginBottom: 18,
              marginTop: 0,
            }}
          >
            {trunc(profile.aboutDescription, 390)}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {profile.interests.slice(0, 5).map((it) => (
              <Tag key={it}>{it}</Tag>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: 1, background: C.slate2, alignSelf: "stretch", flexShrink: 0 }} />

        {/* Right */}
        <div style={{ flex: 1, paddingTop: 2 }}>
          <Eyebrow text="Technical Skills" />
          <div style={{ fontSize: 26, fontWeight: 900, color: C.dark, lineHeight: 1.15, marginBottom: 10 }}>
            Skill Set
          </div>
          <Accent />
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {catSkills.map(({ cat, items }) => (
              <div key={cat} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span
                  style={{
                    fontSize: 9.5,
                    fontWeight: 800,
                    color: C.blue,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    minWidth: 88,
                    paddingTop: 3,
                    flexShrink: 0,
                  }}
                >
                  {cat}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {items.map((it) => (
                    <Tag
                      key={it}
                      bg={C.slate1}
                      border={C.slate2}
                      color={C.slate7}
                    >
                      {it}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PageNum n={n} total={total} />
    </Base>
  );
}

// ─── SLIDE 3-8 · Project Slide ──────────────────────────────────────────
function ProjectSlide({ project, n, total }) {
  const isUIUX = project.category.toLowerCase().includes("ui/ux");
  const isData = project.category.toLowerCase().includes("data") ||
    project.category.toLowerCase().includes("machine");

  const accentColor = isUIUX ? "#7c3aed" : isData ? C.blue : "#059669";
  const badgeBg = isUIUX ? "#f5f3ff" : isData ? C.sky50 : "#ecfdf5";
  const badgeBorder = isUIUX ? "#ddd6fe" : isData ? C.sky200 : "#a7f3d0";

  const catLabel =
    project.category.length > 32
      ? project.category.slice(0, 30) + "…"
      : project.category;

  return (
    <Base padding="0">
      <div style={{ display: "flex", height: "100%" }}>
        {/* Left Panel */}
        <div
          style={{
            width: "52%",
            height: "100%",
            padding: "32px 36px 28px 44px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            backgroundColor: C.white,
          }}
        >
          <Brand />

          {/* Category badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              borderRadius: 20,
              padding: "4px 13px",
              fontSize: 10,
              fontWeight: 700,
              backgroundColor: badgeBg,
              border: `1px solid ${badgeBorder}`,
              color: accentColor,
              marginBottom: 12,
              alignSelf: "flex-start",
              marginTop: 10,
            }}
          >
            {catLabel}
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: project.name.length > 42 ? 18 : 22,
              fontWeight: 900,
              color: C.dark,
              lineHeight: 1.2,
              marginBottom: 8,
              letterSpacing: "-0.3px",
            }}
          >
            {project.name}
          </div>

          {/* Accent bar */}
          <div
            style={{
              width: 36,
              height: 3,
              borderRadius: 2,
              background: accentColor,
              marginBottom: 12,
            }}
          />

          {/* Overview */}
          <p
            style={{
              fontSize: 11.5,
              lineHeight: 1.68,
              color: C.slate7,
              margin: "0 0 10px",
            }}
          >
            {trunc(project.detail.overview, 220)}
          </p>

          {/* Features (3 items) */}
          <div style={{ marginBottom: 10 }}>
            {project.detail.features.slice(0, 3).map((f) => (
              <div
                key={f}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 7,
                  marginBottom: 5,
                  fontSize: 11,
                  color: C.slate7,
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: accentColor,
                    flexShrink: 0,
                    marginTop: 5,
                  }}
                />
                <span>{trunc(f.replace(/^[^:]+:\s*/, ""), 90)}</span>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 10 }}>
            {project.detail.stack.slice(0, 5).map((t) => (
              <Tag key={t} bg={badgeBg} border={badgeBorder} color={accentColor}>
                {t}
              </Tag>
            ))}
          </div>

          {/* Result */}
          <div
            style={{
              borderLeft: `3px solid ${accentColor}`,
              paddingLeft: 10,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                fontSize: 9.5,
                fontWeight: 700,
                color: C.dark,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 3,
              }}
            >
              Result
            </div>
            <p
              style={{
                fontSize: 11,
                lineHeight: 1.6,
                color: C.slate7,
                margin: 0,
              }}
            >
              {trunc(project.detail.result, 160)}
            </p>
          </div>

          {/* Link */}
          {(project.github || project.demo) && (
            <div style={{ fontSize: 10.5, color: accentColor, fontWeight: 600, marginTop: "auto" }}>
              {project.github ? `↗ ${project.github}` : `↗ Figma Design`}
            </div>
          )}
        </div>

        {/* Right Panel — Thumbnail */}
        <div
          style={{
            flex: 1,
            height: "100%",
            backgroundColor: "#f8fafc",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={project.thumbnail}
            alt={project.name}
            crossOrigin="anonymous"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
            }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          {/* Gradient overlay left side */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 32,
              height: "100%",
              background: `linear-gradient(90deg, ${C.white}, transparent)`,
            }}
          />
        </div>
      </div>
      <PageNum n={n} total={total} />
    </Base>
  );
}

// ─── SLIDE 9 · Timeline / Experience ────────────────────────────────────
function TimelineSlide({ n, total }) {
  return (
    <Base>
      <Brand />
      <Eyebrow text="Education & Experience" />
      <div style={{ fontSize: 26, fontWeight: 900, color: C.dark, lineHeight: 1.15, marginBottom: 8 }}>
        Journey
      </div>
      <Accent />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px 36px",
          marginTop: 2,
        }}
      >
        {timeline.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: 10,
              padding: "10px 14px",
              borderRadius: 10,
              background: C.sky50,
              border: `1px solid ${C.sky100}`,
            }}
          >
            <div
              style={{
                width: 4,
                borderRadius: 2,
                background: `linear-gradient(180deg, ${C.blue}, ${C.blueLt})`,
                flexShrink: 0,
              }}
            />
            <div>
              <div
                style={{
                  fontSize: 9.5,
                  fontWeight: 700,
                  color: C.blue,
                  letterSpacing: "0.06em",
                  marginBottom: 2,
                }}
              >
                {item.period}
              </div>
              <div style={{ fontSize: 12, fontWeight: 800, color: C.dark, marginBottom: 2 }}>
                {trunc(item.title, 48)}
              </div>
              <div style={{ fontSize: 10.5, color: C.slate5, fontWeight: 500 }}>
                {trunc(item.org, 54)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <PageNum n={n} total={total} />
    </Base>
  );
}

// ─── SLIDE 10 · Certificates ────────────────────────────────────────────
function CertsSlide({ n, total }) {
  return (
    <Base>
      <Brand />
      <Eyebrow text="Certifications & Awards" />
      <div style={{ fontSize: 26, fontWeight: 900, color: C.dark, lineHeight: 1.15, marginBottom: 8 }}>
        Achievements
      </div>
      <Accent />
      <div style={{ display: "flex", gap: 24, marginTop: 6, height: 400 }}>
        {certificates.map((cert) => (
          <div
            key={cert.id}
            style={{
              flex: 1,
              borderRadius: 16,
              border: `2px solid ${C.sky200}`,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              backgroundColor: C.white,
              boxShadow: "0 8px 24px rgba(2,132,199,0.10)",
            }}
          >
            {/* Image */}
            <div
              style={{
                height: 220,
                overflow: "hidden",
                backgroundColor: C.sky50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cert.image}
                alt={cert.name}
                crossOrigin="anonymous"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: cert.id === "fcs-2024" ? "center 30%" : "center",
                  display: "block",
                }}
              />
            </div>
            {/* Info */}
            <div style={{ padding: "14px 16px", flex: 1 }}>
              <div
                style={{
                  fontSize: 9.5,
                  fontWeight: 700,
                  color: C.blue,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 5,
                }}
              >
                {cert.institution}
              </div>
              <div style={{ fontSize: 13, fontWeight: 800, color: C.dark, lineHeight: 1.3, marginBottom: 5 }}>
                {cert.name}
              </div>
              <div style={{ fontSize: 10.5, color: C.slate5, marginBottom: 8 }}>
                {cert.date || cert.year}
                {cert.faculty ? ` · ${trunc(cert.faculty, 40)}` : ""}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {cert.skills.slice(0, 3).map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <PageNum n={n} total={total} />
    </Base>
  );
}

// ─── SLIDE 11 · Contact / Close ─────────────────────────────────────────
function ContactSlide({ n, total }) {
  return (
    <div
      style={{
        width: W,
        height: H,
        overflow: "hidden",
        position: "relative",
        fontFamily: font,
        background:
          "linear-gradient(140deg, #0369a1 0%, #0284c7 55%, #0ea5e9 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          right: -80,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
        }}
      />

      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.26em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.65)",
          marginBottom: 16,
        }}
      >
        GET IN TOUCH
      </div>
      <div
        style={{
          fontSize: 48,
          fontWeight: 900,
          color: C.white,
          lineHeight: 1.1,
          letterSpacing: "-1.5px",
          marginBottom: 10,
        }}
      >
        Let's Connect!
      </div>
      <div
        style={{
          fontSize: 16,
          fontWeight: 500,
          color: "rgba(255,255,255,0.8)",
          marginBottom: 36,
        }}
      >
        {profile.title} · {profile.university}
      </div>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
        {[
          { label: "Email", value: profile.email },
          { label: "GitHub", value: profile.github },
          { label: "LinkedIn", value: "linkedin.com/in/fathan-salaka-r" },
        ].map(({ label, value }) => (
          <div
            key={label}
            style={{
              background: "rgba(255,255,255,0.15)",
              borderRadius: 14,
              padding: "14px 24px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.65)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>
              {label}
            </div>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: C.white }}>
              {value}
            </div>
          </div>
        ))}
      </div>

      <Brand light />
      <PageNum n={n} total={total} />
    </div>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────
export default function PortfolioPDFSlides() {
  const TOTAL = 2 + projects.length + 1 + 1 + 1; // cover + about + projects + timeline + certs + contact

  const slideStyle = {
    display: "block",
    marginBottom: 0,
    lineHeight: 0,
  };

  return (
    <div
      id="pdf-slides-container"
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: "-9999px",
        zIndex: -100,
        pointerEvents: "none",
        width: W,
      }}
    >
      <div className="pdf-slide" style={slideStyle}>
        <CoverSlide total={TOTAL} />
      </div>
      <div className="pdf-slide" style={slideStyle}>
        <AboutSlide n={2} total={TOTAL} />
      </div>
      {projects.map((p, i) => (
        <div key={p.slug} className="pdf-slide" style={slideStyle}>
          <ProjectSlide project={p} n={3 + i} total={TOTAL} />
        </div>
      ))}
      <div className="pdf-slide" style={slideStyle}>
        <TimelineSlide n={2 + projects.length + 1} total={TOTAL} />
      </div>
      <div className="pdf-slide" style={slideStyle}>
        <CertsSlide n={2 + projects.length + 2} total={TOTAL} />
      </div>
      <div className="pdf-slide" style={slideStyle}>
        <ContactSlide n={TOTAL} total={TOTAL} />
      </div>
    </div>
  );
}
