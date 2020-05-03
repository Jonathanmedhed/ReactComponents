import React, { Fragment, useState } from "react";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";

const FlexGridComp = () => {
  const [columns, setColumns] = useState([0, 1, 2, 3, 4, 5]);

  let addColumn = () => {
    setColumns([...columns, columns.length]);
  };

  let removeColumn = () => {
    let cols = [...columns];
    cols.splice(-1, 1);
    setColumns(cols);
  };

  return (
    <Fragment>
      <div>
        <div className="content-section implementation flexgrid-demo">
          <h3 className="first">Basic</h3>
          <div className="p-grid">
            <div className="p-col">
              <div className="box">1</div>
            </div>
            <div className="p-col">
              <div className="box">2</div>
            </div>
            <div className="p-col">
              <div className="box">3</div>
            </div>
          </div>

          <h3>Dynamic</h3>
          <Button
            type="button"
            icon="pi pi-plus"
            title="Add Column"
            onClick={addColumn}
            disabled={columns.length === 20}
            style={{ marginRight: ".5em" }}
          />
          <Button
            type="button"
            icon="pi pi-minus"
            title="Remove Column"
            onClick={removeColumn}
            disabled={columns.length === 1}
          />

          <div className="p-grid" style={{ marginTop: ".5em" }}>
            {columns.map((col) => (
              <div key={col} className="p-col">
                <div className="box">{col}</div>
              </div>
            ))}
          </div>

          <h3>Reverse Direction</h3>
          <div className="p-grid p-dir-rev">
            <div className="p-col">
              <div className="box">1</div>
            </div>
            <div className="p-col">
              <div className="box">2</div>
            </div>
            <div className="p-col">
              <div className="box">3</div>
            </div>
          </div>

          <h3>Column Direction</h3>
          <div className="p-grid p-dir-col">
            <div className="p-col">
              <div className="box">1</div>
            </div>
            <div className="p-col">
              <div className="box">2</div>
            </div>
            <div className="p-col">
              <div className="box">3</div>
            </div>
          </div>

          <h3>Reverse Column Direction</h3>
          <div className="p-grid p-dir-col-rev">
            <div className="p-col">
              <div className="box">1</div>
            </div>
            <div className="p-col">
              <div className="box">2</div>
            </div>
            <div className="p-col">
              <div className="box">3</div>
            </div>
          </div>

          <h3>12 Column Grid</h3>
          <div className="p-grid">
            <div className="p-col-4">
              <div className="box">4</div>
            </div>
            <div className="p-col-1">
              <div className="box">1</div>
            </div>
            <div className="p-col-1">
              <div className="box">1</div>
            </div>
            <div className="p-col-1">
              <div className="box">1</div>
            </div>
            <div className="p-col-1">
              <div className="box">1</div>
            </div>
            <div className="p-col-1">
              <div className="box">1</div>
            </div>
            <div className="p-col-1">
              <div className="box">1</div>
            </div>
            <div className="p-col-1">
              <div className="box">1</div>
            </div>
            <div className="p-col-1">
              <div className="box">1</div>
            </div>
          </div>

          <div className="p-grid">
            <div className="p-col-2">
              <div className="box">2</div>
            </div>
            <div className="p-col-6">
              <div className="box">6</div>
            </div>
            <div className="p-col-4">
              <div className="box">4</div>
            </div>
          </div>

          <div className="p-grid">
            <div className="p-col-8">
              <div className="box">8</div>
            </div>
            <div className="p-col-2">
              <div className="box">2</div>
            </div>
            <div className="p-col-2">
              <div className="box">2</div>
            </div>
          </div>

          <h3>Responsive</h3>
          <div className="p-grid">
            <div className="p-col-12 p-sm-6 p-lg-3">
              <div className="box">p-col-12 p-sm-6 p-lg-3</div>
            </div>
            <div className="p-col-12 p-sm-6 p-lg-3">
              <div className="box">p-col-12 p-sm-6 p-lg-3</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default FlexGridComp;
