import React, { Fragment, useState } from "react";
import { ListBox } from "primereact/listbox";

const ListBoxSimple = () => {
  const [city, setCity] = useState(null);

  const citiesArray = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <Fragment>
      <div>
        <ListBox
          filter={true}
          filterPlaceholder="Search"
          value={city}
          options={citiesArray}
          onChange={(e) => setCity(e.value)}
          optionLabel="name"
        />
      </div>
    </Fragment>
  );
};
export default ListBoxSimple;
