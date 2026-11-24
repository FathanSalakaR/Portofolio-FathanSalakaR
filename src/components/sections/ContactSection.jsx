import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-main-heading">Let's Work Together</h2>
          <p className="section-sub-heading">
            Punya ide proyek, tawaran kolaborasi, atau sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contacts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 className="contact-column-title">Informasi Kontak</h3>
            <p className="contact-intro-text">
              Anda dapat terhubung secara langsung melalui email maupun media sosial profesional berikut:
            </p>

            <a href={`mailto:${PERSONAL_INFO.email}`} className="glass-card contact-card-item">
              <div className="contact-icon contact-icon-mail">
                <Mail size={22} />
              </div>
              <div>
                <p className="contact-item-label">Email Direct</p>
                <p className="contact-item-value">{PERSONAL_INFO.email}</p>
              </div>
            </a>

            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="glass-card contact-card-item">
              <div className="contact-icon contact-icon-github">
                <GithubIcon size={22} />
              </div>
              <div>
                <p className="contact-item-label">GitHub Profile</p>
                <p className="contact-item-value">github.com/FathanSalakaR</p>
              </div>
            </a>

            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="glass-card contact-card-item">
              <div className="contact-icon contact-icon-linkedin">
                <LinkedinIcon size={22} />
              </div>
              <div>
                <p className="contact-item-label">LinkedIn Connection</p>
                <p className="contact-item-value">linkedin.com/in/fathan-salaka-r</p>
              </div>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card contact-form-card">
            <h3 className="contact-form-title">
              Kirim Pesan Langsung
            </h3>

            {submitted ? (
              <div className="contact-submitted-box">
                <CheckCircle2 size={48} className="submitted-check-icon" />
                <h4 className="submitted-title">Pesan Terkirim!</h4>
                <p className="submitted-desc">
                  Terima kasih sudah menghubungi. Saya akan membalas pesan Anda secepatnya.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="contact-name" className="form-label">
                    Nama Lengkap
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Masukkan nama Anda..."
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="form-label">
                    Alamat Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="nama@email.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="contact-msg" className="form-label">
                    Pesan
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    required
                    placeholder="Tuliskan pesan atau topik diskusi Anda..."
                    className="form-input"
                    style={{ resize: 'vertical' }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  <Send size={16} /> Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
