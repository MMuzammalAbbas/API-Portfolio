const express = require('express');
const router = express.Router();
const ContactDetails = require('../models/ContactDetails');

// Get all contact details
router.get('/', async (req, res) => {
  try {
    const contactDetails = await ContactDetails.find();
    res.json(contactDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new contact detail
router.post('/', async (req, res) => {
    const contactDetail = new ContactDetails(req.body);
    try {
      const newContactDetail = await contactDetail.save();
      res.status(201).json({ message: 'Contact detail added successfully', data: newContactDetail });
    } catch (error) {
      console.error('Error saving contact detail:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = router;
