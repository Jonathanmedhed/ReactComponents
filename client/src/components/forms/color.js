import React, { Fragment, useState } from "react";
import { ColorPicker } from "primereact/colorpicker";

const InputColor = () => {
  const [color1, setColor1] = useState(null);
  const [color2, setColor2] = useState("1976D2");

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3>Inline</h3>
          <ColorPicker
            value={color1}
            onChange={(e) => setColor1(e.value)}
          ></ColorPicker>
          <p style={{ marginTop: ".5em" }}>
            Selected Color:{" "}
            <span
              style={{
                display: "inline-block",
                width: "32px",
                height: "32px",
                verticalAlign: "middle",
                backgroundColor: "#" + color1,
              }}
            ></span>{" "}
            {color1}{" "}
          </p>

          <h3>Overlay</h3>
          <ColorPicker
            value={color2}
            onChange={(e) => setColor2(e.value)}
          ></ColorPicker>
          <p style={{ marginTop: ".5em" }}>
            Selected Color:{" "}
            <span style={{ color: "#" + color2 }}>{color2}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default InputColor;
