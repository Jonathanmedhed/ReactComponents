import React, { Fragment } from "react";
const BCardIMGTextBigRev = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-text-img-rev">
          <div class="left hide-sm">
            <div class="img-cont-big-tall">
              <img src={require("../../img/woman-big-tall.jpg")} alt=""></img>
            </div>
          </div>
          <div class="right">
            <h1 class="hide-sm">Card Text + IMG</h1>
            <div class="title-img show-sm">
              <div class="img-cont-big-tall">
                <img src={require("../../img/woman-big-tall.jpg")} alt=""></img>
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
export default BCardIMGTextBigRev;
