
// src/App.js
import React from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Experiences from './components/Experiences/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ContactDetails from './components/ContactDetails/ContactDetails';
import Socials from './components/Socials/Socials';

const App = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <AboutMe/>
      <Experiences />
      <Projects />
      <Skills />
      <ContactDetails />
      <Socials />
    </div>
  );
};

export default App;
