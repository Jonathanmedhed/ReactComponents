import React, { Fragment, useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

const InputTextAreaComp = () => {
  const [value, setValue] = useState("Enter Text Here!");

  let handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3>Default</h3>
          <InputTextarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={5}
            cols={30}
          ></InputTextarea>

          <h3>AutoResize</h3>
          <InputTextarea rows={5} cols={30} autoResize={true}></InputTextarea>
        </div>
      </div>
    </Fragment>
  );
};
export default InputTextAreaComp;
