import React from 'react';

const ContactForm = () => {
  return (
    <>
    <section id="contact">
    <div className="form-container" id="contact">
      <form action="#" method="post">
        <h2>Contact Us</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Enter your message" rows="4" required></textarea>
        <button type="submit" className="button">Send Message</button>
      </form>
      
    </div>
    </section>
    </>
  );
};

export default ContactForm;
