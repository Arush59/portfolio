const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Experience = require('./models/Experience');

dotenv.config();

connectDB();

const projectsData = [
    {
        title: 'System Scope',
        description: 'Engineered a full-stack system design simulator using the MERN stack, allowing users to visually construct and analyze distributed system architectures. Developed a custom simulation engine to emulate request traffic, dynamically identifying bottlenecks and performance degradation under load. Built real-time analytics dashboards to track system latency, failure rates, and request throughput.',
        techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        githubLink: 'https://github.com/arush/systemscope',
        liveLink: '',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    },
    {
        title: 'Dev Lens',
        description: 'Built an AI-powered developer analysis platform using the MERN stack, integrating GitHub APIs to evaluate repositories and extract meaningful insights. Generated comprehensive reports covering code quality, contribution history, and tech stack usage, generating actionable feedback on developer strengths and weaknesses. Implemented analytics dashboards and job-fit prediction features to compare developer profiles against role requirements and highlight skill gaps.',
        techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'GitHub API'],
        githubLink: 'https://github.com/arush/devlens',
        liveLink: '',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
    },
    {
        title: 'Trip To You',
        description: 'Built a full-stack web platform for browsing and booking curated Dubai trip packages with detailed itineraries and pricing. Implemented dynamic search and filtering based on budget, duration, and activities for a personalized user experience. Developed secure user authentication and efficient booking workflows with a responsive and user-friendly interface.',
        techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        githubLink: 'https://github.com/arush/triptoyou',
        liveLink: '',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=1000',
    }
];

const skillsData = [
    {
        category: 'Languages',
        items: ['JavaScript', 'C++', 'HTML', 'CSS', 'Java'],
    },
    {
        category: 'Technologies',
        items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    },
    {
        category: 'Soft Skills',
        items: ['Problem Solving', 'Team Player', 'Adaptability'],
    }
];

const experienceData = [
    {
        role: 'Web Development Intern',
        company: 'VanillaKart (Subsidiary of Savacity Brushflicks Creative Hub Pvt. Ltd.)',
        duration: "Sep '25 – Nov '25",
        description: 'Completed a 2-month internship focused on building and managing client websites, combining MERN stack development with WordPress solutions. Designed, developed, and maintained production-grade websites while coordinating with clients on requirements and deliverables. Tech stacks used: MongoDB, Express.js, React.js, Node.js, WordPress.',
    }
];

const importData = async () => {
    try {
        await Project.deleteMany();
        await Skill.deleteMany();
        await Experience.deleteMany();

        const createdProjects = await Project.insertMany(projectsData);
        const createdSkills = await Skill.insertMany(skillsData);
        const createdExperience = await Experience.insertMany(experienceData);

        console.log('✅ Data seeded successfully!');
        console.log(`   → ${createdProjects.length} Projects inserted`);
        console.log(`   → ${createdSkills.length} Skill categories inserted`);
        console.log(`   → ${createdExperience.length} Experience entries inserted`);

        process.exit();
    } catch (error) {
        console.error(`❌ Error seeding data: ${error.message}`);
        process.exit(1);
    }
};

importData();
