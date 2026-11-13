import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Regester from '../Pages/Regester/Regester';
import Login from '../Pages/Login/Login';




const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'products',
                Component: Products
            },
            {
                path: 'regester',
                Component: Regester
            },
            {
                path: 'login',
                Component: Login
            },
            
        ]
    }
])



export default router;