import React from "react";
import { Link } from "react-router-dom";
import products from "../constants/products";


function Home() {
  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
