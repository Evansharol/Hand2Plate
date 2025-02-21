import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './RegisterDonor.css';


const firebaseConfig = {
  apiKey: "AIzaSyAzOfRDzWE-QF_cxopyfMaqm9wLygwJczk",
  authDomain: "login-839fd.firebaseapp.com",
  databaseURL: "https://login-839fd-default-rtdb.firebaseio.com",
  projectId: "login-839fd",
  storageBucket: "login-839fd.firebasestorage.app",
  messagingSenderId: "432499697637",
  appId: "1:432499697637:web:bb08851b79b5e3d8b6710c",
  measurementId: "G-PGD45Z3SL9"
};


function RegisterDonor() {
  const [formData, setFormData] = useState({
    name: '',
    entityType: '',
    email: '',
    location: '',
    contactDetails: '',
    phoneNumber: '',
    password: '', // Added for authentication
  });


  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
 
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear any previous errors when user makes changes
  };


  const validateForm = () => {
    if (!formData.name || !formData.entityType || !formData.email ||
        !formData.location || !formData.password) {
      setError('Please fill in all required fields');
      return false;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };


  const handleNext = async (e) => {
    e.preventDefault();
   
    if (!validateForm()) return;


    setLoading(true);
    try {
      // Create user account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );


      // Store additional donor information in Firestore
      const donorData = {
        uid: userCredential.user.uid,
        name: formData.name,
        entityType: formData.entityType,
        email: formData.email,
        location: formData.location,
        contactDetails: formData.contactDetails,
        phoneNumber: formData.phoneNumber,
        createdAt: new Date().toISOString(),
        status: 'pending' // For admin approval if needed
      };


      // Create a new document in 'donors' collection
      await setDoc(doc(db, 'donors', userCredential.user.uid), donorData);


      // Navigate to the next page with success message
      navigate('/upload-documents', {
        state: {
          formData,
          message: 'Registration successful! Please upload your documents.'
        }
      });
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="register-donor">
      <Header />
      <main>
        <h2>Register as Donor</h2>
        <p>Fill out the form to register as a donor organization.</p>
        {error && <div className="error-message">{error}</div>}
        <form className="donor-form" onSubmit={handleNext}>
          <div className="form-group">
            <label htmlFor="name">Name of Organization <span className="required">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="entityType">Type of Entity <span className="required">*</span></label>
            <select
              name="entityType"
              value={formData.entityType}
              onChange={handleChange}
              required
            >
              <option value="">Select Entity Type</option>
              <option value="NGO">NGO</option>
              <option value="Restaurant">Restaurant</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email <span className="required">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password <span className="required">*</span></label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location <span className="required">*</span></label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactDetails">Contact Details</label>
            <input
              type="text"
              name="contactDetails"
              value={formData.contactDetails}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="next-button"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Next'}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}


export default RegisterDonor;