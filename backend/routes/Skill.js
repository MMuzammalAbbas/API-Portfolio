const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new skill
router.post('/', async (req, res) => {
  const skill = new Skill(req.body);
  try {
    const newSkill = await skill.save();
    res.status(201).json({ message: 'Skill added successfully', data: newSkill });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

