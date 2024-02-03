const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  
  title: String,
  company: String,
  startDate: Date,
  endDate: Date,
  
});

const Experience = mongoose.model('experience', experienceSchema);

module.exports = Experience;
