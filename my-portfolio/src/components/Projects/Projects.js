// components/Projects.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('/projects')
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setError('Error fetching projects');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project._id}>{project.name}, {project.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;
