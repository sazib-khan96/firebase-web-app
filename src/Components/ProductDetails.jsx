import React from "react";
import { Link, useLoaderData } from "react-router";

const ProductDetails = () => {
  const productDetail = useLoaderData();
  
  return (
    <div className="flex gap-5 bg-gray-100">
      <figure>
        <img
          src={productDetail.images}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
       <Link to='/products'>
        <button className="p-2 rounded-2xl bg-amber-50 shadow-2xl">Continu with shopping</button>
       </Link>
        <h2 className="card-title">{productDetail.title}</h2>
        <p>  {productDetail.description} </p>
        <p>{productDetail.rating} taka</p>
        <p>{productDetail.price} taka</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary mx-auto">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
