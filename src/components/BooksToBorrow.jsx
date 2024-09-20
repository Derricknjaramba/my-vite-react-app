import React, { useEffect, useState } from 'react';

const BooksToBorrow = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('http://localhost:8000/user/books');
      const data = await response.json();
      setBooks(data);
      console.log(data);
    };
    
    fetchBooks();
  }, []);

  const handleBorrow = async (book) => {
    // Logic to handle borrowing a book
    const data = {
      user_id: 1,
    }
   console.log(book);
    // const borrow = async () => {
    //   const response = await fetch('http://localhost:8000/user/borrow_book/' + book.id + "?user_id=1", {
    //     method: "POST",
    //   });
    //   alert("Book Borrowed successfully.")
    // };
    
    borrow();
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Books to Borrow</h2>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Author</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td className="border p-2">{book.title}</td>
              <td className="border p-2">{book.author}</td>
              <td className="border p-2">
                <button onClick={() => handleBorrow(book)} className="bg-blue-500 text-white p-1">Borrow</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksToBorrow;
