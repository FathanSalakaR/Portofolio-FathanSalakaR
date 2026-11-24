import React, { useState } from 'react';
import { Award, Calendar, Eye } from 'lucide-react';
import { CERTIFICATES } from '../../data/portfolioData';
import CertificateModal from '../CertificateModal';

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="section-padding relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="eyebrow">Verified Qualifications</span>
          <h2 className="section-main-heading">Certificates & Achievements</h2>
          <p className="section-sub-heading">
            Sertifikasi keahlian, lisensi pembelajaran, dan dokumentasi kualifikasi profesional yang saya peroleh.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="glass-card cert-card"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="cert-img-wrapper">
                <img src={cert.image} alt={cert.title} className="cert-img" />
              </div>

              <div className="cert-body">
                <div className="cert-meta-row">
                  <span className="cert-issuer">
                    <Award size={14} /> {cert.issuer}
                  </span>
                  <span className="cert-date">{cert.date}</span>
                </div>

                <h3 className="cert-title">
                  {cert.title}
                </h3>

                <p className="cert-desc">
                  {cert.description}
                </p>

                <div className="cert-footer-action">
                  <button
                    type="button"
                    className="btn-ghost cert-view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                  >
                    <Eye size={15} /> Lihat Sertifikat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Certificate Modal */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
