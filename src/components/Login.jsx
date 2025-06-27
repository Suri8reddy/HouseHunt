// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './login.css'; // ✅ Custom CSS file

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const notify = () => toast.success("Login Successful!");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', {
//         email,
//         password
//       });

//       localStorage.setItem('user', JSON.stringify(response.data));
//       notify();

//       setTimeout(() => {
//         navigate('/');
//         window.location.reload();
//       }, 1000);
//     } catch {
//       toast.error('Login failed. Please check your credentials.');
//     }
//   };

//   const change = (e) => {
//     e.preventDefault();
//     navigate('/register');
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2 className="login-title">Welcome Back</h2>
//         <input
//           className="login-input"
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//         <input
//           className="login-input"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//         />
//         <button className="login-button" onClick={handleLogin}>Login</button>
//         <ToastContainer />
//         <p className="login-link" onClick={change}>
//           Don’t have an account? <span>Sign up</span>
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from './AuthContext'; // Adjust path as needed
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // ✅ using login from context

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      toast.warn("Please fill in both email and password.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      const userData = response.data;

      // ✅ Save to context and localStorage
      login(userData);

      toast.success("Login Successful!");

      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  const redirectToRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const styles = {
    background: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(to right, #3b82f6, #1e3a8a)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: -1,
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
      width: '100%',
      maxWidth: '420px',
      textAlign: 'center',
      backdropFilter: 'blur(6px)',
    },
    title: {
      marginBottom: '24px',
      fontSize: '28px',
      color: '#1e3a8a',
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      marginBottom: '16px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      outline: 'none',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    link: {
      marginTop: '20px',
      fontSize: '14px',
      color: '#444',
    },
    linkSpan: {
      color: '#2563eb',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  };

  return (
    <>
      <div style={styles.background} />
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Login</h2>
          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            style={styles.button}
            onClick={handleLogin}
            disabled={!email || !password}
          >
            Login
          </button>
          <p style={styles.link}>
            Don’t have an account?{' '}
            <span style={styles.linkSpan} onClick={redirectToRegister}>Sign up</span>
          </p>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
