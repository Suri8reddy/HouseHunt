import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('renter');

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // disable page scroll
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const notify = () => toast.success("Registered Successfully!");
  const error = (err) => toast.error(err);

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/register', { email, password, role });
      notify();
        window.location.href = '/';
     
    } catch (res) {
      console.log(res.response.data.error);
      error(res.response.data.error);
    }
  };

  function change(e) {
    e.preventDefault();
    window.location.href = '/login';
  }

  const styles = {
        background: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#a87f7f', // 🎯 MATCHING BACKGROUND COLOR
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
    footer: {
      marginTop: '20px',
      fontSize: '14px',
      color: '#444',
    },
    link: {
      color: '#2563eb',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  };

  return (
    <>
      <div style={styles.background}></div>
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Register</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={styles.input}
          />
          <select
            value={role}
            onChange={e => setRole(e.target.value)}
            style={styles.input}
          >
            <option value="renter">Renter</option>
            <option value="owner">Owner</option>
          </select>
          <button onClick={handleRegister} style={styles.button}>Register</button>
          
          <p style={styles.footer}>
            Already have an account?{' '}
            <span style={styles.link} onClick={change}>Click here</span>
          </p>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
