import React, { Fragment } from "react";
const BCardCollageText = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-img-collage">
          <div class="two-cards">
            <div class="img-cont-sm">
              <div class="text-button">
                <div class="content">
                  <h1>Title Title Title Title Title</h1>
                  <div class="btn btn-primary">ORDER NOW</div>
                </div>
              </div>
            </div>
            <div class="right">
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
            </div>
          </div>
          <div class="bottom">
            <div class="img-cont-mid-long bg-primary">
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
        </div>
      </div>
    </Fragment>
  );
};
export default BCardCollageText;
