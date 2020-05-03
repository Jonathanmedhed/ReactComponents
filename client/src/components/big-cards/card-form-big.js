import React, { Fragment } from "react";
const BCardFormBig = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-form-big">
          <h1>Form Card</h1>
          <form action="">
            <div class="line-sm"></div>
            <div class="form-group">
              <input type="text" placeholder="Name"></input>
            </div>
            <div class="form-group">
              <input type="email" placeholder="Email"></input>
            </div>
            <div class="form-group">
              <div class="check">
                <label class="check-container">
                  Check Box
                  <input type="checkbox"></input>
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div class="form-group">
              <input type="date"></input>
            </div>
            <div class="form-group">
              <button class="btn btn-primary">
                <label for="file" class="file-label">
                  <i class="fas fa-upload"></i>
                  Choose a file
                </label>
              </button>
              <input type="file" name="file" id="file" class="inputfile" />
            </div>
            <div class="form-group">
              <input type="number" placeholder="Number"></input>
            </div>
            <div class="form-group">
              <input type="password" placeholder="Password"></input>
            </div>
            <div class="form-group">
              <div class="radio">
                <label class="radio-container">
                  Radio
                  <input type="radio"></input>
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div class="form-group">
              <input type="reset" name="reset" id="reset" class="btn-danger" />
            </div>
            <div class="form-group">
              <input type="search" placeholder="search"></input>
            </div>
            <div class="form-group">
              <input type="tel" placeholder="Phone"></input>
            </div>
            <div class="form-group">
              <input type="url" placeholder="URL"></input>
            </div>
            <div class="form-group">
              <button class="btn btn-primary">Submit</button>
              <a className="bold">Forgot email/password?</a>
              <div class="text-btn">
                <p className="bold">Don't have an account?</p>
                <button class="btn btn-dark">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default BCardFormBig;
