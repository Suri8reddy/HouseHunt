// src/components/AddProperty.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddProperty() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [rent, setRent] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [amenities, setAmenities] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleAdd = async () => {
  // Validation check
  if (!title || !location || !rent || !bedrooms || !amenities || !photo) {
    toast.warn("Please fill in all fields and upload a photo.");
    return;
  }

  const formData = new FormData();
  formData.append('title', title);
  formData.append('location', location);
  formData.append('rent', rent);
  formData.append('bedrooms', bedrooms);
  formData.append('amenities', amenities);
  formData.append('isAvailable', true);
  formData.append('photo', photo);

  try {
    await axios.post('http://localhost:5000/api/properties', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    toast.success("Your property is added to Properties!");
    setTimeout(() => {
      window.location.href = '/properties';
    }, 1500);
  } catch (error) {
    toast.error("Failed to add property.");
    console.error(error);
  }
};


  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh'}}>
      <div className="card p-4" style={{width:'400px', display:'flex', flexDirection:'column', alignItems:'center'}}>
         <ToastContainer/>
        <h2 className="mb-3">Add Property</h2>
        <input className="form-control mb-2" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input className="form-control mb-2" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
        <input className="form-control mb-2" placeholder="Rent" value={rent} onChange={e => setRent(e.target.value)} />
        <input className="form-control mb-2" placeholder="Bedrooms" value={bedrooms} onChange={e => setBedrooms(e.target.value)} />
        <input className="form-control mb-2" placeholder="Amenities (comma-separated)" value={amenities} onChange={e => setAmenities(e.target.value)} />
        <input className="form-control mb-3" type="file" accept="image/*" onChange={e => setPhoto(e.target.files[0])} />
        <button className="btn btn-primary" onClick={handleAdd}>Submit</button>
       
      </div>
    </div>
  );
}
