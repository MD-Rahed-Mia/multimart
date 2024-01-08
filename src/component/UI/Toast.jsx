import React from "react";
import "./../../Style/Toast.css";

function Toast(props) {
  return (
    <div className={props.active}>
      <p>{props.text}</p>
    </div>
  );
}

export default Toast;
