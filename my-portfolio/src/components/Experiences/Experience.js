// components/Experiences.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Experiences.css'; 

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('/experiences')
      .then(response => {
       

        setExperiences(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching experiences:', error);
        setError('Error fetching experiences');
        setLoading(false);
      });
  }, []);
  

  return (
    <div>
      <h2>Experiences</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
        {experiences.map(experience => (
          <li key={experience._id}>
            <strong>{experience.title}</strong> at {experience.company}
            <br />
            <span className="date-range">
              {new Date(experience.startDate).toLocaleDateString()} -{' '}
              {new Date(experience.endDate).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default Experiences;
