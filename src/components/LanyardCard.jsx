import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function LanyardCard() {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);
  const currentRotRef = useRef({ x: 0, y: 0, z: 0 });
  const targetRotRef = useRef({ x: 0, y: 0, z: 0 });

  // Spring physics loop for realistic inertia and pendulum sway
  useEffect(() => {
    let idleAngle = 0;
    const updatePhysics = () => {
      if (!isHovered && !isDragging) {
        // Natural gentle idle pendulum sway
        idleAngle += 0.022;
        targetRotRef.current.y = Math.sin(idleAngle) * 4;
        targetRotRef.current.z = Math.sin(idleAngle * 0.7) * 2.5;
        targetRotRef.current.x = Math.cos(idleAngle * 0.5) * 2;
      }

      // Smooth lerp (spring easing)
      currentRotRef.current.x += (targetRotRef.current.x - currentRotRef.current.x) * 0.08;
      currentRotRef.current.y += (targetRotRef.current.y - currentRotRef.current.y) * 0.08;
      currentRotRef.current.z += (targetRotRef.current.z - currentRotRef.current.z) * 0.08;

      setRotation({
        x: currentRotRef.current.x,
        y: currentRotRef.current.y,
        z: currentRotRef.current.z,
      });

      animFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    animFrameRef.current = requestAnimationFrame(updatePhysics);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isHovered, isDragging]);

  // Mouse Move on Hero section
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate 3D tilt angles based on mouse position
    const rotY = (mouseX / (rect.width / 2)) * 18; // Max 18 deg Y
    const rotX = -(mouseY / (rect.height / 2)) * 14; // Max 14 deg X
    const rotZ = (mouseX / (rect.width / 2)) * -6; // Subtle natural twist

    targetRotRef.current = { x: rotX, y: rotY, z: rotZ };

    // Holographic sheen position
    const normX = ((e.clientX - rect.left) / rect.width) * 100;
    const normY = ((e.clientY - rect.top) / rect.height) * 100;
    setSheenPos({ x: normX, y: normY });
  };

  // Drag interaction
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleWindowMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;

    targetRotRef.current = {
      x: Math.max(-25, Math.min(25, -deltaY * 0.2)),
      y: Math.max(-30, Math.min(30, deltaX * 0.25)),
      z: Math.max(-12, Math.min(12, -deltaX * 0.1)),
    };
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      targetRotRef.current = { x: 0, y: 0, z: 0 };
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="lanyard-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        targetRotRef.current = { x: 0, y: 0, z: 0 };
      }}
    >
      {/* Background Soft Ambient Spot */}
      <div className="lanyard-ambient-glow" aria-hidden="true" />

      {/* Hanging Lanyard Strap from Top */}
      <div className="lanyard-strap-wrapper">
        <div
          className="lanyard-strap"
          style={{
            transform: `perspective(800px) rotateY(${rotation.y * 0.3}deg) rotateZ(${rotation.z * 0.4}deg)`,
          }}
        >
          {/* Lanyard repeating ribbon text */}
          <div className="lanyard-strap-texture">
            <span className="strap-text">3D CARD</span>
            <span className="strap-text">3D CARD</span>
            <span className="strap-text">3D CARD</span>
          </div>
        </div>

        {/* Realistic Metallic Hardware Clasp / Hook */}
        <div
          className="lanyard-hook"
          style={{
            transform: `perspective(800px) rotateY(${rotation.y * 0.6}deg) rotateZ(${rotation.z * 0.6}deg)`,
          }}
        >
          {/* Metal ring band */}
          <div className="hook-crimp" />
          {/* Swivel metal buckle */}
          <div className="hook-swivel" />
          {/* Clasp clip */}
          <svg className="hook-svg" viewBox="0 0 40 40" width="34" height="34">
            <defs>
              <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="25%" stopColor="#cbd5e1" />
                <stop offset="50%" stopColor="#64748b" />
                <stop offset="75%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
            </defs>
            <path
              d="M16 4 H24 V12 C24 16 28 18 28 24 C28 30 22 35 16 35 C10 35 7 30 7 24 C7 20 10 16 12 14"
              fill="none"
              stroke="url(#metalGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M18 16 L23 25"
              stroke="#cbd5e1"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="20" cy="8" r="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* 3D Tilting ID Badge Card */}
      <div
        className="lanyard-card-holder"
        onMouseDown={handleMouseDown}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg) translateZ(15px)`,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        {/* Transparent Vinyl Sleeve Top Punch Hole */}
        <div className="card-punch-hole">
          <div className="punch-slot" />
        </div>

        {/* Physical Badge Body */}
        <div className="badge-card-inner">
          <div className="badge-visual-container">
            <img
              src="/assets/lanyard_card.png"
              alt="Lanyard ID Badge"
              className="badge-card-img"
              onError={(e) => {
                e.target.src = '/assets/hero_lanyard_reference.jpg';
              }}
            />

            {/* Specular Holographic Glare & Light Sheen Effect */}
            <div
              className="badge-holographic-sheen"
              style={{
                background: `radial-gradient(circle at ${sheenPos.x}% ${sheenPos.y}%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 35%, transparent 70%), linear-gradient(${125 + rotation.y * 2}deg, transparent 20%, rgba(255, 255, 255, 0.35) 45%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.2) 55%, transparent 80%)`,
              }}
            />
          </div>
        </div>

        {/* Dynamic Shadow that shifts according to 3D rotation */}
        <div
          className="badge-shadow-3d"
          style={{
            transform: `translate(${rotation.y * 1.5}px, ${Math.abs(rotation.x) * 1.2 + 25}px) scale(${1 - Math.abs(rotation.x) * 0.01})`,
            opacity: 0.25 - Math.abs(rotation.y) * 0.003,
          }}
        />
      </div>

      {/* Floating Micro Badge / Hint */}
      <div className="lanyard-interactive-hint">
        <span className="pulse-dot" /> 3D Lanyard Card — Hover / Drag to tilt
      </div>
    </div>
  );
}
