//house-rent-app/client/src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import PropertyList from './components/PropertyList';
import AddProperty from './components/AddProperty';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Apply from './components/Apply';
// import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="container-fluid py-3">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/properties" element={<PropertyList />} />
        
        <Route path="/add-property" element={<AddProperty />} />
        <Route path='/applydetails/:id' element={<Apply/>}></Route>

        {/* <Route path="/ownerview"element={<ProtectedRoute allowedRole="owner"><OwnerView /></ProtectedRoute>}/> */}
      </Routes>
    </div>
  );
}

export default App;

