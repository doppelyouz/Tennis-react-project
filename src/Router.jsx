import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Home, AboutClubPage, NewsPage, OneNewsPage} from './pages';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-club" element={<AboutClubPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<OneNewsPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router