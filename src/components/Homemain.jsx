// src/components/Homemain.jsx
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './footer';
import ContactForm from './ContactForm';
import CardList from './CardList';
import dummyCards from './data/dummyData'; // Ensure this path is correct

const Homemain = ({ showContactForm }) => {

  useEffect(() => {
    if (showContactForm) {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [showContactForm]);

  return (
    <>
      <Navbar />
      <Hero />
      <CardList cards={dummyCards} />

      {/* Assign an ID to the ContactForm to reference it */}
      <div id="contact-form">
        {showContactForm && <ContactForm />}
      </div>

      <Footer />
    </>
  );
};

export default Homemain;
