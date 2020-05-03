import React, { Fragment } from "react";
const CardIMG = () => {
  return (
    <Fragment>
      <section class="cards">
        <div class="card-img">
          <img src={require("../../img/img-tall.jpg")} alt=""></img>
          <h1>Card Img</h1>
        </div>
      </section>
    </Fragment>
  );
};
export default CardIMG;
