import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './UserProfile.css';

function UserProfile() {
  const location = useLocation();
  const formData = location.state?.formData;

  const recentDonations = [
    { id: 1, name: 'Donation 1', date: '2025-02-01' },
    { id: 2, name: 'Donation 2', date: '2025-02-10' },
    { id: 3, name: 'Donation 3', date: '2025-02-15' },
  ];

  return (
    <div className="user-profile">
      <Header />
      <main>
        <h2>Welcome!!</h2>
        <div className="profile-info">
          <img src="profile-photo-url" alt="Profile" className="profile-photo" />
          <h3>{formData?.name}</h3>
        </div>
        <div className="stats">
          <div className="stat">
            <h4>Total Donations</h4>
            <img src="total-donations-image-url" alt="Total Donations" />
            <p>3</p>
          </div>
          <div className="stat">
            <h4>Credit Points</h4>
            <p>120</p>
          </div>
        </div>
        <h3>Recent Donations</h3>
        <div className="recent-donations">
          {recentDonations.map((donation) => (
            <div key={donation.id} className="donation-box">
              <h4>{donation.name}</h4>
              <p>{donation.date}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default UserProfile;