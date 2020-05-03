import React, { Fragment, useState } from "react";
import { Dropdown } from "primereact/dropdown";

const InputDropdownComp = () => {
  const [city, setCity] = useState(null);
  const [car, setCar] = useState(null);
  const [cities, setCities] = useState([
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ]);
  const [cars, setCars] = useState([
    { label: "Audi", value: "Audi" },
    { label: "BMW", value: "BMW" },
    { label: "Fiat", value: "Fiat" },
    { label: "Honda", value: "Honda" },
    { label: "Jaguar", value: "Jaguar" },
    { label: "Mercedes", value: "Mercedes" },
    { label: "Renault", value: "Renault" },
    { label: "VW", value: "VW" },
    { label: "Volvo", value: "Volvo" },
  ]);

  let onCityChange = (e) => {
    setCity(e.value);
  };

  let onCarChange = (e) => {
    setCar(e.value);
  };

  let carTemplate = (option) => {
    if (!option.value) {
      return option.label;
    } else {
      return (
        <div className="p-clearfix">
          <img
            alt={option.label}
            src={require("../../img/" + option.label + ".png")}
            style={{ display: "inline-block", margin: "5px 0 0 5px" }}
            width="24"
          />
          <span style={{ float: "right", margin: ".5em .25em 0 0" }}>
            {option.label}
          </span>
        </div>
      );
    }
  };

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3>Basic</h3>
          <Dropdown
            value={city}
            options={cities}
            ariaLabel="Test"
            onChange={onCityChange}
            placeholder="Select a City"
            optionLabel="name"
            style={{ width: "12em" }}
          />
          <div style={{ marginTop: ".5em" }}>
            {city ? "Selected City: " + city.name : "No city selected"}
          </div>

          <h3>Editable</h3>
          <Dropdown
            value={car}
            options={cars}
            onChange={onCarChange}
            style={{ width: "12em" }}
            editable={true}
            placeholder="Select a Brand"
          />
          <div style={{ marginTop: ".5em" }}>
            {car ? "Selected Car: " + car : "No car selected"}
          </div>

          <h3>Advanced</h3>
          <Dropdown
            value={car}
            options={cars}
            onChange={onCarChange}
            itemTemplate={carTemplate}
            style={{ width: "12em" }}
            filter={true}
            filterPlaceholder="Select Car"
            filterBy="label,value"
            showClear={true}
          />
          <div style={{ marginTop: ".5em" }}>
            {car ? "Selected Car: " + car : "No car selected"}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default InputDropdownComp;
