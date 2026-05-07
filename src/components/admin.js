import React, { useState } from "react";
import productsData from "../constants/products";
import products from "../constants/products";

function Admin() {
  const [products, setProducts] = useState(productsData);

  const removeProduct = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };

  return (
    <div>
      <h1>Admin</h1>

      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>

          <button onClick={() => removeProduct(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Admin;
