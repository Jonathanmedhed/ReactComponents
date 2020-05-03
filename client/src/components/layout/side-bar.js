import React, { Fragment, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

const SideBarComp = () => {
  const [visibleLeft, setVisibleLeft] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  const [visibleTop, setVisibleTop] = useState(false);
  const [visibleBottom, setVisibleBottom] = useState(false);
  const [visibleFullScreen, setVisibleFullScreen] = useState(false);

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <Sidebar
            visible={visibleLeft}
            baseZIndex={1000000}
            onHide={(e) => setVisibleLeft(false)}
          >
            <h1 style={{ fontWeight: "normal" }}>Left Sidebar</h1>
            <Button
              type="button"
              onClick={(e) => setVisibleLeft(false)}
              label="Save"
              className="p-button-success"
              style={{ marginRight: ".25em" }}
            />
            <Button
              type="button"
              onClick={(e) => setVisibleLeft(false)}
              label="Cancel"
              className="p-button-secondary"
            />
          </Sidebar>

          <Sidebar
            visible={visibleRight}
            position="right"
            baseZIndex={1000000}
            onHide={(e) => setVisibleRight(false)}
          >
            <h1 style={{ fontWeight: "normal" }}>Right Sidebar</h1>
            <Button
              type="button"
              onClick={(e) => setVisibleRight(false)}
              label="Save"
              className="p-button-success"
              style={{ marginRight: ".25em" }}
            />
            <Button
              type="button"
              onClick={(e) => setVisibleRight(false)}
              label="Cancel"
              className="p-button-secondary"
            />
          </Sidebar>

          <Sidebar
            visible={visibleTop}
            position="top"
            baseZIndex={1000000}
            onHide={(e) => setVisibleTop(false)}
          >
            <h1 style={{ fontWeight: "normal" }}>Top Sidebar</h1>
            <Button
              type="button"
              onClick={(e) => setVisibleTop(false)}
              label="Save"
              className="p-button-success"
              style={{ marginRight: ".25em" }}
            />
            <Button
              type="button"
              onClick={(e) => setVisibleTop(false)}
              label="Cancel"
              className="p-button-secondary"
            />
          </Sidebar>

          <Sidebar
            visible={visibleBottom}
            position="bottom"
            baseZIndex={1000000}
            onHide={(e) => setVisibleBottom(false)}
          >
            <h1 style={{ fontWeight: "normal" }}>Bottom Sidebar</h1>
            <Button
              type="button"
              onClick={(e) => setVisibleBottom(false)}
              label="Save"
              className="p-button-success"
              style={{ marginRight: ".25em" }}
            />
            <Button
              type="button"
              onClick={(e) => setVisibleBottom(false)}
              label="Cancel"
              className="p-button-secondary"
            />
          </Sidebar>

          <Sidebar
            visible={visibleFullScreen}
            fullScreen={true}
            baseZIndex={1000000}
            onHide={(e) => setVisibleFullScreen(false)}
          >
            <h1 style={{ fontWeight: "normal" }}>Full Screen Sidebar</h1>
            <Button
              type="button"
              onClick={(e) => setVisibleFullScreen(false)}
              label="Save"
              className="p-button-success"
              style={{ marginRight: ".25em" }}
            />
            <Button
              type="button"
              onClick={(e) => setVisibleFullScreen(false)}
              label="Cancel"
              className="p-button-secondary"
            />
          </Sidebar>

          <Button
            icon="pi pi-arrow-right"
            onClick={(e) => setVisibleLeft(true)}
            style={{ marginRight: ".25em" }}
          />
          <Button
            icon="pi pi-arrow-left"
            onClick={(e) => setVisibleRight(true)}
            style={{ marginRight: ".25em" }}
          />
          <Button
            icon="pi pi-arrow-down"
            onClick={(e) => setVisibleTop(true)}
            style={{ marginRight: ".25em" }}
          />
          <Button
            icon="pi pi-arrow-up"
            onClick={(e) => setVisibleBottom(true)}
            style={{ marginRight: ".25em" }}
          />
          <Button
            icon="pi pi-th-large"
            onClick={(e) => setVisibleFullScreen(true)}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default SideBarComp;
