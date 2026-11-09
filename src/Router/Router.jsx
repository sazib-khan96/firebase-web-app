import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Products from '../Pages/Products';
import ProductDetails from '../Components/ProductDetails';


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
                loader : ()=> fetch('https://dummyjson.com/products'),
                Component:Products
            },
            {
                path: 'ProductDetails/:id',
                loader : ({params})=> fetch(`https://dummyjson.com/products/${params.id}`),
                Component:ProductDetails
            },
            {
                path: 'login',
                Component:Login
            }
        ]
    }
])



export default router;