import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Home, AboutClubPage} from './pages';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-club" element={<AboutClubPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router