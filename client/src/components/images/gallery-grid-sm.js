import React, { Fragment } from "react";
const GalleryGridsm = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-img-grid-xs">
          <div class="row">
            <div class="column">
              <img src={require("../../img/woman-sm.jpg")}></img>
              <img src={require("../../img/woman-sm.jpg")}></img>
            </div>
            <div class="column">
              <img src={require("../../img/woman-sm.jpg")}></img>
              <img src={require("../../img/woman-sm.jpg")}></img>
            </div>
            <div class="column">
              <img src={require("../../img/woman-sm.jpg")}></img>
              <img src={require("../../img/woman-sm.jpg")}></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default GalleryGridsm;
