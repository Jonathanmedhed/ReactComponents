import React, { Fragment, useState } from "react";
import { Inplace, InplaceDisplay, InplaceContent } from "primereact/inplace";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const InplaceComp = () => {

  const [onOpen, setOnOpen] = useState(false);

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
    { brand: "VW", value: "VW", year: "2012", color: "black", vin: "03234e20" },
    {
      brand: "Volvo",
      value: "Volvo",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
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
    { brand: "VW", value: "VW", year: "2012", color: "black", vin: "03234e20" },
    {
      brand: "Volvo",
      value: "Volvo",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
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
    { brand: "VW", value: "VW", year: "2012", color: "black", vin: "03234e20" },
    {
      brand: "Volvo",
      value: "Volvo",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
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
    { brand: "VW", value: "VW", year: "2012", color: "black", vin: "03234e20" },
    {
      brand: "Volvo",
      value: "Volvo",
      year: "2012",
      color: "black",
      vin: "03234e20",
    },
  ]);

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3>Input</h3>
          <Inplace closable={true}>
            <InplaceDisplay>Click to Edit</InplaceDisplay>
            <InplaceContent>
              <InputText autoFocus />
            </InplaceContent>
          </Inplace>

          <h3>Image</h3>
          <Inplace>
            <InplaceDisplay>
              <span
                className="pi pi-search"
                style={{ verticalAlign: "middle" }}
              ></span>
              <span style={{ marginLeft: ".5em", verticalAlign: "middle" }}>
                View Picture
              </span>
            </InplaceDisplay>
            <InplaceContent>
              <img src={require("../../img/galleria5.jpg")} alt="Nature" />
            </InplaceContent>
          </Inplace>

          <h3>Lazy Data</h3>
          <Inplace onOpen={onOpen}>
            <InplaceDisplay>View Data</InplaceDisplay>
            <InplaceContent>
              <DataTable value={cars}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
              </DataTable>
            </InplaceContent>
          </Inplace>
        </div>
      </div>
    </Fragment>
  );
};
export default InplaceComp;
