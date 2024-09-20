import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Logic to handle logout (e.g., clearing user session) can go here
    navigate('/'); // Redirect to the landing page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-5">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Welcome to Your Dashboard!</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Here you can manage your book borrowing activities and explore available books.
      </p>
      <nav className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <ul className="space-y-4">
          <li>
            <Link 
              to="/user/books-to-borrow" 
              className="block text-center text-lg text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-3 transition duration-200"
            >
              📚 Books to Borrow
            </Link>
          </li>
          <li>
            <Link 
              to="/user/borrowed-books" 
              className="block text-center text-lg text-white bg-green-600 hover:bg-green-700 rounded-lg py-3 transition duration-200"
            >
              📖 Your Borrowed Books
            </Link>
          </li>
          <li>
            <Link 
              to="/user/purchased-books" 
              className="block text-center text-lg text-white bg-yellow-600 hover:bg-yellow-700 rounded-lg py-3 transition duration-200"
            >
              💳 Your Purchased Books
            </Link>
          </li>
          <li>
            <Link 
              to="/user/books-on-sale" 
              className="block text-center text-lg text-white bg-red-600 hover:bg-red-700 rounded-lg py-3 transition duration-200"
            >
              🔖 Books on Sale
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default UserDashboard;






