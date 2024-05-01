// Contacts.jsx

import React from 'react';
import './Contacts.css'; // Import your CSS file for styling

const Contacts = () => {
  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <div className="contacts-content">
          <div className="message">
            <h2>Contact Us</h2>
            <form name="contactForm" className="contact-form" validate>
              <div className="form-group">
                <input type="text" id="name" name="name" className="form-control" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          <div className="map">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.880104025421!2d72.83264671490235!3d19.079690757078042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf7a5f65c633%3A0x224206a99fb8915d!2sUsha%20Mittal%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1635435602844!5m2!1sen!2sin"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="contact-details">
              <p><strong>Address:</strong> Usha Mittal Institute of Technology, SNDT Women's University, Juhu-Tara Road, Santacruz West, Mumbai, Maharashtra, India - 400049</p>
              <p><strong>Phone:</strong> +91 7977244710</p>
              <p><strong>Email:</strong> gdsc.umit@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
