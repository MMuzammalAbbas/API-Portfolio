const mongoose = require('mongoose');

const contactDetailsSchema = new mongoose.Schema({
  // Define your contactDetails schema fields here

  email: String,
  phone: String,
  address: String,
  fullname: String,
});

const ContactDetails = mongoose.model('contactDetails', contactDetailsSchema);

module.exports = ContactDetails;