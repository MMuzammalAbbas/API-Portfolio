const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// Get all experiences
router.get('/', async (req, res) => {
    try {
      const experiences = await Experience.find();
      res.json({ success: true, message: 'Experiences retrieved successfully', data: experiences });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error retrieving experiences', error: error.message });
    }
  });
  
  // Create a new experience
  router.post('/', async (req, res) => {
    const experience = new Experience(req.body);
    try {
      const newExperience = await experience.save();
      res.status(201).json({ success: true, message: 'Experience added successfully', data: newExperience });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Error adding experience', error: error.message });
    }
  });

module.exports = router;
