import React, { Fragment } from "react";
const BCardForm = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-form">
          <h1>Form Card</h1>
          <div class="line-sm"></div>
          <div class="form-group">
            <input type="text" placeholder="Username"></input>
          </div>
          <div class="form-group">
            <input type="text" placeholder="Email"></input>
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Submit</button>
            <a href="">Forgot email/password?</a>
            <div class="text-btn">
              <p>Don't have an account?</p>
              <button class="btn btn-dark">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BCardForm;
