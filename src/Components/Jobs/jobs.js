// src/pages/Jobs/Jobs.js
import React from 'react';
import CardComponent from '../../App/Card/card'; // Adjust the import path as needed

const Jobs = () => {
  // Array of job objects with data for three different positions
  const jobsData = [
    {
      id: 1,
      title: "Frontend Developer",
      text: "Looking for a passionate Frontend Developer to design and shape unique, user-centric products and experiences.",
      imageUrl: "https://via.placeholder.com/150/C0C0C0/FFFFFF/?text=Frontend+Developer" // Replace with your job image URL
    },
    {
      id: 2,
      title: "Backend Developer",
      text: "In need of a Backend Developer to be responsible for server-side web application logic and integration of the work frontend developers do.",
      imageUrl: "https://via.placeholder.com/150/808080/FFFFFF/?text=Backend+Developer" // Replace with your job image URL
    },
    {
      id: 3,
      title: "Project Manager",
      text: "Seeking an experienced Project Manager to oversee all aspects of projects, set deadlines, assign responsibilities, and monitor the progress of projects.",
      imageUrl: "https://via.placeholder.com/150/404040/FFFFFF/?text=Project+Manager" // Replace with your job image URL
    }
  ];

  return (
    <div>
      <h1>Job Opportunities</h1>
      <div className="d-flex flex-wrap justify-content-around">
        {jobsData.map((job) => (
          <div className="p-2" key={job.id}> {/* Padding for spacing between cards */}
            <CardComponent 
              title={job.title} 
              text={job.text} 
              imageUrl={job.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
