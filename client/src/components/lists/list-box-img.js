import React, { Fragment, useState } from "react";
import { ListBox } from "primereact/listbox";

const ListBoxIMG = () => {
  const [car, setCar] = useState("BMW");

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
          style={{ display: "inline-block", margin: "5px 0 0 5px", width: 48 }}
        />
        <span
          style={{ fontSize: "1em", float: "right", margin: "1em .5em 0 0" }}
        >
          {option.label}
        </span>
      </div>
    );
  };

  return (
    <Fragment>
      <div>
        <ListBox
          value={car}
          filter={true}
          filterPlaceholder="Search"
          options={cars}
          onChange={(e) => setCar(e.value)}
          itemTemplate={carTemplate}
          style={{ width: "15em" }}
          listStyle={{ maxHeight: "250px" }}
        />
      </div>
    </Fragment>
  );
};
export default ListBoxIMG;
