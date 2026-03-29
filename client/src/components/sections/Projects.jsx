import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import api from '../../api/axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get('/projects');
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const projectNumbers = ['01', '02', '03'];

  return (
    <section id="projects" style={{ padding: '100px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 900, color: '#1a1a2e', marginBottom: '60px' }}
      >
        My <span style={{ color: '#6B4FA0' }}>Projects</span>
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap', animation: 'pulse 2s ease-in-out infinite' }}>
                <div style={{ flex: 1, minWidth: '280px', height: '280px', borderRadius: '20px', backgroundColor: 'rgba(107,79,160,0.08)' }}></div>
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div style={{ height: '14px', backgroundColor: 'rgba(107,79,160,0.1)', borderRadius: '8px', marginBottom: '16px', width: '30%' }}></div>
                  <div style={{ height: '40px', backgroundColor: 'rgba(107,79,160,0.1)', borderRadius: '8px', marginBottom: '12px' }}></div>
                  <div style={{ height: '80px', backgroundColor: 'rgba(107,79,160,0.1)', borderRadius: '8px' }}></div>
                </div>
              </div>
            ))
          : projects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{
                    display: 'flex',
                    flexDirection: isEven ? 'row' : 'row-reverse',
                    gap: '60px',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  {/* Image */}
                  <div style={{ flex: 1, minWidth: '280px' }}>
                    <div style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      backgroundColor: '#D4CECC',
                      border: '1px solid rgba(107,79,160,0.12)',
                      aspectRatio: '4/3',
                      boxShadow: '0 8px 40px rgba(107,79,160,0.1)',
                    }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: '280px' }}>
                    {/* Project number badge */}
                    <div style={{
                      display: 'inline-block',
                      padding: '4px 14px',
                      borderRadius: '999px',
                      border: '1px solid rgba(107,79,160,0.3)',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#6B4FA0',
                      letterSpacing: '1px',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '16px',
                    }}>
                      {projectNumbers[index] || `0${index + 1}`} GITHUB
                    </div>

                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(26px, 3vw, 36px)',
                      fontWeight: 900,
                      color: '#1a1a2e',
                      lineHeight: 1.2,
                      marginBottom: '16px',
                    }}>
                      {project.title.includes(' ')
                        ? <>
                            {project.title.split(' ').slice(0, -1).join(' ')}{' '}
                            <em style={{ color: '#6B4FA0', fontStyle: 'italic' }}>{project.title.split(' ').slice(-1)}</em>
                          </>
                        : <em style={{ color: '#6B4FA0', fontStyle: 'italic' }}>{project.title}</em>
                      }
                    </h3>

                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#6B6B7B', lineHeight: '1.75', marginBottom: '24px' }}>
                      {project.description}
                    </p>

                    {/* Tech stack pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            padding: '5px 14px',
                            borderRadius: '999px',
                            border: '1px solid rgba(26,26,46,0.18)',
                            fontSize: '13px',
                            fontFamily: 'Inter, sans-serif',
                            color: '#4a4a5a',
                            backgroundColor: 'transparent',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          style={{ padding: '10px 22px', borderRadius: '999px', border: '1.5px solid #1a1a2e', color: '#1a1a2e', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s' }}
                          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1a1a2e'; e.currentTarget.style.color = '#fff'; }}
                          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a1a2e'; }}
                        >
                          <FaGithub size={14} /> View Code
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          style={{ padding: '10px 22px', borderRadius: '999px', border: '1.5px solid #6B4FA0', color: '#6B4FA0', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s' }}
                          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#6B4FA0'; e.currentTarget.style.color = '#fff'; }}
                          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#6B4FA0'; }}
                        >
                          <FaExternalLinkAlt size={12} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })
        }
      </div>
    </section>
  );
};

export default Projects;
