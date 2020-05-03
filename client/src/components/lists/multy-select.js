import React, { Fragment, useState } from "react";
import { MultiSelect } from "primereact/multiselect";

const MultiSelectComp = () => {
  const [cars1, setCars1] = useState([]);
  const [cars2, setCars2] = useState([]);

  const cars = [
    { label: "Audi", value: "Audi" },
    { label: "BMW", value: "BMW" },
    { label: "Fiat", value: "Fiat" },
    { label: "Honda", value: "Honda" },
    { label: "Jaguar", value: "Jaguar" },
    { label: "Mercedes", value: "Mercedes" },
    { label: "Renault", value: "Renault" },
    { label: "VW", value: "VW" },
    { label: "Volvo", value: "Volvo" },
  ];

  let carTemplate = (option) => {
    return (
      <div className="p-clearfix">
        <img
          alt={option.label}
          src={require("../../img/" + option.label + ".png")}
          style={{ width: "24px", verticalAlign: "middle" }}
        />
        <span style={{ fontSize: "1em", float: "right", marginTop: "4px" }}>
          {option.label}
        </span>
      </div>
    );
  };

  let selectedCarTemplate = (value) => {
    if (value) {
      return (
        <div className="my-multiselected-item-token">
          <img
            alt={value}
            src={require("../../img/" + value + ".png")}
            style={{
              width: "20px",
              verticalAlign: "middle",
              marginRight: ".5em",
            }}
          />
          <span>{value}</span>
        </div>
      );
    } else {
      return <span className="my-multiselected-empty-token">Choose</span>;
    }
  };

  return (
    <Fragment>
      <div >
        <h3>Basic</h3>
        <MultiSelect
          value={cars1}
          options={cars}
          onChange={(e) => setCars1(e.value)}
          style={{ minWidth: "12em" }}
          filter={true}
          filterPlaceholder="Search"
          placeholder="Choose"
        />

        <h3>Templating</h3>
        <MultiSelect
          value={cars2}
          options={cars}
          onChange={(e) => setCars2(e.value)}
          style={{ minWidth: "12em" }}
          filter={true}
          filterPlaceholder="Search"
          itemTemplate={carTemplate}
          selectedItemTemplate={selectedCarTemplate}
        />
      </div>
    </Fragment>
  );
};
export default MultiSelectComp;
