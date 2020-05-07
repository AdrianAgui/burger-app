import React from "react";
import Auxiliary from "./../../hoc/Auxiliary";

import "./Layout.css";

const layout = (props) => (
  <Auxiliary>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className="content">{props.children}</main>
  </Auxiliary>
);

export default layout;
