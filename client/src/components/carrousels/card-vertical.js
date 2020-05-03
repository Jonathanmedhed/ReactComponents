import React, { Fragment, useState, createRef } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";

const CardCarouselVertical = () => {
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

  const verticalHeader = <h2>Vertical</h2>;

  return (
    <Fragment>
      <div className="carousel-demo">
        <div className="content-section implementation">
          <Carousel
            value={cars}
            itemTemplate={carTemplate}
            orientation="vertical"
            style={{ width: "400px", marginTop: "2em" }}
            numVisible={1}
            numScroll={1}
            responsive={responsiveSettings}
            verticalViewPortHeight="330px"
            header={verticalHeader}
          ></Carousel>
        </div>
      </div>
    </Fragment>
  );
};
export default CardCarouselVertical;
