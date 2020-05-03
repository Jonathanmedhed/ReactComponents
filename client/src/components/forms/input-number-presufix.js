import React, { Fragment, useState } from "react";
import { InputNumber } from "primereact/inputnumber";

const InputNumberPreSufix = () => {
  const [value13, setValue13] = useState(20);
  const [value14, setValue14] = useState(50);
  const [value15, setValue15] = useState(10);
  const [value16, setValue16] = useState(20);

  return (
    <Fragment>
      <div className="vertical">
        <h3>Prefix and Suffix</h3>
        Mile
        <InputNumber
          value={value13}
          onChange={(e) => setValue13(e.value)}
          suffix=" mi"
        />
        <div className="mt-1"></div>
        Percent
        <InputNumber
          value={value14}
          onChange={(e) => setValue14(e.value)}
          prefix="%"
        />
        <div className="mt-1"></div>
        Expiry
        <InputNumber
          value={value15}
          onChange={(e) => setValue15(e.value)}
          prefix="Expires in "
          suffix=" days"
        />
        <div className="mt-1"></div>
        Temperature
        <InputNumber
          value={value16}
          onChange={(e) => setValue16(e.value)}
          prefix="&uarr; "
          suffix="℃"
          min={0}
          max={40}
        />
      </div>
    </Fragment>
  );
};
export default InputNumberPreSufix;
