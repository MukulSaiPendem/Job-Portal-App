import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Replace this with your actual authentication check

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
