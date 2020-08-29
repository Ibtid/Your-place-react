import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

import "./Map.css";

const Map = (props) => {
  const TOKEN =
    "pk.eyJ1IjoiaWJ0aWRyYWhtYW4iLCJhIjoiY2tibzZ1dmJoMXptMzM1cXZmZWl6c2d3YyJ9.MQFAvX513awEJnETltcXEQ";
  const [viewport, setViewport] = useState({
    latitude: props.latitude,
    longitude: props.longitude,
    zoom: props.zoom,
    width: "100%",
    height: "100%",
  });
  return (
    <div className={`map ${props.className}`} style={props.style}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/ibtidrahman/ckbo7a0cn337d1imd4jclxljr"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      ></ReactMapGL>
    </div>
  );
};

export default Map;
