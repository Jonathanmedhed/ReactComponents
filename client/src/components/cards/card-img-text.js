import React, { Fragment } from "react";
const CardIMGtext = () => {
  return (
    <Fragment>
      <section class="cards">
        <div class="card-main">
          <img src={require("../../img/service.jpg")} alt=""></img>
          <h1>Card IMG Text</h1>
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
export default CardIMGtext;
