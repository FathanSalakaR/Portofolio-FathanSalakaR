import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Code,
  Globe,
  Smartphone,
  Brain,
  Palette,
  Database,
  Server
} from 'lucide-react';
import { EDUCATION, INTERESTS, PERSONAL_INFO } from '../../data/portfolioData';

const iconMap = {
  Code,
  Globe,
  Smartphone,
  Brain,
  Palette,
  Database,
  Server
};

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="eyebrow">Get to know me</span>
          <h2 className="section-main-heading">About Me</h2>
          <p className="section-sub-heading">
            Latar belakang pendidikan, eksplorasi teknologi, dan minat riset saya di bidang sistem cerdas.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Bio & Education */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p className="about-bio-text">
              {PERSONAL_INFO.aboutBio || PERSONAL_INFO.shortBio}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="glass-card edu-card">
                  <div className="edu-icon-badge">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h4 className="edu-title">{edu.institution}</h4>
                    <p className="edu-degree">
                      {edu.degree} · <span className="edu-period">{edu.period}</span>
                    </p>
                    <p className="edu-desc">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interests Grid */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <Sparkles size={18} style={{ color: 'var(--accent)' }} />
              <h3 className="interests-header-title">
                Interests & Focus Area
              </h3>
            </div>

            <div className="interests-grid">
              {INTERESTS.map((item, idx) => {
                const IconComponent = iconMap[item.icon] || Code;
                return (
                  <div key={idx} className="glass-card interest-item">
                    <IconComponent size={18} />
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
