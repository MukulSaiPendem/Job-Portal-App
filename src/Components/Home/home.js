// src/pages/Home/Home.js
import React from 'react';
import CardComponent from '../../App/Card/card'; // Make sure the path is correct
import img1 from '../../assets/1.png';
function Home(){
  // Dummy data for the card
  const cardData = {
    title: "Welcome to MyApp!",
    text: "This is the home page of MyApp. Here you can find information about our services and offerings. Stay a while and listen!"
  };

  const fullName = localStorage.getItem('fullName');

  return (
    <div>
      <h1>Home Page</h1>
      {fullName && <h2>Welcome, {fullName}!</h2>}
      <CardComponent title={cardData.title} text={cardData.text} imageUrl={img1} />
      {/* You can add more content here if needed */}
    </div>
  );
};

export default Home;
