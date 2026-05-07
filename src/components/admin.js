import React, { useState } from "react";
import productsData from "../constants/products";

function Admin() {
  const [products, setProducts] = useState(productsData);

  const removeProduct = (id) => {
    const updatedProducts = products.filter((item) => item.id !== id);

    setProducts(updatedProducts);
  };

  return (
    <div className="container">
      {products.map((product) => (
        <div className="row" key={product.id}>
          <div className="col">
            <h2>{product.name}</h2>
          </div>

          <div className="col">
            <button className="btn" onClick={() => removeProduct(product.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Admin;
