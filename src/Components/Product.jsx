import React from "react";
import { Link } from "react-router";
const Product = ({ product }) => {

  
  return (
    <div className="card bg-base-100 w-96 shadow-sm ">
      <figure>
        <img
          src={product.images}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
         {product.title}
          <div className="badge badge-secondary">{product.brand}</div>
        </h2>
        <p>
          {product.description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Price : {product.price}</div>
          <div className="badge badge-outline"> Rating : {product.rating}</div>
        </div>
      </div>
     <Link to={`/ProductDetails/${product.id}`}>
      <button  className="border p-2">Buy Now</button>
     </Link>
    </div>
  );
};

export default Product;
