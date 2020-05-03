import React, { Fragment } from "react";
const CardIMGhor = () => {
  return (
    <Fragment>
      <section class="cards">
        <div class="card-main-hor-sm">
          <div class="left">
            <div class="img-cont-xs-sq">
              <img src={require("../../img/woman-sm.jpg")} alt=""></img>
            </div>
          </div>
          <div class="right">
            <h1>Card IMG Text Hor</h1>
            <div class="line-sm"></div>
            <p>Lorem Ipsum is simply dummy text</p>
            <p>
              <button class="btn btn-primary">More</button>
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default CardIMGhor;
