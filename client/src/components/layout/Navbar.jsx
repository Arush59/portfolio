import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '14px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: scrolled ? 'rgba(10, 10, 15, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,255,156,0.08)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '16px',
          fontWeight: 700,
          color: 'var(--accent)',
          textDecoration: 'none',
          letterSpacing: '0.5px',
        }}
      >
        <span style={{ color: 'var(--text-muted)' }}>~/</span>arush
      </a>

      {/* Center nav links */}
      <div style={{
        display: 'flex',
        gap: '2px',
        alignItems: 'center',
        background: 'rgba(0,255,156,0.04)',
        borderRadius: '8px',
        padding: '4px',
        border: '1px solid rgba(0,255,156,0.08)',
      }}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{
              padding: '7px 18px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.25s',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.3px',
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = 'rgba(0,255,156,0.1)';
              e.target.style.color = '#00FF9C';
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'var(--text-secondary)';
            }}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Social icons */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        {[
          { Icon: FaGithub, href: 'https://github.com/Arush59', label: 'GitHub' },
          { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/arush1326/', label: 'LinkedIn' },
        ].map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              border: '1px solid rgba(0,255,156,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#00FF9C';
              e.currentTarget.style.color = '#00FF9C';
              e.currentTarget.style.boxShadow = '0 0 12px rgba(0,255,156,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(0,255,156,0.15)';
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Icon size={15} />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
