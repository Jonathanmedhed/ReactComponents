import React, { Fragment, useState } from "react";
import { Menu } from "primereact/menu";

const MenuComp = () => {
  const [items, setItems] = useState([
    {
      label: "Options",
      items: [
        {
          label: "Upload",
          icon: "pi pi-fw pi-upload",
          command: () => {
            window.location.hash = "/fileupload";
          },
        },
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          url: "http://primetek.com.tr",
        },
      ],
    },
    {
      label: "Account",
      items: [
        {
          label: "Components",
          icon: "pi pi-fw pi-cog",
          command: () => {
            window.location.hash = "/";
          },
        },
        { label: "Sign Out", icon: "pi pi-fw pi-power-off" },
      ],
    },
  ]);

  return (
    <Fragment>
      <div>
        <Menu model={items} />
      </div>
    </Fragment>
  );
};
export default MenuComp;
