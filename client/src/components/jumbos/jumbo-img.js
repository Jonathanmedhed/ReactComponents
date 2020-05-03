import React, { Fragment } from "react";
import JumboFooter from "./_footer";
const JumboIMG = ({ navbar }) => {
  return (
    <Fragment>
      <section class={navbar === "centered" ? "jumbo-big pt-2" : "jumbo-big"}>
        <div
          class={
            navbar === "centered" ? "dark-overlay-big pt-2" : "dark-overlay-big"
          }
        >
          <div class="inner">
            <section class="cards">
              <div class="left">
                <p>Blah, give us your money blah!</p>
                <h1>Company Name</h1>
                <p class="text">
                  Blah, give us your money blah! Blah, give us your Blah! money
                  blah! Blah, give us your money blah! Blah!
                </p>
                <div class="button">
                  <button class="btn btn-primary">READ MORE</button>
                </div>
              </div>
              <div class="right-no-bg hide-sm">
                <div class="img-cont-big-tall">
                  <img
                    src={require("../../img/woman-big-tall2.jpg")}
                    alt=""
                  ></img>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <JumboFooter />
    </Fragment>
  );
};
export default JumboIMG;

