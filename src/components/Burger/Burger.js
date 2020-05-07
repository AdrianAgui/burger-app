import React from "react";
import Ingredient from "./Ingredient/Ingredient";

import "./Burger.css";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <Ingredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please, add some ingredients!</p>;
  }

  return (
    <div className="Burger">
      <Ingredient type="bread-top"></Ingredient>
      {transformedIngredients}
      <Ingredient type="bread-bottom"></Ingredient>
    </div>
  );
};

export default burger;
