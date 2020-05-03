import React, { Fragment, useState } from "react";
import { InputText } from "primereact/inputtext";

const InputTextComp = () => {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);

  let toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <div className="content-section implementation">
            <h3 className="first">Basic</h3>
            <InputText
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <span style={{ marginLeft: ".5em" }}>{value}</span>

            <h3>Floating Label</h3>
            <span className="p-float-label">
              <InputText
                id="float-input"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="float-input">Username</label>
            </span>

            <h3>KeyFilter - Positive Number Only</h3>
            <InputText
              type="text"
              keyfilter="pint"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default InputTextComp;
