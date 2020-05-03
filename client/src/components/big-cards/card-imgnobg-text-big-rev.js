import React, { Fragment } from "react";
const BCardIMGnoBgTextBigRev = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-text-bg-incl">
          <div class="left">
            <h1 class="hide-sm">Card Text + IMGnobg</h1>
            <div class="title-img show-sm">
              <h1>Card Text + IMGnobg</h1>
              <div class="img-cont-big-tall">
                <img
                  src={require("../../img/woman-nobg-half.gif")}
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
            <div class="img-cont-big-tall">
              <img src={require("../../img/woman-nobg-half.gif")} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BCardIMGnoBgTextBigRev;
