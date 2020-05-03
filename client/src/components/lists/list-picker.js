import React, { Fragment, useState } from "react";
import { PickList } from "primereact/picklist";

const ListPicker = () => {
  const [source, setSource] = useState([
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
  ]);
  const [target, setTarget] = useState([]);

  let onChange = (event) => {
    setSource(event.source);
    setTarget(event.target);
  };

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
        <div className="content-section implementation">
          <PickList
            source={source}
            target={target}
            itemTemplate={carTemplate}
            sourceHeader="Available"
            targetHeader="Selected"
            responsive={true}
            sourceStyle={{ height: "300px" }}
            targetStyle={{ height: "300px" }}
            onChange={onChange}
          ></PickList>
        </div>
      </div>
    </Fragment>
  );
};
export default ListPicker;
