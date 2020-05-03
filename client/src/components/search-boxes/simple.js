import React, { Fragment, useState } from "react";
import Table from "../tables/table";
import { Products } from "../../resources/Data";

const SimpleSearchBox = () => {
  const [formData, setFormData] = useState({
    query: "",
  });

  const { query } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <div className="vertical">
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
      <Table query={query} list={Products} />

      </div>
    </Fragment>
  );
};
export default SimpleSearchBox;
