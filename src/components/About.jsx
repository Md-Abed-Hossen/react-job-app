// src/components/About.jsx
import React from 'react';
import './customcss/About.css'; // Import a CSS file for styling
import Navbar from './Navbar'; 
import Footer from './footer'; 

const About = () => {
  return (
<>
<Navbar></Navbar>
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to our website! We are passionate about providing the best
        services to our users. Our mission is to deliver high-quality content and
        tools to help you achieve your goals.
      </p>
      <p>
        Our team is made up of experienced professionals who are dedicated to
        ensuring your satisfaction. We continually strive to improve and welcome
        your feedback.
      </p>
      <p>
        Thank you for visiting our site. We hope you find everything you're looking for!
      </p>
    </div>
    <Footer></Footer>
    </>

  );
};

export default About;
