import React, { Fragment } from "react";

const Others = ({ setOption, bodyRef, type }) => {

  const select = async (option) => {
    setOption(option);
    window.scrollTo(0, bodyRef.current.offsetTop);
  };

  return (
    <Fragment>
      <li>
        <a onClick={() => select("buttons")}>Buttons</a>
        {type === "simple" ? (
          <Fragment></Fragment>
        ) : (
          <div className="underline"></div>
        )}
      </li>
      <li>
        <a onClick={() => select("carousels")}>Carousels</a>
        {type === "simple" ? (
          <Fragment></Fragment>
        ) : (
          <div className="underline"></div>
        )}
      </li>
      <li>
        <a onClick={() => select("charts")}>Charts</a>
        {type === "simple" ? (
          <Fragment></Fragment>
        ) : (
          <div className="underline"></div>
        )}
      </li>
      <li>
        <a onClick={() => select("dialogues")}>Dialogues</a>
        {type === "simple" ? (
          <Fragment></Fragment>
        ) : (
          <div className="underline"></div>
        )}
      </li>
      <li>
        <a onClick={() => select("images")}>Images</a>
        {type === "simple" ? (
          <Fragment></Fragment>
        ) : (
          <div className="underline"></div>
        )}
      </li>
      <li>
        <a onClick={() => select("search-boxes")}>SearchBoxes</a>
        {type === "simple" ? (
          <Fragment></Fragment>
        ) : (
          <div className="underline"></div>
        )}
      </li>
      <li>
        <a onClick={() => select("tables")}>Tables</a>
        {type === "simple" ? (
          <Fragment></Fragment>
        ) : (
          <div className="underline"></div>
        )}
      </li>
      <li>
        <a onClick={() => select("tooltips")}>ToolTips</a>
        {type === "simple" ? (
          <Fragment></Fragment>
        ) : (
          <div className="underline"></div>
        )}
      </li>
      <li>
        <a onClick={() => select("videos")}>Videos</a>
        {type === "simple" ? (
          <Fragment></Fragment>
        ) : (
          <div className="underline"></div>
        )}
      </li>
    </Fragment>
  );
};
export default Others;
