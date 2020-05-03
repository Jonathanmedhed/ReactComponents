import React, { Fragment } from "react";
const BCardJumboRev = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-jumbo">
          <div class="text-cont">
            <p class="title">Blah, give us your money blah! Blah</p>
            <h1 class="head">Jumbo Card</h1>
            <div class="div line-container">
              <div class="line-md-center"></div>
            </div>
          </div>
          <div class="img-cont-big">
            <img src={require("../../img/office.jpg")} alt=""></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BCardJumboRev;
