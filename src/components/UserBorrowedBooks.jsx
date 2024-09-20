import React, { useEffect, useState } from 'react';
import UserNav from './UserNav';

const UserBorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const response = await fetch('http://localhost:8000/user/borrowed-books/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBorrowedBooks(data);
      } catch (error) {
        console.error('Failed to fetch borrowed books:', error);
      }
    };

    fetchBorrowedBooks();
  }, []);

  return (
    <div>
      <UserNav />
      <div className="p-5">
        <h2 className="text-2xl font-bold">Your Borrowed Books</h2>
        <table className="min-w-full border mt-4">
          <thead>
            <tr>
              <th className="border p-2">Title</th>
              <th className="border p-2">Author</th>
              <th className="border p-2">Return Date</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.length > 0 ? (
              borrowedBooks.map((book) => (
                <tr key={book.id}>
                  <td className="border p-2">{book.title}</td>
                  <td className="border p-2">{book.author}</td>
                  <td className="border p-2">{book.return_date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="border p-2 text-center">No borrowed books found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserBorrowedBooks;

