import React, { useState } from 'react';
import NavBar from './NavBar';

const RemoveBook = () => {
  const [bookId, setBookId] = useState('');
  const [message, setMessage] = useState('');

  const handleRemoveBook = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/books/remove/${bookId}/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage(`Book with ID ${bookId} has been removed successfully.`);
        setBookId('');
      } else {
        throw new Error('Failed to remove the book.');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form className="bg-white p-6 rounded shadow-md" onSubmit={handleRemoveBook}>
          <h2 className="text-2xl font-bold mb-4">Remove Book</h2>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="bookId">Book ID:</label>
            <input
              type="text"
              id="bookId"
              value={bookId}
              onChange={(e) => setBookId(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
            Remove Book
          </button>
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default RemoveBook;
