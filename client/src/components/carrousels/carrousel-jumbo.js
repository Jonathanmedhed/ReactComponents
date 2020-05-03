import React, { Fragment, useState, createRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
//For Desktop
import pic from "../../img/jumbo.png";
import pic2 from "../../img/jumbo2.png";
import pic3 from "../../img/jumbo3.png";
//For Mobile dont need editing
import picMob from "../../img/showcase.jpg";
import picMob2 from "../../img/showcase2.jpg";
import picMob3 from "../../img/showcase3.jpg";

const CarrouselJumbo = (autoPlay, swipeable, stopOnHover) => {
  const photos = [pic, pic2, pic3];
  const photosMobile = [picMob, picMob2, picMob3];
  return (
    <Fragment>
      <div className="relative hide-sm">
        <Carousel
          autoPlay={autoPlay}
          swipeable={swipeable}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          stopOnHover={stopOnHover}
          dynamicHeight={true}
          emulateTouch={true}
          centerMode={false}
          width={"100%"}
        >
          {photos.map((pic) => (
            <div className="carousel-jumbo">
              <div>
                <img className="opac" src={pic} />
                <div className="carousel-center">
                  <h1>Title</h1>
                  <p>Sub title</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="relative show-sm">
        <Carousel
          autoPlay={autoPlay}
          swipeable={swipeable}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          stopOnHover={stopOnHover}
          dynamicHeight={true}
          emulateTouch={true}
          centerMode={false}
          width={"100%"}
        >
          {photosMobile.map((pic) => (
            <div className="carousel-jumbo">
              <div>
                <img className="opac" src={pic} />
                <div className="carousel-center">
                  <h1>Title</h1>
                  <p>Sub title</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Fragment>
  );
};
export default CarrouselJumbo;
