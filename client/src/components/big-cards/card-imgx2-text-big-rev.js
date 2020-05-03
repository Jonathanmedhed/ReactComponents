import React, { Fragment } from "react";
const BCardIMGx2TextBigRev = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-text-img-rev mb-3">
          <div class="left hide-sm">
            <div class="two-img-cont-mid">
              <img
                class="back-rev"
                src={require("../../img/woman-mid-tall2.jpg")}
                alt=""
              ></img>
              <img
                class="front-rev"
                src={require("../../img/woman-mid-tall.jpg")}
                alt=""
              ></img>
            </div>
          </div>
          <div class="right">
            <h1 class="hide-sm">Card Text + IMG</h1>
            <div class="title-img show-sm mb-2">
              <div class="two-img-cont-mid">
                <div class="icon-rev">
                  <i class="fas fa-sync fa-2x show-sm"></i>
                </div>
                <img
                  class="back-rev"
                  src={require("../../img/woman-mid-tall2.jpg")}
                  alt=""
                ></img>
                <img
                  class="front-rev"
                  src={require("../../img/woman-mid-tall.jpg")}
                  alt=""
                ></img>
              </div>
              <h1>Card Text + IMG</h1>
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
        </div>
      </div>
    </Fragment>
  );
};
export default BCardIMGx2TextBigRev;
