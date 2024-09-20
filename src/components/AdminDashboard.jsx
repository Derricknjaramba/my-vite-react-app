import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-5">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Admin Dashboard</h2>
      <nav className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <ul className="space-y-4">
          <li>
            <Link 
              to="/admin/add-books" 
              className="block text-center text-lg text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-3 transition duration-200 shadow hover:shadow-md"
            >
              Add Books
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/borrowed-books" 
              className="block text-center text-lg text-white bg-green-600 hover:bg-green-700 rounded-lg py-3 transition duration-200 shadow hover:shadow-md"
            >
              Borrowed Books
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/purchased-books" 
              className="block text-center text-lg text-white bg-yellow-600 hover:bg-yellow-700 rounded-lg py-3 transition duration-200 shadow hover:shadow-md"
            >
              Purchased Books
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;


