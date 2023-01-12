import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  const cssClasses = [
    "Backdrop",
    props.show === "entering"
      ? "BackdropOpen"
      : props.show === "exiting"
      ? "BackdropClosed"
      : null,
  ];

  return <div className={cssClasses.join(" ")}></div>;
};
export default backdrop;
