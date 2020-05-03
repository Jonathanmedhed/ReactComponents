import React, { Fragment, useState } from "react";
import { Password } from "primereact/password";

const PasswordComp = () => {

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3 className="first">Password</h3>
          <Password />
        </div>
      </div>
    </Fragment>
  );
};
export default PasswordComp;
