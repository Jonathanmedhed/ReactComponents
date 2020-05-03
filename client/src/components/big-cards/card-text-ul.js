import React, { Fragment } from "react";
const BCardTextUl = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-text-pu">
          <h1>Card Text + U</h1>
          <div class="line-sm"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <ul>
            <li>
              <i class="fas fa-arrow-circle-right"></i>
              <p>Lorem ipsum dolor sit amet</p>
            </li>
            <li>
              <i class="fas fa-arrow-circle-right"></i>
              <p>Lorem ipsum dolor sit amet</p>
            </li>
            <li>
              <i class="fas fa-arrow-circle-right"></i>
              <p>Lorem ipsum dolor sit amet</p>
            </li>
            <li>
              <button class="btn btn-primary">READ MORE</button>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
export default BCardTextUl;
