import React from "react";

export default function Helmet(props) {
  document.title = "Multimart - " + props.title;

  return <div>{props.children}</div>;
}
