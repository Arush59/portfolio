import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaGraduationCap, FaMapMarkerAlt, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import TerminalBox from '../shared/TerminalBox';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const About = () => {
  const infoCards = [
    { Icon: FaUser, label: 'name', value: 'Arush' },
    { Icon: FaEnvelope, label: 'email', value: 'arusharush591@gmail.com' },
    { Icon: FaGraduationCap, label: 'degree', value: 'B.Tech CSE' },
    { Icon: FaMapMarkerAlt, label: 'location', value: 'Punjab, India' },
  ];

  return (
    <section id="about" style={{ padding: '100px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '20px' }}
      >
        <h2 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '8px',
        }}>
          <span style={{ color: 'var(--accent)' }}>$ </span>cat <span className="green-text">about_me</span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '16px',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          lineHeight: '1.7',
          marginBottom: '48px',
        }}
      >
        I have worked on a wide range of full-stack projects across different domains, continuously gaining hands-on experience and expanding my expertise with each new challenge.
      </motion.p>

      {/* Two-column layout */}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {/* Left — Terminal illustration */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: '1', minWidth: '280px', maxWidth: '420px' }}
        >
          <TerminalBox title="about.md">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: 1.8 }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>
                <span style={{ color: 'var(--accent)' }}>##</span> Developer Profile
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
                MERN stack developer and B.Tech CSE student at
                <span style={{ color: 'var(--accent)' }}> Lovely Professional University</span> with
                hands-on experience building full-stack web applications.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
                I enjoy creating scalable, user-focused solutions and have
                worked on projects involving system design, AI-powered
                analytics, and real-world travel platforms.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Internship at <span style={{ color: 'var(--accent)' }}>VanillaKart</span> —
                built and managed client websites using
                <span style={{ color: 'var(--accent)' }}> MERN stack</span> and WordPress.
              </p>
            </div>
          </TerminalBox>
        </motion.div>

        {/* Right — Info cards + buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ flex: '1', minWidth: '280px' }}
        >
          <motion.h3
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '20px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '24px',
            }}
          >
            <span style={{ color: 'var(--accent)' }}>&gt;</span> system_info
          </motion.h3>

          {/* Info grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
            {infoCards.map(({ Icon, label, value }) => (
              <motion.div key={label} variants={itemVariants} className="info-chip">
                <Icon size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
                  <span style={{ color: 'var(--accent)' }}>{label}:</span>{' '}
                  <span style={{ color: 'var(--text-secondary)' }}>{value}</span>
                </span>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="#contact" className="terminal-btn-primary">
              contact_me
            </a>
            <a
              href="https://www.linkedin.com/in/arush1326/"
              target="_blank"
              rel="noreferrer"
              className="terminal-btn"
            >
              linkedin
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
