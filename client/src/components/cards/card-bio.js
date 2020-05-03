import React, { Fragment } from "react";
const CardBio = () => {
  return (
    <Fragment>
      <section class="cards">
        <div class="card-bio">
          <img src={require("../../img/profile.jpg")} alt=""></img>
          <h1>Card Bio</h1>
          <div class="line"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div class="social">
            <a href="https://www.linkedin.com/">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.facebook.com">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="tel:+353834562685">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default CardBio;
