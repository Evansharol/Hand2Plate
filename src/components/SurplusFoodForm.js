import React, { useState } from 'react';
import './SurplusFoodForm.css';

function SurplusFoodForm() {
  const [formData, setFormData] = useState({
    foodType: '',
    quantity: '',
    pickupTime: '',
    name: '',
    contactDetails: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setFormData({
          foodType: '',
          quantity: '',
          pickupTime: '',
          name: '',
          contactDetails: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="surplus-food-form">
      <h2>Notify Surplus Food</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="foodType">Food Type</label>
          <input type="text" name="foodType" value={formData.foodType} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="pickupTime">Pickup Time</label>
          <input type="datetime-local" name="pickupTime" value={formData.pickupTime} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Restaurant/Marriage Hall Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="contactDetails">Contact Details</label>
          <input type="text" name="contactDetails" value={formData.contactDetails} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default SurplusFoodForm;