import React from "react";
import List from "./_menu-list";
import List2 from "./_menu-list2";
import MobileMenu from "./_mobile-menu";

const Navbar = ({
  setPage,
  setNavbar,
  setCard,
  setJumbo,
  setOption,
  bodyRef,
}) => {
  return (
    <nav className="navbar-hover-under">
      <div className="title">
        <a href="index.html">
          <i className="fas fa-code fa-2x"></i>
        </a>
        <h1>
          <a href="index.html">Website</a>
        </h1>
      </div>
      <ul className="main-ul">
        <List
          setNavbar={setNavbar}
          setJumbo={setJumbo}
          setPage={setPage}
          setOption={setOption}
          bodyRef={bodyRef}
        />
        <List2
          setNavbar={setNavbar}
          setCard={setCard}
          setOption={setOption}
          bodyRef={bodyRef}
        />
      </ul>
      <ul className="main-ul">
      <MobileMenu
          setNavbar={setNavbar}
          setJumbo={setJumbo}
          setOption={setOption}
          bodyRef={bodyRef}
        />
      </ul>
    </nav>
  );
};
export default Navbar;
