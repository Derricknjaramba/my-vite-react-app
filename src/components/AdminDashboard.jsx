import React from 'react';
import NavBar from './NavBar'; // Adjust path if necessary
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="p-5">
        <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
        <p className="mt-2 text-gray-700">Welcome to the Admin Dashboard! You can manage users and books here.</p>
        
        <div className="mt-4 p-4 bg-white rounded shadow-md">
          <h3 className="text-xl font-semibold mb-2">Manage Users</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/admin/lock-user" className="text-blue-500 hover:underline">Lock User</Link>
            </li>
            {/* Add more user management links here if needed */}
          </ul>
        </div>

        <div className="mt-4 p-4 bg-white rounded shadow-md">
          <h3 className="text-xl font-semibold mb-2">Manage Books</h3>
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
      </div>
    </div>
  );
};

export default AdminDashboard;





