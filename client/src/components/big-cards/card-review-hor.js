import React, { Fragment } from "react";
const BCardReviewHor = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-review-img">
          <div class="left">
            <div class="text-cont">
              <p class="title hide-sm">Testimonial</p>
              <h1 class="head hide-sm">Review Card</h1>
              <div class="stars hide-sm">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="title-img show-sm">
                <div class="text">
                  <p class="title">Testimonial</p>
                  <h1 class="head">Review Card</h1>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <div class="img-cont-mid">
                  <img src={require("../../img/woman-mid-sq.jpg")} alt=""></img>
                </div>
              </div>
              <div class="div line-container-balanced">
                <div class="line-sm"></div>
              </div>
              <p>
                "Blah, i gave them my money blah! Blah Blah, i gave them my
                money blah! Blah Blah, i gave them my money blah! Blah Blah, i
                gave them my money blah! Blah Blah, i gave them my money blah!
                Blah Blah"
              </p>
            </div>
          </div>
          <div class="right hide-sm">
            <div class="img-cont-mid">
              <img src={require("../../img/woman-mid-sq.jpg")} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BCardReviewHor;
