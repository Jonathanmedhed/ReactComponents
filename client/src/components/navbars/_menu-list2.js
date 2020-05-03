import React, { Fragment } from "react";
import NavbarList from "./_navbar_list";
import Others from "./_others";

const List2 = ({ setNavbar, setCard, type, setOption, bodyRef }) => {
  const selectMain = async (option) => {
    setOption(option);
    window.scrollTo(0, bodyRef.current.offsetTop);
  };

  const select = async (option, option2) => {
    setOption(option);
    if (option === "cards") {
      setCard(option2);
      window.scrollTo(0, bodyRef.current.offsetTop);
    }
  };

  return (
    <Fragment>
      <div className="hide-sm">
        <NavbarList setNavbar={setNavbar} type={type} />
      </div>
      <div className="hide-sm">
        <li className="hov">
          <ul className="dropdown-ul">
            <li>
              <a>
                <div>
                  Cards <i className="fas fa-sort-down"></i>
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
                <a onClick={() => selectMain("cards")}>Small Cards</a>
                {type === "simple" ? (
                  <Fragment></Fragment>
                ) : (
                  <div className="underline"></div>
                )}
              </li>
              <li>
                <a onClick={() => selectMain("big-cards")}>Big Cards</a>
                {type === "simple" ? (
                  <Fragment></Fragment>
                ) : (
                  <div className="underline"></div>
                )}
              </li>
            </div>
          </ul>
        </li>
      </div>
      <div className="hide-sm">
        <li className="hov">
          <ul className="dropdown-ul">
            <li>
              <a>
                <div>
                  Others <i className="fas fa-sort-down"></i>
                </div>
              </a>
              {type === "simple" ? (
                <Fragment></Fragment>
              ) : (
                <div className="underline"></div>
              )}
            </li>
            <div className="down">
              <Others setOption={setOption} bodyRef={bodyRef} type={type} />
            </div>
          </ul>
        </li>
      </div>
    </Fragment>
  );
};
export default List2;
