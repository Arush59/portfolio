const express = require('express');
const router = express.Router();
const {
    getProjects,
    getSkills,
    getExperience,
    submitContact,
} = require('../controllers/portfolioController');

router.get('/projects', getProjects);
router.get('/skills', getSkills);
router.get('/experience', getExperience);
router.post('/contact', submitContact);

module.exports = router;
