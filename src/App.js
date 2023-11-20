// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './App/NavBar/nav';
import ProtectedRoute from './Components/Login-Folder/protected'; // Update with the correct path
import Home from './Components/Home/home';
import AboutUs from './Components/About-us/about';
import Jobs from './Components/Jobs/jobs';
import Contact from './Components/Contact/contact';
import Login from './Components/Login-Folder/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/about-us" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
          <Route path="/jobs" element={<ProtectedRoute><Jobs /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
