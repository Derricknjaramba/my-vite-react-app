import React from 'react';
import NavBar from './NavBar'; // Adjust path if necessary
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here, like clearing tokens or user info
    localStorage.removeItem('authToken'); // Example of clearing token
    navigate('/'); // Redirect to the landing page
  };

  return (
    <div>
      <NavBar />
      <div className="p-5 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Admin Dashboard</h2>
        <p className="mt-2 text-gray-700 text-center">Welcome to the Admin Dashboard! Manage users and books easily.</p>
        
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Manage Users</h3>
          <ul className="space-y-2">
            {/* No more Lock User link */}
            {/* Add more user management links here if needed */}
          </ul>
        </div>

        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4"></h3>
          <ul className="space-y-2">
            <li>
              <Link to="/admin/add-books" className="text-blue-500 hover:underline">Add Books</Link>
            </li>
            <li>
              <Link to="/admin/remove-book" className="text-blue-500 hover:underline">Remove Book</Link>
            </li>
            <li>
              <Link to="/admin/borrowed-books" className="text-blue-500 hover:underline">View Borrowed Books</Link>
            </li>
            <li>
              <Link to="/admin/purchased-books" className="text-blue-500 hover:underline">View Purchased Books</Link>
            </li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <button 
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;







