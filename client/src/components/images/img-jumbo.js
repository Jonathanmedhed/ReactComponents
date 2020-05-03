import React, { Fragment } from "react";
const IMGjumbo = () => {
  return (
    <Fragment>
      <div className="cards">
        <div class="card-md-jumbo">
          <div class="img-cont-big">
            <img src={require("../../img/office.jpg")} alt=""></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default IMGjumbo;
