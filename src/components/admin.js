import React, { useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../constants/products";

function Admin() {
  const [products, setProducts] = useState(productsData);

  const removeProduct = (id) => {
    const updated = products.filter((item) => item.id !== id);
    setProducts(updated);
  };

  return (
    <div>
      {products.map((product) => (
        <div className="col-12" key={product.id}>
          <div>
            <Link to={`/products/${product.id}`}>
              <div className="row">
                <div>
                  <h2>{product.name}</h2>
                </div>
              </div>
            </Link>
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