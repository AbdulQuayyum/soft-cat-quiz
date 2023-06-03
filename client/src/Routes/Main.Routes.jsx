import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CheckIfUserExist } from '../Utilities/Helper';
import { Home, Quiz, Result } from "../Views/Index"
import MainLayout from '../Layout/Main.Layout';

/** react routes */
const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/Quiz',
        element: <CheckIfUserExist><Quiz /></CheckIfUserExist>
        // element: <Quiz />
    },
    {
        path: '/Result',
        element: <CheckIfUserExist><Result /></CheckIfUserExist>
        // element: <Result />
    },
])

const MainRoutes = () => {
    return (
        <MainLayout>
            <RouterProvider router={Router} />
        </MainLayout>
    )
}

export default MainRoutes