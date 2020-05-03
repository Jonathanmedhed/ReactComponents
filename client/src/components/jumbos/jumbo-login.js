import React, { Fragment } from "react";
import JumboFooter from "./_footer";
const JumboLogin = ({ navbar }) => {
  return (
    <Fragment>
      <section class="jumbo-big">
        <div class="dark-overlay-big">
          <div class="inner">
            <img src={require("../../img/logo.png")} alt=""></img>
            <h1>Company Name</h1>
            <p>Blah, give us your money blah!</p>
            <div class="buttons">
              <button class="btn btn-primary">Sign In</button>
              <button class="btn btn-dark">Sign Up</button>
            </div>
          </div>
        </div>
      </section>
      <JumboFooter />
    </Fragment>
  );
};
export default JumboLogin;
