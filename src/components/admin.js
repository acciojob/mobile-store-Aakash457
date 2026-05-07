import React, { useState } from "react";
import productsData from "../constants/products";

function Admin() {
  const [products, setProducts] = useState(productsData);

  const removeProduct = (id) => {
    const updated = products.filter(
      (item) => item.id !== id
    );

    setProducts(updated);
  };

  return (
    <div>
      {products.map((product) => (
        <div className="row" key={product.id}>
          <div>
            <h2>{product.name}</h2>
          </div>

          <div>
            <button
              className="btn"
              onClick={() => removeProduct(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Admin;