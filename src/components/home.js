import React from "react";
import { Link } from "react-router-dom";
import products from "../constants/products";

function Home() {
  return (
    <div className="container">
      {products.map((product) => (
        <div className="col-12" key={product.id}>
          <div>
            <Link to={`/products/${product.id}`}>
              <div className="row">
                <div className="col">
                  <h2>{product.name}</h2>
                  <p>{product.price}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;