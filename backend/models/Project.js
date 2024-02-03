const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  
  title: String,
  description: String,
  
});

const Project = mongoose.model('projects', projectSchema);

module.exports = Project;
