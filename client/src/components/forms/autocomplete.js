import React, { Fragment, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

const InputAutoComp = () => {
  const [brandSuggestions, setBrandSuggestions] = useState(null);
  const [brand, setBrand] = useState(null);
  const [brands, setBrands] = useState([]);
  const brandsArray = [
    "Audi",
    "BMW",
    "Fiat",
    "Ford",
    "Honda",
    "Jaguar",
    "Mercedes",
    "Renault",
    "Volvo",
  ];

  const suggestBrands = (event) => {
    let results = brandsArray.filter((brand) => {
      return brand.toLowerCase().startsWith(event.query.toLowerCase());
    });

    setBrandSuggestions(results);
  };

  let itemTemplate = (brand) => {
    return (
      <div className="p-clearfix">
        <img
          alt={brand}
          src={require(`../../img/${brand}.png`)}
          style={{
            width: "32px",
            display: "inline-block",
            margin: "5px 0 2px 5px",
          }}
        />
        <div
          style={{ fontSize: "16px", float: "right", margin: "10px 10px 0 0" }}
        >
          {brand}
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="vertical-buttons">
        <div className="form-group">
          <label>Single Selection</label>
          <AutoComplete
            dropdownMode={"blank"}
            value={brand}
            onChange={(e) => setBrand(e.value)}
            suggestions={brandSuggestions}
            completeMethod={suggestBrands.bind(this)}
            itemTemplate={itemTemplate}
            placeholder="Hint: type 'v' or 'f'"
          />
        </div>
        <div className="form-group mt-1">
          <label>Multiple Selection</label>
          <AutoComplete
            multiple={true}
            value={brands}
            onChange={(e) => setBrands(e.value)}
            suggestions={brandSuggestions}
            completeMethod={suggestBrands.bind(this)}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default InputAutoComp;
