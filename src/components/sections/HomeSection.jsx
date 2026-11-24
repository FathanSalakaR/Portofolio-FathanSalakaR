import React from 'react';
import { Sparkles, Download, Mail, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';
import ProfileCard from '../ProfileCard';

export default function HomeSection() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const offsetTop = contactElem.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="section-container">
        <div className="hero-grid">
          {/* Left Column: Text & Pitch Deck CTAs */}
          <div className="hero-content">
            <div>
              <span className="eyebrow hero-colorful-eyebrow">
                <Sparkles size={14} /> WELCOME TO MY PORTFOLIO
              </span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>

            <p className="hero-subtitle">{PERSONAL_INFO.role}</p>

            <p className="hero-description">{PERSONAL_INFO.shortBio}</p>

            <div className="hero-actions">
              <a href={PERSONAL_INFO.cvUrl} download className="btn-primary btn-colorful-primary">
                <Download size={16} /> Download CV
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
              <button
                type="button"
                className="btn-ghost"
                onClick={handleScrollToContact}
              >
                <Mail size={16} /> Contact Me
              </button>
            </div>
          </div>

          {/* Right Column: Clean Regular Photo Card */}
          <div className="hero-profile-wrapper">
            <ProfileCard />
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <a href="#about" className="scroll-indicator" aria-label="Scroll down to About section">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
