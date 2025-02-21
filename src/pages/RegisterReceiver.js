import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RegisterReceiver() {
  return (
    <div className="register-receiver">
      <Header />
      <main>
        <h2>Register as Receiver</h2>
        <p>Fill out the form to register as a receiver organization.</p>
        {/* Add registration form here */}
      </main>
      <Footer />
    </div>
  );
}

export default RegisterReceiver;