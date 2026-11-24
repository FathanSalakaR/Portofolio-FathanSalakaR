import React from 'react';
import { Briefcase, Building2 } from 'lucide-react';
import { JOURNEY } from '../../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="journey" className="section-padding relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="eyebrow">My Path & Journey</span>
          <h2 className="section-main-heading">Experience & Education Journey</h2>
          <p className="section-sub-heading">
            Perjalanan akademis, rekam jejak kompetensi, dan fokus perkembangan saya di dunia teknologi.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          {JOURNEY.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-node" />
              <div className="timeline-content-wrapper">
                <div className="glass-card timeline-card-inner">
                  <span className="timeline-year">{item.year}</span>

                  <h3 className="timeline-title">
                    {item.title}
                  </h3>

                  <div className="timeline-org">
                    <Building2 size={15} style={{ color: 'var(--primary)' }} />
                    <span>{item.organization}</span>
                  </div>

                  <p className="timeline-desc">
                    {item.description}
                  </p>

                  <div className="timeline-tags">
                    {(item.tags || []).map((tag, tIdx) => (
                      <span key={tIdx} className="stack-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
