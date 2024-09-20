import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import AddBooks from './components/AddBooks';
import RemoveBook from './components/RemoveBook';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserBorrowedBooks from './components/UserBorrowedBooks';
import UserPurchasedBooks from './components/UserPurchasedBooks';
import BorrowedBooks from './components/BorrowedBooks'; // Admin Borrowed Books
import PurchasedBooks from './components/PurchasedBooks'; // Admin Purchased Books
import BooksToBorrow from './components/BooksToBorrow';
import UserDashboard from './components/UserDashboard';
import BooksOnSale from './components/BooksOnSale';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-books" element={<AddBooks />} />
        <Route path="/admin/remove-book" element={<RemoveBook />} />
        <Route path="/admin/signin" element={<SignIn />} />
        <Route path="/admin/signup" element={<SignUp />} />
        <Route path="/admin/borrowed-books" element={<BorrowedBooks />} />
        <Route path="/admin/purchased-books" element={<PurchasedBooks />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/user/books-to-borrow" element={<BooksToBorrow />} />
        <Route path="/user/borrowed-books" element={<UserBorrowedBooks />} />
        <Route path="/user/purchased-books" element={<UserPurchasedBooks />} />
        <Route path="/user/books-on-sale" element={<BooksOnSale />} />
      </Routes>
    </Router>
  );
}

export default App;









