import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegisterDonor from './pages/RegisterDonor';
import RegisterReceiver from './pages/RegisterReceiver';
import UploadDocuments from './pages/UploadDocuments';
import RegisteredUsers from './pages/RegisteredUsers';
import UserProfile from './pages/UserProfile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-donor" element={<RegisterDonor />} />
          <Route path="/register-receiver" element={<RegisterReceiver />} />
          <Route path="/upload-documents" element={<UploadDocuments />} />
          <Route path="/registered-users" element={<RegisteredUsers />} />
          <Route path="/user-profile" element={<UserProfile />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
