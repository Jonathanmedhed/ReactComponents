import React, { Fragment } from "react";
const IMGx2over = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-text-img">
          <div class="title-img show-sm mb-2">
            <div class="two-img-cont-mid ml-5">
              <div class="icon">
                <i class="fas fa-sync fa-2x show-sm"></i>
              </div>
              <img
                class="back"
                src={require("../../img/woman-mid-tall2.jpg")}
                alt=""
              ></img>
              <img
                class="front"
                src={require("../../img/woman-mid-tall.jpg")}
                alt=""
              ></img>
            </div>
          </div>
          <div class="right hide-sm">
            <div class="two-img-cont-mid mb-10">
              <img
                className="back"
                src={require("../../img/woman-mid-tall2.jpg")}
                alt=""
              ></img>
              <img
                className="front"
                src={require("../../img/woman-mid-tall.jpg")}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default IMGx2over;
