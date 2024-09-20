import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/admin" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/admin/add-books" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Add Books</NavLink>
        </li>
        <li>
          <NavLink to="/admin/borrowed-books" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Borrowed Books</NavLink>
        </li>
        <li>
          <NavLink to="/admin/purchased-books" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Purchased Books</NavLink>
        </li>
        <li>
          <NavLink to="/admin/remove-book" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white'}>Remove Book</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;









