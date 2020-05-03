import React, { Fragment } from "react";
import Iframe from "react-iframe";
const Video = ({ showVideo }) => {
  return (
    <Fragment>
      <div className="hide-sm">
        <Iframe
          width="560"
          height="315"
          url="https://www.youtube.com/embed/LsQkARCp84Y"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        />
      </div>
      <div className="show-sm">
        <Iframe
          width="315"
          height="315"
          url="https://www.youtube.com/embed/LsQkARCp84Y"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        />
      </div>
    </Fragment>
  );
};
export default Video;
