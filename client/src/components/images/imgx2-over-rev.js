import React, { Fragment } from "react";
const IMGx2overRev = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-text-img-rev">
          <div class="left hide-sm">
            <div class="two-img-cont-mid mb-10">
              <img
                class="back-rev"
                src={require("../../img/woman-mid-tall2.jpg")}
                alt=""
              ></img>
              <img
                class="front-rev"
                src={require("../../img/woman-mid-tall.jpg")}
                alt=""
              ></img>
            </div>
          </div>
          <div class="right">
            <div class="title-img show-sm mb-2">
              <div class="two-img-cont-mid ml-5">
                <div class="icon-rev">
                  <i class="fas fa-sync fa-2x show-sm"></i>
                </div>
                <img
                  class="back-rev"
                  src={require("../../img/woman-mid-tall2.jpg")}
                  alt=""
                ></img>
                <img
                  class="front-rev"
                  src={require("../../img/woman-mid-tall.jpg")}
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default IMGx2overRev;
