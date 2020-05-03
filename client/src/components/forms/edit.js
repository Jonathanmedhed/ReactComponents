import React, { Fragment, useState } from "react";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";

const InputEdit = () => {
  const [text, setText] = useState(
    "<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>"
  );

  let renderHeader = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
      </span>
    );
  };

  const header = renderHeader();
  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <h3 className="first">Default</h3>
          <Editor
            style={{ height: "320px" }}
            value={text}
            onTextChange={(e) => setText(e.htmlValue)}
          />
          <Button
            className="btn btn-primary"
            label="Clear"
            icon="pi pi-times"
            onClick={(e) => setText("")}
          />

          <hr />

          <h3 className="first">Custom Toolbar</h3>
          <Editor
            headerTemplate={header}
            style={{ height: "320px" }}
            value={text}
            onTextChange={(e) => setText(e.htmlValue)}
          />
          <Button
            className="btn btn-primary"
            label="Clear"
            icon="pi pi-times"
            onClick={(e) => setText("")}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default InputEdit;
