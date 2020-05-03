import React, { Fragment, useState } from "react";
import { InputNumber } from "primereact/inputnumber";

const InputNumberButtons = () => {
  const [value17, setValue17] = useState(20);
  const [value18, setValue18] = useState(10.5);
  const [value19, setValue19] = useState(25);
  const [value20, setValue20] = useState(50);

  return (
    <Fragment>
      <div className="vertical">
        <h3>Buttons</h3>
        Stacked
        <InputNumber
          value={value17}
          onChange={(e) => setValue17(e.value)}
          showButtons
          mode="currency"
          currency="USD"
        />
        <div className="mt-1"></div>
        Horizontal with Step
        <InputNumber
          value={value18}
          onChange={(e) => setValue18(e.value)}
          showButtons
          buttonLayout="horizontal"
          spinnerMode="horizontal"
          step={0.25}
          decrementButtonClassName="p-button-danger"
          incrementButtonClassName="p-button-success"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
          mode="currency"
          currency="EUR"
        />
        <div className="mt-1"></div>
        <div>Vertical</div>
        <InputNumber
          value={value19}
          onChange={(e) => setValue19(e.value)}
          mode="decimal"
          showButtons
          buttonLayout="vertical"
          spinnerMode="vertical"
          decrementButtonClassName="p-button-secondary"
          incrementButtonClassName="p-button-secondary"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
        />
        <div className="mt-5"></div>
        Min-Max Boundaries
        <InputNumber
          value={value20}
          onChange={(e) => setValue20(e.value)}
          mode="decimal"
          showButtons
          min={0}
          max={100}
        />
      </div>
    </Fragment>
  );
};
export default InputNumberButtons;
