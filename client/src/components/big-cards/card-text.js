import React, { Fragment } from "react";
const BCardText = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-text-p2">
          <h1>Card Text + Small Lorem ipsum dolor sit amet</h1>
          <div class="line-sm"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <div class="two-cards">
            <div class="card-sm-sq">
              <div class="icon-container">
                <div class="icon">
                  <i class="fas fa-search fa-2x"></i>
                </div>
              </div>
              <h1>Card Small Square</h1>
              <div class="line-sm"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div class="card-sm-sq">
              <div class="icon-container">
                <div class="icon">
                  <i class="fas fa-search fa-2x"></i>
                </div>
              </div>
              <h1>Card Small Square</h1>
              <div class="line-sm"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BCardText;
