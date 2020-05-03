import React, { Fragment } from "react";
const CardImgTextXs = () => {
  return (
    <Fragment>
      <section class="cards">
        <div class="card-main">
          <div class="img-cont-xs m-auto">
            <img src={require("../../img/woman-sm.jpg")} alt=""></img>
          </div>
          <h1>Card IMG Text xs</h1>
          <div class="line"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>
            <button class="btn btn-primary">More</button>
          </p>
        </div>
      </section>
    </Fragment>
  );
};
export default CardImgTextXs;
