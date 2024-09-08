// src/components/RegisterForm.jsx
import React from 'react';
import NavBar from './Navbar'; // Import your NavBar component
import Footer from './Footer';
import {Link} from 'react-router-dom'

const RegisterForm = () => {
  return (
    <>
      <NavBar /> {/* Add the Navbar */}
      <div className="form-container">
        <form action="#" method="post">
          <h2>Register</h2>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />

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

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm your password"
            required
          />

          <button type="submit" className="button">Register</button>

          <p>
            Already have an account? <Link to ="/login">Login</Link>
          </p>
        </form>
      </div>
      <footer></footer>
    </>
  );
};

export default RegisterForm;
