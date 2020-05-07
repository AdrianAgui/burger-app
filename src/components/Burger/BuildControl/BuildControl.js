import React from "react";
import Control from "./Control/Control";

import "./BuildControl.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControl = (props) => (
  <div className="BuildControl">
    <h3>Price: {props.totalPrice.toFixed(2)}€</h3>
    {controls.map((ctrl) => (
      <Control
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.addIngredient(ctrl.type)}
        removed={() => props.removeIngredient(ctrl.type)}
      ></Control>
    ))}
    <div className="Buttons">
      <button className="OrderButton" onClick={props.cleanBurger}>
        Clean
      </button>
      <button
        className="OrderButton"
        onClick={props.purchase}
        disabled={!props.purchaseable}
      >
        Order Now!
      </button>
    </div>
  </div>
);

export default buildControl;
