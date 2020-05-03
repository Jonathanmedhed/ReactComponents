import React, { Fragment } from "react";
const GalleryGrid = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-img-grid">
          <div class="row">
            <div class="column">
              <img src={require("../../img/woman-mid-tall.jpg")}></img>
              <img src={require("../../img/woman-big-tall.jpg")}></img>
              <img src={require("../../img/woman-mid-sq.jpg")}></img>
            </div>
            <div class="column">
              <img src={require("../../img/moto.jpg")}></img>
              <img src={require("../../img/profile.jpg")}></img>
              <img src={require("../../img/woman-sm.jpg")}></img>
            </div>
            <div class="column">
              <img src={require("../../img/woman-mid-sq.jpg")}></img>
              <img src={require("../../img/woman-mid-tall2.jpg")}></img>
              <img src={require("../../img/woman-big-tall2.jpg")}></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default GalleryGrid;
