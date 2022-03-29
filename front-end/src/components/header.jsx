import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* <div className="icons">
        <div className="fas fa-search" id="search-btn"></div>
        <div className="fas fa-shopping-cart" id="cart-btn"></div>
        <div className="fas fa-bars" id="menu-btn"></div>
    </div> */}

      {/* <div className="search-form">
        <input type="search" id="search-box" placeholder="search here..."/>
        <label for="search-box" className="fas fa-search"></label>
    </div> */}
    </header>
  );
};

export default Header;
