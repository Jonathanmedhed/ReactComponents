import React, { Fragment, useState, createRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import pic from "../../img/woman-big-tall.jpg";
import pic2 from "../../img/woman-big-tall2.jpg";
import pic3 from "../../img/woman-mid-tall.jpg";

const CarrouselGallery = (autoPlay, swipeable, stopOnHover) => {
  const photos = [pic, pic2, pic3];
  return (
    <Fragment>
      <div className="relative">
        <Carousel
          autoPlay={autoPlay}
          swipeable={swipeable}
          infiniteLoop={true}
          showThumbs={true}
          showStatus={false}
          stopOnHover={stopOnHover}
          dynamicHeight={true}
          emulateTouch={true}
          centerMode={false}
          width={"20rem"}
        >
          {photos.map((pic) => (
            <div>
              <img src={pic} />
              <div className="carousel-center">
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Fragment>
  );
};
export default CarrouselGallery;
