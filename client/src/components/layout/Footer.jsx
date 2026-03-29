import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer style={{
      backgroundColor: '#080810',
      borderTop: '1px solid rgba(0,255,156,0.08)',
      padding: '60px 40px 30px',
      marginTop: '60px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
        }}>
          {/* Brand */}
          <div>
            <a
              href="#hero"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--accent)',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              <span style={{ color: 'var(--text-muted)' }}>~/</span>arush
            </a>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              color: 'var(--text-muted)',
              lineHeight: '1.7',
              maxWidth: '220px',
            }}>
              Building scalable, user-focused web applications with the MERN stack.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              color: 'var(--accent)',
              marginBottom: '16px',
              textTransform: 'uppercase',
            }}>
              $ ls pages/
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '14px',
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                    onMouseEnter={e => e.target.style.color = '#00FF9C'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                  >
                    <span style={{ color: 'var(--text-muted)', opacity: 0.5 }}>▸</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              color: 'var(--accent)',
              marginBottom: '16px',
              textTransform: 'uppercase',
            }}>
              $ connect
            </h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { Icon: FaGithub, href: 'https://github.com/Arush59', label: 'GitHub' },
                { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/arush1326/', label: 'LinkedIn' },
                { Icon: FaEnvelope, href: 'mailto:arusharush591@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    border: '1px solid rgba(0,255,156,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#00FF9C';
                    e.currentTarget.style.color = '#00FF9C';
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(0,255,156,0.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,255,156,0.12)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: '1px', background: 'rgba(0,255,156,0.08)', marginBottom: '24px' }} />

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--text-muted)',
          textAlign: 'center',
        }}>
          <span style={{ color: 'var(--accent)', opacity: 0.5 }}>$</span> echo &quot;&copy; {currentYear} Arush. All rights reserved.&quot;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
