const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  
  name: String,
  level: String,

});

const Skill = mongoose.model('skills', skillSchema);

module.exports = Skill;
