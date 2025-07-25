import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react"; 
import { LOGO_ULR } from "../utils/constants.js";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={LOGO_ULR}
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-bold text-gray-800">MyStore</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700 items-center">
          <Link to="/" className="hover:text-orange-500 font-bold">Home</Link>
          <Link to="/about" className="hover:text-orange-500 font-bold">About Us</Link>
          <Link to="/contact" className="hover:text-orange-500 font-bold">Contact Us</Link>
          <Link to="/cart" className="relative hover:text-orange-500 font-bold">
            ({cartItems.length} Items) 🛒
          </Link>
          {/* <button
            onClick={toggleLogin}
            className="px-4 py-[5px] bg-orange-500 text-white rounded hover:bg-orange-600 transition"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button> */}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link to="/" onClick={toggleMenu} className="block px-4 py-2 hover:text-orange-500 font-bold">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="block px-4 py-2 hover:text-orange-500 font-bold">About Us</Link>
          <Link to="/contact" onClick={toggleMenu} className="block px-4 py-2 hover:text-orange-500 font-bold">Contact Us</Link>
          <Link to="/cart" onClick={toggleMenu} className="block px-4 py-2 hover:text-orange-500 font-bold">
            ({cartItems.length} Items) 🛒
          </Link>
          {/* <button
            onClick={() => { toggleLogin(); toggleMenu(); }}
            className="w-full text-left px-4 py-2 bg-orange-500 text-white rounded mt-2 hover:bg-orange-600 transition"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button> */}
        </div>
      )}
    </header>
  );
};

export default Header;
