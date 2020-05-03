import React, { Fragment } from "react";
const BCardTextIMG = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-main">
          <img src={require("../../img/service.jpg")} alt=""></img>
          <h1>Card Big Main</h1>
          <div class="hide-sm">
            <div class="line-sm"></div>
          </div>
          <div class="show-sm">
            <div class="line-sm-center"></div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>
            <button class="btn btn-primary">More</button>
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default BCardTextIMG;
