import React, { Fragment } from "react";
const CardIMGsm = () => {
  return (
    <Fragment>
      <section class="cards">
        <div class="card-img-sm">
          <img src={require("../../img/img-sm.jpg")} alt=""></img>
          <h1>Card Img Small</h1>
        </div>
      </section>
    </Fragment>
  );
};
export default CardIMGsm;
