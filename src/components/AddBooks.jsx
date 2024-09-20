import React, { useState } from 'react';
import NavBar from './NavBar'; // Ensure this path is correct

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [body, setBODY] = useState('body');
  const [isbn, setISBN] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);


  const handleAddBook = async (e) => {
    e.preventDefault();
    
    const bookData = { title, author, isbn, genre, price, stock,body};
    console.log (bookData);
    try {
      const response = await fetch('http://localhost:8000/admin/add_book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(`Book added successfully: ${result.title}`);
        setTitle('');
        setISBN(''); 
        setGenre(''); 
        setPrice(0); 
        setStock(0); 
      } else {
        throw new Error('Failed to add the book.');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form className="bg-white p-6 rounded shadow-md" onSubmit={handleAddBook}>
          <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="isbn">ISBN:</label>
            <input
              type="text"
              id="isbn"
              value={isbn}
              onChange={(e) => setISBN(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="stock">Stock:</label>
            <input
              type="number"
              id="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
            Add Book
          </button>
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddBooks;




