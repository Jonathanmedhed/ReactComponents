import React, { Fragment, useState } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "bloack" }}
        alt="Loading..."
      />
    </Fragment>
  );
};
export default Spinner;