// components/ContactDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactDetails.css';
const ContactDetails = () => {
  const [contactDetails, setContactDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('/contact-details')
      .then(response => {
        setContactDetails(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching contact details:', error);
        setError('Error fetching contact details');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Contact Details</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {contactDetails.map(contact => (
            <li key={contact._id}>
              <strong>{contact.fullname}</strong>,
              <br />
              {contact.email},
              <br />
              {contact.phone}, 
              <br />
              {contact.address}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactDetails;
