import React, { Fragment, useState } from "react";
import { Captcha } from "primereact/captcha";
import { Growl } from "primereact/growl";

const CaptchaComp = () => {
  let [growl, setGrowl] = useState([]);

  let showResponse = () => {
    growl.show({
      severity: "info",
      summary: "Success",
      detail: "User Responded",
    });
  };
  return (
    <Fragment>
      <div>
        <div className="content-section implementation button-demo">
          <Growl ref={(el) => (growl = el)}></Growl>
          <Captcha siteKey="YOUR_SITE_KEY" onResponse={showResponse} />
          <h1>Need SITE_KEY</h1>
        </div>
      </div>
    </Fragment>
  );
};
export default CaptchaComp;
