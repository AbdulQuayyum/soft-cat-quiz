import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { Home, Quiz, Result } from "../Views/Index"
import MainLayout from '../Layout/Main.Layout';

const MainRoutes = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Quiz' element={<Quiz />} />
                <Route path='/Result' element={<Result />} />
            </Routes>
        </MainLayout>
    )
}

export default MainRoutes