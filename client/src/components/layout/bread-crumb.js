import React, { Fragment, useState } from "react";
import { BreadCrumb } from "primereact/breadcrumb";

const BreadCrumbComp = () => {
  const items = [
    { label: "Categories" },
    { label: "Sports" },
    { label: "Football" },
    { label: "Countries" },
    { label: "Spain" },
    { label: "F.C. Barcelona" },
    { label: "Squad" },
    {
      label: "Lionel Messi",
      url: "https://en.wikipedia.org/wiki/Lionel_Messi",
    },
  ];

  const home = {
    icon: "pi pi-home",
    url: "https://www.primefaces.org/primereact",
  };

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <BreadCrumb model={items} home={home} />
        </div>
      </div>
    </Fragment>
  );
};
export default BreadCrumbComp;
