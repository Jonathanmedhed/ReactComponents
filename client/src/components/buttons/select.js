import React, { Fragment, useState } from "react";
import { SelectButton } from "primereact/selectbutton";

const SelectButtons = () => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(["Apartment", "Studio"]);
  const [value3, setValue3] = useState(null);
  const [options, setOptions] = useState([
    { label: "Apartment", value: "Apartment" },
    { label: "House", value: "House" },
    { label: "Studio", value: "Studio" },
  ]);
  const [cars, setCars] = useState([
    { brand: "Audi", key: "A" },
    { brand: "BMW", key: "B" },
    { brand: "Mercedes", key: "M" },
  ]);

  let carTemplate = (option) => {
    return (
      <div style={{ textAlign: "center", padding: "1em", width: "125px" }}>
        <img
          alt={option.brand}
          src={require("../../img/" + option.brand + ".png")}
          style={{ width: "48px" }}
        />
        <div style={{ marginTop: "1em" }}>{option.brand}</div>
      </div>
    );
  };

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3>Single</h3>
          <SelectButton
            value={value1}
            options={options}
            onChange={(e) => setValue1(e.value)}
          />
          <br />
          <p>
            Selected Value: <span style={{ fontWeight: "bold" }}>{value1}</span>
          </p>

          <h3>Multiple</h3>
          <SelectButton
            value={value2}
            multiple={true}
            options={options}
            onChange={(e) => setValue2(e.value)}
          />
          <br />
          <p>
            Selected Values:{" "}
            <span style={{ fontWeight: "bold" }}>
              {value2 && value2.map((val) => val + " ")}
            </span>
          </p>

          <h3>Custom Content</h3>
          <SelectButton
            value={value3}
            options={cars}
            onChange={(e) => setValue3(e.value)}
            itemTemplate={carTemplate}
            optionLabel="brand"
            optionValue="brand"
          />
          <br />
          <p>
            Selected Value: <span style={{ fontWeight: "bold" }}>{value3}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default SelectButtons;
