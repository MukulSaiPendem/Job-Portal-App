// src/pages/Contact/Contact.js
import React from 'react';
import CardComponent from '../../App/Card/card';
import img1 from '../../assets/3.png';

const Contact = () => {
  // Data for the Contact page card
  const cardData = {
    title: "Contact Us",
    text: "Have questions or feedback? Our team is ready to help you. Get in touch with us via email, phone, or visit us at our office."
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <CardComponent 
        title={cardData.title} 
        text={cardData.text} 
        imageUrl={img1}
      />
      {/* Additional content for the Contact page */}
    </div>
  );
};

export default Contact;
