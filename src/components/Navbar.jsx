import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/Cart">
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
