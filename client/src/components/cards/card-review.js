import React, { Fragment } from "react";
const CardReview = () => {
  return (
    <Fragment>
      <section class="cards">
        <div class="card-sm-review">
          <div class="top">
            <div class="img-cont-xs">
              <img src={require("../../img/woman-sm.jpg")} alt=""></img>
            </div>
            <div class="top-right">
              <h1>Card Review Card Review</h1>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
          <div class="line-container-center">
            <div class="line-sm-center"></div>
          </div>
          <p>
            "Blah, i gave them my money blah! Blah Blah, i gave them my money
            blah! Blah Blah, i gave them my money blah!"
          </p>
        </div>
      </section>
    </Fragment>
  );
};
export default CardReview;
