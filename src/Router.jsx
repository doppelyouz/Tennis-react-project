import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Home, Test} from './pages';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router