import React, { Fragment, useState, createRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import pic from "../../img/woman-sm.jpg";
import pic2 from "../../img/woman-sm2.png";
import pic3 from "../../img/woman-sm3.png";
import pic4 from "../../img/woman-sm4.png";
import pic5 from "../../img/woman-sm5.png";

const CarrouselSmLong = (autoPlay, swipeable, stopOnHover) => {
  const photos = [pic, pic2, pic3, pic4];
  const photos1 = [pic5, pic, pic2, pic3];
  const photos2 = [pic4, pic5, pic, pic2];
  const photosArray = [photos, photos1, photos2];
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
          width={"60rem"}
        >
          {photosArray.map((array) => (
            <div className="img-row">
              {array.map((pic) => (
                <div class="card-img-sm">
                  <img src={pic} />
                </div>
              ))}
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
          width={"15rem"}
        >
          {photosArray.map((array) => (
            <div class="card-img-sm-mob">
              <img src={array[0]} />
            </div>
          ))}
        </Carousel>
      </div>
    </Fragment>
  );
};
export default CarrouselSmLong;
