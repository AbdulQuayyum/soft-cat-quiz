import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { Home, Quiz, Result } from "../Views/Index"

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Quiz' element={<Quiz />} />
            <Route path='/Result' element={<Result />} />
        </Routes>
    )
}

export default MainRoutes