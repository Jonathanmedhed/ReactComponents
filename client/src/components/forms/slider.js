import React, { Fragment, useState } from "react";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

const SliderComp = () => {
  const [val1, setVal1] = useState(null);
  const [val2, setVal2] = useState(null);
  const [val3, setVal3] = useState(null);
  const [val4, setVal4] = useState(null);
  const [rangeValues, setRangeValues] = useState([20, 80]);

  let onChangeSlider1 = (e) => {
    setVal1(e.value);
  };

  let onChangeSlider2 = (e) => {
    var newValue;
    if (e.target && e.target.nodeName === "INPUT") {
      newValue = e.target.value;
    } else {
      newValue = e.value;
    }

    setVal2(newValue);
  };

  let onChangeSlider3 = (e) => {
    setVal3(e.value);
  };

  let onChangeSlider4 = (e) => {
    setVal4(e.value);
  };

  let onChangeRangeSlider = (e) => {
    setRangeValues(e.value);
  };
  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3>Basic: {val1}</h3>
          <Slider
            value={val1}
            onChange={onChangeSlider1}
            style={{ width: "14em" }}
          />

          <h3>Input: {val2}</h3>
          <InputText
            value={val2}
            style={{ width: "14em" }}
            type="number"
            onChange={onChangeSlider2}
          />
          <Slider
            value={val2}
            onChange={onChangeSlider2}
            style={{ width: "14em" }}
          />

          <h3>Step: {val3}</h3>
          <Slider
            value={val3}
            onChange={onChangeSlider3}
            step={20}
            style={{ width: "14em" }}
          />

          <h3>
            Range: {rangeValues[0]},{rangeValues[1]}
          </h3>
          <Slider
            value={rangeValues}
            onChange={onChangeRangeSlider}
            range={true}
            style={{ width: "14em" }}
          />

          <h3>Vertical: {val4}</h3>
          <Slider
            value={val4}
            onChange={onChangeSlider4}
            orientation="vertical"
            style={{ height: "14em" }}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default SliderComp;
