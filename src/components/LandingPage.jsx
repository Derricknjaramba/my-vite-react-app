import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Book Management System</h1>
      <div className="mt-4">
        <Link to="/admin" className="mr-4 text-blue-600">Admin Dashboard</Link>
        <Link to="/user" className="text-blue-600">User Dashboard</Link>
      </div>
    </div>
  );
};

export default LandingPage;
