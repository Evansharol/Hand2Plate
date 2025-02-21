import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './UploadDocuments.css';

function UploadDocuments() {
  const [files, setFiles] = useState({
    fssaiLicense: null,
    healthTradeLicense: null,
  });

  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleDone = () => {
    // Handle file upload logic here
    console.log('Files:', files);
    // Navigate to the user profile page with form data
    navigate('/user-profile', { state: { formData } });
  };

  return (
    <div className="upload-documents">
      <Header />
      <main>
        <h2>Proof of Registration</h2>
        <p>Upload FSSAI License and Health/Trade License Certificates.</p>
        <form className="documents-form">
          <div className="form-group">
            <label htmlFor="fssaiLicense">FSSAI License (PDF/Doc)</label>
            <input
              type="file"
              name="fssaiLicense"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="healthTradeLicense">Health/Trade License (PDF/Doc)</label>
            <input
              type="file"
              name="healthTradeLicense"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="button" className="done-button" onClick={handleDone}>
            Done
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default UploadDocuments;