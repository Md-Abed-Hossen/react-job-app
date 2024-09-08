// src/components/LoginForm.jsx
import React from 'react';
import './customcss/LoginForm.css'; // Optional: Import a CSS file for styling
import Navbar from './Navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
   <Navbar/>
    <div className="form-container">
      <form action="#" method="post">
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />

        <button type="submit" className="button">Login</button>

        <p>Don't have an account? <Link to ="/register">Register</Link></p>
      </form>
      
    </div>
    <Footer/>
    </>
  );
};

export default LoginForm;
