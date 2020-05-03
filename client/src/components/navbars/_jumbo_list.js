import React, { Fragment } from "react";

const JumboList = ({ setJumbo, type }) => {
  return (
    <li className="hov">
      <ul className="dropdown-ul">
        <li>
          <a>
            <div>
              Jumbos <i className="fas fa-sort-down"></i>
            </div>
          </a>
          {type === "simple" ? (
            <Fragment></Fragment>
          ) : (
            <div className="underline"></div>
          )}
        </li>
        <div class="down">
          <li>
            <a onClick={() => setJumbo("simple")}>Simple</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setJumbo("big-deg")}>Big Degraded</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setJumbo("img-nobg")}>IMG no bg</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setJumbo("img")}>IMG</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setJumbo("login")}>Login</a>
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
export default JumboList;
