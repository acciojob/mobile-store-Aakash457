import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./home";
import Product from "./product";
import Admin from "./admin";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>

        <div>
          <Link to="/admin">Admin</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
