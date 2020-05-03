import React, { Fragment, useState } from "react";
import { InputNumber } from "primereact/inputnumber";

const InputNumberCurrency = () => {
  const [value9, setValue9] = useState(1500);
  const [value10, setValue10] = useState(2500);
  const [value11, setValue11] = useState(4250);
  const [value12, setValue12] = useState(5002);

  return (
    <Fragment>
      <div className="vertical">
          <h3>Currency</h3>
          United States
          <InputNumber
            value={value9}
            onChange={(e) => setValue9(e.value)}
            mode="currency"
            currency="USD"
            locale="en-US"
          />
          <div className="mt-1"></div>
          Germany
          <InputNumber
            value={value10}
            onChange={(e) => setValue10(e.value)}
            mode="currency"
            currency="EUR"
            locale="de-DE"
          />
          <div className="mt-1"></div>
          India
          <InputNumber
            value={value11}
            onChange={(e) => setValue11(e.value)}
            mode="currency"
            currency="INR"
            currencyDisplay="code"
            locale="en-IN"
          />
          <div className="mt-1"></div>
          Japan
          <InputNumber
            value={value12}
            onChange={(e) => setValue12(e.value)}
            mode="currency"
            currency="JPY"
            locale="jp-JP"
          />
      </div>
    </Fragment>
  );
};
export default InputNumberCurrency;
