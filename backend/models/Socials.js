const mongoose = require('mongoose');

const socialsSchema = new mongoose.Schema({
  instagram: String,
  github: String,
  linkedin: String,
  email: String,
  
});

const Socials = mongoose.model('socials', socialsSchema);

module.exports = Socials;
