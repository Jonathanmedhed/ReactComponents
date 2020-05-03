import React, { Fragment, useState } from "react";
import { Growl } from "primereact/growl";
import { Button } from "primereact/button";

const GrowlComp = () => {
  let [growl, setGrowl] = useState([]);

  let showSuccess = () => {
    growl.show({
      severity: "success",
      summary: "Success Message",
      detail: "Order submitted",
    });
  };

  let showInfo = () => {
    growl.show({
      severity: "info",
      summary: "Info Message",
      detail: "PrimeReact rocks",
    });
  };

  let showWarn = () => {
    growl.show({
      severity: "warn",
      summary: "Warn Message",
      detail: "There are unsaved changes",
    });
  };

  let showError = () => {
    growl.show({
      severity: "error",
      summary: "Error Message",
      detail: "Validation failed",
    });
  };

  let showSticky = () => {
    growl.show({
      severity: "info",
      summary: "Sticky Message",
      detail: "You need to close Me",
      sticky: true,
    });
  };

  let showCustom = () => {
    const summary = (
      <span>
        <i className="pi pi-check" /> <strong>PrimeReact</strong>
      </span>
    );
    const detail = (
      <img
        alt="PrimeReact"
        src={require("../../img/Audi.png")}
        width="80px"
        style={{ backgroundColor: "#212121", marginLeft: "22px" }}
      />
    );

    growl.show({
      severity: "info",
      summary: summary,
      detail: detail,
      sticky: true,
    });
  };

  let showMultiple = () => {
    growl.show([
      { severity: "info", summary: "Message 1", detail: "PrimeReact rocks" },
      { severity: "info", summary: "Message 2", detail: "PrimeReact rocks" },
      { severity: "info", summary: "Message 3", detail: "PrimeFaces rocks" },
    ]);
  };

  let clear = () => {
    growl.clear();
  };

  return (
    <Fragment>
      <div>
        <div className="content-section implementation p-fluid">
          <Growl ref={(el) => (growl = el)} />

          <h3>Severities</h3>
          <div className="p-grid">
            <div className="p-col-12 p-md-3">
              <Button
                onClick={showSuccess}
                label="Success"
                className="p-button-success"
              />
            </div>
            <div className="p-col-12 p-md-3">
              <Button
                onClick={showInfo}
                label="Info"
                className="p-button-info"
              />
            </div>
            <div className="p-col-12 p-md-3">
              <Button
                onClick={showWarn}
                label="Warn"
                className="p-button-warning"
              />
            </div>
            <div className="p-col-12 p-md-3">
              <Button
                onClick={showError}
                label="Error"
                className="p-button-danger"
              />
            </div>
          </div>

          <h3>Options</h3>
          <div className="p-grid">
            <div className="p-col-12 p-md-4">
              <Button
                onClick={showMultiple}
                label="Multiple"
                className="p-button-warning"
              />
            </div>
            <div className="p-col-12 p-md-4">
              <Button onClick={showSticky} label="Sticky" />
            </div>
            <div className="p-col-12 p-md-4">
              <Button
                onClick={showCustom}
                label="Custom"
                className="p-button-success"
              />
            </div>
          </div>

          <h3>Remove All</h3>
          <Button
            onClick={clear}
            label="Clear"
            style={{ width: "auto", marginLeft: ".5em" }}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default GrowlComp;
