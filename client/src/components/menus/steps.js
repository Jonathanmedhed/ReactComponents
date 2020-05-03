import React, { Fragment, useState } from "react";
import { Steps } from "primereact/steps";
import { Growl } from "primereact/growl";

const StepsComp = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const [items, setItems] = useState([
    {
      label: "Personal",
      command: (event) => {
        /** 
        this.growl.show({
          severity: "info",
          summary: "First Step",
          detail: event.item.label,
        });
        */
      },
    },
    {
      label: "Seat",
      command: (event) => {
        /** 
        this.growl.show({
          severity: "info",
          summary: "Seat Selection",
          detail: event.item.label,
        });
        */
      },
    },
    {
      label: "Payment",
      command: (event) => {
        /** 
        this.growl.show({
          severity: "info",
          summary: "Pay with CC",
          detail: event.item.label,
        });
        */
      },
    },
    {
      label: "Confirmation",
      command: (event) => {
        /** 
        this.growl.show({
          severity: "info",
          summary: "Last Step",
          detail: event.item.label,
        });
        */
      },
    },
  ]);

  return (
    <Fragment>
      <div>
        <div>
          <h3>Basic</h3>
          <Steps model={items} />

          <h3>Clickable</h3>
          <Steps
            model={items}
            activeIndex={activeIndex}
            onSelect={(e) => setActiveIndex(e.index)}
            readOnly={false}
          />

          <h3>Custom Style</h3>
          <Steps model={items} className="steps-custom" />
        </div>
      </div>
    </Fragment>
  );
};
export default StepsComp;
