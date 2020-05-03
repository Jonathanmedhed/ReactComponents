import React, { useState, Fragment } from "react";
import Others from "./_others";

const MobileMenu = ({ type, setOption, bodyRef }) => {
  const select = async (option) => {
    setOption(option);
    window.scrollTo(0, bodyRef.current.offsetTop);
  };

  const [icon, setIcon] = useState("bars");
  return (
    <div className="show-sm">
      <ul className="dropdown-ul">
        <li onClick={() => setIcon(icon === "bars" ? "arrow" : "bars")}>
          <a>
            <div>
              {icon === "bars" ? (
                <i
                  onClick={() => setIcon("arrow")}
                  className="fas fa-bars fa-2x"
                ></i>
              ) : (
                <Fragment></Fragment>
              )}
              {icon === "arrow" ? (
                <i
                  onClick={() => setIcon("bars")}
                  class="fas fa-chevron-up fa-2x"
                ></i>
              ) : (
                <Fragment></Fragment>
              )}
            </div>
          </a>
        </li>
        <div className="down">
          <div className="hide-sm">
            <li>
              <a onClick={() => select("navbars")}>Navbars</a>
              {type === "simple" ? (
                <Fragment></Fragment>
              ) : (
                <div className="underline"></div>
              )}
            </li>
          </div>
          <li>
            <a onClick={() => select("jumbos")}>Jumbos</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => select("cards")}>Cards</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => select("big-cards")}>Cards (Big)</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => select("carousels")}>Carousels</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => select("pages")}>Pages</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <Others setOption={setOption} bodyRef={bodyRef} type={type} />
        </div>
      </ul>
    </div>
  );
};
export default MobileMenu;
