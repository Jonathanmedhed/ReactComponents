import React, { Fragment, useState } from "react";
import { InputNumber } from "primereact/inputnumber";

const InputNumberNumerals = () => {
  const [value1, setValue1] = useState(42723);
  const [value2, setValue2] = useState(58151);
  const [value3, setValue3] = useState(2351.35);
  const [value4, setValue4] = useState(50);
  const [value5, setValue5] = useState(151351);
  const [value6, setValue6] = useState(115744);
  const [value7, setValue7] = useState(635524);
  const [value8, setValue8] = useState(732762);

  return (
    <Fragment>
      <div className="vertical">
        <h3>Numerals</h3>
        Integer Only
        <InputNumber value={value1} onChange={(e) => setValue1(e.value)} />
          <div className="mt-1"></div>
        Without Grouping
        <InputNumber
          value={value2}
          onChange={(e) => setValue2(e.value)}
          mode="decimal"
          useGrouping={false}
        />
        <div className="mt-1"></div>
        Min-Max Fraction Digits
        <InputNumber
          value={value3}
          onChange={(e) => setValue3(e.value)}
          mode="decimal"
          minFractionDigits={2}
          maxFractionDigits={5}
        />
        <div className="mt-1"></div>
        Min-Max Boundaries
        <InputNumber
          value={value4}
          onChange={(e) => setValue4(e.value)}
          mode="decimal"
          min={0}
          max={100}
        />
        <div className="mt-1"></div>
        User Locale
        <InputNumber
          value={value5}
          onChange={(e) => setValue5(e.value)}
          mode="decimal"
          minFractionDigits={2}
        />
        <div className="mt-1"></div>
        United State Locale
        <InputNumber
          value={value6}
          onChange={(e) => setValue6(e.value)}
          mode="decimal"
          locale="en-US"
          minFractionDigits={2}
        />
        <div className="mt-1"></div>
        German Locale
        <InputNumber
          value={value7}
          onChange={(e) => setValue7(e.value)}
          mode="decimal"
          locale="de-DE"
          minFractionDigits={2}
        />
        <div className="mt-1"></div>
        Indian Locale
        <InputNumber
          value={value8}
          onChange={(e) => setValue8(e.value)}
          mode="decimal"
          locale="en-IN"
          minFractionDigits={2}
        />
      </div>
    </Fragment>
  );
};
export default InputNumberNumerals;
