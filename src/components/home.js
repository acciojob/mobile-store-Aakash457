import React from "react";
import { Link } from "react-router-dom";
import products from "../constants/products";

function Home() {
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
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;