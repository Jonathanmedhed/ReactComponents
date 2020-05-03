import React, { Fragment, useState, useEffect } from "react";
import { ProgressSpinner } from "primereact/progressspinner";

const PrimeSpinner = () => {
  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3>Basic</h3>
          <ProgressSpinner />

          <h3>Custom</h3>
          <ProgressSpinner
            style={{ width: "50px", height: "50px" }}
            strokeWidth="8"
            fill="#EEEEEE"
            animationDuration=".5s"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default PrimeSpinner;
