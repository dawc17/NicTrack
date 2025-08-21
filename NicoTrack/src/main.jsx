import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Navbar from "./components/navbar";
import Products from "./pages/products";
import Settings from "./pages/settings";
import About from "./pages/about";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  </StrictMode>
);
