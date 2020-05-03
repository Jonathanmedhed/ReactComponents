import React, { Fragment, useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

const InputSwitchComp = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3>Basic</h3>
          <InputSwitch
            checked={checked1}
            onChange={(e) => setChecked1(e.value)}
          />

          <h3>Default Value</h3>
          <InputSwitch
            checked={checked2}
            onChange={(e) => setChecked2(e.value)}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default InputSwitchComp;
