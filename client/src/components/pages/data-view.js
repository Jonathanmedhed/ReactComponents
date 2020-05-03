import React, { Fragment, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Panel } from "primereact/panel";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

const DataViewComp = () => {
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

  const [layout, setLayout] = useState("list");
  const [selectedCar, setSelectedCar] = useState(null);
  const [visible, setVisible] = useState(false);
  const [sortKey, setSortKey] = useState(null);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  let onSortChange = (event) => {
    const value = event.value;

    if (value.indexOf("!") === 0) {
      setSortOrder(-1);
      setSortField(value.substring(1, value.length));
      setSortKey(value);
    } else {
      setSortOrder(1);
      setSortField(value);
      setSortKey(value);
    }
  };

  let selectCar = (car) => {
    setSelectedCar(car);
    setVisible(true);
  };

  let renderListItem = (car) => {
    return (
      <div className="p-col-12">
        <div className="car-details">
          <div>
            <img
              src={require("../../img/" + car.brand + ".png")}
              alt={car.brand}
            />
            <div className="p-grid">
              <div className="p-col-12">
                Vin: <b>{car.vin}</b>
              </div>
              <div className="p-col-12">
                Year: <b>{car.year}</b>
              </div>
              <div className="p-col-12">
                Brand: <b>{car.brand}</b>
              </div>
              <div className="p-col-12">
                Color: <b>{car.color}</b>
              </div>
            </div>
          </div>
          <Button icon="pi pi-search" onClick={(e) => selectCar(car)}></Button>
        </div>
      </div>
    );
  };

  let renderGridItem = (car) => {
    return (
      <div style={{ padding: ".5em" }} className="p-col-12 p-md-3">
        <Panel header={car.vin} style={{ textAlign: "center" }}>
          <img
            src={require("../../img/" + car.brand + ".png")}
            alt={car.brand}
          />
          <div className="car-detail">
            {car.year} - {car.color}
          </div>
          <Button icon="pi pi-search" onClick={(e) => selectCar(car)}></Button>
        </Panel>
      </div>
    );
  };

  let itemTemplate = (car, layout) => {
    if (!car) {
      return <Fragment></Fragment>;
    }

    if (layout === "list") return renderListItem(car);
    else if (layout === "grid") return renderGridItem(car);
  };

  let renderCarDialogContent = () => {
    if (selectedCar) {
      return (
        <div
          className="p-grid"
          style={{ fontSize: "16px", textAlign: "center", padding: "20px" }}
        >
          <div className="p-col-12" style={{ textAlign: "center" }}>
            <img
              src={require("../../img/" + selectedCar.brand + ".png")}
              alt={selectedCar.brand}
            />
          </div>

          <div className="p-col-4">vin: </div>
          <div className="p-col-8">{selectedCar.vin}</div>

          <div className="p-col-4">Year: </div>
          <div className="p-col-8">{selectedCar.year}</div>

          <div className="p-col-4">Brand: </div>
          <div className="p-col-8">{selectedCar.brand}</div>

          <div className="p-col-4">Color: </div>
          <div className="p-col-8">{selectedCar.color}</div>
        </div>
      );
    } else {
      return null;
    }
  };

  let renderHeader = () => {
    const sortOptions = [
      { label: "Newest First", value: "!year" },
      { label: "Oldest First", value: "year" },
      { label: "Brand", value: "brand" },
    ];

    return (
      <div className="p-grid">
        <div className="p-col-6" style={{ textAlign: "left" }}>
          <Dropdown
            options={sortOptions}
            value={sortKey}
            placeholder="Sort By"
            onChange={onSortChange}
          />
        </div>
        <div className="p-col-6" style={{ textAlign: "right" }}>
          <DataViewLayoutOptions
            layout={layout}
            onChange={(e) => setLayout(e.value)}
          />
        </div>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <DataView
            value={cars}
            layout={layout}
            header={header}
            itemTemplate={itemTemplate}
            paginatorPosition={"both"}
            paginator={true}
            rows={20}
            sortOrder={sortOrder}
            sortField={sortField}
          />

          <Dialog
            header="Car Details"
            visible={visible}
            width="225px"
            modal={true}
            onHide={() => setVisible(false)}
          >
            {renderCarDialogContent()}
          </Dialog>
        </div>

        {/**<DataViewDoc />*/}
      </div>
    </Fragment>
  );
};
export default DataViewComp;
