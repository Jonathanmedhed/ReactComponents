import React, { Fragment } from "react";
const CardProduct = () => {
  return (
    <Fragment>
      <section class="cards">
        <div class="card-main">
          <img src={require("../../img/product-sm.jpg")} alt=""></img>
          <h1>Card Product</h1>
          <div class="line"></div>
          <div class="reviews">
            15 Reviews
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          <p class="price">$ 30</p>
        </div>
      </section>
    </Fragment>
  );
};
export default CardProduct;
