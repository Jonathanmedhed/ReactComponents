import React, { Fragment } from "react";
const BCardTextIMGHor = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-hor">
          <div class="left">
            <img src={require("../../img/service.jpg")} alt=""></img>
          </div>
          <div class="mid">
            <h1>Card Hor</h1>
            <p>
              <i class="fas fa-search"></i> Lorem Ipsum is simply dummy
            </p>
            <p>
              <i class="fas fa-search"></i>text of the printing.
            </p>
          </div>
          <div class="right">
            <p>Lorem Ipsum is simply dummy.</p>
            <button class="btn btn-dark">More</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BCardTextIMGHor;
