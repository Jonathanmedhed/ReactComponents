import React, { Fragment, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const ToolTip = () => {
  const [title, setTitle] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState("right");

  let onTooltipPosition = (e) => {
    let element = e.target;

    switch (element.id) {
      case "username":
        setTitle("Enter your username");
        setTooltipPosition("right");
        break;

      case "surname":
        setTitle("Enter your surname");
        setTooltipPosition("top");
        break;

      case "age":
        setTitle("Enter your age");
        setTooltipPosition("bottom");
        break;

      case "email":
        setTitle("Enter your email");
        setTooltipPosition("left");
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <div>
        <h3>Positions</h3>
        <div className="p-grid p-fluid">
          <div className="p-col-12 p-md-3">
            <InputText
              type="text"
              placeholder="Right"
              tooltip="Enter your username"
            />
          </div>
          <div className="p-col-12 p-md-3">
            <InputText
              type="text"
              placeholder="Top"
              tooltip="Enter your username"
              tooltipOptions={{ position: "top" }}
            />
          </div>
          <div className="p-col-12 p-md-3">
            <InputText
              type="text"
              placeholder="Bottom"
              tooltip="Enter your username"
              tooltipOptions={{ position: "bottom" }}
            />
          </div>
          <div className="p-col-12 p-md-3">
            <InputText
              type="text"
              placeholder="Left"
              tooltip="Enter your username"
              tooltipOptions={{ position: "left" }}
            />
          </div>
        </div>
        <h3>Focus and Blur</h3>
        <InputText
          type="text"
          placeholder="Focus"
          tooltip="Enter your username"
          tooltipOptions={{ event: "focus" }}
        />
        <h3>Button</h3>
        <Button
          type="button"
          label="Save"
          icon="pi pi-check"
          tooltip="Click to proceed"
        />
      </div>
    </Fragment>
  );
};
export default ToolTip;
