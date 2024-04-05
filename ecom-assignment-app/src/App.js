import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/index";
import Contact from "./pages/contact";
import Cart from "./pages/checkout";
import Product from "./pages/product";
import Checkedout from "./pages/checkoutsuccess";
import './App.css';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {

  
  return (
    <BrowserRouter>
      <div className="App bg-light">
        <Routes userRole={"Admin"}>
          <Route path="/" element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Cart />} />
            <Route path="/checkoutsuccess" element={<Checkedout />} />
          </Route>
        </Routes>

        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" ></script>
        <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" ></script>
        <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" ></script>
      </div>
    </BrowserRouter>
  );
}

export default App;
