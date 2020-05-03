import React, { Fragment } from "react";
import Alert from "./alert";
const AlertTest = ({ setAlert }) => {
  return (
    <Fragment>
      <div className=" hide-sm">
        <div className="down vertical">
          <Alert />
          <div className="down horizontal">
            <button
              onClick={() => setAlert("Button Clicked!", "success")}
              className="btn btn-primary"
            >
              Click!
            </button>
            <button
              onClick={() => setAlert("Button Clicked!", "danger")}
              className="btn btn-danger"
            >
              Click!
            </button>
          </div>
        </div>
      </div>
      <div className=" show-sm">
        <div>
          <Alert />
          <div >
            <button
              onClick={() => setAlert("Button Clicked!", "success")}
              className="btn btn-primary"
            >
              Click!
            </button>
            <button
              onClick={() => setAlert("Button Clicked!", "danger")}
              className="btn btn-danger"
            >
              Click!
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AlertTest;
