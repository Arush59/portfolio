const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');
const Contact = require('../models/Contact');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res, next) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        next(error);
    }
};

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
const getSkills = async (req, res, next) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (error) {
        next(error);
    }
};

// @desc    Get all experience
// @route   GET /api/experience
// @access  Public
const getExperience = async (req, res, next) => {
    try {
        const experience = await Experience.find();
        res.status(200).json(experience);
    } catch (error) {
        next(error);
    }
};

// @desc    Submit contact message
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !name.trim() || !email || !email.trim() || !message || !message.trim()) {
            res.status(400);
            throw new Error('Please provide valid information for all strict required fields.');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
             res.status(400);
             throw new Error('Invalid email pattern provided.');
        }

        const contact = await Contact.create({
            name,
            email,
            message,
        });

        res.status(201).json(contact);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getProjects,
    getSkills,
    getExperience,
    submitContact,
};
