//import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../pages/Main';
import LoginPage from '../pages/Login/Login';
import RegisterPage from '../pages/Register';
import BooksPage from '../pages/Books/Books';
import BookDetailPage from '../pages/BookDetail';
import SearchPage from '../pages/Search/Search';
import CommunitiesPage from '../pages/Communities';
import BookClubsPage from '../pages/BookClubs';
import BoardsPage from '../pages/Boards';
import CommunitiesRegisterPage from '../pages/CommunitiesRegisterPag';
import AuthPage from '../pages/Auth';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:isbn" element={<BookDetailPage />}></Route>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/communities" element={<CommunitiesPage />} />
        <Route path="/communities/book-clubs" element={<BookClubsPage />} />
        <Route path="/communities/boards" element={<BoardsPage />}></Route>
        <Route
          path="communities/write"
          element={<CommunitiesRegisterPage />}
        ></Route>
      </Route>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default Router;
