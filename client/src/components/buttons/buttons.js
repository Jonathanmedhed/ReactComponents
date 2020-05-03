import React, { Fragment, useState } from "react";
import { Button } from "primereact/button";

const ButtonsComp = () => {
  return (
    <Fragment>
      <div>
        <div className="prime-buttons">
          <h3>Basic</h3>
          <div className="prime-buttons-btns">
            <Button label="Click" />
            <Button label="Click" icon="pi pi-check" />
            <Button label="Click" icon="pi pi-check" iconPos="right" />
            <Button icon="pi pi-check" />
            <Button label="Click" disabled="disabled" />
          </div>
          <h3>Severities</h3>
          <div className="prime-buttons-btns">
            <Button label="Primary" />
            <Button label="Secondary" className="p-button-secondary" />
            <Button label="Success" className="p-button-success" />
            <Button label="Info" className="p-button-info" />
            <Button label="Warning" className="p-button-warning" />
            <Button label="Danger" className="p-button-danger" />
          </div>
          <h3>Rounded Buttons</h3>
          <div className="prime-buttons-btns">
            <Button label="Primary" className="p-button-rounded" />
            <Button
              label="Secondary"
              className="p-button-rounded p-button-secondary"
            />
            <Button
              label="Success"
              className="p-button-rounded p-button-success"
            />
            <Button label="Info" className="p-button-rounded p-button-info" />
            <Button
              label="Warning"
              className="p-button-rounded p-button-warning"
            />
            <Button
              label="Danger"
              className="p-button-rounded p-button-danger"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ButtonsComp;
