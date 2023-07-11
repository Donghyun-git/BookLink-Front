//import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../pages/Main';
import LoginPage from '../pages/Login/Login';
import RegisterPage from '../pages/Register';
import BooksPage from '../pages/Books/Books';
import SearchPage from '../pages/Search/Search';
import CommunitiesPage from '../pages/Communities';
import BookClubsPage from '../pages/BookClubs';
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/books" element={<BooksPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="communities" element={<CommunitiesPage />}></Route>
        <Route path="communities/bookClubs" element={<BookClubsPage />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
