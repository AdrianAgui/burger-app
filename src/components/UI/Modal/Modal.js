import React from "react";
import BackDrop from "./../Backdrop/Backdrop";
import Auxiliary from "./../../../hoc/Auxiliary";

import "./Modal.css";

const modal = (props) => (
  <Auxiliary>
    <BackDrop show={props.visible} clicked={props.modalClosed}></BackDrop>
    <div
      className="Modal"
      style={{
        transform: props.visible ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.visible ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Auxiliary>
);

export default modal;
