import React, { Fragment, useState } from "react";
import { Chips } from "primereact/chips";

const InputChips = () => {
  const [values, setValues] = useState([]);

  let customChip = (item) => {
    return (
      <div>
        <span>{item} - (active) </span>
        <i className="pi pi-user-plus" style={{ fontSize: "14px" }}></i>
      </div>
    );
  };

  return (
    <Fragment>
      <div>
        <div>
          <div className="content-section introduction">
            <div className="feature-intro">
              <h1>Chips</h1>
              <p>Chips is used to enter multiple values on an input field.</p>
            </div>
          </div>

          <div className="content-section implementation p-fluid">
            <h3>Basic</h3>
            <Chips value={values} onChange={(e) => setValues(e.value)}></Chips>

            <h3>Template</h3>
            <Chips
              value={values}
              onChange={(e) => setValues(e.value)}
              max={5}
              itemTemplate={customChip}
            ></Chips>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default InputChips;
