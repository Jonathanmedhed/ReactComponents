/*global google*/
import React, { Fragment, useState } from "react";
import { GMap } from "primereact/gmap";

const GoogleMap = () => {
  const options = {
    center: { lat: 36.890257, lng: 30.707417 },
    zoom: 12,
  };
  /**
   Make sure add this line to the header of index.html
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdON4kznXMOUhGAbvRYHV40llYKECKfSE&callback=myMap"></script>
   */

  return (
    <Fragment>
      <GMap options={options} style={{ width: "100%", minHeight: "320px" }} />
    </Fragment>
  );
};
export default GoogleMap;
