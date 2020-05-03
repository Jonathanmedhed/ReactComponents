import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import moment from "moment";
import { Products } from "../../resources/Data";

const Table = ({ selectItem, data, list, wOptions, wSearch }) => {
  const [formData, setFormData] = useState({
    query: "",
  });

  const { query } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  let filteredItems = [];

  if (list) {
    filteredItems = list.filter((item) => {
      if (data === "products") {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }
      if (data === "suppliers") {
        return (
          item.companyName.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
      }
      if (data === "orders") {
        return item.date.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }
    });
  }

  return (
    <Fragment>
      <div>
        {wSearch == true && (
          <div class="search">
            <input
              name="query"
              value={query}
              placeholder="Search by Name"
              type="text"
              className="searchTerm"
              onChange={(e) => onChange(e)}
            ></input>
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        )}

        <div className="tables">
          <div className="table-container">
            <table className="table hide-sm">
              <thead className="bg-primary">
                <tr>
                  {data === "products" && (
                    <Fragment>
                      <th>Product</th>
                      <th>Brand</th>
                      <th>Unit</th>
                      <th>Supplier</th>
                    </Fragment>
                  )}
                  {data === "orders" && (
                    <Fragment>
                      <th>Date</th>
                      <th>Status</th>
                    </Fragment>
                  )}
                  {data === "suppliers" && (
                    <Fragment>
                      <th>Company</th>
                      <th>Contact</th>
                      <th>Email</th>
                    </Fragment>
                  )}
                  {wOptions === true && <th>Options</th>}
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item._id}>
                    {data === "products" && (
                      <Fragment>
                        <td>{item.name}</td>
                        <td>{item.brand}</td>
                        <td>{item.unit}</td>
                        <td>{item.supplier}</td>
                      </Fragment>
                    )}
                    {data === "orders" && (
                      <Fragment>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                      </Fragment>
                    )}
                    {data === "suppliers" && (
                      <Fragment>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                        <td>{item.email}</td>
                      </Fragment>
                    )}
                    {wOptions === true && (
                      <td>
                        <button
                          onClick={() => selectItem(item)}
                          className="btn btn-primary"
                        >
                          <i class="far fa-plus-square"></i>
                        </button>
                        <button
                          onClick={() => selectItem(item)}
                          className="btn btn-danger"
                        >
                          <i className="far fa-trash-alt"></i>
                        </button>
                        <button
                          onClick={() => selectItem(item)}
                          className="btn btn-success"
                        >
                          <i className="far fa-edit"></i>
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="table show-sm">
              <tbody>
                <td>
                  {data === "products" && (
                    <Fragment>
                      <tr>
                        <th className="table-header bg-primary">Product</th>
                        {filteredItems.map((product) => (
                          <td className="td-sm">{product.name}</td>
                        ))}
                      </tr>
                      <tr>
                        <th className="table-header bg-primary">Brand</th>
                        {filteredItems.map((product) => (
                          <td className="td-sm">{product.brand}</td>
                        ))}
                      </tr>
                      <tr>
                        <th className="table-header bg-primary">Unit</th>
                        {filteredItems.map((product) => (
                          <td className="td-sm">{product.unit}</td>
                        ))}
                      </tr>
                      <tr>
                        <th className="table-header bg-primary">Supplier</th>
                        {filteredItems.map((product) => (
                          <td className="td-sm">{product.supplier}</td>
                        ))}
                      </tr>
                    </Fragment>
                  )}
                  {data === "orders" && (
                    <Fragment>
                      <tr>
                        <th className="table-header bg-primary">Date</th>
                        {filteredItems.map((item) => (
                          <td className="td-sm">{item.date}</td>
                        ))}
                      </tr>
                      <tr>
                        <th className="table-header bg-primary">Status</th>
                        {filteredItems.map((item) => (
                          <td className="td-sm">{item.status}</td>
                        ))}
                      </tr>
                    </Fragment>
                  )}
                  {data === "suppliers" && (
                    <Fragment>
                      <tr>
                        <th className="table-header bg-primary">Company</th>
                        {filteredItems.map((item) => (
                          <td className="td-sm">{item.companyName}</td>
                        ))}
                      </tr>
                      <tr>
                        <th className="table-header bg-primary">Contact</th>
                        {filteredItems.map((item) => (
                          <td className="td-sm">{item.contactName}</td>
                        ))}
                      </tr>
                      <tr>
                        <th className="table-header bg-primary">Email</th>
                        {filteredItems.map((item) => (
                          <td className="td-sm">{item.email}</td>
                        ))}
                      </tr>
                    </Fragment>
                  )}
                  {wOptions === true && (
                    <tr>
                      <th className="table-header bg-primary">Options</th>
                      {filteredItems.map((product) => (
                        <td className="td-sm">
                          <button
                            onClick={() => selectItem(product)}
                            className="btn btn-primary"
                          >
                            Select
                          </button>
                        </td>
                      ))}
                    </tr>
                  )}
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
