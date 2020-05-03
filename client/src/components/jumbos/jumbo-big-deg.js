import React, { Fragment } from "react";
import JumboFooter from "./_footer";
const JumboBigDeg = ({ navbar }) => {
  return (
    <Fragment>
      <section class={navbar === "centered" ? "jumbo-deg pt-3" : "jumbo-deg"}>
        <div class={navbar === "centered" ? "dark-overlay-deg pt-3" : "dark-overlay-deg"}>
          <div class="inner">
            <section class="cards">
              <div class="card-md-text-img">
                <div class="left-big">
                  <p>Blah, give us your money blah!</p>
                  <h1>Company Name</h1>
                  <p class="text">
                    Blah, give us your money blah! Blah, give us your Blah!
                    money blah! Blah, give us your money blah! Blah!
                  </p>
                  <div className="buttons">
                    <button class="btn btn-primary">READ MORE</button>
                    <button class="btn btn-nobg">READ MORE</button>
                  </div>
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
export default JumboBigDeg;
