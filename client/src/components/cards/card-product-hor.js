import React, { Fragment } from "react";
const CardProdHor = () => {
  return (
    <Fragment>
      <section class="cards">
        <div class="card-main-hor">
          <div class="left">
            <img src={require("../../img/product-sm.jpg")} alt=""></img>
          </div>
          <div class="right">
            <h1>Card Product Hor</h1>
            <div class="line-sm "></div>
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
        </div>
      </section>
    </Fragment>
  );
};
export default CardProdHor;
