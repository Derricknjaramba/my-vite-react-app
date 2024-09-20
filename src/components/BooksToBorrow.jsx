import React, { useEffect, useState } from 'react';
import UserNav from './UserNav'; // Adjust the path if necessary

const BooksToBorrow = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('http://localhost:8000/books/to-borrow/');
      const data = await response.json();
      setBooks(data);
    };
    
    fetchBooks();
  }, []);

  const handleBorrow = async (book) => {
    // Logic to handle borrowing a book
    console.log('Borrowing Book:', book);
    // Optionally show a success message here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <UserNav />
      <div className="bg-white shadow-lg rounded-lg p-6 mt-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Books Available to Borrow</h2>
        <p className="text-lg text-gray-600 mb-6">
          Browse through the list of books you can borrow. Click the "Borrow" button to check them out!
        </p>
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">Title</th>
              <th className="border p-3">Author</th>
              <th className="border p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book) => (
                <tr key={book.id} className="hover:bg-gray-100">
                  <td className="border p-3">{book.title}</td>
                  <td className="border p-3">{book.author}</td>
                  <td className="border p-3">
                    <button
                      onClick={() => handleBorrow(book)}
                      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                      Borrow
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="border text-center p-3 text-gray-600">
                  No books available to borrow at the moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BooksToBorrow;


