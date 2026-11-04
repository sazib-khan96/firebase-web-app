import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav className="flex gap-5 justify-center items-center p-3">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default Navigation;
