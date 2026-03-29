import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaLaptopCode, FaRobot, FaBrain, FaShieldAlt, FaExternalLinkAlt } from 'react-icons/fa';

const certificatesData = [
  {
    title: 'Web Development Internship',
    organization: 'Vanillakart',
    date: "Nov '25",
    credentialUrl: 'https://drive.google.com/file/d/12znYgTI-fI05tqPYEkmxYPbXcMfOmMn1/view',
    icon: FaBriefcase,
  },
  {
    title: 'C++ Programming: OOPs & DSA',
    organization: 'CSE Pathshala',
    date: "Aug '25",
    credentialUrl: 'https://drive.google.com/file/d/14FTYHZl8962ror_D27IDemgQIW7gG_W-/view',
    icon: FaLaptopCode,
  },
  {
    title: 'ChatGPT-4 Prompt Engineering',
    organization: 'Infosys Springboard',
    date: "Aug '25",
    credentialUrl: 'https://drive.google.com/file/d/1v4C2fgGObS6wvuXOaxKw22IrfUWHtzLv/view',
    icon: FaRobot,
  },
  {
    title: 'Master Generative AI',
    organization: 'Infosys Springboard',
    date: "Jun '25",
    credentialUrl: 'https://drive.google.com/file/d/1Crnekt4R6rRv_xAz6OLfuqbVmWfRW7BK/view',
    icon: FaBrain,
  },
  {
    title: 'Privacy & Security in Online Social Media',
    organization: 'NPTEL',
    date: "Apr '25",
    credentialUrl: 'https://drive.google.com/file/d/1q36WsFBeooqSqYJsyBgicZkkSGVN4Q6j/view',
    icon: FaShieldAlt,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
  }),
};

const Certificates = () => (
  <section id="certificates" style={{ padding: '100px 40px', maxWidth: '1200px', margin: '0 auto' }}>
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
        <span style={{ color: 'var(--accent)' }}>$ </span>ls <span className="green-text">certificates/</span>
      </h2>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '16px',
        color: 'var(--text-secondary)',
        marginBottom: '48px',
      }}>
        Professional certifications and courses that validate my expertise.
      </p>
    </motion.div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
    }}>
      {certificatesData.map((cert, index) => {
        const IconComponent = cert.icon;
        return (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              background: 'var(--bg-terminal)',
              borderRadius: '12px',
              border: '1px solid rgba(0, 255, 156, 0.12)',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '14px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = 'rgba(0,255,156,0.3)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,255,156,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(0,255,156,0.12)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Icon */}
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '10px',
              background: 'rgba(0,255,156,0.08)',
              border: '1px solid rgba(0,255,156,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <IconComponent size={22} style={{ color: 'var(--accent)' }} />
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 1.4,
            }}>
              {cert.title}
            </h3>

            {/* Organization */}
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--text-secondary)',
              fontWeight: 400,
            }}>
              {cert.organization}
            </span>

            {/* Date Badge */}
            <span style={{
              padding: '4px 12px',
              borderRadius: '6px',
              background: 'rgba(0,255,156,0.08)',
              border: '1px solid rgba(0,255,156,0.15)',
              color: 'var(--accent)',
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
            }}>
              {cert.date}
            </span>

            {/* View Credential */}
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '4px',
                color: 'var(--accent)',
                fontSize: '13px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-light)';
                e.currentTarget.style.gap = '10px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.gap = '6px';
              }}
            >
              $ open credential
              <FaExternalLinkAlt size={11} />
            </a>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Certificates;
