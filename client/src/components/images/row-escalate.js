import React, { Fragment } from "react";
const RowEscalate = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-img-grid-sm">
          <div class="row">
            <div class="column">
              <img src={require("../../img/woman-sm.jpg")}></img>
            </div>
            <div class="column">
              <img src={require("../../img/profile.jpg")}></img>
            </div>
            <div class="column">
              <img src={require("../../img/woman-big-tall.jpg")}></img>
            </div>
            <div class="column">
              <img src={require("../../img/profile.jpg")}></img>
            </div>
            <div class="column">
              <img src={require("../../img/woman-sm.jpg")}></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default RowEscalate;
