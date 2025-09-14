import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const BrokerRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo && userInfo.role === 'broker' ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default BrokerRoute;
