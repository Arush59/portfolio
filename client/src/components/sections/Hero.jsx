import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypingText from '../shared/TypingText';

const Hero = () => {
  const [typingDone, setTypingDone] = useState(false);

  const stats = [
    { value: '3+', label: 'Projects' },
    { value: '1', label: 'Internship' },
    { value: '4+', label: 'Certificates' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 40px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Green ambient glow */}
      <div
        className="ambient-glow"
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,156,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-15%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,156,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
        {/* Left: Main content */}
        <div style={{ flex: 1, minWidth: '320px' }}>
          {/* Boot sequence typing */}
          <div
            style={{
              background: 'var(--bg-terminal)',
              borderRadius: '12px',
              border: '1px solid rgba(0, 255, 156, 0.15)',
              padding: '20px 24px',
              marginBottom: '32px',
              maxWidth: '500px',
            }}
          >
            <TypingText
              lines={[
                'initializing portfolio...',
                'loading developer: Arush',
                'status: ready ✓',
              ]}
              speed={45}
              pauseBetweenLines={300}
              onComplete={() => setTypingDone(true)}
              style={{ fontSize: '15px', color: 'var(--accent)' }}
            />
          </div>

          {/* Content fades in after typing */}
          <AnimatePresence>
            {typingDone && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Status badge */}
                <motion.div
                  variants={itemVariants}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 16px',
                    borderRadius: '999px',
                    border: '1px solid rgba(0,255,156,0.25)',
                    background: 'rgba(0,255,156,0.06)',
                    marginBottom: '28px',
                  }}
                >
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#00FF9C',
                    boxShadow: '0 0 8px rgba(0,255,156,0.6)',
                  }} />
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#00FF9C',
                    letterSpacing: '1.5px',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    AVAILABLE FOR WORK
                  </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                  variants={itemVariants}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(40px, 5.5vw, 72px)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    letterSpacing: '-1px',
                  }}
                >
                  I am <span className="green-text">Arush</span>,
                </motion.h1>

                <motion.h2
                  variants={itemVariants}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(28px, 3.5vw, 48px)',
                    fontWeight: 600,
                    lineHeight: 1.2,
                    marginBottom: '16px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  MERN <span style={{ color: 'var(--accent)' }}>Developer</span>
                </motion.h2>

                {/* Accent line */}
                <motion.div
                  variants={itemVariants}
                  style={{
                    width: '60px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #00FF9C, transparent)',
                    marginBottom: '24px',
                  }}
                />

                <motion.p
                  variants={itemVariants}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '16px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                    maxWidth: '460px',
                    marginBottom: '36px',
                  }}
                >
                  Passionate about creating intuitive and engaging full-stack
                  experiences. Specializing in transforming ideas into beautifully
                  crafted MERN products.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  variants={itemVariants}
                  style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '50px' }}
                >
                  <a href="#featured-projects" className="terminal-btn-primary">
                    view_projects
                  </a>
                  <a href="#contact" className="terminal-btn">
                    contact_me
                  </a>
                  <a href="https://drive.google.com/file/d/1w9FDZFDk16iVFp72CINjqfE7IBJij1Cl/view" target="_blank" rel="noreferrer" className="terminal-btn">
                    download_cv
                  </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                  variants={itemVariants}
                  style={{ display: 'flex', gap: '40px' }}
                >
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '32px',
                        fontWeight: 700,
                        color: 'var(--accent)',
                      }}>
                        {stat.value}
                      </span>
                      <p style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                        marginTop: '2px',
                        letterSpacing: '0.5px',
                      }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Profile Picture */}
        <AnimatePresence>
          {typingDone && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}
            >
              <div
                className="profile-glow"
                style={{
                  width: '340px',
                  borderRadius: '24px',
                  padding: '12px',
                  border: '1px solid rgba(0, 255, 156, 0.25)',
                  background: 'rgba(0, 255, 156, 0.05)',
                  boxShadow: '0 20px 40px -10px rgba(0, 255, 156, 0.15)',
                  position: 'relative',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Photo */}
                <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
                  <img
                    src="/profile.jpg"
                    alt="Arush"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      filter: 'contrast(1.05) brightness(0.95)',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: typingDone ? 1 : 0 }}
        transition={{ delay: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <div
          className="scroll-indicator"
          style={{
            width: '28px',
            height: '44px',
            borderRadius: '14px',
            border: '1.5px solid rgba(0,255,156,0.2)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '8px',
          }}
        >
          <div style={{ width: '3px', height: '8px', borderRadius: '2px', background: '#00FF9C' }} />
        </div>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>
          scroll_down
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
