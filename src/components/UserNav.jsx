import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:underline">Home</Link> {/* Added Home link */}
        </li>
        <li>
          <Link to="/user/books-to-borrow" className="text-white hover:underline">Books to Borrow</Link>
        </li>
        <li>
          <Link to="/user/borrowed-books" className="text-white hover:underline">Your Borrowed Books</Link>
        </li>
        <li>
          <Link to="/user/purchased-books" className="text-white hover:underline">Your Purchased Books</Link>
        </li>
        <li>
          <Link to="/user/books-on-sale" className="text-white hover:underline">Books on Sale</Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;



