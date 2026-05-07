import React from "react";
import { useParams } from "react-router-dom";
import products from "../constants/products";

function Product() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <h2>₹ {product.price}</h2>
    </div>
  );
}

export default Product;
