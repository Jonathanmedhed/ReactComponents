import React, { Fragment, useState, useEffect } from "react";
import { ProgressBar } from "primereact/progressbar";
import { Growl } from "primereact/growl";

const ProgressBarComp = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(50);
  const [value3, setValue3] = useState(40);

  let [growl, setGrowl] = useState([]);

  let [interval, setinterval] = useState(null);

  let displayValueTemplate = (value) => {
    return (
      <Fragment>
        {value}/<b>100</b>
      </Fragment>
    );
  };

  useEffect(() => {
    interval = setInterval(() => {
      let val = value1;
      val += Math.floor(Math.random() * 10) + 1;

      if (val >= 100) {
        val = 100;
        growl.show({
          severity: "info",
          summary: "Success",
          detail: "Process Completed",
        });
        clearInterval(interval);
      }

      setValue1(val);
    }, 2000);
  }, []);

  /**
    componentWillUnmount () {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    } 
   
   */

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <Growl ref={(el) => (growl = el)}></Growl>

          <h3>Dynamic</h3>
          <ProgressBar value={value1}></ProgressBar>

          <h3>Static</h3>
          <ProgressBar value={value2}></ProgressBar>

          <h3>Custom display value</h3>
          <ProgressBar
            value={value3}
            displayValueTemplate={displayValueTemplate}
          ></ProgressBar>

          <h3>Indeterminate</h3>
          <ProgressBar
            mode="indeterminate"
            style={{ height: "6px" }}
          ></ProgressBar>
        </div>
      </div>
    </Fragment>
  );
};
export default ProgressBarComp;
