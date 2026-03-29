import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import TerminalBox from '../shared/TerminalBox';
import api from '../../api/axios';

const contactInfo = [
  { Icon: FaEnvelope, label: 'EMAIL', value: 'arusharush591@gmail.com' },
  { Icon: FaPhone, label: 'PHONE', value: '+91 7018736195' },
  { Icon: FaLinkedin, label: 'LINKEDIN', value: 'linkedin.com/in/arush1326' },
  { Icon: FaGithub, label: 'GITHUB', value: 'github.com/Arush59' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      await api.post('/contact', formData);
      setStatus({ type: 'success', message: '✓ Message sent successfully! I will get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      const msg = error.response?.data?.message || '✗ Something went wrong. Please try again.';
      setStatus({ type: 'error', message: msg });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    border: 'none',
    borderBottom: '1px solid rgba(0,255,156,0.15)',
    backgroundColor: 'transparent',
    padding: '12px 0',
    fontFamily: 'var(--font-mono)',
    fontSize: '14px',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.25s',
  };

  return (
    <section id="contact" style={{ padding: '100px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '12px',
        }}>
          <span style={{ color: 'var(--accent)' }}>$ </span>ssh <span className="green-text">contact@arush</span>
        </h2>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '16px',
          color: 'var(--text-secondary)',
          maxWidth: '520px',
          lineHeight: '1.7',
          marginBottom: '48px',
        }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </motion.div>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* Left — Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1, minWidth: '260px' }}
        >
          <h3 style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '8px',
          }}>
            <span style={{ color: 'var(--accent)' }}>&gt;</span> connection_details
          </h3>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            color: 'var(--text-muted)',
            marginBottom: '28px',
            lineHeight: '1.6',
          }}>
            Feel free to reach out through any of these channels.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {contactInfo.map(({ Icon, label, value }) => (
              <div key={label} className="contact-card">
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(0,255,156,0.08)',
                  border: '1px solid rgba(0,255,156,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: 'var(--text-muted)',
                    marginBottom: '2px',
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--text-primary)',
                  }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ flex: 1.2, minWidth: '300px' }}
        >
          <TerminalBox title="send_message">
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
                marginBottom: '28px',
              }}>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="your_name"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderBottomColor = '#00FF9C'}
                  onBlur={e => e.target.style.borderBottomColor = 'rgba(0,255,156,0.15)'}
                />
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@address"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderBottomColor = '#00FF9C'}
                  onBlur={e => e.target.style.borderBottomColor = 'rgba(0,255,156,0.15)'}
                />
              </div>

              <div style={{ marginBottom: '32px' }}>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="$ echo 'your message here...'"
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                  onFocus={e => e.target.style.borderBottomColor = '#00FF9C'}
                  onBlur={e => e.target.style.borderBottomColor = 'rgba(0,255,156,0.15)'}
                />
              </div>

              {status.message && (
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  fontSize: '13px',
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: status.type === 'success' ? 'rgba(0,255,156,0.08)' : 'rgba(239,68,68,0.08)',
                  color: status.type === 'success' ? '#00FF9C' : '#f87171',
                  border: `1px solid ${status.type === 'success' ? 'rgba(0,255,156,0.2)' : 'rgba(239,68,68,0.2)'}`,
                }}>
                  {status.message}
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  type="submit"
                  disabled={loading}
                  className="terminal-btn-primary"
                  style={{
                    cursor: loading ? 'not-allowed' : 'none',
                    opacity: loading ? 0.7 : 1,
                    padding: '14px 40px',
                  }}
                >
                  {loading ? 'sending...' : 'send_message'}
                </button>
              </div>
            </form>
          </TerminalBox>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
