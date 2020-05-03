import React, { Fragment } from "react";
const BCardJumbo = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-jumbo">
          <div class="img-cont-big">
            <img src={require("../../img/office.jpg")} alt=""></img>
          </div>
          <div class="text-cont">
            <h1>Jumbo Card</h1>
            <div class="div line-container">
              <div class="line-md-center"></div>
            </div>
            <p>
              Blah, give us your money blah! Blah, give us your money blah!
              Blah, give us your money blah! Blah, give us your money blah!
              Blah, give us your money blah! Blah, give us your money blah!
              Blah, give us your money blah!
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BCardJumbo;
