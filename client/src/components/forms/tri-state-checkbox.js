import React, { Fragment, useState } from "react";
import { TriStateCheckbox } from "primereact/tristatecheckbox";

const TriCheckbox = () => {
  const [value, setValue] = useState(null);
  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3 className="first">Value: {value + ""}</h3>
          <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
        </div>
      </div>
    </Fragment>
  );
};
export default TriCheckbox;
