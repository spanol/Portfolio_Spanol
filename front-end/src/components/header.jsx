import React, {useState} from "react";

const Header = () => {
  const [ openSearch, setOpenSearch] = useState(false);
  const [ openNav, setOpenNav] = useState(false);
  return (
    <header className="header">
      <nav className={openNav ? "navbar active" : "navbar"}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#abilities">Abilities</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="icons">
        <div className="fas fa-search" id="search-btn" onClick={() => {setOpenSearch(!openSearch); setOpenNav(false) }}></div>
        <div className="fas fa-bars" id="menu-btn"  onClick={() => {setOpenNav(!openNav); setOpenSearch(false)}}></div>
    </div>

      <div className={openSearch ? "search-form active" : "search-form"}>
        <input type="search" id="search-box" placeholder="search here..."/>
        <label htmlFor="search-box" className="fas fa-search"></label>
    </div>
    </header>
  );
};

export default Header;
