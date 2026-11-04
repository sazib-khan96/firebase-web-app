import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Products from '../Pages/Products';


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
                Component:Products
            },
            {
                path: 'login',
                Component:Login
            }
        ]
    }
])



export default router;