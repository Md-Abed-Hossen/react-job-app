import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section">
        <h2>JobsHub</h2>
        <p>We always make our seekers and companies find the best jobs and employers find the best candidates.</p>
      </div>
      <div className="section">
        <h2>Company</h2>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div className="section">
        <h2>Resources</h2>
        <ul>
          <li><a href="#">Account</a></li>
          <li><a href="#">Support Center</a></li>
          <li><a href="#">Feedback</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="section">
        <h2>Support</h2>
        <ul>
          <li><a href="#">Events</a></li>
          <li><a href="#">Promo</a></li>
          <li><a href="#">Req Demo</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div className="section">
        <h2>Contact Info</h2>
        <p>mdabed222@gmail.com</p>
        <div className="social-links">
          <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
