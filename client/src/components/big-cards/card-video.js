import React, { Fragment } from "react";
const BCardVideo = ({ showVideo }) => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-video">
          <div onClick={() => showVideo(true)} class="img-cont-mid">
            <img src={require("../../img/moto.jpg")} alt=""></img>
            <i class="fab fa-youtube fa-2x"></i>
          </div>
          <div class="text-cont">
            <h1>Video Card</h1>
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
export default BCardVideo;
