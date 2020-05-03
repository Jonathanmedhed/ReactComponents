import React, { Fragment, useState } from "react";
import { SplitButton } from "primereact/splitbutton";
import { Growl } from "primereact/growl";

const ButtonSplit = () => {
  const [items, setItems] = useState([
    {
      label: "Update",
      icon: "pi pi-refresh",
    },
    {
      label: "Delete",
      icon: "pi pi-times",
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
    },
    {
      label: "Upload",
      icon: "pi pi-upload",
    },
  ]);

  let save = () => {
    console.log("do something");
  };

  return (
    <Fragment>
      <div>
        <div className="content-section implementation splitbutton-demo">
          <h3 className="first">Basic</h3>
          <SplitButton
            label="Save"
            icon="pi pi-plus"
            onClick={save}
            model={items}
          ></SplitButton>

          <h3>Severities</h3>
          <SplitButton
            label="Save"
            icon="pi pi-plus"
            onClick={save}
            model={items}
            className="p-button-secondary"
            style={{ marginRight: ".25em" }}
          ></SplitButton>
          <SplitButton
            label="Save"
            icon="pi pi-plus"
            onClick={save}
            model={items}
            className="p-button-success"
            style={{ marginRight: ".25em" }}
          ></SplitButton>
          <SplitButton
            label="Save"
            icon="pi pi-plus"
            onClick={save}
            model={items}
            className="p-button-info"
          >
            {" "}
            style={{ marginRight: ".25em" }}
          </SplitButton>
          <SplitButton
            label="Save"
            icon="pi pi-plus"
            onClick={save}
            model={items}
            className="p-button-warning"
            style={{ marginRight: ".25em" }}
          ></SplitButton>
          <SplitButton
            label="Save"
            icon="pi pi-plus"
            onClick={save}
            model={items}
            className="p-button-danger"
          ></SplitButton>
        </div>
      </div>
    </Fragment>
  );
};
export default ButtonSplit;
