import React from 'react';
import { useLoaderData } from 'react-router';
import Product from '../Components/Product';

const Products = () => {
    const products = useLoaderData()
    const allProduct = (products.products)
    return (
        <div>
            <h1>This is products page</h1>

            <div className='grid grid-cols-3 gap-5 '>
                {
                    allProduct.map( product => <Product product={product} key={product.id}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;