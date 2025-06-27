// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function PropertyList() {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/properties')
//       .then(res => setProperties(res.data));
//   }, []);
//   function handleApplyClick(e){
//       window.location.href = '/applydetails';
//   }

//   return (
// <div className="container-fluid">
//   <h2 className="mb-4" style={{color:'black'}}>Available Properties</h2>
//   <div className="row g-3">
//     {properties.map(prop => (
//       <div key={prop._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
//         <div className="card h-100">
//           {prop.photo && (
//             <img
//               src={`http://localhost:5000/uploads/${prop.photo}`}
//               className="card-img-top"
//               alt="Property"
//               style={{ height: '200px', objectFit: 'cover' }}
//             />
//           )}
//           <div className="card-body">
//             <h5 className="card-title">{prop.title}</h5>
//             <p className="card-text">📍 {prop.location}</p>
//             <p className="card-text">💰 ₹{prop.rent}</p>
//             <p className="card-text">🛏️ {prop.bedrooms} Bedrooms</p>
//             {prop.amenities?.length > 0 && (
//               <p className="card-text"><strong>Amenities:</strong> {prop.amenities.join(', ')}</p>
//             )}
//             <button className="btn btn-primary w-100" onClick={() => handleApplyClick(prop._id)}>Book Property</button>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
//   );
// }
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // adjust the path
import Header from './Header';

export default function PropertyList() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // 👈 Access user from context

  useEffect(() => {
    axios.get('http://localhost:5000/api/properties')
      .then(res => setProperties(res.data))
      .catch(err => console.error('Error fetching properties:', err));
  }, []);

  function handleApplyClick(propertyId) {
    if (user) {
      // ✅ User is logged in
      navigate(`/applydetails/${propertyId}`);
    
    } else {
      // ❌ Not logged in
      alert("Please log in first to book a property.");
      navigate('/login');
    }
  }

  return (
    <div className="container-fluid">
      <div style={{ marginBottom: '70px' }}>
        <Header/>
      </div>
      <h2 className="mb-4" style={{ color: 'black' }}>Available Properties</h2>
      <div className="row g-3">
        {properties.map(prop => (
          <div key={prop._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100">
              {prop.photo && (
                <img
                  src={`http://localhost:5000/uploads/${prop.photo}`}
                  className="card-img-top"
                  alt="Property"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{prop.title}</h5>
                <p className="card-text">📍 {prop.location}</p>
                <p className="card-text">💰 ₹{prop.rent}</p>
                <p className="card-text">🛏️ {prop.bedrooms} Bedrooms</p>
                {prop.amenities?.length > 0 && (
                  <p className="card-text"><strong>Amenities:</strong> {prop.amenities.join(', ')}</p>
                )}
                <button
                  className="btn btn-primary w-100"
                  onClick={() => handleApplyClick(prop._id)}
                >
                  Book Property
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
