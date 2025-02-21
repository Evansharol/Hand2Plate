import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './RegisteredUsers.css';

function RegisteredUsers() {
  const location = useLocation();
  const formData = location.state?.formData;

  return (
    <div className="registered-users">
      <Header />
      <main>
        <h2>Registered Users</h2>
        <div className="user-profile">
          <h3>Profile</h3>
          <p><strong>Name of Organization:</strong> {formData?.name}</p>
          <p><strong>Type of Entity:</strong> {formData?.entityType}</p>
          <p><strong>Location:</strong> {formData?.location}</p>
          <p><strong>Contact Details:</strong> {formData?.contactDetails}</p>
          <p><strong>Phone Number:</strong> {formData?.phoneNumber}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default RegisteredUsers;