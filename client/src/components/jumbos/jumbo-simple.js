import React, { Fragment } from "react";
import JumboFooter from "./_footer";
const JumboSimple = ({ navbar }) => {
  return (
    <Fragment>
      <section class={navbar === "centered" ? "jumbo pt-2" : "jumbo"}>
        <div
          class={navbar === "centered" ? "dark-overlay pt-2" : "dark-overlay"}
        >
          <div class="inner">
            <img src={require("../../img/logo.png")} alt=""></img>
            <h1>Company Name</h1>
            <p>Blah, give us your money blah!</p>
          </div>
        </div>
      </section>
      <JumboFooter />
    </Fragment>
  );
};
export default JumboSimple;
