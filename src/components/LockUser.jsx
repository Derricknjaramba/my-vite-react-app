import React, { useState } from 'react';
import NavBar from './NavBar';

const LockUser = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleLockUser = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/users/lock/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      if (response.ok) {
        setMessage(`User ${username} has been locked successfully.`);
        setUsername('');
      } else {
        throw new Error('Failed to lock the user.');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form className="bg-white p-6 rounded shadow-md" onSubmit={handleLockUser}>
          <h2 className="text-2xl font-bold mb-4">Lock User</h2>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
            Lock User
          </button>
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default LockUser;
