import React, { Fragment, useState } from "react";
import { TabMenu } from "primereact/tabmenu";

const TabMenuComp = () => {
  const [items, setItems] = useState([
    { label: "Home", icon: "pi pi-fw pi-home" },
    { label: "Calendar", icon: "pi pi-fw pi-calendar" },
    { label: "Edit", icon: "pi pi-fw pi-pencil" },
    { label: "Documentation", icon: "pi pi-fw pi-file" },
    { label: "Settings", icon: "pi pi-fw pi-cog" },
  ]);

  return (
    <Fragment>
      <div>
        <TabMenu model={items} />
      </div>
    </Fragment>
  );
};
export default TabMenuComp;
