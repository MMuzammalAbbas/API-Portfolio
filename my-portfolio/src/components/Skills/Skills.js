// components/Skills.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('/skills')
      .then(response => {
        setSkills(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching skills:', error);
        setError('Error fetching skills');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Skills</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {skills.map(skill => (
            <li key={skill._id}>{skill.name}, {skill.level}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Skills;
