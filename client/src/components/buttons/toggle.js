import React, { Fragment, useState } from "react";
import { ToggleButton } from "primereact/togglebutton";

const ToggleBtnComp = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3>Basic</h3>
          <ToggleButton
            style={{ width: "150px" }}
            checked={checked1}
            onChange={(e) => setChecked1(e.value)}
          />
          <p>Selected Value: {checked1 ? "true" : "false"}</p>

          <h3>Custom</h3>
          <ToggleButton
            style={{ width: "150px" }}
            onLabel="I confirm"
            offLabel="I reject"
            onIcon="pi pi-check"
            offIcon="pi pi-times"
            checked={checked2}
            onChange={(e) => setChecked2(e.value)}
          />
          <p>Selected Value: {checked2 ? "true" : "false"}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default ToggleBtnComp;
