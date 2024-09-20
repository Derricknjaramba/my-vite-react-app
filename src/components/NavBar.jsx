// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/add-books" className="text-white hover:underline">Add Books</Link>
        </li>
        <li>
          <Link to="/borrowed-books" className="text-white hover:underline">Borrowed Books</Link>
        </li>
        <li>
          <Link to="/purchased-books" className="text-white hover:underline">Purchased Books</Link>
        </li>
        <li>
          <Link to="/lock-user" className="text-white hover:underline">Lock User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar; // Ensure you're using default export here
