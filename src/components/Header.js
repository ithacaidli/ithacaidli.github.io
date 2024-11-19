import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <div className="header-container">
      <div className="logo">
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Ithaca Idli Logo"
        />
        <h1>Ithaca Idli</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
