import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-4">
      <div className="container text-center text-md-start">
        <div className="row">

          {/* Brand and Description */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">🏠 HouseRent</h5>
            <p>Find your dream rental home quickly and easily. Whether you're a renter or an owner, HouseRent makes property management simple and secure.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/properties" className="text-white text-decoration-none">Properties</a></li>
              <li><a href="/add-property" className="text-white text-decoration-none">Add Property</a></li>
              <li><a href="/login" className="text-white text-decoration-none">Login</a></li>
              <li><a href="/register" className="text-white text-decoration-none">Register</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Contact Us</h6>
            <p>Email: houserent@gmail.com</p>
            <p>Phone: +91 7981937795</p>
            <p>Location: Kakinada, India</p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center mt-4 border-top pt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} HouseRent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
