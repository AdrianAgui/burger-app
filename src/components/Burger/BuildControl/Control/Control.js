import React from "react";

import "./Control.css";

const control = (props) => (
  <div className="Control">
    <div className="Label">{props.label}</div>
    <button className="Less" onClick={props.removed}>
      Less
    </button>
    <button className="More" onClick={props.added}>
      More
    </button>
  </div>
);

export default control;
