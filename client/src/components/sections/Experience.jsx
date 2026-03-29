import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import TerminalBox from '../shared/TerminalBox';

const experienceData = [
  {
    role: 'Web Development Intern',
    company: 'VanillaKart (Subsidiary of Savacity Brushflicks Creative Hub Pvt. Ltd.)',
    duration: "Sep '25 – Nov '25",
    description:
      'Completed a 2-month internship focused on building and managing client websites, combining MERN stack development with WordPress solutions. Designed, developed, and maintained production-grade websites while coordinating with clients on requirements and deliverables.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'WordPress'],
  },
];

const Experience = () => (
  <section id="experience" style={{ padding: '100px 40px', maxWidth: '1200px', margin: '0 auto' }}>
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
        <span style={{ color: 'var(--accent)' }}>$ </span>git log <span className="green-text">--experience</span>
      </h2>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '16px',
        color: 'var(--text-secondary)',
        marginBottom: '48px',
      }}>
        Professional experience and milestones in my journey as a developer.
      </p>
    </motion.div>

    <div style={{ position: 'relative', paddingLeft: '32px' }}>
      {/* Vertical line */}
      <div style={{
        position: 'absolute',
        left: '10px',
        top: 0,
        bottom: 0,
        width: '1px',
        background: 'linear-gradient(180deg, #00FF9C, rgba(0,255,156,0.1))',
      }} />

      {experienceData.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{ position: 'relative', marginBottom: '28px' }}
        >
          {/* Timeline dot */}
          <div style={{
            position: 'absolute',
            left: '-37px',
            top: '24px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: '#00FF9C',
            border: '3px solid var(--bg)',
            boxShadow: '0 0 0 2px rgba(0,255,156,0.3), 0 0 12px rgba(0,255,156,0.3)',
          }} />

          <TerminalBox title={`experience_${index}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}>
                  {exp.role}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                  <FaBriefcase size={12} style={{ color: 'var(--accent)' }} />
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--accent)',
                    fontWeight: 500,
                  }}>
                    {exp.company}
                  </span>
                </div>
              </div>
              <span style={{
                padding: '4px 14px',
                borderRadius: '6px',
                background: 'rgba(0,255,156,0.08)',
                border: '1px solid rgba(0,255,156,0.2)',
                color: 'var(--accent)',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}>
                {exp.duration}
              </span>
            </div>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginBottom: '16px',
            }}>
              {exp.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {exp.tech.map((t) => (
                <span key={t} style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  border: '1px solid rgba(0,255,156,0.2)',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent)',
                  background: 'rgba(0,255,156,0.05)',
                }}>
                  {t}
                </span>
              ))}
            </div>
          </TerminalBox>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
