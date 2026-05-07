import React from "react";
import { useParams } from "react-router-dom";
import products from "../constants/products";

function Product() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>

      <button className="btn">
        Buy Now
      </button>
    </div>
  );
}

export default Product;