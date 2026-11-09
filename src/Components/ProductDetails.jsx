import React from "react";
import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const productDetail = useLoaderData();
  console.log(productDetail);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={productDetail.images}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productDetail.title}</h2>
        <p>
          {productDetail.description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
