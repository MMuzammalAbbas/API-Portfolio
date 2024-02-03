// components/Socials.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Socials.css';
const Socials = () => {
  const [socials, setSocials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('/socials')
      .then(response => {
        setSocials(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching socials:', error);
        setError('Error fetching socials');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Socials</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {socials.map((social, index) => (
            <li key={index}>
              {social.instagram && <div>Instagram: <a href={social.instagram} target="_blank" rel="noopener noreferrer">{social.instagram}</a></div>}
              {social.github && <div>Github: <a href={social.github} target="_blank" rel="noopener noreferrer">{social.github}</a></div>}
              {social.linkedin && <div>LinkedIn: <a href={social.linkedin} target="_blank" rel="noopener noreferrer">{social.linkedin}</a></div>}
              {social.email && <div>Email: {social.email}</div>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Socials;
