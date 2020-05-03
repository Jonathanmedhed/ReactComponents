import React, { Fragment, useState, createRef } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";

const CardCarousel = () => {
  const [cars, setCars] = useState([
    { brand: "Audi", value: "Audi", year: "2012", color: "black" },
    { brand: "BMW", value: "BMW", year: "2012", color: "black" },
    { brand: "Fiat", value: "Fiat", year: "2012", color: "black" },
    { brand: "Honda", value: "Honda", year: "2012", color: "black" },
    { brand: "Jaguar", value: "Jaguar", year: "2012", color: "black" },
    { brand: "Mercedes", value: "Mercedes", year: "2012", color: "black" },
    { brand: "Renault", value: "Renault", year: "2012", color: "black" },
    { brand: "VW", value: "VW", year: "2012", color: "black" },
    { brand: "Volvo", value: "Volvo", year: "2012", color: "black" },
  ]);

  const responsiveSettings = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  let carTemplate = (car) => {
    return (
      <div className="car-details">
        <div className="p-grid p-nogutter">
          <div className="p-col-12">
            <img
              src={require("../../img/" + car.brand + ".png")}
              alt={car.brand}
            />
          </div>
          <div className="p-col-12 car-data">
            <div className="car-title">{car.brand}</div>
            <div className="car-subtitle">
              {car.year} | {car.color}
            </div>

            <div className="car-buttons">
              <Button icon="pi pi-search" className="p-button-secondary" />
              <Button icon="pi pi-star" className="p-button-secondary" />
              <Button icon="pi pi-cog" className="p-button-secondary" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  let carTemplateMobile = (car) => {
    return (
      <div className="car-details">
        <div className="car-img">
          <img
            src={require("../../img/" + car.brand + ".png")}
            alt={car.brand}
          />
        </div>
        <div className="car-data">
          <div className="car-title">{car.brand}</div>
          <div className="car-subtitle">
            {car.year} | {car.color}
          </div>

          <div className="car-buttons">
            <Button icon="pi pi-search" className="p-button-secondary" />
            <Button icon="pi pi-star" className="p-button-secondary" />
            <Button icon="pi pi-cog" className="p-button-secondary" />
          </div>
        </div>
      </div>
    );
  };

  const basicHeader = <h2>Basic</h2>;
  const customHeader = (
    <h2>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h2>
  );

  return (
    <Fragment>
      <div className="hide-sm">
        <div>
          <Carousel
            circular={true}
            autoplayInterval={1000} /**Not working */
            value={cars}
            itemTemplate={carTemplate}
            numVisible={4}
            numScroll={3}
            header={basicHeader}
            responsive={responsiveSettings}
          ></Carousel>

          <Carousel
            value={cars}
            itemTemplate={carTemplate}
            numVisible={3}
            numScroll={1}
            className="custom-carousel"
            responsive={responsiveSettings}
            header={customHeader}
            circular={true}
            autoplayInterval={1000} /**Not working */
          ></Carousel>
        </div>
      </div>
      <div className="show-sm">
        <Carousel
          circular={true}
          autoplayInterval={1000} /**Not working */
          value={cars}
          itemTemplate={carTemplateMobile}
          numVisible={1}
          numScroll={1}
          header={basicHeader}
          responsive={responsiveSettings}
        ></Carousel>
      </div>
    </Fragment>
  );
};
export default CardCarousel;
