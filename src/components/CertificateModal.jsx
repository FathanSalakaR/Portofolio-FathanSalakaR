import React, { useEffect } from 'react';
import { X, Award, CheckCircle2, Layers } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-cert-img-wrapper">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="modal-cert-img"
          />
        </div>

        <div className="modal-meta-row">
          <span className="modal-issuer-badge">
            <Award size={15} /> {certificate.issuer}
          </span>
          <span className="modal-date-badge">{certificate.date}</span>
        </div>

        <h3 className="modal-cert-title">
          {certificate.title}
        </h3>

        <p className="modal-cert-desc">
          {certificate.description}
        </p>

        {certificate.skills && (
          <div className="modal-skills-box">
            <h4 className="modal-skills-title">
              <Layers size={15} /> Terkait Kompetensi & Keterampilan:
            </h4>
            <div className="project-stack">
              {certificate.skills.map((skill, idx) => (
                <span key={idx} className="stack-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
