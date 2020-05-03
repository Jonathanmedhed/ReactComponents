import React, { Fragment, useState } from "react";
import { FileUpload } from "primereact/fileupload";

const UploadComp = () => {
  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3>Advanced</h3>
          <FileUpload
            name="demo[]"
            url="./upload.php"
            /**onUpload={this.onUpload}*/
            multiple={true}
            accept="image/*"
            maxFileSize={1000000}
          />

          <h3>Basic</h3>
          <FileUpload
            mode="basic"
            name="demo[]"
            url="./upload.php"
            accept="image/*"
            maxFileSize={1000000}
            /**onUpload={this.onBasicUpload}*/
          />

          <h3>Basic with Auto</h3>
          <FileUpload
            mode="basic"
            name="demo[]"
            uurl="./upload.php"
            accept="image/*"
            maxFileSize={1000000}
            /**onUpload={this.onBasicUploadAuto}*/
            auto={true}
            chooseLabel="Browse"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default UploadComp;
