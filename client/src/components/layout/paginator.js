import React, { Fragment, useState } from "react";
import { Paginator } from "primereact/paginator";

const PaginatorComp = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [first2, setFirst2] = useState(0);
  const [rows2, setRows2] = useState(10);

  let onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  let onPageChange2 = (event) => {
    setFirst2(event.first);
    setRows2(event.rows);
  };

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3>Default</h3>
          <Paginator
            first={first}
            rows={rows}
            totalRecords={120}
            rowsPerPageOptions={[10, 20, 30]}
            onPageChange={onPageChange}
          ></Paginator>

          <h3>Custom Template</h3>
          <Paginator
            first={first2}
            rows={rows2}
            totalRecords={120}
            rowsPerPageOptions={[10, 20, 30]}
            onPageChange={onPageChange2}
            template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          ></Paginator>
        </div>
      </div>
    </Fragment>
  );
};
export default PaginatorComp;
