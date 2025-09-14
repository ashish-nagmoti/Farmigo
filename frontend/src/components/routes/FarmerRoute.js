import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const FarmerRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo && userInfo.role === 'farmer' ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default FarmerRoute;
