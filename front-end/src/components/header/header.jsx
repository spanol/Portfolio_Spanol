import React, { useState } from "react";

import { useSearch } from "../../context/context";
const Header = () => {
  const { search, setSearch } = useSearch();
  const [openSearch, setOpenSearch] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
    if(window.location.pathname != "/#projects"){
    window.location.replace("/#projects");
    }
  };
  return (
    <header className="header">
      <nav className={openNav ? "navbar active" : "navbar"}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#abilities">Abilities</a>
        {/* <a href="#contact">Contact</a> */}
      </nav>

      <div className="icons">
        <div
          className="fas fa-search"
          id="search-btn"
          onClick={() => {
            setOpenSearch(!openSearch);
            setOpenNav(false);
          }}
        ></div>
        <div
          className="fas fa-bars"
          id="menu-btn"
          onClick={() => {
            setOpenNav(!openNav);
            setOpenSearch(false);
          }}
        ></div>
      </div>

      <div className={openSearch ? "search-form active" : "search-form"}>
        <input
          type="search"
          id="search-box"
          value={search}
          placeholder="search here..."
          onChange={handleSearch}
          // onChange={(e) => {setSearch(e.target.value); console.log(search)}}
        />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>
    </header>
  );
};

export default Header;
