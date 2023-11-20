import React from 'react';
import CardComponent from '../../App/Card/card';
import img1 from '../../assets/2.png';

const AboutUs = () => {
  // Data for the About Us page card
  const cardData = {
    title: "About MyApp",
    text: "MyApp is a platform dedicated to providing top-notch solutions. We focus on innovation, creativity, and efficiency to enhance user experiences."
  };

  return (
    <div>
      <h1>About Us</h1>
      <CardComponent 
        title={cardData.title} 
        text={cardData.text} 
        imageUrl={img1} 
      />
      {/* Additional content for About Us page */}
    </div>
  );
};

export default AboutUs;
