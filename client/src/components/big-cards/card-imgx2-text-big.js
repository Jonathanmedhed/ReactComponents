import React, { Fragment } from "react";
const BCardIMGx2TextBig = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-text-img mb-3">
          <div class="left">
            <h1 class="hide-sm">Card Text + IMG</h1>
            <div class="title-img show-sm mb-2">
              <h1>Card Text + IMG</h1>
              <div class="two-img-cont-mid">
                <div class="icon">
                  <i class="fas fa-sync fa-2x show-sm"></i>
                </div>
                <img
                  class="back"
                  src={require("../../img/woman-mid-tall2.jpg")}
                  alt=""
                ></img>
                <img
                  class="front"
                  src={require("../../img/woman-mid-tall.jpg")}
                  alt=""
                ></img>
              </div>
            </div>
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
          <div class="right hide-sm">
            <div class="two-img-cont-mid">
              <img
                class="back"
                src={require("../../img/woman-mid-tall2.jpg")}
                alt=""
              ></img>
              <img
                class="front"
                src={require("../../img/woman-mid-tall.jpg")}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BCardIMGx2TextBig;
