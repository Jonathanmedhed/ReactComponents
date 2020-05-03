import React, { Fragment } from "react";

const NavbarList = ({ setNavbar, type }) => {

  return (
    <li className="hov">
      <ul className="dropdown-ul">
        <li>
          <a>
            <div>
              Navbars <i className="fas fa-sort-down"></i>
            </div>
          </a>
          {type === "simple" ? (
            <Fragment></Fragment>
          ) : (
            <div className="underline"></div>
          )}
        </li>
        <div className="down">
          <li>
            <a onClick={() => setNavbar("simple")}>Simple</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setNavbar("hover")}>Hover</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setNavbar("centered")}>Centered</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
        </div>
      </ul>
    </li>
  );
};
export default NavbarList;
