import React, { Fragment } from "react";
const BCardCollage = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-img-collage">
          <div class="top">
            <div class="img-cont-mid-long bg-danger">
              <img
                class="img-overlay"
                src={require("../../img/eyes-mid-long.jpg")}
                alt=""
              ></img>
              <div class="img-text-bleft">
                <p>pre Title</p>
                <h1>Title</h1>
              </div>
            </div>
          </div>
          <div class="two-cards">
            <div class="img-cont-sm bg-black">
              <img
                class="img-overlay"
                src={require("../../img/woman-sm.jpg")}
                alt=""
              ></img>
              <div class="img-text-bleft">
                <p>pre Title</p>
                <h1>Title</h1>
              </div>
            </div>
            <div class="right">
              <div class="img-cont-sm">
                <img src={require("../../img/woman-sm.jpg")} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BCardCollage;
