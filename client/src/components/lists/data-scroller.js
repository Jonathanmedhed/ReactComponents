import React, { Fragment, useState } from "react";
import { DataScroller } from "primereact/datascroller";

const DataScrollerComp = () => {
  const [cars, setCars] = useState([
    {
      brand: "Audi",
      value: "Audi",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "BMW",
      value: "BMW",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Fiat",
      value: "Fiat",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Honda",
      value: "Honda",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Jaguar",
      value: "Jaguar",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Mercedes",
      value: "Mercedes",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Renault",
      value: "Renault",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    { brand: "VW", value: "VW", year: "2012", color: "black", vin: "03234e20" },
    {
      brand: "Volvo",
      value: "Volvo",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Audi",
      value: "Audi",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "BMW",
      value: "BMW",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Fiat",
      value: "Fiat",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Honda",
      value: "Honda",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Jaguar",
      value: "Jaguar",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Mercedes",
      value: "Mercedes",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Renault",
      value: "Renault",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    { brand: "VW", value: "VW", year: "2012", color: "black", vin: "03234e20" },
    {
      brand: "Volvo",
      value: "Volvo",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Audi",
      value: "Audi",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "BMW",
      value: "BMW",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Fiat",
      value: "Fiat",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Honda",
      value: "Honda",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Jaguar",
      value: "Jaguar",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Mercedes",
      value: "Mercedes",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Renault",
      value: "Renault",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    { brand: "VW", value: "VW", year: "2012", color: "black", vin: "03234e20" },
    {
      brand: "Volvo",
      value: "Volvo",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Audi",
      value: "Audi",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "BMW",
      value: "BMW",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Fiat",
      value: "Fiat",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Honda",
      value: "Honda",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Jaguar",
      value: "Jaguar",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Mercedes",
      value: "Mercedes",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Renault",
      value: "Renault",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    { brand: "VW", value: "VW", year: "2012", color: "black", vin: "03234e20" },
    {
      brand: "Volvo",
      value: "Volvo",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
  ]);

  let carTemplate = (car) => {
    if (!car) {
      return;
    }

    return (
      <div className="car-details">
        <img src={require("../../img/" + car.brand + ".png")} alt={car.brand} />
        <div className="p-grid">
          <div className="data">
            Vin: <b>{car.vin}</b>
          </div>
          <div className="data">
            Year: <b>{car.year}</b>
          </div>
          <div className="data">
            Brand: <b>{car.brand}</b>
          </div>
          <div className="data">
            Color: <b>{car.color}</b>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="dataview-demo">
        <div className="content-section implementation">
          <DataScroller
            value={cars}
            itemTemplate={carTemplate}
            rows={10}
            buffer={0.4}
            header="List of Cars"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default DataScrollerComp;
