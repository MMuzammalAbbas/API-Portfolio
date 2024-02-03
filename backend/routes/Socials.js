const express = require('express');
const router = express.Router();
const Socials = require('../models/Socials');

// Get all socials
router.get('/', async (req, res) => {
  try {
    const socials = await Socials.find();
    res.json(socials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new social links
router.post('/', async (req, res) => {
  const social = new Socials(req.body);
  try {
    const newSocial = await social.save();
    res.status(201).json({ message: 'Social links added successfully', data: newSocial });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
