import React, { Fragment } from "react";
import Iframe from "react-iframe";
const BCardMap = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-text-map">
          <div class="left">
            <h1 class="sm-h1">Card Text + Map</h1>
            <div class="line-sm"></div>
            <div class="right show-sm">
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7852.402817811811!2d-67.6058154!3d10.2453339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e803c84b62d7f73%3A0xc13a318c167932f4!2sResidencias%20Los%20Mangos%2C%20Calle%20Ricaurte%2C%20Maracay%202103%2C%20Aragua!5e0!3m2!1sen!2sve!4v1585493540521!5m2!1sen!2sve"
                frameborder="0"
                style="border:0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              />
            </div>
            <div class="card">
              <div class="top">
                <p>
                  <i class="fas fa-map-marker-alt"></i> Los Mangos, Av
                  Constitucion, Maracay, Edo Aragua
                </p>
              </div>
              <div class="bottom">Feel free to give us a visit</div>
            </div>
            <div class="card">
              <div class="top">
                <p class="address">
                  <a href="tel:123-456-7890">
                    <i class="fas fa-phone"></i> 555-5555555
                  </a>
                </p>
              </div>
              <div class="bottom">Call us anytime</div>
            </div>
          </div>
          <div class="right hide-sm">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7852.402817811811!2d-67.6058154!3d10.2453339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e803c84b62d7f73%3A0xc13a318c167932f4!2sResidencias%20Los%20Mangos%2C%20Calle%20Ricaurte%2C%20Maracay%202103%2C%20Aragua!5e0!3m2!1sen!2sve!4v1585493540521!5m2!1sen!2sve"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BCardMap;
