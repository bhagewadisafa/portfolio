import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  Check, 
  Copy, 
  AlertCircle, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedStatus, setSubmittedStatus] = useState(null); // 'draft_prepared' | null
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name or company name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid work or personal email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please specify the subject (e.g., Interview Opportunity, Inquiry).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message of at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Honest recruiter behavior: construct standard mailto URI to ensure direct communication
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Safa,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open mail client
    window.open(mailtoUrl, '_blank');
    setSubmittedStatus('draft_prepared');
    if (onShowToast) onShowToast('Email draft launched in your mail application!');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    if (onShowToast) onShowToast('Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>
          <p className="section-description">
            Whether you have an entry-level developer opportunity, an internship, 
            or want to discuss my projects, I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="contact-info-list">
            {/* Email Card with One-Click Copy */}
            <div className="contact-channel-card">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="contact-label">Direct Email</div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact-value"
                  style={{ display: 'block' }}
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                className="btn btn-secondary btn-sm"
                onClick={handleCopyEmail}
                title="Copy Email Address"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check size={15} color="#34d399" /> : <Copy size={15} />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
              id="contact-linkedin-link"
            >
              <div className="contact-icon-box">
                <Linkedin size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="contact-label">LinkedIn Profile</div>
                <div className="contact-value">linkedin.com/in/safa-bhagewadi</div>
              </div>
              <ExternalLink size={16} color="var(--text-muted)" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
              id="contact-github-link"
            >
              <div className="contact-icon-box">
                <Github size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="contact-label">GitHub Repository</div>
                <div className="contact-value">github.com/bhagewadisafa</div>
              </div>
              <ExternalLink size={16} color="var(--text-muted)" />
            </a>

            {/* Location Card */}
            <div className="contact-channel-card">
              <div className="contact-icon-box">
                <MapPin size={20} />
              </div>
              <div>
                <div className="contact-label">Location &amp; Mobility</div>
                <div className="contact-value">{personalInfo.location}</div>
                <div style={{ fontSize: '0.8rem', color: '#34d399', marginTop: '2px' }}>
                  ✓ Open to Relocation across India &amp; Remote Roles
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '8px' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Fill in your details below to compose an inquiry.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name / Organization *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Priya Sharma (Tech Recruiter)"
                  className="form-input"
                  required
                />
                {errors.name && <div className="form-error">{errors.name}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g., recruiter@company.com"
                  className="form-input"
                  required
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g., Junior Python Developer Role / Interview"
                  className="form-input"
                  required
                />
                {errors.subject && <div className="form-error">{errors.subject}</div>}
              </div>

              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label htmlFor="contact-message" className="form-label">
                    Message Details *
                  </label>
                  <span className="form-counter">{formData.message.length} chars</span>
                </div>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your role, timeline, or inquiry..."
                  className="form-textarea"
                  rows={4}
                  required
                />
                {errors.message && <div className="form-error">{errors.message}</div>}
              </div>

              {/* Form Transparency Notice */}
              <div className="form-notice">
                <AlertCircle size={16} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Recruiter Privacy Notice:</strong> Submitting prepares a pre-filled email draft directly to <code>{personalInfo.email}</code> in your local email client, ensuring your message is never lost to unmonitored backend queues.
                </span>
              </div>

              {submittedStatus === 'draft_prepared' && (
                <div
                  style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#34d399',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    marginBottom: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Check size={18} />
                  <span>
                    Email draft triggered! If your email client didn't open automatically, you can directly email <strong>{personalInfo.email}</strong>.
                  </span>
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={16} />
                <span>Send Message via Email</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
