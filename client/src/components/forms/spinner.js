import React, { Fragment, useState } from "react";
import { Spinner } from "primereact/spinner";

const InputSpinner = () => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);
  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3>Basic</h3>
          <Spinner
            value={value1}
            size={30}
            onChange={(e) => setValue1(e.value)}
          />

          <h3>Min/Max</h3>
          <Spinner
            value={value2}
            size={30}
            onChange={(e) => setValue2(e.value)}
            min={0}
            max={100}
          />

          <h3>Step</h3>
          <Spinner
            value={value3}
            size={30}
            onChange={(e) => setValue3(e.value)}
            step={0.25}
          />

          <h3>Disabled</h3>
          <Spinner value={value4} size={30} disabled={true} />
        </div>
      </div>
    </Fragment>
  );
};
export default InputSpinner;
