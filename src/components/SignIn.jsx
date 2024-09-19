import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Signing in with:', { email, password });
    // Example API call to sign in
    // const response = await fetch('http://localhost:8000/auth/signin/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password }),
    // });
    // Handle response...
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSignIn}>
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border rounded w-full p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Sign In
        </button>
        <p className="mt-4">
          Don't have an account? <a href="/admin/signup" className="text-blue-600">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
