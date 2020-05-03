import React, { Fragment } from "react";

const CardList = ({ setCard, type }) => {
  return (
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
        <div class="down">
          <li>
            <a onClick={() => setCard("bio")}>Bio</a>
            {type === "bio" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setCard("icon-md")}>Icon Medium</a>
            {type === "icon-md" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setCard("icon-sm")}>Icon Small</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setCard("icon-sq")}>Icon Square</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setCard("icon")}>Icon Gray</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setCard("img-sm")}>IMG Small</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setCard("img")}>IMG Tall</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setCard("img-text-hor")}>IMG Text Hor</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setCard("img-text-xs")}>IMG Text xs</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setCard("img-text")}>IMG Text</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setCard("menu-item")}>Menu Item</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setCard("product-hor")}>Product Hor</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setCard("product")}>Product</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setCard("review")}>Review</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setCard("text-big")}>Text Big</a>
            {type === "simple" ? (
              <Fragment></Fragment>
            ) : (
              <div className="underline"></div>
            )}
          </li>
          <li>
            <a onClick={() => setCard("text-sm")}>Text Small</a>
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
export default CardList;
