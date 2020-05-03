import React, { Fragment, useState } from "react";
import { RadioButton } from "primereact/radiobutton";

const RadioButtonComp = () => {
  const [city, setCity] = useState(null);

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <div
            className="p-grid"
            style={{ width: "250px", marginBottom: "10px" }}
          >
            <div className="p-col-12">
              <RadioButton
                inputId="rb1"
                name="city"
                value="New York"
                onChange={(e) => setCity(e.value)}
                checked={city === "New York"}
              />
              <label htmlFor="rb1" className="p-radiobutton-label">
                New York
              </label>
            </div>
            <div className="p-col-12">
              <RadioButton
                inputId="rb2"
                name="city"
                value="San Francisco"
                onChange={(e) => setCity(e.value)}
                checked={city === "San Francisco"}
              />
              <label htmlFor="rb2" className="p-radiobutton-label">
                San Francisco
              </label>
            </div>
            <div className="p-col-12">
              <RadioButton
                inputId="rb3"
                name="city"
                value="Los Angeles"
                onChange={(e) => setCity(e.value)}
                checked={city === "Los Angeles"}
              />
              <label htmlFor="rb3" className="p-radiobutton-label">
                Los Angeles
              </label>
            </div>
          </div>
          Selected City : {city}
        </div>
      </div>
    </Fragment>
  );
};
export default RadioButtonComp;
