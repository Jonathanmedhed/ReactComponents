import React, { Fragment, useState } from "react";
import { DeferredContent } from "primereact/deferredcontent";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const DeferredComp = () => {
  const [cars, setCars] = useState([
    {
      brand: "Audi",
      value: "Audi",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "BMW",
      value: "BMW",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Fiat",
      value: "Fiat",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Honda",
      value: "Honda",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Jaguar",
      value: "Jaguar",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Mercedes",
      value: "Mercedes",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
    {
      brand: "Renault",
      value: "Renault",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
  ]);

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <div style={{ height: "800px" }}>
            Scroll down to lazy load an image and the DataTable which initiates
            a query that is not executed on initial page load to speed up load
            performance.
          </div>
          <DeferredContent>
            <img src={require("../../img/galleria1.jpg")} alt="prime" />
          </DeferredContent>

          <div style={{ height: "500px" }}></div>
          <DeferredContent>
            <DataTable value={cars}>
              <Column field="vin" header="Vin" />
              <Column field="year" header="Year" />
              <Column field="brand" header="Brand" />
              <Column field="color" header="Color" />
            </DataTable>
          </DeferredContent>
        </div>
      </div>
    </Fragment>
  );
};
export default DeferredComp;
