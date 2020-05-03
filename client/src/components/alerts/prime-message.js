import React, { Fragment, useState } from "react";
import { Messages } from "primereact/messages";
import { Message } from "primereact/message";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const PrimeMessage = () => {
  let [messages, setMessages] = useState([]);

  let showSuccess = () => {
    messages.show({
      severity: "success",
      summary: "Success Message",
      detail: "Order submitted",
    });
  };

  let showInfo = () => {
    messages.show({
      severity: "info",
      summary: "Info Message",
      detail: "PrimeReact rocks",
    });
  };

  let showWarn = () => {
    messages.show({
      severity: "warn",
      summary: "Warn Message",
      detail: "There are unsaved changes",
    });
  };

  let showError = () => {
    messages.show({
      severity: "error",
      summary: "Error Message",
      detail: "Validation failed",
    });
  };

  let showSticky = () => {
    messages.show({
      severity: "info",
      summary: "Sticky Message",
      detail: "You need to close Me",
      sticky: true,
    });
  };

  let showMultiple = () => {
    messages.show([
      { severity: "info", summary: "Message 1", detail: "PrimeReact rocks" },
      { severity: "info", summary: "Message 2", detail: "PrimeReact rocks" },
      { severity: "info", summary: "Message 3", detail: "PrimeFaces rocks" },
    ]);
  };

  let clear = () => {
    messages.clear();
  };

  return (
    <Fragment>
      <div>
        <div className="prime-messages">
          <Messages ref={(el) => (messages = el)} />

          <h3>Severities</h3>
          <div className="p-grid p-fluid">
            <div className="p-col-12 p-md-3">
              <Button
                onClick={showSuccess}
                label="Success"
                className="p-button-success"
              />
            </div>
            <div className="p-col-12 p-md-3">
              <Button
                onClick={showInfo}
                label="Info"
                className="p-button-info"
              />
            </div>
            <div className="p-col-12 p-md-3">
              <Button
                onClick={showWarn}
                label="Warn"
                className="p-button-warning"
              />
            </div>
            <div className="p-col-12 p-md-3">
              <Button
                onClick={showError}
                label="Error"
                className="p-button-danger"
              />
            </div>
          </div>

          <h3>Options</h3>
          <div className="p-grid p-fluid">
            <div className="p-col-12 p-md-4">
              <Button onClick={showMultiple} label="Multiple" />
            </div>
            <div className="p-col-12 p-md-4">
              <Button onClick={showSticky} label="Sticky" />
            </div>
            <div className="p-col-12 p-md-4">
              <Button
                onClick={clear}
                icon="pi pi-times"
                style={{ float: "right" }}
                label="Clear"
              />
            </div>
          </div>

          <h3>Inline Message CSS</h3>
          <p>CSS helpers to display inline messages mostly within forms.</p>
          <div className="p-grid">
            <div className="p-col-12 p-md-3">
              <Message severity="info" text="PrimeReact Rocks" />
            </div>
            <div className="p-col-12 p-md-3">
              <Message severity="success" text="Record Saved" />
            </div>
            <div className="p-col-12 p-md-3">
              <Message severity="warn" text="Are you sure?" />
            </div>
            <div className="p-col-12 p-md-3">
              <Message severity="error" text="Field is required" />
            </div>
          </div>

          <div className="message-input">
            <InputText
              placeholder="Username"
              className="p-error"
              style={{ marginRight: ".25em" }}
            />
            <Message severity="error" text="Field is required" />
          </div>
          <div className="message-input-hor">
            <InputText
              placeholder="Email"
              className="p-error"
              style={{ marginRight: ".25em" }}
            />
            <Message severity="error" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PrimeMessage;
