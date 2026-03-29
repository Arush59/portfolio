import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TerminalBox from '../shared/TerminalBox';
import systemScopeImg from '../../assets/systemscope.png';
import devLenseImg from '../../assets/devlense.png';
import tripToYouImg from '../../assets/triptoyou.png';

const FeaturedProject = () => {
  const projects = [
    {
      title: 'SystemScope',
      date: "Feb '26",
      description: [
        'Engineered a full-stack system design simulator using the MERN stack, allowing users to visually construct and analyze distributed system architectures.',
        'Developed a custom simulation engine to emulate request traffic, dynamically identifying bottlenecks and performance degradation under load.',
        'Built real-time analytics dashboards to track system latency, failure rates, and request throughput.',
      ],
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      githubLink: 'https://github.com/Arush59/SystemScope',
      liveLink: 'https://system-scope.vercel.app/',
      image: systemScopeImg,
      featured: true,
    },
    {
      title: 'DevLense',
      date: "Dec '25",
      description: [
        'Built an AI-powered developer analysis platform using the MERN stack, integrating GitHub APIs to evaluate repositories and extract meaningful insights.',
        'Developed a custom scoring system to assess code quality, consistency, and tech stack usage, generating actionable feedback on developer strengths and weaknesses.',
        'Implemented analytics dashboards and job-fit prediction features to compare developer profiles against role requirements and highlight skill gaps.',
      ],
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      githubLink: 'https://github.com/Arush59/virtual-science-lab--frontend',
      liveLink: null,
      image: devLenseImg,
      featured: false,
    },
    {
      title: 'TripToYou',
      date: "Nov '25",
      description: [
        'Built a full-stack web platform for browsing and booking curated Dubai trip packages with detailed itineraries and pricing.',
        'Implemented dynamic search and filtering based on budget, duration, and activities for a personalized user experience.',
        'Developed secure user authentication and efficient booking workflows with a responsive and user-friendly interface.',
      ],
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      githubLink: 'https://github.com/Arush59/TripToYou',
      liveLink: null,
      image: tripToYouImg,
      featured: false,
    }
  ];

  return (
    <section id="featured-projects" style={{ padding: '100px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '48px',
        }}
      >
        <span style={{ color: 'var(--accent)' }}>$ </span>find <span className="green-text">./projects</span>
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          const isFeatured = project.featured;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                position: 'relative',
              }}
            >
              {/* Featured badge */}
              {isFeatured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 14px',
                    borderRadius: '6px',
                    background: 'rgba(0,255,156,0.1)',
                    border: '1px solid rgba(0,255,156,0.3)',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#00FF9C',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    boxShadow: '0 0 15px rgba(0,255,156,0.15)',
                  }}
                >
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#00FF9C',
                    boxShadow: '0 0 6px rgba(0,255,156,0.8)',
                  }} />
                  featured
                </motion.div>
              )}

              <div
                style={{
                  background: 'var(--bg-terminal)',
                  borderRadius: '12px',
                  border: isFeatured
                    ? '1px solid rgba(0,255,156,0.3)'
                    : '1px solid rgba(0,255,156,0.12)',
                  overflow: 'hidden',
                  boxShadow: isFeatured
                    ? '0 0 40px rgba(0,255,156,0.08), 0 0 80px rgba(0,255,156,0.03)'
                    : 'none',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = isFeatured
                    ? '0 0 60px rgba(0,255,156,0.15), 0 0 120px rgba(0,255,156,0.05)'
                    : '0 0 40px rgba(0,255,156,0.1), 0 0 60px rgba(0,255,156,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(0,255,156,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = isFeatured
                    ? '0 0 40px rgba(0,255,156,0.08), 0 0 80px rgba(0,255,156,0.03)'
                    : 'none';
                  e.currentTarget.style.borderColor = isFeatured
                    ? 'rgba(0,255,156,0.3)'
                    : 'rgba(0,255,156,0.12)';
                }}
              >
                {/* Terminal header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  borderBottom: '1px solid rgba(0, 255, 156, 0.1)',
                  background: 'rgba(0, 255, 156, 0.03)',
                }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28C840' }} />
                  </div>
                  <span style={{
                    marginLeft: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                  }}>
                    ~/projects/{project.title.toLowerCase()}
                  </span>
                </div>

                {/* Content */}
                <div style={{
                  display: 'flex',
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  flexWrap: 'wrap',
                }}>
                  {/* Image */}
                  <div style={{
                    flex: 1,
                    minWidth: '280px',
                    maxHeight: isFeatured ? '400px' : '320px',
                    overflow: 'hidden',
                  }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        display: 'block',
                      }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    />
                  </div>

                  {/* Text */}
                  <div style={{
                    flex: 1,
                    minWidth: '280px',
                    padding: isFeatured ? '32px' : '24px',
                  }}>
                    {/* Date badge */}
                    <div style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      border: '1px solid rgba(0,255,156,0.2)',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      letterSpacing: '1px',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '14px',
                      background: 'rgba(0,255,156,0.05)',
                    }}>
                      {project.date} | GITHUB
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: isFeatured ? 'clamp(24px, 2.5vw, 32px)' : 'clamp(20px, 2vw, 26px)',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      lineHeight: 1.2,
                      marginBottom: '20px',
                    }}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <div style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.75',
                      marginBottom: '24px',
                    }}>
                      <ul style={{
                        paddingLeft: '16px',
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        listStyleType: '"▸ "',
                      }}>
                        {project.description.map((point, i) => (
                          <li key={i} style={{ paddingLeft: '4px' }}>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '24px',
                    }}>
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            padding: '4px 12px',
                            borderRadius: '6px',
                            border: '1px solid rgba(0,255,156,0.2)',
                            fontSize: '12px',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--accent)',
                            background: 'rgba(0,255,156,0.05)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="terminal-btn"
                          style={{ fontSize: '13px', padding: '10px 18px' }}
                        >
                          <FaGithub size={14} /> git_clone
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="terminal-btn-primary"
                          style={{ fontSize: '13px', padding: '10px 18px' }}
                        >
                          <FaExternalLinkAlt size={12} /> open_demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProject;
