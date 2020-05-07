import React from "react";

import Auxiliary from "./../../../hoc/Auxiliary";

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>
          {igKey}: {props.ingredients[igKey]}
        </span>
      </li>
    );
  });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>An amazing burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to Checkout?</p>
    </Auxiliary>
  );
};

export default orderSummary;
