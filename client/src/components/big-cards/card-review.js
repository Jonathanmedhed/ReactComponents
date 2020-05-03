import React, { Fragment } from "react";
const BCardReview = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-review">
          <div class="text-cont">
            <p>Blah, give us your money blah! Blah</p>
            <h1 class="head">Review Card</h1>
            <div class="div line-container">
              <div class="line-md-center"></div>
            </div>
            <p>
              "Blah, i gave them my money blah! Blah Blah, i gave them my money
              blah! Blah Blah, i gave them my money blah! Blah Blah, i gave them
              my money blah! Blah Blah, i gave them my money blah! Blah Blah"
            </p>
          </div>
          <div>
            <div class="card-sm-review">
              <div class="bottom">
                <div class="img-cont-xs">
                  <img src={require("../../img/woman-sm.jpg")} alt=""></img>
                </div>
                <div class="top-right">
                  <h1>Card Review</h1>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BCardReview;
