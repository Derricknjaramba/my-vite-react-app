import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-5">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">User Dashboard</h2>
      <nav className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
        <ul className="space-y-4">
          <li>
            <Link 
              to="/user/books-to-borrow" 
              className="block text-center text-lg text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2 transition duration-200"
            >
              Books to Borrow
            </Link>
          </li>
          <li>
            <Link 
              to="/user/borrowed-books" 
              className="block text-center text-lg text-white bg-green-600 hover:bg-green-700 rounded-lg py-2 transition duration-200"
            >
              Borrowed Books
            </Link>
          </li>
          <li>
            <Link 
              to="/user/purchased-books" 
              className="block text-center text-lg text-white bg-yellow-600 hover:bg-yellow-700 rounded-lg py-2 transition duration-200"
            >
              Purchased Books
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserDashboard;

