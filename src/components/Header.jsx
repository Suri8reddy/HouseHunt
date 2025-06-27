import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './header.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setTimeout(()=>{
      logout();
      window.location.reload();
    },1000)
    navigate('/');
  };

  const handleHover = (event) => {
    event.target.style.backgroundColor = event.type === 'mouseenter' ? '#f0f0f0' : '';
  };

  return (
    <div className="header-section">
      <span className="header-title">
        <Link className="nav-link" to="/">🏠 HouseHunt</Link>
      </span>

      <div className="header-details">
        {/* Not Logged In */}
        {!user && (
          <>
            <div className="header-detail-item">
              <Link
                to="/register"
                className="nav-link"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                Register
              </Link>
            </div>
            <div className="header-detail-item">
              <Link
                to="/login"
                className="nav-link"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                Login
              </Link>
            </div>
          </>
        )}

        {/* Common for logged in users (renter or owner) */}
        {user && (
          <>
            <div className="header-detail-item">
              <Link
                to="/properties"
                className="nav-link"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                Properties
              </Link>
            </div>

            {/* Only Owner sees Add Property */}
            {user.role === 'owner' && (
              <div className="header-detail-item">
                <Link
                  to="/add-property"
                  className="nav-link"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                >
                  Add Property
                </Link>
              </div>
            )}

            {/* Logout for both roles */}
            <div className="header-detail-item">
              <button
                className="nav-link btn btn-link"
                onClick={handleLogout}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                style={{ padding: '0', color: 'black', textDecoration: 'none' }}
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
