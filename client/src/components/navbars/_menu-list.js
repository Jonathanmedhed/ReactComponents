import React, { Fragment } from "react";
import JumboList from "./_jumbo_list";

const List = ({ setPage, setJumbo, type, setOption, bodyRef }) => {
  const select = async (option, option2) => {
    setOption(option);
    if (option === "pages") {
      setPage(option2);
      window.scrollTo(0, bodyRef.current.offsetTop);
    }
  };

  return (
    <Fragment>
      <div className="hide-sm">
        <JumboList setJumbo={setJumbo} type={type} />
      </div>
      <div className="hide-sm">
        <li className="hov">
          <ul className="dropdown-ul">
            <li>
              <a>
                <div>
                  Pages <i className="fas fa-sort-down"></i>
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
                <a onClick={() => select("pages", "dashboard")}>Dashboard</a>
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
    </Fragment>
  );
};
export default List;
