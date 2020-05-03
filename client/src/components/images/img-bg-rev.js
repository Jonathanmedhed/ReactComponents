import React, { Fragment } from "react";
const IMGbgRev = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-text-img-rev">
          <div class="left">
            <div class="img-cont-big-bg">
              <img
                class="back-bot-left"
                src={require("../../img/circle.png")}
                alt=""
              ></img>
              <img
                class="back-high"
                src={require("../../img/dots-blue-mid-tall-2bot.png")}
                alt=""
              ></img>
              <img
                class="front"
                src={require("../../img/woman-big-tall.jpg")}
                alt=""
              ></img>
            </div>
          </div>
          <div class="right">
            <div class="img-cont-big-bg">
              <img
                class="back-bot-right"
                src={require("../../img/circle.png")}
                alt=""
              ></img>
              <img
                class="back-rev-high"
                src={require("../../img/dots-blue-mid-tall-2bot.png")}
                alt=""
              ></img>
              <img
                class="front-rev"
                src={require("../../img/woman-big-tall.jpg")}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default IMGbgRev;
