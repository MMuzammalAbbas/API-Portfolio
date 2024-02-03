const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors()); 
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/backend-portfolio');

app.use(express.json());


const contactDetailsRoutes = require('./routes/ContactDetails');
const skillRoutes = require('./routes/Skill');
const experienceRoutes = require('./routes/Experience');
const projectRoutes = require('./routes/Project');
const socialsRoutes = require('./routes/Socials');


app.use('/contact-details', contactDetailsRoutes);
app.use('/skills', skillRoutes);
app.use('/experiences', experienceRoutes);
app.use('/projects', projectRoutes);
app.use('/socials', socialsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
