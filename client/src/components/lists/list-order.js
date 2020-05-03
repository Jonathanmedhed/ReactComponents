import React, { Fragment, useState } from "react";
import { OrderList } from "primereact/orderlist";

const ListOrdering = () => {
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
  ]);

  let carTemplate = (car) => {
    return (
      <div className="p-clearfix">
        <img
          src={require("../../img/" + car.brand + ".png")}
          alt={car.brand}
          style={{
            display: "inline-block",
            margin: "2px 0 2px 2px",
            width: 48,
          }}
        />
        <div
          style={{ fontSize: "14px", float: "right", margin: "15px 5px 0 0" }}
        >
          {car.brand} - {car.year} - {car.color}
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <div>
        <OrderList
          value={cars}
          dragdrop={true}
          itemTemplate={carTemplate}
          responsive={true}
          header="List of Cars"
          listStyle={{ height: "20em" }}
          onChange={(e) => setCars(e.value)}
        />
      </div>
    </Fragment>
  );
};
export default ListOrdering;
