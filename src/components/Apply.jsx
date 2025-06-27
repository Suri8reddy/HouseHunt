import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

export default function Apply() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // prevent scroll
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/apply', form, {
        headers: { 'Content-Type': 'application/json' },
      });
      toast.success('Your request was sent successfully!');
      setForm({ name: '', email: '', phone: '', message: '' });
      window.location.href = '/';
    } catch (error) {
      console.error('❌ Error submitting form:', error.response?.data || error.message);
      toast.error('Something went wrong.');
    }
  };

  const styles = {
    background: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#a87f7f', // your background color
      zIndex: -1,
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    form: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
      width: '100%',
      maxWidth: '500px',
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
  };

  return (
    <>
      <div style={styles.background}></div>
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.title}>Apply Details</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email..."
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number..."
            value={form.phone}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Write your opinion..."
            value={form.message}
            onChange={handleChange}
            rows={4}
            style={{ ...styles.input, resize: 'none' }}
          />
          <button type="submit" style={styles.button}>Apply</button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
}
