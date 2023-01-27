import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Home, AboutClubPage, NewsPage} from './pages';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-club" element={<AboutClubPage />} />
            <Route path="/news" element={<NewsPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router