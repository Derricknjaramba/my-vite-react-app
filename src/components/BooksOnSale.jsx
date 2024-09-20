import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const BooksOnSale = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooksOnSale = async () => {
      try {
        const response = await fetch('http://localhost:8000/books/on-sale/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books on sale:', error);
      }
    };

    fetchBooksOnSale();
  }, []);

  const handleBuy = async (book) => {
    console.log('Buying Book:', book);
    // Optionally show a success message or redirect after purchase
  };

  return (
    <div>
      <nav className="bg-blue-600 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/user/books-to-borrow" className="text-white hover:underline">Books to Borrow</Link>
          </li>
          <li>
            <Link to="/user/borrowed-books" className="text-white hover:underline">Borrowed Books</Link>
          </li>
          <li>
            <Link to="/user/purchased-books" className="text-white hover:underline">Purchased Books</Link>
          </li>
          <li>
            <Link to="/user/books-on-sale" className="text-white hover:underline">Books on Sale</Link>
          </li>
        </ul>
      </nav>
      <div className="p-5">
        <h2 className="text-2xl font-bold">Books On Sale</h2>
        <p className="text-lg text-gray-600 mb-4">
          Explore our collection of books available for purchase. Click the "Buy" button to purchase your favorite book!
        </p>
        <table className="min-w-full border mt-4">
          <thead>
            <tr>
              <th className="border p-2">Title</th>
              <th className="border p-2">Author</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book) => (
                <tr key={book.id}>
                  <td className="border p-2">{book.title}</td>
                  <td className="border p-2">{book.author}</td>
                  <td className="border p-2">${book.price.toFixed(2)}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleBuy(book)}
                      className="bg-green-500 text-white p-1 rounded hover:bg-green-600 transition duration-200"
                    >
                      Buy
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border p-2 text-center text-gray-600">
                  No books available for sale at the moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BooksOnSale;





