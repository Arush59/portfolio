import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJs, FaHtml5, FaCss3Alt, FaJava,
  FaReact, FaNodeJs, FaWordpress,
  FaPuzzlePiece, FaUsers, FaSyncAlt
} from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiMongodb, SiTailwindcss, SiC } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

const technicalSkills = [
  { name: 'JavaScript', Icon: FaJs, color: '#F0C040' },
  { name: 'C++', Icon: TbBrandCpp, color: '#00FF9C' },
  { name: 'C', Icon: SiC, color: '#00FF9C' },
  { name: 'HTML5', Icon: FaHtml5, color: '#E44D26' },
  { name: 'CSS3', Icon: FaCss3Alt, color: '#264DE4' },
  { name: 'Java', Icon: FaJava, color: '#F89820' },
  { name: 'React.js', Icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#E0E0E8' },
  { name: 'Node.js', Icon: FaNodeJs, color: '#00FF9C' },
  { name: 'Express.js', Icon: SiExpress, color: '#00FF9C' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#00FF9C' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'WordPress', Icon: FaWordpress, color: '#00FF9C' },
];

const softSkills = [
  { name: 'Problem Solving', Icon: FaPuzzlePiece, color: '#00FF9C' },
  { name: 'Team Player', Icon: FaUsers, color: '#00FF9C' },
  { name: 'Adaptability', Icon: FaSyncAlt, color: '#00FF9C' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
};

const SkillCard = ({ name, Icon, color }) => (
  <motion.div variants={cardVariants} className="skill-card">
    <Icon size={36} style={{ color }} />
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      fontWeight: 500,
      color: 'var(--text-secondary)',
      textAlign: 'center',
      lineHeight: 1.3,
    }}>
      {name}
    </span>
  </motion.div>
);

const CategoryHeader = ({ label }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
    <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>$</span>
    <h3 style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '15px',
      fontWeight: 600,
      color: 'var(--text-primary)',
      letterSpacing: '0.3px',
    }}>
      {label}
    </h3>
  </div>
);

const Skills = () => (
  <section id="skills" style={{ padding: '100px 40px', maxWidth: '1200px', margin: '0 auto' }}>
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
      <span style={{ color: 'var(--accent)' }}>$ </span>ls <span className="green-text">skills/</span>
    </motion.h2>

    {/* Technical Skills */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '48px' }}
    >
      <CategoryHeader label="cat technical_skills.txt" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
          gap: '14px',
        }}
      >
        {technicalSkills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </motion.div>
    </motion.div>

    {/* Soft Skills */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <CategoryHeader label="cat soft_skills.txt" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '14px',
          maxWidth: '520px',
        }}
      >
        {softSkills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Skills;
