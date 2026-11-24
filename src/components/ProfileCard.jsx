import React, { useState, useRef } from 'react';
import { Sparkles, Code2, GraduationCap, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ProfileCard() {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const rotX = -(y / (rect.height / 2)) * 10;
    const rotY = (x / (rect.width / 2)) * 12;
    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="profile-card-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient Colorful Glow Aura */}
      <div className="profile-aura-glow" aria-hidden="true" />

      {/* Main Photo Card */}
      <div
        className="profile-main-card"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.02 : 1})`,
        }}
      >
        {/* Real Portrait Photo */}
        <div className="profile-img-frame">
          <img
            src={PERSONAL_INFO.avatar || "/assets/fathan_optimized.jpg"}
            alt={PERSONAL_INFO.name}
            className="profile-real-img"
          />

          {/* Subtle gradient overlay at bottom of photo for depth */}
          <div className="profile-bottom-gradient" />
        </div>

        {/* Floating Chip 1: Top Right Specialization */}
        <div className="floating-chip chip-top-right">
          <Sparkles size={14} className="chip-icon-sparkle" />
          <span>AI & Software Dev</span>
        </div>

        {/* Floating Chip 2: Left Side Tech Stack */}
        <div className="floating-chip chip-mid-left">
          <Code2 size={14} className="chip-icon-code" />
          <span>Fullstack & IoT</span>
        </div>

        {/* Floating Card: Bottom Status Pill */}
        <div className="profile-status-card">
          <div className="status-avatar-indicator">
            <span className="online-ping" />
            <span className="online-dot" />
          </div>
          <div className="status-text-group">
            <p className="status-title">Available for Projects</p>
            <p className="status-sub">
              <GraduationCap size={13} style={{ display: 'inline', marginRight: '4px' }} />
              Universitas Lampung
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

