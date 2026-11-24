import React, { useState } from 'react';
import {
  FileCode,
  Coffee,
  Code,
  Database,
  Layout,
  Palette,
  Server,
  Cpu,
  Layers,
  GitBranch,
  Terminal,
  Box,
  Network,
  Workflow,
  Container,
  HardDrive,
  PenTool,
  Radio,
  Sparkles
} from 'lucide-react';
import { FigmaIcon } from '../SocialIcons';
import { SKILLS, SKILL_CATEGORIES } from '../../data/portfolioData';

const iconMap = {
  FileCode,
  Coffee,
  Code,
  Database,
  Layout,
  Palette,
  Server,
  Cpu,
  Layers,
  GitBranch,
  Terminal,
  Box,
  Network,
  Workflow,
  Container,
  HardDrive,
  PenTool,
  Radio,
  Figma: FigmaIcon,
  Sparkles
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="eyebrow">What I work with</span>
          <h2 className="section-main-heading">Skills & Technologies</h2>
          <p className="section-sub-heading">
            Kumpulan bahasa pemrograman, framework, basis data, tools, dan teknologi yang saya gunakan.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="skills-filter-container">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`skill-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div key={idx} className="glass-card skill-card">
                <div className="skill-icon-wrapper">
                  <IconComponent size={24} />
                </div>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-category-tag">{skill.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
