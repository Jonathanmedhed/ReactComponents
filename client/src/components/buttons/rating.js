import React, { Fragment, useState } from "react";
import { Rating } from "primereact/rating";

const RatingComp = () => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3 className="first">Basic {value1}</h3>
          <Rating value={value1} onChange={(e) => setValue1(e.value)}/>

          <h3>No Cancel {value2}</h3>
          <Rating
            value={value2}
            cancel={false}
            onChange={(e) => setValue2(e.value)}
          />

          <h3>ReadOnly</h3>
          <Rating value={5} readonly={true} stars={10} cancel={false} /> 

          <h3>Disabled</h3>
          <Rating value={8} disabled={true} stars={10} /> 
        </div>
      </div>
    </Fragment>
  );
};
export default RatingComp;
