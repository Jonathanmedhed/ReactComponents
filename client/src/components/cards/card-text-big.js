import React, { Fragment } from "react";
const CardTextBig = () => {
  return (
    <Fragment>
      <section class="cards">
        <div class="card-sm-text-tall">
          <h1>Small Text Tall</h1>
          <div class="line"></div>
          <p class="subtitle">Lorem Ipsum is simply dummy.</p>
          <ul>
            <li>
              <i class="fas fa-arrow-circle-right"></i>
              <p>Lorem ipsum dolor sit amet</p>
            </li>
            <li>
              <i class="fas fa-arrow-circle-right"></i>
              <p>Lorem ipsum dolor sit amet</p>
            </li>
            <li>
              <i class="fas fa-arrow-circle-right"></i>
              <p>Lorem ipsum dolor sit amet</p>
            </li>
          </ul>
          <h1 class="bottom-h1">$ 69</h1>
          <p>
            <button class="btn btn-primary">More</button>
          </p>
        </div>
      </section>
    </Fragment>
  );
};
export default CardTextBig;
