import React, { Fragment } from "react";
import Iframe from "react-iframe";
const VideoViewer = ({ showVideo }) => {
  return (
    <Fragment>
      <div class="video-container">
        <Iframe
          width="560"
          height="315"
          url="https://www.youtube.com/embed/LsQkARCp84Y"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        />
        <i
          onClick={() => showVideo(false)}
          class="fas fa-times-circle fa-2x"
        ></i>
      </div>
    </Fragment>
  );
};
export default VideoViewer;
